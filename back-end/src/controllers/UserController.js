const User = require('../models/User')
const Companie = require('../models/Companie')

module.exports = {
  async index(req, res) {
    const users = await User.findAll()

    return res.json(users)
  },

  async store(req, res) {
    const { companieId } = req.params
    const { name, email, type } = req.body

    const companie = await Companie.findByPk(companieId)

    if(!companie) {
      return res.status(400).json({error: 'Companie not found'})
    }

    const user = await User.create({
      name,
      email,
      type,
      companieId,
    })

    return res.json(user)
  }
}