let texts_to_remove = []; // Lista de textos a serem removidos

async function load_my_lists(search_query = "") {
    try {
        // Buscar as listas
        const url = search_query ? `/list/my_lists?q=${encodeURIComponent(search_query)}` : "/list/my_lists";
        const response = await fetch(url);
        const lists = await response.json();

        const my_lists = document.getElementById("my_lists");

        if (lists.length === 0) {
            my_lists.innerHTML = "<p class='text-center title-gradient fs-4 mt-1'>Nenhuma lista disponível.</p>";
            return;
        }

        my_lists.innerHTML = lists.map(list => {
            return `
            <div class="card mt-4">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h3 class="card-title m-3">
                            <a href="/list/${list.id}"
                                class="text-decoration-none text-dark">${list.name}</a>
                        </h3>
                        <div class="d-flex">
                            <img src="images/user_photo.png" alt="Logo" class="rounded-circle mt-1"
                                width="40" height="40">
                            <a class="navbar-brand fs-4 ms-3 mt-2 me-3" href="profile">User</a>
                        </div>
                    </div>
                    <hr class="border-danger-subtle border-3 opacity-75 mt-2 mb-4">
                    <p class="card-text ms-4 fs-5 text-start text-sm-start">${list.description}</p>
                </div>
            </div>
        `;
        }).join("");
    } catch (error) {
        console.error("Erro ao carregar listas:", error);
        document.getElementById("my_lists").innerHTML = "<p>Erro ao carregar listas.</p>";
    }
}

// Função para carregar os textos na lista principal
async function load_text_list(list_id, target_id) {
    try {
        const response = await fetch(`/list/${list_id}/texts`);
        const texts = await response.json();

        const listTexts = document.getElementById(target_id);

        if (texts.length === 0) {
            listTexts.innerHTML = "<p class='title-gradient fs-4 mt-3'>Nenhum texto disponível.</p>";
            return;
        }

        listTexts.innerHTML = texts.map(text => `
            <div class="d-flex justify-content-between">
                <h4 class="mt-2 ms-4">
                    <a href="/text/${text.id}" class="text-decoration-none text-dark">${text.title}</a>
                </h4>
                <div class="d-flex">
                    <img src="/images/user_photo.png" alt="Logo" class="rounded-circle mt-1" width="40" height="40">
                    <a class="navbar-brand fs-4 ms-3 mt-2 me-3" href="profile">User</a>
                </div>
            </div>
            <hr class="border-danger-subtle border-3 opacity-75 mt- mb-4">
        `).join("");
    } catch (error) {
        console.error("Erro ao carregar textos da lista:", error);
        document.getElementById(target_id).innerHTML = "<p>Erro ao carregar textos da lista.</p>";
    }
}

// Função para carregar os textos no modal de edição
async function load_text_list_to_update(list_id, target_id) {
    try {
        const response = await fetch(`/list/${list_id}/texts`);
        const texts = await response.json();

        const listTexts = document.getElementById(target_id);

        if (texts.length === 0) {
            listTexts.innerHTML = "<p class='fs-5 mt-3'>Nenhum texto disponível.</p>";
            return;
        }

        listTexts.innerHTML = texts.map(text => `
            <div class="d-flex justify-content-between align-items-center p-2 border rounded mb-2">
                <h6 class="m-0">
                    <a href="/text/${text.id}" class="text-decoration-none">${text.title}</a>
                </h6>
                <button type="button" class="btn btn-sm btn-danger remove-item" title="Remover item"
                    data-id="${text.id}">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        `).join("");
    } catch (error) {
        console.error("Erro ao carregar textos da lista:", error);
        document.getElementById(target_id).innerHTML = "<p>Erro ao carregar textos da lista.</p>";
    }
}

function add_text_to_remove_list(text_id) {
    if (!texts_to_remove.includes(text_id)) {
        texts_to_remove.push(text_id);
        console.log(`Texto com ID ${text_id} marcado para remoção.`);

        const item = document.querySelector(`.remove-item[data-id="${text_id}"]`);
        if (item) {
            item.parentElement.classList.add('bg-light');
        }
    }
}

document.addEventListener('click', (event) => {
    const remove_button = event.target.closest('.remove-item');
    if (remove_button) {
        event.preventDefault();
        event.stopPropagation();

        const text_id = remove_button.getAttribute('data-id');
        add_text_to_remove_list(text_id);
    }
});

// Função para atualizar a lista
async function update_list(list_id) {
    const list_title = document.getElementById('title_update').value;
    const list_description = document.getElementById('description_update').value;

    try {
        const response = await fetch(`/list/${list_id}/edit_list`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                list_title: list_title,
                list_description: list_description,
                text_ids: Array.from(texts_to_remove), // Passando os IDs dos textos a serem removidos
            }),
        });

        if (response.ok) {
            window.location.href = '/my_lists'; // Redireciona após a atualização
        } else {
            console.error('Erro ao atualizar lista.');
        }
    } catch (error) {
        console.error(error);
    }
}

// Adiciona o evento de submit ao formulário
window.onload = function () {
    if (window.location.pathname.includes('my_lists')) {
        load_my_lists();

        const searchInput = document.getElementById("search_input");
        searchInput.addEventListener("input", (event) => {
            const searchQuery = event.target.value.trim();
            load_my_lists(searchQuery);
        });
    }

    if (window.location.pathname.startsWith('/list')) {
        const list_id = window.location.pathname.split('/')[2];
        load_text_list(list_id, "list_texts");

        const edit_modal = document.getElementById('edit_modal');
        if (edit_modal) {
            edit_modal.addEventListener('show.bs.modal', () => {
                load_text_list_to_update(list_id, "list_texts_modal");
            });
        }

        const update_list_form = document.getElementById('edit_form');
        if (update_list_form) {
            update_list_form.addEventListener('submit', (event) => {
                event.preventDefault(); // Impede o envio padrão do formulário
                update_list(list_id); // Chama a função para atualizar a lista
            });
        }
    }
};