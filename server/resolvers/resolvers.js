const Pony = require('../models/pony')

module.exports = {
    Query: {
        async getPonies() {
            try {
                const ponies = Pony.find();
                return ponies;
            }
            catch {
                console.log(err);
            }
        }
    },
    Mutation: {
        addPony: (_, args) => {
            let newPony = {
                id: 4,
                ...args
            }
            ponies.push(newPony);
            return ponies;
        }
    }
}