const pokeControllers = require("./poke.controllers");

const getPoke = (req, res) => {
    res.status(200).json(pokeControllers.getAllPoke());
};

const getPokeOnId = (req, res) => {
    const id = Number(req.params.id);

    const data = pokeControllers.getPokeById(id);

    if (data.id) {
        res.json(data);
    } else {
        res.status(400).json({
            message: "Try with another id",
        });
    }
};

const postPoke = (req, res) => {
    const data = req.body;

    const response = pokeControllers.createPoke(data);

    res.status(201).json(response);
};

const deletePoke = (req, res) => {
    const id = Number(req.params.id);

    pokeControllers.deletePoke(id);

    res.status(204).json({ message: `Todo with ${id} was delete` });
};

const putPokeOnId = (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    const response = pokeControllers.editPoke(id, data);
    res.status(201).json(response);
};

module.exports = {
    getPoke,
    getPokeOnId,
    postPoke,
    putPokeOnId,
    deletePoke,
};
