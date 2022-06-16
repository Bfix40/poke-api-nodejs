const { describe, it } = require("mocha");
const assert = require("chai").assert;
const pokeControllers = require('../poke.controllers')


describe("Suite de Testing unitario para los controladores de pokes", () => {
    it("Testing to getAllpoke", (done) => {
        const testFunc = pokeControllers.getAllPoke()
        assert.equal(testFunc[1].id_name, 'Lucario')
        done()
    });
});
