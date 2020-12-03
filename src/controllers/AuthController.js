const User= require('../models/User');
const Token = require('../models/Token');

const generateToken = require('../utils/generateToken');


module.exports = {
  async authenticate(req, res) {
    const { email, password } = req.body;

    try {
      const findedUser = await User.findOne({
        where: { email }
      });

      if (!findedUser)
        return res.status(400).json({ error: 'User not found' });

      if (!(await findedUser.comparePassword(password)))
        return res.status(401).json({ error: 'Invalid password' });

      findedUser.password = undefined;
      const token = generateToken({ id: findedUser.id })

      const TokenId = await Token.create({
        id_token: findedUser.id
      })

      return res.status(200).cookie('authorization', token).json({ token: token });
    } catch (err) {
      return res.status(500).json();
    }
  },

  logoutUser(req, res) {
    res.clearCookie('auth')
    res.clearCookie('user')
  },
}