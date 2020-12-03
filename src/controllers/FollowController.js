const Follow = require("../models/Follow");
const User = require("../models/User");
const { show } = require("./RepositoryController");

module.exports = {
  async create(req, res) {
    const user_follower = req.userId;
    const { user_follow } = req.params;
    
    const follow = await Follow.create({
      user_follow,
      user_follower
    }, {
      include: ['users']
    });

    return res.json(follow)
  },
  async show(req, res) {
    const follows = await Follow.findAll({
      include: [{
        model: User,
        as: 'users',
        attributes: ['name', 'username', 'email']
      }],
      attributes: ['user_follower']
    })

    return res.json(follows)
  }
}