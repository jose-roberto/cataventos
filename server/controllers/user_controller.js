const User = require('../models/User');

const login = async (req, res) => {
  const { username, password } = req.body;

  const user_instance = new User();

  try {
    const authentication_result = await user_instance.authentication(username, password);

    if (authentication_result != null) {
      req.session.user_id = authentication_result;

      console.log('\nSession após login:', req.session.user_id + '\n');

      res.redirect('/homepage');
    } else {
      res.send('Usuário ou senha incorretos');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
};

const logout = async (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
}

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
    const hashedPassword = await user_instance.crypt_password(password);

    // Criar novo usuário
    const result = await user_instance.create({
      name: name,
      username: username,
      email: email,
      password: hashedPassword,
      birthdate: birthdate,
    });

    // Retornar resposta de sucesso
    res.redirect('/login');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
};

const read_user = async (req, res) => {
  try {
    const user_id = req.session.user_id;

    if (!user_id) {
      return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    // Criar uma instância de User
    const user_instance = new User();

    // Ler usuário
    const user = await user_instance.find_by_id(user_id);

    // Retornar resposta
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao ler usuário.' });
  }
}

const update_user = async (req, res) => {
  try {
    const user_id = req.session.user_id;

    if (!user_id) {
      return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    const { name, username, email, birthdate } = req.body;

    // console.log(req.body);

    // Validação de entrada
    if (!name || !username || !email || !birthdate) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    // Criar uma instância de User
    const user_instance = new User();

    // Atualizar usuário
    const result = await user_instance.update(user_id, {
      name: name,
      username: username,
      email: email,
      birthdate: birthdate
    });

    // Retornar resposta de sucesso
    // res.status(200).json({ message: 'Usuário atualizado com sucesso!', result: result });
    res.redirect(`/user/${req.session.user_id}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar usuário.' });
  }
}

const delete_user = async (req, res) => {
  try {
    const user_id = req.session.user_id;

    if (!user_id) {
      return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    const user_instance = new User();

    const result = await user_instance.delete(user_id);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar usuário.' });
  }
}

const get_user = async (req, res) => {
  try {
    const user_id = req.params.id;
    const user_session = req.session.user_id;

    const user_instance = new User()

    const user = user_instance.find_by_id(user_id)

    if (!user) {
      return res.status(404).send('Usuário não encontrado');
    }

    res.render('profile', {
      user,
      is_owner: user_session === Number(user_id),
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao carregar perfil.' });
  }
}

module.exports = {
  login,
  logout,
  create_user,
  read_user,
  update_user,
  delete_user,
  get_user
};