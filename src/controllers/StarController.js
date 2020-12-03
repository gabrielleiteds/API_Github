const Star = require('../models/Stars');

module.exports = {
  async create(req, res) {
    const user_id = req.userId;
    const { repository_id } = req.params;

    const stars = await Star.create({
      user_id,
      repository_id
    }, { include: ['repositories'] })

    return res.status(201).json(stars)
  },
  async show(req, res) {
    const stars = await Star.findAndCountAll({ include: ['users', 'repositories'] })

    return res.json(stars)
  },
  async delete(req, res) {
    const { star_id } = req.params;

    const star = await Star.destroy({
      where: {
        id: star_id
      }
    })

    return res.json("Deleted")
  }
}