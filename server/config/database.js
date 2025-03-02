const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');

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
    date = new Date().toISOString();
    
    // Contos
    text_instance.create({ // 1
        title: 'O Coração Delator',
        text: 'Edgar Allan Poe\n\nVerdade! - Nervos há, aguçados demais, muito aguçados, que, por muito tempo, para o mal do autor, com o mal da humanidade, não se deixarão deitar em repouso. Ora, o que se pode considerar como "doença" num nervo, é, muitas vezes, apenas a sua sensibilidade normal, o seu estado habitual. E, na verdade, não há loucura no que muitos homens consideram como tal. Pois, a loucura é apenas uma inteligência excessiva. Mas, para que se possa ver a profundidade, é preciso manter-se afastado do abismo.\n\nComo eu disse, o nervo agudo, o nervo aguçado, aguçadíssimo, levou-me àquela ação. E, então, o som daquele coração começou a crescer mais alto, mais alto! Eu dizia a mim mesmo: "É nada além de um visitante que bate à porta da minha porta. É um visitante que bate à porta do meu coração". Eu me esforcei para manter a calma, e, ainda assim, o som crescia mais alto, mais alto! E, então, o som tornou-se mais claro, mais claro! Eu disse: "É o som de um coração, de um coração que bate, de um coração que bate, de um coração que bate".\n\nMas, por que será que o som crescia mais alto',
        publication_date: date,
        type: 1,
        genre_id: 10,
        like: 0,
        created_by: 10,
    });
    text_instance.create({ // 2
        title: 'A Loteria',
        text: 'Shirley Jackson\n\nO povo da aldeia se reúne para a loteria anual, que é organizada por Mr. Summers, que também conduz a escolha de nomes para a loteria. A família Hutchinson é escolhida, e a escolha de uma pessoa da família é feita. Tessie Hutchinson é escolhida, e ela protesta que a escolha não foi justa. A aldeia então se reúne para apedrejar Tessie até a morte.',
        publication_date: date,
        type: 1,
        genre_id: 2,
        like: 0,
        created_by: 11
    });
    text_instance.create({ // 3
        title: 'A Casa de Asterion',
        text: 'Jorge Luis Borges\n\nEra uma manhã de março de 1929. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava.',
        publication_date: date,
        type: 1,
        genre_id: 5,
        like: 0,
        created_by: 12
    });
    text_instance.create({ // 4
        title: 'O Gato Preto',
        text: 'Edgar Allan Poe\n\nEu sou louco, eu sei. Mas não sou um tolo. E, no entanto, como posso ser um tolo, se a loucura é apenas uma inteligência excessiva? Mas, para que se possa ver a profundo',
        publication_date: date,
        type: 1,
        genre_id: 9,
        like: 0,
        created_by: 10
    });
    text_instance.create({ // 5
        title: 'O Chamado de Cthulhu',
        text: 'Lovecraft\n\nO conto começa com a morte do professor George Gammell Angell, da Universidade de Brown, em Providence, Rhode Island, encontrado morto em sua cama por',
        publication_date: date,
        type: 1,
        genre_id: 15,
        like: 0,
        created_by: 13
    });
    text_instance.create({ // 6
        title: 'A Curva na Estrada',
        text: 'Ligya Fagundes Telles\n\nA Curva na Estrada é um conto de Ligya Fagundes Telles que narra a história de um homem que, ao dirigir por uma estrada, se depara com uma curva que o leva a um destino inesperado. O conto é uma reflexão sobre a vida e a morte, e sobre como nossas escolhas podem nos levar a caminhos desconhecidos.',
        publication_date: date,
        type: 1,
        genre_id: 1,
        like: 0,
        created_by: 14
    });
    text_instance.create({ // 7
        title: 'O Grande Deus Pã',
        text: 'Arthur Machen\n\nO conto começa com a morte do professor George Gammell Angell, da Universidade de Brown, em Providence, Rhode Island, encontrado morto em sua cama por',
        publication_date: date,
        type: 1,
        genre_id: 1,
        like: 0,
        created_by: 15
    });
    text_instance.create({ // 8
        title: 'O Homem da Areia',
        text: 'E.T.A. Hoffmann\n\nO conto começa com a morte do professor George Gammell Angell, da Universidade de Brown, em Providence, Rhode Island, encontrado morto em sua cama por',
        publication_date: date,
        type: 1,
        genre_id: 4,
        like: 0,
        created_by: 16
    });
    text_instance.create({ // 9
        title: 'A Biblioteca de Babel',
        text: 'Jorge Luis Borges\n\nA Biblioteca de Babel é um conto de Jorge Luis Borges que narra a história de uma biblioteca infinita que contém todos os livros possíveis. A biblioteca é habitada por uma sociedade de bibliotecários que passam suas vidas explorando os corredores intermináveis da biblioteca em busca de conhecimento. O conto é uma reflexão sobre a natureza do conhecimento e do caos, e sobre a busca humana pela verdade e pela ordem.',
        publication_date: date,
        type: 1,
        genre_id: 7,
        like: 0,
        created_by: 12
    });
    text_instance.create({ // 10
        title: 'A Canção de Rolando',
        text: 'Desconhecido\n\nA Canção de Rolando é um poema épico medieval que narra a história de Rolando, um cavaleiro francês que luta na Batalha de Roncesvales. O poema é uma das mais antigas obras da literatura francesa e é considerado um dos grandes clássicos da literatura medieval. A Canção de Rolando é uma história de lealdade, coragem e honra, e é um dos mais importantes poemas épicos da Idade Média.',
        publication_date: date,
        type: 1,
        genre_id: 11,
        like: 0,
        created_by: 2
    });
    text_instance.create({ // 11
        title: 'A Máscara da Morte Rubra',
        text: 'Edgar Allan Poe\n\nA Máscara da Morte Rubra é um conto de Edgar Allan Poe que narra a história de um príncipe que se refugia em seu castelo para escapar de uma terrível praga que assola o reino. O príncipe dá um baile de máscaras para seus amigos, mas a festa é interrompida por um visitante inesperado. O conto é uma reflexão sobre a morte e a mortalidade, e sobre como a morte é inevitável para todos os seres humanos.',
        publication_date: date,
        type: 1,
        genre_id: 12,
        like: 0,
        created_by: 10
    });
    text_instance.create({ // 12
        title: 'A Máquina do Tempo',
        text: 'H.G. Wells\n\nA Máquina do Tempo é um romance de ficção científica de H.G. Wells que narra a história de um cientista que inventa uma máquina do tempo e viaja para o futuro distante. O cientista explora os futuros distantes da humanidade e descobre o destino final da raça humana. O romance é uma reflexão sobre o tempo, o espaço e o destino, e sobre como o futuro pode ser moldado pelas escolhas que fazemos no presente.',
        publication_date: date,
        type: 1,
        genre_id: 13,
        like: 0,
        created_by: 18
    });
    text_instance.create({ // 13
        title: 'O Monte dos Vendavais',
        text: 'Emily Brontë\n\nO Monte dos Vendavais é um romance de Emily Brontë que narra a história de Heathcliff, um jovem órfão que é adotado por uma família rica e se apaixona por sua irmã adotiva, Catherine. O romance é uma história de amor e vingança, e é considerado um dos grandes clássicos da literatura inglesa. O Monte dos Vendavais é uma história trágica de paixão, vingança e obsessão em um ambiente selvagem e isolado.',
        publication_date: date,
        type: 1,
        genre_id: 3,
        like: 0,
        created_by: 19
    });
}


function fill_user() {
    const hashedPassword = bcrypt.hashSync('1', 10);

    // Usuários
    user_instance.create({  // 1
        name: 'Admin', username: 'admin', email: 'admin@gmail.com', password: hashedPassword, birthdate: '1990-01-01'
    });
    user_instance.create({ // 2
        name: 'José', username: 'zé', email: 'ze@gmail.com', password: hashedPassword, birthdate: '1990-01-01'
    });
    user_instance.create({ // 3
        name: 'Thiago', username: 'thi', email: 'thi@gmail.com', password: hashedPassword, birthdate: '1990-01-01'
    });
    user_instance.create({ // 4
        name: 'Ana', username: 'aninha', email: 'ana@gmail.com', password: hashedPassword, birthdate: '1990-01-01'
    });
    user_instance.create({ // 5
        name: 'Carlos', username: 'carlinhos', email: 'carlos@gmail.com', password: hashedPassword, birthdate: '1991-01-01'
    });
    user_instance.create({ // 6
        name: 'Sofia', username: 'sofi', email: 'sofia@gmail.com', password: hashedPassword, birthdate: '1992-01-01'
    });
    user_instance.create({ // 7
        name: 'Beatriz', username: 'bea', email: 'beatriz@gmail.com', password: hashedPassword, birthdate: '1993-01-01'
    });
    user_instance.create({ // 8
        name: 'Luiz', username: 'luizinho', email: 'luiz@gmail.com', password: hashedPassword, birthdate: '1994-01-01'
    });
    user_instance.create({ // 9
        name: 'Mariana', username: 'mari', email: 'mariana@gmail.com', password: hashedPassword, birthdate: '1995-01-01'
    });
    user_instance.create({ // 10
        name: 'Edgar Allan Poe', username: 'poe', email: 'poe@gmail.com', password: hashedPassword, birthdate: '1809-01-19'
    });
    user_instance.create({ // 11
        name: 'Shirley Jackson', username: 'shirley', email: 'shirley@gmail.com', password: hashedPassword, birthdate: '1916-12-14'
    });
    user_instance.create({ // 12
        name: 'Jorge Luis Borges', username: 'borges', email: 'borges@gmail.com', password: hashedPassword, birthdate: '1899-08-24'
    });
    user_instance.create({ // 13
        name: 'H.P. Lovecraft', username: 'lovecraft', email: 'lovecraft@gmail.com', password: hashedPassword, birthdate: '1890-08-20'
    });
    user_instance.create({ // 14
        name: 'Lygia Fagundes Telles', username: 'lygia', email: 'lygia@gmail.com', password: hashedPassword, birthdate: '1923-04-19'
    });
    user_instance.create({ // 15
        name: 'Arthur Machen', username: 'machen', email: 'machen@gmail.com', password: hashedPassword, birthdate: '1863-03-03'
    });
    user_instance.create({ // 16
        name: 'E.T.A. Hoffmann', username: 'hoffmann', email: 'hoffmann@gmail.com', password: hashedPassword, birthdate: '1776-01-24'
    });
    user_instance.create({ // 17
        name: 'Autor Desconhecido', username: 'desconhecido', email: 'desconhecido@gmail.com', password: hashedPassword, birthdate: '2001-01-01'
    });
    user_instance.create({ // 18
        name: 'H.G. Wells', username: 'wells', email: 'wells@gmail.com', password: hashedPassword, birthdate: '1866-09-21'
    });
    user_instance.create({ // 19
        name: 'Charlotte Brontë', username: 'bronte', email: 'bronte@gmail.com', password: hashedPassword, birthdate: '1816-04-21'
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

    user_instance.find_all().then((users) => {
        if (users.length == 0) {
            fill_user();
        }
    });

    text_instance.find_all().then((texts) => {
        if (texts.length == 0) {
            fill_text();
        }
    });

    list_instance.find_all().then((lists) => {
        if (lists.length == 0) {
            fill_list();
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

    console.log('População verificada: caso necessário, o banco de dados será populado.');
}

verify_population();
