# Tarefas e anotações

## Estrutura geral (front-end e back-end)
- [X] Modal de confirmação genérico

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

- [ ] Adicionar seleção de gêneros de interesse

### Homepage
- [X] Timeline de textos produzidos
- [X] Opções de like
- [ ] Realizar filtragens
- [ ] Data de publicação
- [ ] Visualizar perfil de outros usuários

- [ ] Coluna de sugestões

### Página de perfil
- [X] Visualizar dados pessoais (Read)
- [X] Alterar dados pessoais (Update)
- [X] Excluir conta (Delete)
- [ ] Contos e listas do usuário

- [ ] Análise de atividades

### Página de textos do usuário
- [X] Criar textos via modal com ferramentas de edição (Create)
- [X] Visualizar textos produzidos (Read)
- [X] Alterar textos produzidos (Update)
- [X] Excluir textos produzidos (Delete)
- [X] Consertar botões de tipo
- [ ] Paginação
- [ ] Criar opção de convidar para colaboração

- [ ] Criar opção de indicar leitura
- [ ] Acoplar editor de texto -> Sugestão: CKEditor
- [ ] Contador de caracteres

### Página de listas do usuário
- [X] Criar listas via modal (Create)
- [X] Visualizar listas (Read)
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
