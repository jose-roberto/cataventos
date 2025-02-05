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

async function load_my_posts(search_query = "") {
    try {
        const url = search_query ? `/text/my_texts?q=${encodeURIComponent(search_query)}` : "/text/my_texts";
        console.log(url);
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
            my_texts.innerHTML = "<p class='text-center title-gradient fs-4 mt-4'>Nenhum post disponível.</p>";
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
                                <h3 class="card-title m-3">
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

async function search_collaborator(text_id, search_query = "") {
    try {
        const collaborators_list = document.getElementById("collaborators_list");

        if (search_query === "") {
            collaborators_list.innerHTML = "<p class='text-center title-gradient fs-5 mt-2'>Procure por um amigo...</p>";
            return;
        }

        const route = search_query
            ? `/text/${text_id}/search_collaborator?q=${encodeURIComponent(search_query)}`
            : `/text/${text_id}/search_collaborator`;

        console.log(route);

        const response = await fetch(route);
        const collaborators = await response.json();

        if (collaborators.length === 0) {
            collaborators_list.innerHTML = "<p class='text-center title-gradient fs-5 mt-2'>Usuário não encontrado.</p>";
            return;
        }

        collaborators_list.innerHTML = collaborators.map(collaborator => {
            return `
                <div class="card mt-4" id="collaborator_${collaborator.id}">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h3 class="card-title m-3">${collaborator.name}</h3>
                            <div class="inline">
                                <img src="/images/user_photo.png" alt="Logo" class="rounded-circle" width="40" height="40">
                                    
                                <a class="navbar-brand fs-4 mt-4 me-3">${collaborator.username}</a>
                                
                                <button type="button" class="btn btn-brown add-collaborator-button" data-id="${collaborator.id}">
                                    <i class="bi bi-plus-square"></i>
                                </button>
                            </div>
                        </div>

                        <hr class="border-danger-subtle border-3 opacity-75 mt-2 mb-4">
                    </div>
                </div>
                `;
        }).join("");
    } catch (error) {
        console.error("Erro ao carregar colaboradores:", error);
        document.getElementById("collaborators_list").innerHTML = "<p>Erro ao carregar colaboradores.</p>";
    }
}

async function add_collaborator(text_id, collaborator_id) {
    try {
        const response = await fetch(`/text/${text_id}/add_collaborator`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ collaborator_id }),
        });

        if (!response.ok) {
            throw new Error("Erro ao adicionar colaborador.");
        } else {
            console.log("Colaborador adicionado com sucesso!");

            const new_collaborator = document.getElementById(`collaborator_${collaborator_id}`);
            new_collaborator.remove();
        }
    } catch (error) {
        console.error("Erro ao adicionar colaborador:", error);
    }
}

async function search_list(search_query = "") {
    try {
        const your_lists = document.getElementById("your_lists");

        if (search_query === "") {
            your_lists.innerHTML = "<p class='text-center title-gradient fs-5 mt-2'>Procure por uma lista...</p>";
            return;
        }

        const route = search_query ? `/list/my_lists?q=${encodeURIComponent(search_query)}` : "/list/my_lists";

        console.log(route);

        const response = await fetch(route);
        const lists = await response.json();

        if (lists.length === 0) {
            your_lists.innerHTML = "<p class='text-center title-gradient fs-5 mt-2'>Lista não encontrada.</p>";
            return;
        }

        your_lists.innerHTML = lists.map(list => {
            return `
               <div class="card mt-4" id="list_${list.id}">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h3 class="card-title m-0">${list.name}</h3>

                            <button type="button" class="btn btn-brown add-text-to-list-button" data-id="${list.id}">
                                <i class="bi bi-plus-square"></i>
                            </button>
                        </div>

                        <hr class="border-danger-subtle border-3 opacity-75 mt-2 mb-4">
                    </div>
                </div>
                `;
        }).join("");
    } catch (error) {
        console.error("Erro ao carregar listas:", error);
        document.getElementById("your_lists").innerHTML = "<p>Erro ao carregar listas.</p>";
    }
}

// async function add_collaborator(text_id, collaborator_id) {
//     try {
//         const response = await fetch(`/text/${text_id}/add_collaborator`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ collaborator_id }),
//         });

//         if (!response.ok) {
//             throw new Error("Erro ao adicionar colaborador.");
//         } else {
//             console.log("Colaborador adicionado com sucesso!");

//             const new_collaborator = document.getElementById(`collaborator_${collaborator_id}`);
//             new_collaborator.remove();
//         }
//     } catch (error) {
//         console.error("Erro ao adicionar colaborador:", error);
//     }
// }

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
    if (window.location.pathname.includes('my_tales')) {
        load_genres();
        load_my_posts();

        const searchInput = document.getElementById("search_input");
        searchInput.addEventListener("input", (event) => {
            const searchQuery = event.target.value.trim();
            load_my_posts(searchQuery);
        });
    }

    if (window.location.pathname.includes('text')) {
        like_text();

        const search_collaborator_input = document.getElementById("search_collaborator_input");
        search_collaborator_input.addEventListener("input", (event) => {
            const text_id = window.location.pathname.split('/')[2];

            const search_query = event.target.value.trim();

            search_collaborator(text_id, search_query);
        });

        const search_list_input = document.getElementById("search_list_input");
        search_list_input.addEventListener("input", (event) => {
            const search_query = event.target.value.trim();

            search_list(search_query);
        });
    }
};

// DINAMICAMENTE:

const collaborators_container = document.getElementById("collaborators_list");

if (collaborators_container) {
    collaborators_container.addEventListener("click", (event) => {
        const button = event.target.closest(".add-collaborator-button");

        if (button) {  // Verifica se o botão existe
            const text_id = window.location.pathname.split('/')[2];
            const collaborator_id = button.getAttribute("data-id");

            // Chama a função para adicionar o colaborador
            add_collaborator(text_id, collaborator_id);
        }
    });
}

// Em construção
// const lists_container = document.getElementById("your_lists");

// if (lists_container) {
//     lists_container.addEventListener("click", (event) => {
//         const button = event.target.closest(".add-text-to-list-button");

//         if (button) {
//             const text_id = window.location.pathname.split('/')[2];

//             add_text_to_list(text_id);
//         }
//     });
// }
