
function load_header() {
  fetch('/templates/navbar.html')
    .then(response => response.text())
    .then(data => {
      const headerElement = document.getElementById('header');
      if (headerElement) {
        headerElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Erro ao carregar o navbar:', error));
}

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

window.onload = function () {
  // load_header();

  if (window.location.pathname.includes('profile')) {
    load_user();
  }

  if (window.location.pathname.includes('my_tales')) {
    load_genres();
  }
};
