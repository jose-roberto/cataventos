# Tarefas e anotações

## Estrutura geral (front-end e back-end)
- [X] Modal de confirmação genérico
- [ ] Opções de excluir e editar somente para usuário criador (controle de sessão)

### Sugestão de correção de implementação de CRUD's
Caso a ação resulte em um redirecionamento direto o ideal é utilizar um formulário básico
que se comunica diretamente com o banco.

Já em casos onde seja interessante que o resultado da ação impacte o front-end dinamicamente, é mais interessante utilizar o Javascript como mediador.

#### Verificar em:
- [ ] CRUD do usuário
- [ ] CRUD do texto
- [ ] CRUD da lista

### Responsividade
- [ ] search.ejs
- [X] text.ejs
- [X] my_lists.ejs
- [x] list.ejs
- [X] confirmation_modal.ejs
- [X] homepage.ejs
- [X] index.ejs
- [X] login.ejs
- [x] my_tales.ejs
- [X] navbar.ejs
- [X] profile.ejs
- [X] register.ejs

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
- [ ] Erros de login e cadastro

#### Baixa prioridade
- [ ] Adicionar seleção de gêneros de interesse

### Homepage
- [X] Timeline de textos produzidos
- [X] Opções de like
- [X] Data de publicação
- [X] Paginação
- [ ] Realizar filtragens
- [ ] Visualizar perfil de outros usuários

#### Baixa prioridade
- [ ] Coluna de sugestões

### Página de perfil
- [X] Visualizar dados pessoais (Read)
- [X] Alterar dados pessoais (Update)
- [X] Excluir conta (Delete)
- [ ] Contos e listas do usuário

#### Baixa prioridade
- [ ] Análise de atividades

### Página de textos do usuário
- [X] Criar textos via modal com ferramentas de edição (Create)
- [X] Visualizar textos produzidos (Read)
- [X] Alterar textos produzidos (Update)
- [X] Excluir textos produzidos (Delete)
- [X] Consertar botões de tipo
- [X] Criar opção de convidar para colaboração
- [ ] Adicionar texto na lista
- [ ] Validação de colaboração
- [ ] Controle de acesso para alterações
- [ ] Adicionar data

#### Baixa prioridade
- [ ] Corrigir like
- [ ] Criar opção de indicar leitura
- [ ] Contador de caracteres
- [ ] Acoplar editor de texto -> Sugestão: CKEditor

### Página de listas do usuário
- [X] Criar listas via modal (Create)
- [X] Visualizar listas (Read)
- [X] Alterar listas (Update)
- [X] Excluir listas (Delete)
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
