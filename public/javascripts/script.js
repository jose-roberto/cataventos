function load_header() {
  fetch('/views/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar o cabeçalho:', error));
}

window.onload = load_header;