import { mergeResolvers } from '@graphql-tools/merge';

import { getRecepiesServiceResolvers } from './recepiesService';

export const getResolvers = async () => {
    const recepiesServiceResolvers = await getRecepiesServiceResolvers();

    return mergeResolvers([recepiesServiceResolvers]);
};
