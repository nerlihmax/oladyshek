import path from 'path';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchema } from '@graphql-tools/load';
import { mergeTypeDefs } from '@graphql-tools/merge';

const loadTypeDefsByRelativePath = (relativePath: string) =>
    loadSchema(path.resolve(__dirname, relativePath), {
        loaders: [new GraphQLFileLoader()],
    });

const getRecepiesServiceTypeDefs = () => loadTypeDefsByRelativePath('./recepies-service.graphql');

export const getTypeDefs = async () => {
    const recepiesServiceSchema = await getRecepiesServiceTypeDefs();

    return mergeTypeDefs([recepiesServiceSchema]);
};
