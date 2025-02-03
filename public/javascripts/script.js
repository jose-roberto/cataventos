async function load_user() {
  try {
    const response = await fetch('/user/read_user');
    const user = await response.json();

    // Para leitura
    document.getElementById('name').textContent = user.name;
    document.getElementById('username').textContent = user.username;
    document.getElementById('email').textContent = user.email;
    document.getElementById('birthdate').textContent = user.birthdate;

    // Para visualização dos dados no campo de edição
    document.getElementById('name_update').value = user.name;
    document.getElementById('username_update').value = user.username;
    document.getElementById('email_update').value = user.email;
    document.getElementById('birthdate_update').value = user.birthdate;
  } catch (error) {
    console.error('Erro ao obter informações do usuário:', error);
  }
}

async function delete_user(event) {
  event.preventDefault();

  try {
    const response = await fetch('/user/delete_user', {
      method: 'DELETE',
    });
   
    if (response) {
      window.location.href = '/';
    } else {
      console.error('Erro ao deletar usuário.');
    }
  } catch (error) {
    console.error(error);
  }
}

async function load_genres() {
  try {
    const response = await fetch('/genre/read_genre');
    const genres = await response.json();

    const genreSelect = document.getElementById('genre');
    genres.forEach(genre => {
      const option = document.createElement('option');
      option.value = genre.id;
      option.textContent = genre.name;
      genreSelect.appendChild(option);
    });
  } catch (error) {
    console.error('Erro ao obter gêneros literários:', error);
  }
}

async function load_timeline() {
  try {
    // Buscar os posts
    const response = await fetch("/text/read_texts");
    const posts = await response.json();

    // Buscar os gêneros
    const genreResponse = await fetch("/genre/read_genre");
    const genres = await genreResponse.json();

    // Criar um mapa de ID para nome do gênero
    const genreMap = {};
    genres.forEach(genre => {
      genreMap[genre.id] = genre.name;
    });

    const timeline = document.getElementById("timeline");

    if (posts.length === 0) {
      timeline.innerHTML = "<p>Nenhum post disponível.</p>";
      return;
    }

    const charLimit = 250;

    timeline.innerHTML = posts.map(post => {
      const is_long = post.text.length > charLimit;
      const display = is_long ? post.text.slice(0, charLimit) + "..." : post.text;

      // Obter o nome do gênero pelo ID do post
      const genreName = genreMap[post.genre_id] || "Desconhecido";

      return `
        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h3 class="card-title m-3">
                        <a href="/text/${post.id}" class="text-decoration-none text-dark">${post.title}</a>
                    </h3>
                    <div class="d-flex">
                        <img src="images/user_photo.png" alt="Logo" class="rounded-circle mt-1" width="40"height="40">
                        <a class="navbar-brand fs-4 ms-3 mt-2 me-3" href="profile">User</a>
                    </div>
                </div>
                <div class="d-flex">
                    <i class="bi bi-hand-thumbs-up ms-2"></i>
                    <p class="card-text ms-3">${post.like}</p>
                </div>
                <hr class="border-danger-subtle border-3 opacity-75 mt-4">
                <p class="card-text ms-4 fs-5">${display}</p>
                <hr class="border-danger-subtle border-3 opacity-75 mt-4">
                <p class="card-text ms-4 fs-5">${genreName}</p>
            </div>
        </div>
      `;
    }).join("");
  } catch (error) {
    console.error("Erro ao carregar posts:", error);
    document.getElementById("timeline").innerHTML = "<p>Erro ao carregar posts.</p>";
  }
}

async function load_my_posts() {
  try {
    // Buscar os posts
    const response = await fetch("/text/my_texts");
    const posts = await response.json();

    // Buscar os gêneros
    const genreResponse = await fetch("/genre/read_genre");
    const genres = await genreResponse.json();

    // Criar um mapa de ID para nome do gênero
    const genreMap = {};
    genres.forEach(genre => {
      genreMap[genre.id] = genre.name;
    });

    const my_texts = document.getElementById("my_tales");

    if (posts.length === 0) {
      my_texts.innerHTML = "<p class='title-gradient fs-4 mt-4'>Nenhum post disponível.</p>";
      return;
    }

    charLimit = 150;

    my_texts.innerHTML = posts.map(post => {
      const is_long = post.text.length > charLimit;
      const display = is_long ? post.text.slice(0, charLimit) + "..." : post.text;

      const genreName = genreMap[post.genre_id] || "Desconhecido";

      return `
        <div class="card mt-4">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h3 class=" card-title m-3">
                    <a href="/text/${post.id}" class="text-decoration-none text-dark">${post.title}</a>
                    </h3>
                    
                    <div class="d-flex">
                        <img src="images/user_photo.png" alt="Logo" class="rounded-circle mt-2" width="40"
                            height="40">
                        <a class="navbar-brand fs-3 ms-3 mt-2 me-3" href="profile">User</a>
                    </div>
                </div>

                <div class="d-flex">
                    <i class="bi bi-hand-thumbs-up ms-2"></i>
                    <p class="card-text ms-3">${post.like}</p>
                </div>

                <hr class="border-danger-subtle border-3 opacity-75 mt-4">
                <p class="card-text ms-4 fs-5">${display}</p>

                <hr class="border-danger-subtle border-3 opacity-75 mt-4">
                <p class="card-text ms-4 fs-5">${genreName}</p>
            </div>
        </div>
      `;
    }).join("");
  } catch (error) {
    console.error("Erro ao carregar posts:", error);
    document.getElementById("my_tales").innerHTML = "<p>Erro ao carregar posts.</p>";
  }
}

async function delete_post(event, text_id) {
  console.log('Deletando post...');
  event.preventDefault();

  try {
    const response = await fetch(`/text/${text_id}/delete_text`, {
      method: 'DELETE',
    });
    console.log(response);

    if (response) {
      window.location.href = '/my_tales';
    } else {
      console.error('Erro ao deletar post.');
    }
  } catch (error) {
    console.error(error);
  }
}

async function load_my_lists() {
  try {
    // Buscar as listas
    const response = await fetch("/list/my_lists");
    const lists = await response.json();

    const my_lists = document.getElementById("my_lists");

    if (lists.length === 0) {
      my_lists.innerHTML = "<p class='title-gradient fs-4 mt-4>Nenhuma lista disponível.</p>";
      return;
    }

    my_lists.innerHTML = lists.map(list => {
      return `
        <div class="card m-2" style="width: 80rem; height: 15rem;">
          <div class="card-body">
              <div class="d-flex justify-content-between">
                  <h3 class="card-title m-3">
                    <a href="/list/${list.id}" class="text-decoration-none text-dark">${list.name}</a>
                  </h3>
                  <div class="d-flex">
                    <img src="images/user_photo.png" alt="Logo" class="rounded-circle mt-1" width="40"height="40">
                    <a class="navbar-brand fs-4 ms-3 mt-2 me-3" href="profile">User</a>
                  </div>
              </div>
              <hr class="border-danger-subtle border-3 opacity-75 mt-2 mb-4">
              <p class="card-text ms-4 fs-5">${list.description}</p>
          </div>
        </div>
      `;
    }).join("");
  } catch (error) {
    console.error("Erro ao carregar posts:", error);
    document.getElementById("my_lists").innerHTML = "<p>Erro ao carregar posts.</p>";
  }
}

async function load_text_list(list_id) {
  try {
    const response = await fetch(`/list/${list_id}/texts`);
    const texts = await response.json();

    const list_texts = document.getElementById("list_texts");

    if (texts.length === 0) {
      list_texts.innerHTML = "<p>Nenhum texto disponível.</p>";
      return;
    }

    list_texts.innerHTML = texts.map(text => {
      return `
        <div class="d-flex justify-content-between">
          <h4 class="mt-2 ms-4">
            <a href="/text/${text.id}" class="text-decoration-none text-dark">${text.title}</a>
          </h4>
          <div class="d-flex">
            <img src="/images/user_photo.png" alt="Logo" class="rounded-circle mt-1" width="40"height="40">
            <a class="navbar-brand fs-4 ms-3 mt-2 me-3" href="profile">User</a>
          </div>
        </div>
        <hr class="border-danger-subtle border-3 opacity-75 mt- mb-4">
      `;
    }).join("");
  } catch (error) {
    console.error("Erro ao carregar textos da lista:", error);
    document.getElementById("list_texts").innerHTML = "<p>Erro ao carregar textos da lista.</p>";
  }
}

async function like_text() {
  const button = document.getElementById("like-button");

  button.addEventListener("click", async () => {
    const text_id = button.getAttribute("data-id");

    try {
      const response = await fetch(`/text/${text_id}/like_text`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao curtir o post");
      }

      const data = await response.json();
      document.getElementById("like-count").textContent = data.likes;
    } catch (error) {
      console.error(error);
    }
  });
}

window.onload = function () {
  if (window.location.pathname.includes('homepage')) {
    load_timeline();
  }

  if (window.location.pathname.includes('profile')) {
    load_user();

    const delete_form = document.getElementById('confirm_delete_form');
    
    if (delete_form) {
      delete_form.addEventListener('submit', (event) => delete_user(event));
    }
  }

  if (window.location.pathname.includes('my_tales')) {
    load_genres();
    load_my_posts();
  }

  if (window.location.pathname.includes('my_lists')) {
    load_my_lists();
  }

  if (window.location.pathname.includes('text')) {
    like_text();

    const text_id = window.location.pathname.split('/')[2];

    const deleteForm = document.getElementById('delete_post_form');

    if (deleteForm) {
      deleteForm.addEventListener('submit', (event) => delete_post(event, text_id));
    }
  }

  if (window.location.pathname.startsWith('/list')) {
    const list_id = window.location.pathname.split('/')[2];
    load_text_list(list_id);
  }
};
