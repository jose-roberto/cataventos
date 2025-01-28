const User = require('../models/User');

const create_user = async (req, res) => {
  try {
    const { name, username, email, password, birthdate } = req.body;
    // console.log(req.body);

    // Validação de entrada
    if (!name || !username || !email || !password || !birthdate) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    // Criar uma instância de User
    const user_instance = new User();

    // Criar novo usuário
    const result = await user_instance.create({
      name: name,
      username: username,
      email: email,
      password: password,
      birthdate: birthdate,
      type: 1
    });

    // Retornar resposta de sucesso
    res.status(201).json({ message: 'Usuário criado com sucesso!', user_id: result.lastInsertRowid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
};

module.exports = {
  create_user
};