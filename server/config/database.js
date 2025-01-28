const Database = require('better-sqlite3');

const db_connection = new Database('cataventos.db');
console.log('Conectado ao banco de dados SQLite.');

module.exports = db_connection;

const Genre = require('../models/Genre');
const genre_instance = new Genre();
genre_instance.create_table();

const Text = require('../models/Text');
const text_instance = new Text();
text_instance.create_table();

const User = require('../models/User');
const user_instance = new User();
user_instance.create_table();

const List = require('../models/List');
const list_instance = new List();
list_instance.create_table();

const TextGenre = require('../models/TextGenre');
const text_genre_instance = new TextGenre();
text_genre_instance.create_table();

const TextList = require('../models/TextList');
const text_list_instance = new TextList();
text_list_instance.create_table();

const TextUser = require('../models/TextUser');
const text_user_instance = new TextUser();
text_user_instance.create_table();

function fill_genre() {
    // Gêneros
    genre_instance.create({ name: 'Mistério' }); // 1 
    genre_instance.create({ name: 'Fantasia' }); // 2
    genre_instance.create({ name: 'Histórico' }); // 3
    genre_instance.create({ name: 'Realismo Mágico' }); // 4
    genre_instance.create({ name: 'Distopia' }); // 5
    genre_instance.create({ name: 'Cyberpunk' }); // 6
    genre_instance.create({ name: 'Steampunk' }); // 7
    genre_instance.create({ name: 'Thriller Psicológico' }); // 8
    genre_instance.create({ name: 'Mitologia' }); // 9
    genre_instance.create({ name: 'Contos de Fadas' }); // 10
    genre_instance.create({ name: 'Fantasia Épica' }); // 11
    genre_instance.create({ name: 'Ficção Científica' }); // 12
    genre_instance.create({ name: 'Terror Gótico' }); // 13
    genre_instance.create({ name: 'Drama' }); // 14
    genre_instance.create({ name: 'Suspense Policial' }); // 15
    genre_instance.create({ name: 'Aventura' }); // 16
    genre_instance.create({ name: 'Horror Cósmico' }); // 17
    genre_instance.create({ name: 'Terror' }); // 18
    genre_instance.create({ name: 'Suspense' }); // 19
    genre_instance.create({ name: 'Fantasia Urbana' }); // 20
    genre_instance.create({ name: 'Verso livre' }); // 21
}


function fill_text() {
    // Contos
    text_instance.create({ // 1
        title: 'O Coração Delator',
        text: 'Edgar Allan Poe\n\nVerdade! - Nervos há, aguçados demais, muito aguçados, que, por muito tempo, para o mal do autor, com o mal da humanidade, não se deixarão deitar em repouso. Ora, o que se pode considerar como "doença" num nervo, é, muitas vezes, apenas a sua sensibilidade normal, o seu estado habitual. E, na verdade, não há loucura no que muitos homens consideram como tal. Pois, a loucura é apenas uma inteligência excessiva. Mas, para que se possa ver a profundidade, é preciso manter-se afastado do abismo.\n\nComo eu disse, o nervo agudo, o nervo aguçado, aguçadíssimo, levou-me àquela ação. E, então, o som daquele coração começou a crescer mais alto, mais alto! Eu dizia a mim mesmo: "É nada além de um visitante que bate à porta da minha porta. É um visitante que bate à porta do meu coração". Eu me esforcei para manter a calma, e, ainda assim, o som crescia mais alto, mais alto! E, então, o som tornou-se mais claro, mais claro! Eu disse: "É o som de um coração, de um coração que bate, de um coração que bate, de um coração que bate".\n\nMas, por que será que o som crescia mais alto',
        synopsis: 'Um homem perturbado tenta convencer o leitor de sua sanidade enquanto descreve como assassinou um idoso por causa de seu olho “vultuoso”.',
        publication_date: '29/01/1843',
        type: 1,
        like: 0,
        status: 1,
    });
    text_instance.create({ // 2
        title: 'A Loteria',
        text: 'Shirley Jackson\n\nO povo da aldeia se reúne para a loteria anual, que é organizada por Mr. Summers, que também conduz a escolha de nomes para a loteria. A família Hutchinson é escolhida, e a escolha de uma pessoa da família é feita. Tessie Hutchinson é escolhida, e ela protesta que a escolha não foi justa. A aldeia então se reúne para apedrejar Tessie até a morte.',
        synopsis: 'Os moradores de uma pequena cidade participam de uma tradição anual que termina com consequências sombrias.',
        publication_date: '26/06/1948',
        type: 1,
        like: 0,
        status: 1
    });
    text_instance.create({ // 3
        title: 'A Casa de Asterion',
        text: 'Jorge Luis Borges\n\nEra uma manhã de março de 1929. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava.',
        synopsis: 'Um conto narrado pelo Minotauro sobre sua solidão, sua casa labiríntica e seu destino.',
        publication_date: '01/01/1947',
        type: 1,
        like: 0,
        status: 1
    });
    text_instance.create({ // 4
        title: 'O Gato Preto',
        text: 'Edgar Allan Poe\n\nEu sou louco, eu sei. Mas não sou um tolo. E, no entanto, como posso ser um tolo, se a loucura é apenas uma inteligência excessiva? Mas, para que se possa ver a profundo',
        synopsis: 'Um homem relata a história de como sua crescente violência levou a eventos sobrenaturais e à sua queda.',
        publication_date: '19/08/1843',
        type: 1,
        like: 0,
        status: 1
    });
    text_instance.create({ // 5
        title: 'O Chamado de Cthulhu',
        text: 'Lovecraft\n\nO conto começa com a morte do professor George Gammell Angell, da Universidade de Brown, em Providence, Rhode Island, encontrado morto em sua cama por',
        synopsis: 'Um conto de horror cósmico sobre uma entidade antiga que habita as profundezas do mar.',
        publication_date: '01/02/1928',
        type: 1,
        like: 0,
        status: 1
    });
    text_instance.create({ // 6
        title: 'A Curva na Estrada',
        text: 'Ligya Fagundes Telles\n\nA Curva na Estrada é um conto de Ligya Fagundes Telles que narra a história de um homem que, ao dirigir por uma estrada, se depara com uma curva que o leva a um destino inesperado. O conto é uma reflexão sobre a vida e a morte, e sobre como nossas escolhas podem nos levar a caminhos desconhecidos.',
        synopsis: 'Um conto psicológico sobre um homem que encontra uma estranha e sua relação com o destino.',
        publication_date: '01/01/1952',
        type: 1,
        like: 0,
        status: 1
    });
    text_instance.create({ // 7
        title: 'O Grande Deus Pã',
        text: 'Arthur Machen\n\nO conto começa com a morte do professor George Gammell Angell, da Universidade de Brown, em Providence, Rhode Island, encontrado morto em sua cama por',
        synopsis: 'Uma experiência sobrenatural revela a presença de forças antigas e misteriosas na natureza.',
        publication_date: '01/01/1894',
        type: 1,
        like: 0,
        status: 1
    });
    text_instance.create({ // 8
        title: 'O Homem da Areia',
        text: 'E.T.A. Hoffmann\n\nO conto começa com a morte do professor George Gammell Angell, da Universidade de Brown, em Providence, Rhode Island, encontrado morto em sua cama por',
        synopsis: 'Um conto de horror psicológico sobre um homem assombrado por uma figura misteriosa de sua infância.',
        publication_date: '01/01/1817',
        type: 1,
        like: 0,
        status: 1
    });
    text_instance.create({ // 9
        title: 'A Biblioteca de Babel',
        text: 'Jorge Luis Borges\n\nA Biblioteca de Babel é um conto de Jorge Luis Borges que narra a história de uma biblioteca infinita que contém todos os livros possíveis. A biblioteca é habitada por uma sociedade de bibliotecários que passam suas vidas explorando os corredores intermináveis da biblioteca em busca de conhecimento. O conto é uma reflexão sobre a natureza do conhecimento e do caos, e sobre a busca humana pela verdade e pela ordem.',
        synopsis: 'Uma vasta biblioteca contém todos os livros possíveis, explorando os limites do conhecimento e do caos.',
        publication_date: '01/01/1941',
        type: 1,
        like: 0,
        status: 1
    });
    text_instance.create({ // 10
        title: 'A Canção de Rolando',
        text: 'Desconhecido\n\nA Canção de Rolando é um poema épico medieval que narra a história de Rolando, um cavaleiro francês que luta na Batalha de Roncesvales. O poema é uma das mais antigas obras da literatura francesa e é considerado um dos grandes clássicos da literatura medieval. A Canção de Rolando é uma história de lealdade, coragem e honra, e é um dos mais importantes poemas épicos da Idade Média.',
        synopsis: 'Um poema épico medieval sobre a lealdade e a coragem durante uma batalha lendária.',
        publication_date: '01/01/1098',
        type: 1,
        like: 0,
        status: 1
    });
    text_instance.create({ // 11
        title: 'A Máscara da Morte Rubra',
        text: 'Edgar Allan Poe\n\nA Máscara da Morte Rubra é um conto de Edgar Allan Poe que narra a história de um príncipe que se refugia em seu castelo para escapar de uma terrível praga que assola o reino. O príncipe dá um baile de máscaras para seus amigos, mas a festa é interrompida por um visitante inesperado. O conto é uma reflexão sobre a morte e a mortalidade, e sobre como a morte é inevitável para todos os seres humanos.',
        synopsis: 'Uma história alegórica sobre a inevitabilidade da morte, ambientada durante uma praga mortal.',
        publication_date: '01/01/1842',
        type: 1,
        like: 0,
        status: 1
    });
    text_instance.create({ // 12
        title: 'A Máquina do Tempo',
        text: 'H.G. Wells\n\nA Máquina do Tempo é um romance de ficção científica de H.G. Wells que narra a história de um cientista que inventa uma máquina do tempo e viaja para o futuro distante. O cientista explora os futuros distantes da humanidade e descobre o destino final da raça humana. O romance é uma reflexão sobre o tempo, o espaço e o destino, e sobre como o futuro pode ser moldado pelas escolhas que fazemos no presente.',
        synopsis: 'Um cientista viaja no tempo e explora os futuros distantes da humanidade e seu destino final.',
        publication_date: '01/01/1895',
        type: 1,
        like: 0,
        status: 1
    });
    text_instance.create({ // 13
        title: 'O Monte dos Vendavais',
        text: 'Emily Brontë\n\nO Monte dos Vendavais é um romance de Emily Brontë que narra a história de Heathcliff, um jovem órfão que é adotado por uma família rica e se apaixona por sua irmã adotiva, Catherine. O romance é uma história de amor e vingança, e é considerado um dos grandes clássicos da literatura inglesa. O Monte dos Vendavais é uma história trágica de paixão, vingança e obsessão em um ambiente selvagem e isolado.',
        synopsis: 'Uma história trágica de paixão, vingança e obsessão em um ambiente selvagem e isolado.',
        publication_date: '01/01/1847',
        type: 1,
        like: 0,
        status: 1
    });
}


function fill_user() {
    // Usuários
    user_instance.create({  // 1
        name: 'Admin', username: 'admin', email: 'admin@gmail.com', password: '1234', birthdate: '01/01/1990', type: 0
    });
    user_instance.create({ // 2
        name: 'José', username: 'zé', email: 'ze@gmail.com', password: '1234', birthdate: '01/01/1990', type: 0
    });
    user_instance.create({ // 3
        name: 'Thiago', username: 'thi', email: 'thi@gmail.com', password: '1234', birthdate: '01/01/1990', type: 0
    });
    user_instance.create({ // 4
        name: 'Ana', username: 'aninha', email: 'ana@gmail.com', password: '1234', birthdate: '01/01/1990', type: 1
    });
    user_instance.create({ // 5
        name: 'Carlos', username: 'carlinhos', email: 'carlos@gmail.com', password: '1234', birthdate: '01/01/1991', type: 1
    });
    user_instance.create({ // 6
        name: 'Sofia', username: 'sofi', email: 'sofia@gmail.com', password: '1234', birthdate: '01/01/1992', type: 1
    });
    user_instance.create({ // 7
        name: 'Beatriz', username: 'bea', email: 'beatriz@gmail.com', password: '1234', birthdate: '01/01/1993', type: 1
    });
    user_instance.create({ // 8
        name: 'Luiz', username: 'luizinho', email: 'luiz@gmail.com', password: '1234', birthdate: '01/01/1994', type: 1
    });
    user_instance.create({ // 9
        name: 'Mariana', username: 'mari', email: 'mariana@gmail.com', password: '1234', birthdate: '01/01/1995', type: 1
    });
    user_instance.create({ // 10
        name: 'Edgar Allan Poe', username: 'poe', email: 'poe@gmail.com', password: '1234', birthdate: '19/01/1809', type: 1
    });
    user_instance.create({ // 11
        name: 'Shirley Jackson', username: 'shirley', email: 'shirley@gmail.com', password: '1234', birthdate: '14/12/1916', type: 1
    });
    user_instance.create({ // 12
        name: 'Jorge Luis Borges', username: 'borges', email: 'borges@gmail.com', password: '1234', birthdate: '24/08/1899', type: 1
    });
    user_instance.create({ // 13
        name: 'H.P. Lovecraft', username: 'lovecraft', email: 'lovecraft@gmail.com', password: '1234', birthdate: '20/08/1890', type: 1
    });
    user_instance.create({ // 14
        name: 'Lygia Fagundes Telles', username: 'lygia', email: 'lygia@gmail.com', password: '1234', birthdate: '19/04/1923', type: 1
    });
    user_instance.create({ // 15
        name: 'Arthur Machen', username: 'machen', email: 'machen@gmail.com', password: '1234', birthdate: '03/03/1863', type: 1
    });
    user_instance.create({ // 16
        name: 'E.T.A. Hoffmann', username: 'hoffmann', email: 'hoffmann@gmail.com', password: '1234', birthdate: '24/01/1776', type: 1
    });
    user_instance.create({ // 17
        name: 'Autor Desconhecido', username: 'desconhecido', email: 'desconhecido@gmail.com', password: '1234', birthdate: '01/01/0001', type: 1
    });
    user_instance.create({ // 18
        name: 'H.G. Wells', username: 'wells', email: 'wells@gmail.com', password: '1234', birthdate: '21/09/1866', type: 1
    });
    user_instance.create({ // 19
        name: 'Charlotte Brontë', username: 'bronte', email: 'bronte@gmail.com', password: '1234', birthdate: '21/04/1816', type: 1
    });
}


function fill_list() {
    // Listas
    list_instance.create({ // 1
        name: 'Clássicos', description: 'Lista de clássicos da literatura', user_id: 1, status: 1
    });
    list_instance.create({ // 2
        name: 'Suspense e Mistério', description: 'Lista de livros de suspense e mistério', user_id: 2, status: 1
    });
    list_instance.create({ // 3
        name: 'Horror Cósmico', description: 'Lista de livros de horror cósmico', user_id: 3, status: 1
    });
    list_instance.create({ // 4
        name: 'Favoritos de Edgar Allan Poe', description: 'Lista de favoritos de Edgar Allan Poe', user_id: 4, status: 1
    });
    list_instance.create({ // 5
        name: 'Histórias Curtas', description: 'Lista de histórias curtas', user_id: 5, status: 1
    });
    list_instance.create({ // 6
        name: 'Terror Gótico', description: 'Lista de livros de terror gótico', user_id: 6, status: 1
    });
    list_instance.create({ // 7
        name: 'Clássicos da Literatura Inglesa', description: 'Lista de clássicos da literatura inglesa', user_id: 7, status: 1
    });
    list_instance.create({ // 8
        name: 'Ficção Científica e Fantasia', description: 'Lista de livros de ficção científica e fantasia', user_id: 8, status: 1
    });
    list_instance.create({ // 9
        name: 'Histórias com Temas Filosóficos', description: 'Lista de histórias com temas filosóficos', user_id: 9, status: 1
    });
}

function fill_text_genre() {

    // Associação text-gênero
    text_genre_instance.create({ text_id: 1, genre_id: 1 }); // O Coração Delator - Mistério
    text_genre_instance.create({ text_id: 1, genre_id: 18 }); // O Coração Delator - Terror
    text_genre_instance.create({ text_id: 2, genre_id: 1 }); // A Loteria - Mistério
    text_genre_instance.create({ text_id: 2, genre_id: 18 }); // A Loteria - Terror
    text_genre_instance.create({ text_id: 3, genre_id: 2 }); // A Casa de Asterion - Fantasia
    text_genre_instance.create({ text_id: 3, genre_id: 15 }); // A Casa de Asterion - Policial
    text_genre_instance.create({ text_id: 4, genre_id: 1 }); // O Gato Preto - Mistério
    text_genre_instance.create({ text_id: 4, genre_id: 18 }); // O Gato Preto - Terror
    text_genre_instance.create({ text_id: 5, genre_id: 12 }); // O Chamado de Cthulhu - Ficção Científica
    text_genre_instance.create({ text_id: 5, genre_id: 17 }); // O Chamado de Cthulhu - Terror
    text_genre_instance.create({ text_id: 6, genre_id: 14 }); // A Curva na Estrada - Drama
    text_genre_instance.create({ text_id: 6, genre_id: 4 }); // A Curva na Estrada - Suspense
    text_genre_instance.create({ text_id: 7, genre_id: 9 }); // O Grande Deus Pã - Terror Gótico
    text_genre_instance.create({ text_id: 7, genre_id: 19 }); // O Grande Deus Pã - Suspense
    text_genre_instance.create({ text_id: 8, genre_id: 1 }); // O Homem da Areia - Mistério
    text_genre_instance.create({ text_id: 8, genre_id: 14 }); // O Homem da Areia - Drama
    text_genre_instance.create({ text_id: 9, genre_id: 20 }); // A Biblioteca de Babel - Fantasia Urbana
    text_genre_instance.create({ text_id: 9, genre_id: 2 }); // A Biblioteca de Babel - Fantasia
    text_genre_instance.create({ text_id: 10, genre_id: 16 }); // A Canção de Rolando - Aventura
    text_genre_instance.create({ text_id: 11, genre_id: 13 }); // A Máscara da Morte Rubra - Terror Gótico
    text_genre_instance.create({ text_id: 11, genre_id: 19 }); // A Máscara da Morte Rubra - Suspense
    text_genre_instance.create({ text_id: 12, genre_id: 12 }); // A Máquina do Tempo - Ficção Científica
    text_genre_instance.create({ text_id: 13, genre_id: 14 }); // O Monte dos Vendavais - Drama
    text_genre_instance.create({ text_id: 13, genre_id: 1 }); // O Monte dos Vendavais - Mistério
}


function fill_text_list() {
    // Associação text-lista
    text_list_instance.create({ text_id: 1, list_id: 2 }); // O Coração Delator - Suspense e Mistério
    text_list_instance.create({ text_id: 1, list_id: 4 }); // O Coração Delator - Favoritos de Edgar Allan Poe
    text_list_instance.create({ text_id: 2, list_id: 2 }); // A Loteria - Suspense e Mistério
    text_list_instance.create({ text_id: 3, list_id: 1 }); // A Casa de Asterion - Clássicos
    text_list_instance.create({ text_id: 3, list_id: 5 }); // A Casa de Asterion - Histórias Curtas
    text_list_instance.create({ text_id: 4, list_id: 2 }); // O Gato Preto - Suspense e Mistério
    text_list_instance.create({ text_id: 5, list_id: 3 }); // O Chamado de Cthulhu - Horror Cósmico
    text_list_instance.create({ text_id: 6, list_id: 5 }); // A Curva na Estrada - Histórias Curtas
    text_list_instance.create({ text_id: 7, list_id: 6 }); // O Grande Deus Pã - Terror Gótico
    text_list_instance.create({ text_id: 8, list_id: 6 }); // O Homem da Areia - Terror Gótico
    text_list_instance.create({ text_id: 9, list_id: 9 }); // A Biblioteca de Babel - Histórias com Temas Filosóficos
    text_list_instance.create({ text_id: 11, list_id: 6 }); // A Máscara da Morte Rubra - Terror Gótico
    text_list_instance.create({ text_id: 12, list_id: 8 }); // A Máquina do Tempo - Ficção Científica e Fantasia
    text_list_instance.create({ text_id: 13, list_id: 7 }); // O Monte dos Vendavais - Clássicos da Literatura Inglesa
}


function fill_text_user() {
    // Associação text-usuário
    text_user_instance.create({ text_id: 1, user_id: 10 }); // O Coração Delator - poe
    text_user_instance.create({ text_id: 2, user_id: 11 }); // A Loteria - shirley
    text_user_instance.create({ text_id: 3, user_id: 12 }); // A Casa de Asterion - borges
    text_user_instance.create({ text_id: 4, user_id: 10 }); // O Gato Preto - poe
    text_user_instance.create({ text_id: 5, user_id: 13 }); // O Chamado de Cthulhu - lovecraft
    text_user_instance.create({ text_id: 6, user_id: 14 }); // A Curva na Estrada - ligya
    text_user_instance.create({ text_id: 7, user_id: 15 }); // O Grande Deus Pã - machen
    text_user_instance.create({ text_id: 8, user_id: 16 }); // A Biblioteca de Babel - hoffmann
    text_user_instance.create({ text_id: 9, user_id: 12 }); // A Canção de Rolando - borges
    text_user_instance.create({ text_id: 10, user_id: 17 }); // A Máquina do Tempo - desconhecido
    text_user_instance.create({ text_id: 11, user_id: 10 }); // A Máscara da Morte Rubra - poe
    text_user_instance.create({ text_id: 12, user_id: 18 }); // A Máquina do Tempo - wells
    text_user_instance.create({ text_id: 13, user_id: 19 }); // O Monte dos Vendavais - bronte
}


// Verifica se o banco de dados está populado, e, caso não esteja, o popula
function verify_population() {
    genre_instance.find_all().then((genres) => {
        if (genres.length == 0) {
            fill_genre();
        }
    });

    text_instance.find_all().then((texts) => {
        if (texts.length == 0) {
            fill_text();
        }
    });

    user_instance.find_all().then((users) => {
        if (users.length == 0) {
            fill_user();
        }
    });

    list_instance.find_all().then((lists) => {
        if (lists.length == 0) {
            fill_list();
        }
    });

    text_genre_instance.find_all().then((text_genres) => {
        if (text_genres.length == 0) {
            fill_text_genre();
        }
    });

    text_list_instance.find_all().then((text_lists) => {
        if (text_lists.length == 0) {
            fill_text_list();
        }
    });

    text_user_instance.find_all().then((text_users) => {
        if (text_users.length == 0) {
            fill_text_user();
        }
    });

    console.log('População verificada: caso necessário, o banco de dados foi populado.');
}

verify_population();
