async function search() {
    const filter = document.getElementById('search_filter').value;
    const search_term = document.getElementById('search_input').value;
    const resultsContainer = document.getElementById('my_search');

    if (!filter || !search_term.trim()) {
        alert('Por favor, selecione um filtro e insira um termo de busca.');
        return;
    }

    resultsContainer.innerHTML = "<p>Carregando...</p>"; // Mensagem de carregamento

    const url = `/search/${filter}?q=${encodeURIComponent(search_term)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        const data = await response.json();

        // Se não houver resultados
        if (data.length === 0) {
            resultsContainer.innerHTML = "<p class='text-center title-gradient fs-4 mt-1'>Nenhum resultado disponível.</p>";
            return;
        }

        // Exibir os resultados dinamicamente
        resultsContainer.innerHTML = data.map(item => {
            const name = item.name || item.title || item.username;
            
            return `
                <div class="card mb-2 p-3 shadow">
                    <h5 class="card-title">
                        <a href="/${filter}/${item.id}" class="text-decoration-none text-dark">${name}</a>
                    </h5>
                </div>
            `;
        }).join('');

    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        resultsContainer.innerHTML = "<p class='text-danger'>Ocorreu um erro ao buscar os dados. Tente novamente.</p>";
    }
}

if (window.location.pathname.includes('search')) {
    const searchForm = document.getElementById("search_form");
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
        search(); // Chama a função de busca
    });
}