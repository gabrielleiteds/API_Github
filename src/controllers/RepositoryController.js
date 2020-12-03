const Repository = require('../models/Repository');
const User = require('../models/User')

const concatenateUser = require('../utils/concatenateUser');

module.exports = {
  async create(req, res) {
    const user_id = req.userId;
    const { name, description, public } = req.body;

    const findUser = await User.findByPk(user_id)

    const slug = concatenateUser(findUser.name, name)

    const repository = await Repository.create({
      name,
      description,
      public,
      slug,
      user_id
    })

    return res.status(201).json(repository)
  },
  async show(req, res) {
    const user_id = req.userId

    const findRepositories = await Repository.findAll({
      where: {
        user_id
      },
      include: ['stars', 'users'],
      attributes: ['name', 'slug', 'description']
    })

    return res.json(findRepositories)
  },
  async update(req, res) {
    const values = req.body;

    const repository_id = req.params;

    const repository = await Repository.findOne({
      where: {
        id: repository_id
      }
    })

    const update = await repository.update(values)

    return res.json(update)
  },
  async delete(req, res) {
    const repository_id = req.params;

    const repository = await Repository.destroy({
      where: {
        id: repository_id
      }
    })

    return res.json({ message: "Deleted" })
  }
}
