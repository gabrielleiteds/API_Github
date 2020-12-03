const User = require('../models/User');

module.exports = {
  async create(req, res) {
    const { name, email, password, biography, avatar_url, username, latitude, longitude } = req.body;

    const userExists = await User.findOne({
      where: {
        email
      }
    })

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
      biography,
      username,
      avatar_url,
      latitude,
      longitude
    });

    user.password = undefined;

    return res.status(201).json(user)
  },
  async show(req, res) {
    const findUsers = await User.findAll({include: ['repositories']})

    return res.status(200).json(findUsers)
  },
  async update(req, res) {
    const values = req.body;

    const user_id = req.params;

    const user = await User.findOne({
      where: {
        id: user_id
      }
    })

    const update = await user.update(values)

    return res.json(update)
  },
  async delete(req, res) {
    const user_id = req.params;

    const user = await User.destroy({
      where: {
        id: user_id
      }
    })

    return res.json("Deleted")
  }
}