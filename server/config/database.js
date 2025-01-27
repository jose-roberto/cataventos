const Database = require('better-sqlite3');

const db_connection = new Database('cataventos.db');
console.log('Conectado ao banco de dados SQLite.');

module.exports = db_connection;

const Genre = require('../models/genre');
const genre_instance = new Genre();
genre_instance.create_table();

const Text = require('../models/text');
const text_instance = new Text();
text_instance.create_table();

const User = require('../models/user');
const user_instance = new User();
user_instance.create_table();

const List = require('../models/list');
const list_instance = new List();
list_instance.create_table();

const TextGenre = require('../models/text_genre');
const text_genre_instance = new TextGenre();
text_genre_instance.create_table();

const TextList = require('../models/text_list');
const text_list_instance = new TextList();
text_list_instance.create_table();

const TextUser = require('../models/text_user');
const text_user_instance = new TextUser();
text_user_instance.create_table();

function fill_genre() {
    // Gêneros
    genre_instance.create({ nome: 'Mistério' }); // 1 
    genre_instance.create({ nome: 'Fantasia' }); // 2
    genre_instance.create({ nome: 'Histórico' }); // 3
    genre_instance.create({ nome: 'Realismo Mágico' }); // 4
    genre_instance.create({ nome: 'Distopia' }); // 5
    genre_instance.create({ nome: 'Cyberpunk' }); // 6
    genre_instance.create({ nome: 'Steampunk' }); // 7
    genre_instance.create({ nome: 'Thriller Psicológico' }); // 8
    genre_instance.create({ nome: 'Mitologia' }); // 9
    genre_instance.create({ nome: 'Contos de Fadas' }); // 10
    genre_instance.create({ nome: 'Fantasia Épica' }); // 11
    genre_instance.create({ nome: 'Ficção Científica' }); // 12
    genre_instance.create({ nome: 'Terror Gótico' }); // 13
    genre_instance.create({ nome: 'Drama' }); // 14
    genre_instance.create({ nome: 'Suspense Policial' }); // 15
    genre_instance.create({ nome: 'Aventura' }); // 16
    genre_instance.create({ nome: 'Horror Cósmico' }); // 17
    genre_instance.create({ nome: 'Terror' }); // 18
    genre_instance.create({ nome: 'Suspense' }); // 19
    genre_instance.create({ nome: 'Fantasia Urbana' }); // 20
    genre_instance.create({ nome: 'Verso livre' }); // 21
}


function fill_text() {
    // Contos
    text_instance.create({ // 1
        titulo: 'O Coração Delator',
        tipo: 1,
        texto: 'Edgar Allan Poe\n\nVerdade! - Nervos há, aguçados demais, muito aguçados, que, por muito tempo, para o mal do autor, com o mal da humanidade, não se deixarão deitar em repouso. Ora, o que se pode considerar como "doença" num nervo, é, muitas vezes, apenas a sua sensibilidade normal, o seu estado habitual. E, na verdade, não há loucura no que muitos homens consideram como tal. Pois, a loucura é apenas uma inteligência excessiva. Mas, para que se possa ver a profundidade, é preciso manter-se afastado do abismo.\n\nComo eu disse, o nervo agudo, o nervo aguçado, aguçadíssimo, levou-me àquela ação. E, então, o som daquele coração começou a crescer mais alto, mais alto! Eu dizia a mim mesmo: "É nada além de um visitante que bate à porta da minha porta. É um visitante que bate à porta do meu coração". Eu me esforcei para manter a calma, e, ainda assim, o som crescia mais alto, mais alto! E, então, o som tornou-se mais claro, mais claro! Eu disse: "É o som de um coração, de um coração que bate, de um coração que bate, de um coração que bate".\n\nMas, por que será que o som crescia mais alto',
        sinopse: 'Um homem perturbado tenta convencer o leitor de sua sanidade enquanto descreve como assassinou um idoso por causa de seu olho “vultuoso”.',
        data_publicacao: '29/01/1843',
        like: 0,
        status: 1
    });
    text_instance.create({ // 2
        titulo: 'A Loteria',
        tipo: 1,
        texto: 'Shirley Jackson\n\nO povo da aldeia se reúne para a loteria anual, que é organizada por Mr. Summers, que também conduz a escolha de nomes para a loteria. A família Hutchinson é escolhida, e a escolha de uma pessoa da família é feita. Tessie Hutchinson é escolhida, e ela protesta que a escolha não foi justa. A aldeia então se reúne para apedrejar Tessie até a morte.',
        sinopse: 'Os moradores de uma pequena cidade participam de uma tradição anual que termina com consequências sombrias.',
        data_publicacao: '26/06/1948',
        like: 0,
        status: 1
    });
    text_instance.create({ // 3
        titulo: 'A Casa de Asterion',
        tipo: 1,
        texto: 'Jorge Luis Borges\n\nEra uma manhã de março de 1929. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava. Eu estava deitado no escuro, ouvindo o ruído do mundo. O ruído do mundo era um murmúrio, um murmúrio que se tornava mais alto à medida que a noite avançava.',
        sinopse: 'Um conto narrado pelo Minotauro sobre sua solidão, sua casa labiríntica e seu destino.',
        data_publicacao: '01/01/1947',
        like: 0,
        status: 1
    });
    text_instance.create({ // 4
        titulo: 'O Gato Preto',
        tipo: 1,
        texto: 'Edgar Allan Poe\n\nEu sou louco, eu sei. Mas não sou um tolo. E, no entanto, como posso ser um tolo, se a loucura é apenas uma inteligência excessiva? Mas, para que se possa ver a profundo',
        sinopse: 'Um homem relata a história de como sua crescente violência levou a eventos sobrenaturais e à sua queda.',
        data_publicacao: '19/08/1843',
        like: 0,
        status: 1
    });
    text_instance.create({ // 5
        titulo: 'O Chamado de Cthulhu',
        tipo: 1,
        texto: 'Lovecraft\n\nO conto começa com a morte do professor George Gammell Angell, da Universidade de Brown, em Providence, Rhode Island, encontrado morto em sua cama por',
        sinopse: 'Um conto de horror cósmico sobre uma entidade antiga que habita as profundezas do mar.',
        data_publicacao: '01/02/1928',
        like: 0,
        status: 1
    });
    text_instance.create({ // 6
        titulo: 'A Curva na Estrada',
        tipo: 1,
        texto: 'Ligya Fagundes Telles\n\nA Curva na Estrada é um conto de Ligya Fagundes Telles que narra a história de um homem que, ao dirigir por uma estrada, se depara com uma curva que o leva a um destino inesperado. O conto é uma reflexão sobre a vida e a morte, e sobre como nossas escolhas podem nos levar a caminhos desconhecidos.',
        sinopse: 'Um conto psicológico sobre um homem que encontra uma estranha e sua relação com o destino.',
        data_publicacao: '01/01/1952',
        like: 0,
        status: 1
    });
    text_instance.create({ // 7
        titulo: 'O Grande Deus Pã',
        tipo: 1,
        texto: 'Arthur Machen\n\nO conto começa com a morte do professor George Gammell Angell, da Universidade de Brown, em Providence, Rhode Island, encontrado morto em sua cama por',
        sinopse: 'Uma experiência sobrenatural revela a presença de forças antigas e misteriosas na natureza.',
        data_publicacao: '01/01/1894',
        like: 0,
        status: 1
    });
    text_instance.create({ // 8
        titulo: 'O Homem da Areia',
        tipo: 1,
        texto: 'E.T.A. Hoffmann\n\nO conto começa com a morte do professor George Gammell Angell, da Universidade de Brown, em Providence, Rhode Island, encontrado morto em sua cama por',
        sinopse: 'Um conto de horror psicológico sobre um homem assombrado por uma figura misteriosa de sua infância.',
        data_publicacao: '01/01/1817',
        like: 0,
        status: 1
    });
    text_instance.create({ // 9
        titulo: 'A Biblioteca de Babel',
        tipo: 1,
        texto: 'Jorge Luis Borges\n\nA Biblioteca de Babel é um conto de Jorge Luis Borges que narra a história de uma biblioteca infinita que contém todos os livros possíveis. A biblioteca é habitada por uma sociedade de bibliotecários que passam suas vidas explorando os corredores intermináveis da biblioteca em busca de conhecimento. O conto é uma reflexão sobre a natureza do conhecimento e do caos, e sobre a busca humana pela verdade e pela ordem.',
        sinopse: 'Uma vasta biblioteca contém todos os livros possíveis, explorando os limites do conhecimento e do caos.',
        data_publicacao: '01/01/1941',
        like: 0,
        status: 1
    });
    text_instance.create({ // 10
        titulo: 'A Canção de Rolando',
        tipo: 1,
        texto: 'Desconhecido\n\nA Canção de Rolando é um poema épico medieval que narra a história de Rolando, um cavaleiro francês que luta na Batalha de Roncesvales. O poema é uma das mais antigas obras da literatura francesa e é considerado um dos grandes clássicos da literatura medieval. A Canção de Rolando é uma história de lealdade, coragem e honra, e é um dos mais importantes poemas épicos da Idade Média.',
        sinopse: 'Um poema épico medieval sobre a lealdade e a coragem durante uma batalha lendária.',
        data_publicacao: '01/01/1098',
        like: 0,
        status: 1
    });
    text_instance.create({ // 11
        titulo: 'A Máscara da Morte Rubra',
        tipo: 1,
        texto: 'Edgar Allan Poe\n\nA Máscara da Morte Rubra é um conto de Edgar Allan Poe que narra a história de um príncipe que se refugia em seu castelo para escapar de uma terrível praga que assola o reino. O príncipe dá um baile de máscaras para seus amigos, mas a festa é interrompida por um visitante inesperado. O conto é uma reflexão sobre a morte e a mortalidade, e sobre como a morte é inevitável para todos os seres humanos.',
        sinopse: 'Uma história alegórica sobre a inevitabilidade da morte, ambientada durante uma praga mortal.',
        data_publicacao: '01/01/1842',
        like: 0,
        status: 1
    });
    text_instance.create({ // 12
        titulo: 'A Máquina do Tempo',
        tipo: 1,
        texto: 'H.G. Wells\n\nA Máquina do Tempo é um romance de ficção científica de H.G. Wells que narra a história de um cientista que inventa uma máquina do tempo e viaja para o futuro distante. O cientista explora os futuros distantes da humanidade e descobre o destino final da raça humana. O romance é uma reflexão sobre o tempo, o espaço e o destino, e sobre como o futuro pode ser moldado pelas escolhas que fazemos no presente.',
        sinopse: 'Um cientista viaja no tempo e explora os futuros distantes da humanidade e seu destino final.',
        data_publicacao: '01/01/1895',
        like: 0,
        status: 1
    });
    text_instance.create({ // 13
        titulo: 'O Monte dos Vendavais',
        tipo: 1,
        texto: 'Emily Brontë\n\nO Monte dos Vendavais é um romance de Emily Brontë que narra a história de Heathcliff, um jovem órfão que é adotado por uma família rica e se apaixona por sua irmã adotiva, Catherine. O romance é uma história de amor e vingança, e é considerado um dos grandes clássicos da literatura inglesa. O Monte dos Vendavais é uma história trágica de paixão, vingança e obsessão em um ambiente selvagem e isolado.',
        sinopse: 'Uma história trágica de paixão, vingança e obsessão em um ambiente selvagem e isolado.',
        data_publicacao: '01/01/1847',
        like: 0,
        status: 1
    });
}


function fill_user() {
    // Usuários
    user_instance.create({  // 1
        nome: 'Admin', nome_usuario: 'admin', email: 'admin@gmail.com', senha: '1234', data_nasc: '01/01/1990', tipo: 0
    });
    user_instance.create({ // 2
        nome: 'José', nome_usuario: 'zé', email: 'ze@gmail.com', senha: '1234', data_nasc: '01/01/1990', tipo: 0
    });
    user_instance.create({ // 3
        nome: 'Thiago', nome_usuario: 'thi', email: 'thi@gmail.com', senha: '1234', data_nasc: '01/01/1990', tipo: 0
    });
    user_instance.create({ // 4
        nome: 'Ana', nome_usuario: 'aninha', email: 'ana@gmail.com', senha: '1234', data_nasc: '01/01/1990', tipo: 1
    });
    user_instance.create({ // 5
        nome: 'Carlos', nome_usuario: 'carlinhos', email: 'carlos@gmail.com', senha: '1234', data_nasc: '01/01/1991', tipo: 1
    });
    user_instance.create({ // 6
        nome: 'Sofia', nome_usuario: 'sofi', email: 'sofia@gmail.com', senha: '1234', data_nasc: '01/01/1992', tipo: 1
    });
    user_instance.create({ // 7
        nome: 'Beatriz', nome_usuario: 'bea', email: 'beatriz@gmail.com', senha: '1234', data_nasc: '01/01/1993', tipo: 1
    });
    user_instance.create({ // 8
        nome: 'Luiz', nome_usuario: 'luizinho', email: 'luiz@gmail.com', senha: '1234', data_nasc: '01/01/1994', tipo: 1
    });
    user_instance.create({ // 9
        nome: 'Mariana', nome_usuario: 'mari', email: 'mariana@gmail.com', senha: '1234', data_nasc: '01/01/1995', tipo: 1
    });
    user_instance.create({ // 10
        nome: 'Edgar Allan Poe', nome_usuario: 'poe', email: 'poe@gmail.com', senha: '1234', data_nasc: '19/01/1809', tipo: 1
    });
    user_instance.create({ // 11
        nome: 'Shirley Jackson', nome_usuario: 'shirley', email: 'shirley@gmail.com', senha: '1234', data_nasc: '14/12/1916', tipo: 1
    });
    user_instance.create({ // 12
        nome: 'Jorge Luis Borges', nome_usuario: 'borges', email: 'borges@gmail.com', senha: '1234', data_nasc: '24/08/1899', tipo: 1
    });
    user_instance.create({ // 13
        nome: 'H.P. Lovecraft', nome_usuario: 'lovecraft', email: 'lovecraft@gmail.com', senha: '1234', data_nasc: '20/08/1890', tipo: 1
    });
    user_instance.create({ // 14
        nome: 'Lygia Fagundes Telles', nome_usuario: 'lygia', email: 'lygia@gmail.com', senha: '1234', data_nasc: '19/04/1923', tipo: 1
    });
    user_instance.create({ // 15
        nome: 'Arthur Machen', nome_usuario: 'machen', email: 'machen@gmail.com', senha: '1234', data_nasc: '03/03/1863', tipo: 1
    });
    user_instance.create({ // 16
        nome: 'E.T.A. Hoffmann', nome_usuario: 'hoffmann', email: 'hoffmann@gmail.com', senha: '1234', data_nasc: '24/01/1776', tipo: 1
    });
    user_instance.create({ // 17
        nome: 'Autor Desconhecido', nome_usuario: 'desconhecido', email: 'desconhecido@gmail.com', senha: '1234', data_nasc: '01/01/0001', tipo: 1
    });
    user_instance.create({ // 18
        nome: 'H.G. Wells', nome_usuario: 'wells', email: 'wells@gmail.com', senha: '1234', data_nasc: '21/09/1866', tipo: 1
    });
    user_instance.create({ // 19
        nome: 'Charlotte Brontë', nome_usuario: 'bronte', email: 'bronte@gmail.com', senha: '1234', data_nasc: '21/04/1816', tipo: 1
    });
}


function fill_list() {
    // Listas
    list_instance.create({ // 1
        nome: 'Clássicos', user_id: 1, privacidade: 0, descricao: 'Lista de clássicos da literatura'
    });
    list_instance.create({ // 2
        nome: 'Suspense e Mistério', user_id: 2, privacidade: 0, descricao: 'Lista de livros de suspense e mistério'
    });
    list_instance.create({ // 3
        nome: 'Horror Cósmico', user_id: 3, privacidade: 0, descricao: 'Lista de livros de horror cósmico'
    });
    list_instance.create({ // 4
        nome: 'Favoritos de Edgar Allan Poe', user_id: 4, privacidade: 0, descricao: 'Lista de favoritos de Edgar Allan Poe'
    });
    list_instance.create({ // 5
        nome: 'Histórias Curtas', user_id: 5, privacidade: 0, descricao: 'Lista de histórias curtas'
    });
    list_instance.create({ // 6
        nome: 'Terror Gótico', user_id: 6, privacidade: 0, descricao: 'Lista de livros de terror gótico'
    });
    list_instance.create({ // 7
        nome: 'Clássicos da Literatura Inglesa', user_id: 7, privacidade: 0, descricao: 'Lista de clássicos da literatura inglesa'
    });
    list_instance.create({ // 8
        nome: 'Ficção Científica e Fantasia', user_id: 8, privacidade: 0, descricao: 'Lista de livros de ficção científica e fantasia'
    });
    list_instance.create({ // 9
        nome: 'Histórias com Temas Filosóficos', user_id: 9, privacidade: 0, descricao: 'Lista de histórias com temas filosóficos'
    });
}

function fill_text_genre() {

    // Associação texto-gênero
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
    // Associação texto-lista
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
    // Associação texto-usuário
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
