
async function load_timeline(page = 1, limit = 10) {
    try {
        const get_user_id = await fetch("/user/get_user_id");
        const user_id = get_user_id.user_id;

        // Buscar os posts com paginação
        const response = await fetch(`/text/read_texts?page=${page}&limit=${limit}`);
        const data = await response.json();
        const { posts, pagination } = data;

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

        // Exibir os posts
        timeline.innerHTML = (await Promise.all(posts.map(async post => {
            const is_long = post.text.length > charLimit;
            const display = is_long ? post.text.slice(0, charLimit) + "..." : post.text;

            // Obter o nome do gênero pelo ID do post
            const date = new Date(post.publication_date);
            const final_date = date.toLocaleDateString('pt-BR');
            const genreName = genreMap[post.genre_id] || "Desconhecido";

            // Verificar se o usuário é colaborador
            const verify_collaborator_response = await fetch(`/text/${post.id}/verify_collaborator`);

            const result = await verify_collaborator_response.json(); // Aguardar a resolução da Promise

            const is_collaborator = result.is_collaborator; // Acessar o campo `status`

            let collaborator_icon = "";
            // Verifica se é colaborador
            if (is_collaborator && post.created_by !== user_id) {
                collaborator_icon = `<i class="bi bi-people me-2"></i>`;
            }

            return `
                <div class="card mb-3">
                    <div class="card-body">
                        <!-- Cabeçalho do card -->
                        <div class="d-flex justify-content-between align-items-center">
                            <!-- Título e data formatada -->
                            <div class="d-flex align-items-center">
                                <h3 class="card-title m-3">
                                    <a href="/text/${post.id}" class="text-decoration-none text-dark">${post.title}</a>
                                </h3>

                                <div class="mt-1 me-3">
                                    <i class="bi bi-calendar-event me-2"></i>${final_date}
                                </div>
                            </div>

                            <div class="d-flex align-items-center">
                                <img src="images/user_photo.png" alt="Logo" class="rounded-circle mt-1" width="40" height="40">
                                <a class="navbar-brand fs-4 ms-3 mt-2 me-3" href="user/${post.created_by}">User</a>
                            </div>
                        </div>

                        <div class="d-flex justify-content-between">
                            <div class="d-flex mt-1 ms-2">
                                <i class="bi bi-hand-thumbs-up ms-2"></i>
                                <p class="card-text ms-3">${post.like}</p>
                            </div>

                            <div class="mt-1 me-3">
                                ${collaborator_icon}
                            </div>
                        </div>

                        <hr class="border-danger-subtle border-3 opacity-75 mt-4">
                        <p class="card-text ms-4 fs-5">${display}</p>
                        <hr class="border-danger-subtle border-3 opacity-75 mt-4">
                        <p class="card-text ms-4 fs-5">${genreName}</p>
                    </div>
                </div>
            `;
        }))).join(""); // Usar Promise.all para aguardar todas as Promises

        // Adicionar botões de paginação
        const pagination_container = document.getElementById("pagination");
        if (pagination_container) {
            const total_pages = Math.ceil(pagination.total_posts / pagination.limit);
            pagination_container.innerHTML = `
                <div style="display: flex; justify-content: center; gap: 10px;">
                    <button class="btn btn-brown" onclick="load_timeline(${page - 1}, ${limit})" ${page === 1 ? "disabled" : ""}>Anterior</button>
                    <button class="btn btn-brown" onclick="load_timeline(${page + 1}, ${limit})" ${page === total_pages ? "disabled" : ""}>Próxima</button>
                </div>
                <div style="text-align: center; margin-top: 5px;">
                    <span class="ms-3 mt-1">Página ${page} de ${total_pages}</span>
                </div>
            `;
        }
    } catch (error) {
        console.error("Erro ao carregar posts:", error);
        document.getElementById("timeline").innerHTML = "<p>Erro ao carregar posts.</p>";
    }
}

window.onload = function () {
    if (window.location.pathname.includes('homepage')) {
        load_timeline(1, 5);
    }
};