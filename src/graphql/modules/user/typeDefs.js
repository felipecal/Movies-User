export default `
    type User {
    firstName: String
    lastName: String
    email: String
    }

    type Query {
        getAllUser:[User]
    }
`;