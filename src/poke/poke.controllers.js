const pokeDB = {
    1: {
        id: 1,
        id_name: "Lucario",
        name: "Kodec",
        type: "Fight",
        active: true,
    },
};

const getAllPoke = () => {
    return pokeDB;
};

const getPokeById = (id) => {
    const data = pokeDB.filter((item) => item.id === id);
    return data[0];
};

const createPoke = (body) => {
    const newObj = {
        id: pokeDB[pokeDB.length - 1].id + 1,
        ...data,
        active: true,
    };
    pokeDB.push(newObj);

    return pokeDB;
};

const editPoke = (id, body) => {
    const index = pokeDB.findIndex((item) => item.id === id);
    if (index !== -1) {
        pokeDB[index] = {
            id,
            ...data,
            active: body.active,
        };
    } else {
        createTodo(data);
    }
    return pokeDB;
};

const deletePoke = (id) => {
    const index = pokeDB.findIndex((item) => item.id === id);
    pokeDB.splice(index, 1);
    return;
};





module.exports = {
    getAllPoke,
    getPokeById,
    createPoke,
    editPoke,
    deletePoke,
};
