import sequelize from 'sequelize';

export default {
    Query: {
        getAllUser: async (parent, _, {database}, info) => {
            return await database.Users.findAll()
        }
    }
}
