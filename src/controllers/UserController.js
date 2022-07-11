const JsonFile = require('../models/JsonFile');
// FAKE DATA BASE
let userPath = 'src/database/user.json';

module.exports = {
    async create(req, res) {
        const {  id, name, service, description, photo} = req.body;
        const data = { id, name, service, description, photo };

        await JsonFile.JSONUpdate(userPath, data);
        newData = await JsonFile.JSONRead(userPath);

        return res.status(201).json(newData); 
    },
    async show(req, res) {
        const { user_id } = req.params;
        const data = await JsonFile.JSONRead(userPath);
        const buscaData = data.find((data) => data.id === user_id);

        return buscaData ? res.status(201).json(buscaData) : res.status(404).json({"message": "not found", "status" : 404});
    },
    async index(req, res) {
        const allUser = await JsonFile.JSONRead(userPath);

        return res.status(200).json(allUser); 
    },
    async delete(req, res) {
        const { user_id } = req.params;
        const data = await JsonFile.JSONRead(userPath);
        const fillterUser = data.filter(data => data.id !== user_id);
        JsonFile.JSONWiret(userPath, fillterUser);

        return res.status(202).json({"message": "deletado", "status" : 202});
    }
}