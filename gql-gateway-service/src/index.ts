import { ApolloServer } from 'apollo-server';
import 'dotenv/config';

import { PORT } from './config';
import { getResolvers } from './resolvers';
import { getTypeDefs } from './typeDefs';

const bootstrap = async () => {
    const typeDefs = await getTypeDefs();
    const resolvers = await getResolvers();

    const server = new ApolloServer({ typeDefs, resolvers });

    const { url } = await server.listen(PORT);
    console.log(`gql-gateway-service is running on ${url}`);
};

bootstrap();
