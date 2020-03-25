const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.json(ongs);
  },

  async store(req, res) {
    const { nome, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("ongs").insert({
      id,
      nome,
      email,
      whatsapp,
      city,
      uf
    });

    return res.json({ id });
  }
};
