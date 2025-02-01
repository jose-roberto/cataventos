# Tarefas e anotações

## Estrutura geral (front-end e back-end)

### Navbar

- [X] Criar navbar
- [X] Tornar navbar dinâmica
- [X] Tirar repetição do código da navbar dos arquivos

#### Itens do Toggler da navbar

Implementar respectivos redirecionamentos para:

- [X] Página de perfil
- [X] Página de textos do usuário
- [X] Página de lista de textos
- [X] Botão de logout
- [X] Homepage na logo

### Página Index
- [X] Redirecionamento para cadastro e login

### Autenticação de usuário
- [X] Cadastro de usuário (Create)
- [X] Login
- [X] Logout
- [X] Validação do login
- [X] Controle de acesso
- [ ] Adicionar seleção de gêneros de interesse

### Homepage
- [X] Timeline de textos produzidos
- [ ] Coluna de sugestões
- [ ] Opções de like
- [ ] Realizar filtragens

### Página de perfil
- [X] Visualizar dados pessoais (Read)
- [X] Alterar dados pessoais (Update)
- [ ] Excluir conta (Delete)
- [ ] Análise de atividades

### Página de textos do usuário
- [ ] Criar textos via modal com ferramentas de edição (Create)
- [ ] Visualizar textos produzidos (Read)
- [ ] Alterar textos produzidos (Update)
- [ ] Excluir textos produzidos (Delete)
- [ ] Acoplar editor de texto -> Sugestão: CKEditor
- [ ] Contador de caracteres
- [X] Consertar botões de tipo
- [ ] Criar opção de convidar para colaboração
- [ ] Criar opção de indicar leitura

### Página de listas do usuário
- [ ] Criar listas via modal (Create)
- [ ] Visualizar listas (Read)
- [ ] Alterar listas (Update)
- [ ] Excluir listas (Delete)
- [X] Consertar botões de tipo

## Banco de dados

### Rascunho de Modelagem

Rascunho de uma modelagem considerando banco de dados e aspectos gerais da funcionalidade.

#### Usuário
- Id
- Nickname
- Email
- Senha
- Nome
- Idade
- Localização
- Tipo (comum ou administrador)

#### Texto
- Id
- Tipo (conto ou poema)
- Título
- Corpo do texto
- Gêneros
- Classificação indicativa

#### Lista
- Id
- Título
- Capa
- Privacidade
- Textos

#### Gênero
- Id
- Nome do gênero

### Estruturação do banco de dados
- [X] Definir ferramenta -> Escolhemos: SQLite
- [X] Criar o banco de dados
- [X] Popular o banco de dados
