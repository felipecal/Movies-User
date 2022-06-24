import sequelize from 'sequelize';

const resolvers = {
    Query: {
        getAllUser: async (parent, _, {database}, info) => {
            return await database.Users.findAll()
        }
    }
}

export default resolvers;
