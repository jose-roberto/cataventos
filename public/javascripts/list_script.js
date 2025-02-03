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
        document.getElementById("list_text").innerHTML = "<p>Erro ao carregar textos da lista.</p>";
    }
}

async function load_text_list_to_update(list_id) {
    try {
        const response = await fetch(`/list/${list_id}/texts`);
        const texts = await response.json();

        const list_texts = document.getElementById("list_texts_modal");

        if (texts.length === 0) {
            list_texts.innerHTML = "<p>Nenhum texto disponível.</p>";
            return;
        }

        list_texts.innerHTML = texts.map(text => {
            return `
           <div class="d-flex justify-content-between align-items-center p-2 border rounded mb-2">
              <h6 class="m-0">
                  <a href="/text/${text.id}" class="text-decoration-none">${text.title}</a>
              </h6>
              <button id="remove_item"class="btn btn-sm btn-danger" title="Remover item">
                  <i  data-id="${text.id}" class="bi bi-trash-fill"></i>
              </button>
          </div>
        `;
        }).join("");
    } catch (error) {
        console.error("Erro ao carregar textos da lista:", error);
        document.getElementById("list_texts_modal").innerHTML = "<p>Erro ao carregar textos da lista.</p>";
    }
}

let textsToRemove = []; // Array para armazenar os IDs dos textos a serem removidos

// Função para adicionar o ID do texto à lista de remoção
function addTextToRemoveList(textId) {
    if (!textsToRemove.includes(textId)) {
        textsToRemove.push(textId); // Adiciona o ID ao array
        console.log(`Texto com ID ${textId} marcado para remoção.`);
        // Opcional: Adicionar uma classe visual para indicar que o texto foi marcado para remoção
        const trashIcon = document.querySelector(`.bi-trash-fill[data-id="${textId}"]`);
        if (trashIcon) {
            trashIcon.parentElement.parentElement.classList.add('bg-light'); // Exemplo de estilo
        }
    }
}

// Event delegation para capturar cliques nos ícones de lixeira
document.addEventListener('click', (event) => {
    // Verifica se o clique foi em um ícone de lixeira ou em um elemento dentro dele
    const trashIcon = event.target.closest('.bi-trash-fill');
    if (trashIcon) {
        event.preventDefault(); // Evita o comportamento padrão
        event.stopPropagation(); // Impede a propagação do evento

        const textId = trashIcon.getAttribute('data-id');
        addTextToRemoveList(textId); // Adiciona o ID à lista de textos a serem removidos
    }
});

async function update_list(list_id, text_ids) {
    try {
        const name = document.getElementById('list_title').value;
        const description = document.getElementById('list_description').value;

        const response = await fetch('/list/update_list', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ list_id, name, description, text_ids }),
        });

        if (response.ok) {
            window.location.href = '/my_lists';
        } else {
            console.error('Erro ao atualizar lista.');
        }
    } catch (error) {
        console.error(error);
    }
}

window.onload = function () {
    if (window.location.pathname.includes('my_lists')) {
        load_my_lists();
    }

    if (window.location.pathname.startsWith('/list')) {
        const list_id = window.location.pathname.split('/')[2];
        load_text_list(list_id, "list_texts");

        // Carregar textos no modal quando ele for aberto
        const editModal = document.getElementById('editModal');
        if (editModal) {
            editModal.addEventListener('show.bs.modal', () => {
                load_text_list_to_update(list_id, "list_texts_modal");
            });
        }
    }
};
