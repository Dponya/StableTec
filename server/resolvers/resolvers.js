module.exports = {
    Query: {
        getPony: (_, args) => ponies.find(pony => pony.id === args.id),
        ponies: () => ponies
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