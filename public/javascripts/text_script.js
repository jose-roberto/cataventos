async function load_my_posts(search_query = "") {
    try {
        const url = search_query ? `/text/my_texts?q=${encodeURIComponent(search_query)}` : "/text/my_texts";

        const response = await fetch(url);
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

        const charLimit = 150;

        my_texts.innerHTML = posts.map(post => {
            const is_long = post.text.length > charLimit;
            const display = is_long ? post.text.slice(0, charLimit) + "..." : post.text;

            const data = new Date(post.publication_date);
            const data_formatada = data.toLocaleDateString('pt-BR');
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
                                
                            <div class="d-flex justify-content-between">
                                <div class="d-flex mt-1 ms-2">
                                    <i class="bi bi-hand-thumbs-up ms-2"></i>
                                    <p class="card-text ms-3">${post.like}</p>
                                </div>
                                <div class="mt-1 me-3">
                                    <i class="bi bi-calendar-event me-2"></i>${data_formatada}
                                </div>
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

const searchInput = document.getElementById("search_input");
searchInput.addEventListener("input", (event) => {
    const searchQuery = event.target.value.trim();
    load_my_posts(searchQuery);
});

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

window.onload = function () {
    if (window.location.pathname.includes('my_tales')) {
        load_genres();
        load_my_posts();
    }

    if (window.location.pathname.includes('text')) {
        like_text();

        const text_id = window.location.pathname.split('/')[2];

        const deleteForm = document.getElementById('delete_post_form');

        if (deleteForm) {
            deleteForm.addEventListener('submit', (event) => delete_post(event, text_id));
        }
    }
};
