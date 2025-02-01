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

async function load_posts() {
  try {
    const response = await fetch("/text/read_texts");
    const posts = await response.json();
    const timeline = document.getElementById("timeline");

    if (posts.length === 0) {
      timeline.innerHTML = "<p>Nenhum post disponível.</p>";
      return;
    }

    const charLimit = 250;

    timeline.innerHTML = posts.map(post => {
      const is_long = post.text.length > charLimit;
      const display = is_long ? post.text.slice(0, charLimit) + "..." : post.text;
      const card_height = is_long ? "auto" : "23rem";

      return `
        <div class="card mb-3" style="width: 36rem; height: ${card_height};">
          <div class="card-body">
              <div class="d-flex justify-content-between">
                  <h3 class="card-title m-3">${post.title}</h3>
                  <div class="d-flex">
                      <img src="images/livros.png" alt="Logo" class="rounded-circle mt-2" width="40" height="40">
                      <a class="navbar-brand fs-3 ms-3 mt-2 me-3" href="/index.html">User</a>
                  </div>
              </div>
              <div class="d-flex">
                  <i class="bi bi-hand-thumbs-up ms-2 "></i>
                  <p class="card-text ms-3">${post.like}</p>
              </div>                    
              <hr class="border-danger-subtle border-3 opacity-75 mt-4">
              <p class="card-text ms-4 fs-5">${display}</p>
              <hr class="border-danger-subtle border-3 opacity-75 mt-4">
              <p class="card-text ms-4 fs-5">$Gênero</p>
          </div>
        </div>
      `;
    }).join("");
  } catch (error) {
    console.error("Erro ao carregar posts:", error);
    document.getElementById("timeline").innerHTML = "<p>Erro ao carregar posts.</p>";
  }
}

window.onload = function () {
  if (window.location.pathname.includes('homepage')) {
    load_posts();
  }
  if (window.location.pathname.includes('profile')) {
    load_user();
  }

  if (window.location.pathname.includes('my_tales')) {
    load_genres();
  }
};
