# Cataventos

Repositório para o Trabalho Final da disciplina INF321 - Projeto e Desenvolvimento de Sistemas para a Web.

## Alunos:
- José Roberto Martins Costa Júnior - 105480
- Thiago Zimerer Duarte - 108206

## Proposta do sistema 

A nossa equipe vai projetar um sistema para escrita e compartilhamento de produções textuais. O nome do sistema será Cataventos.

O sistema terá como funcionalidade básica a escrita e publicação de textos, contos e poemas. Ele permitirá que o usuário crie uma publicação e redija seu texto, com limite de caracteres de até 1000 palavras, tendo a opção de especificar o gênero textual  e adicionar um breve resumo. O sistema também deverá permitir que um usuário convide outros usuários para colaborarem em um determinado texto, alternando na sua escrita.

Os usuários deverão ter a possibilidade de avaliar os textos como “Gostei” e “Não gostei” e realizar buscas baseadas no gênero textual, título da obra e nomes de usuários. Além disso, serão oferecidas funcionalidades de criação de listas e rankings de leituras, devendo oferecer também a funcionalidade de indicação de leituras para usuários que sejam amigos.

Para a leitura e publicação de textos o usuário necessita de um cadastro no sistema. Para o cadastro, o usuário deve informar o nome completo, nome de usuário, sexo, e-mail, data de nascimento e uma senha para acesso. No primeiro acesso o usuário deverá selecionar os gêneros que mais o interessam para permitir indicações do sistema.

Para a manutenção do sistema, haverá um usuário administrativo, que será capaz de permitir ou negar a publicação de textos, adicionar classificações indicativas e banir usuários.

Em termos de interface com o usuário, será criado uma espécie de timeline com os contos publicados recentemente que se relacionem com o perfil do usuário. Ao selecionar uma determinada leitura, o usuário deve ser redirecionado para um página contendo o título, o autor, a data de publicação, os gêneros textuais e o texto referente. No quesito de publicação, haverá um botão constante na tela que direciona para uma página onde os campos citados devem ser preenchidos adequadamente, sendo possível fazer a solicitação de publicação após isso. Caso o usuário não termine a escrita do texto e saia da página, esse deverá ser salvo como rascunho e ser restaurado quando o usuário retornar. 

Para implementar o rascunho de texto, será feito uso de cookies, avisando ao usuário que o mesmo deve habilitá-lo, para que o sistema funcione corretamente.
