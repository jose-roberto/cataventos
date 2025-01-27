function load_header() {
  fetch('/templates/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar o navbar:', error));
}

window.onload = load_header;
