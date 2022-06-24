import {ApolloServer} from 'apollo-server';
import database from './db/models';

import resolvers  from './graphql/modules/user/user-resolver';
import typeDefs from './graphql/modules/user/typeDefs';

    const server = new ApolloServer({
        typeDefs, resolvers, context: ({ req }) => ({ // 
            database,
            req
        })
    });

const app = process.env.PORT || 4002;

server.listen(app).then(() => console.log(`🚀 Server ready at ${app}`));
