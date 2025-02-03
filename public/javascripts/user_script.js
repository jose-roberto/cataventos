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

window.onload = function () {
    if (window.location.pathname.includes('profile')) {
        load_user();

        const delete_form = document.getElementById('confirm_delete_form');

        if (delete_form) {
            delete_form.addEventListener('submit', (event) => delete_user(event));
        }
    }
};