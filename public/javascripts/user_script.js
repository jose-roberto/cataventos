async function load_user() {
    try {
        // Primeiro, busca o user_id
        const id_responso = await fetch('/get_user_id');
        const user_info = await id_responso.json();

        if (!id_responso.ok) {
            throw new Error(id_responso.error || 'Erro ao obter user_id');
        }

        const user_id = user_info.user_id;

        const response = await fetch(`/user/${user_id}/read_user`);
        const user = await response.json();

        // Para leitura
        document.getElementById('name').textContent = user.name;
        document.getElementById('username').textContent = user.username;
        document.getElementById('email').textContent = user.email;
        const birthdate = new Date(user.birthdate);
        const formattedBirthdate = birthdate.toLocaleDateString('pt-BR', {
            timeZone: 'UTC'
        });
        document.getElementById('birthdate').textContent = formattedBirthdate;

        // Para visualização dos dados no campo de edição
        document.getElementById('name_update').value = user.name;
        document.getElementById('username_update').value = user.username;
        document.getElementById('email_update').value = user.email;
        document.getElementById('birthdate_update').value = new Date(user.birthdate).toISOString().split('T')[0];
    } catch (error) {
        console.error('Erro ao obter informações do usuário:', error);
    }
}

async function delete_user(event) {
    event.preventDefault();

    const id_responso = await fetch('/get_user_id');
    const user_info = await id_responso.json();

    if (!id_responso.ok) {
        throw new Error(id_responso.error || 'Erro ao obter user_id');
    }

    const user_id = user_info.user_id;

    try {
        const response = await fetch(`/user/${user_id}/delete_user`, {
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
    if (window.location.pathname.includes('user')) {
        load_user();

        const delete_form = document.getElementById('confirm_delete_form');

        if (delete_form) {
            delete_form.addEventListener('submit', (event) => delete_user(event));
        }
    }
};