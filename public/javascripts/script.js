
function load_header() {
  fetch('/templates/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar o navbar:', error));
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
  load_header();

  if (window.location.pathname.includes('my_tales')) {
    load_genres();
  }
};
