const User = require('../models/user');

const create_user = async (req, res) => {
  try {
    const { name, username, email, password, birthdate } = req.body;
    console.log({ name, username });

    // Validação de entrada
    if (!name || !username || !email || !password || !birthdate) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    // Criar uma instância de User
    const user = new User();

    // Criar novo usuário
    const result = await user.create({
      nome: name,
      nome_usuario: username,
      email: email,
      senha: password,
      data_nasc: birthdate,
      tipo: 1 // Assumindo que 'tipo' é um tipo de usuário, definindo um valor padrão
    });

    // Retornar resposta de sucesso
    res.status(201).json({ message: 'Usuário criado com sucesso!', userId: result.lastInsertRowid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
};

module.exports = {
  create_user,
};