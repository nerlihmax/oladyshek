import { credentials } from '@grpc/grpc-js';
import { loadProto } from '../utils/loadProto';
import { RECEPIES_SERVICE_HOST, RECEPIES_SERVICE_PORT } from '../config';
import { waitForGrpcReady } from '../utils/waitForGrpcReady';
import { doGrpcUnaryCall } from '../utils/doGrpcUnaryCall';

import { Resolvers } from '../../gql-gen';
import { ProtoGrpcType } from '../../proto-gen/recepies-service';
import { Receipe__Output } from '../../proto-gen/oladyshek/v1/Receipe';

export const getRecepiesServiceResolvers = async () => {
    const recepiesServiceDefinitions = await loadProto<ProtoGrpcType>(
        '../../proto/recepies-service.proto',
    );

    const recepiesService = new recepiesServiceDefinitions.oladyshek.v1.RecepiesService(
        `${RECEPIES_SERVICE_HOST}:${RECEPIES_SERVICE_PORT}`,
        credentials.createInsecure(),
    );

    await waitForGrpcReady(recepiesService);

    const resolvers: Resolvers = {
        Query: {
            recepies: async (parent, args, context, info) => {
                const recepies = [
                    await doGrpcUnaryCall<Receipe__Output>((callback) =>
                        recepiesService.GetRandomRecepie({}, callback),
                    ),
                ];

                return recepies;
            },
        },
    };

    return resolvers;
};
