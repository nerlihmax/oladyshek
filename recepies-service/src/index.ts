import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import 'dotenv/config';

import { ProtoGrpcType } from '../proto-gen/recepies-service';
import { RecepiesServiceHandlers } from '../proto-gen/oladyshek/v1/RecepiesService';
import { Receipe } from '../proto-gen/oladyshek/v1/Receipe';

const PORT = process.env.PORT ?? '3000';

const handlers: RecepiesServiceHandlers = {
    GetRandomRecepie: (call, callback) => {
        const stub: Receipe = {
            name: 'Оладушки',
            description: 'Вкусный и сытный завтрак и приятные воспоминания из детства',
            thumbnail: 'https://thumbsnap.com/i/K3w8vSC7.jpg',
        };

        callback(null, stub);
    },
};

const loadProto = async <T>(path: string) => {
    const definitions = await protoLoader.load(path);
    return grpc.loadPackageDefinition(definitions) as unknown as T;
};

const bootstrap = async () => {
    const recepiesService = await loadProto<ProtoGrpcType>(
        path.resolve(__dirname, '../proto/recepies-service.proto'),
    );

    const server = new grpc.Server();

    server.addService(recepiesService.oladyshek.v1.RecepiesService.service, handlers);

    server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (error) => {
        if (error) {
            console.error('failed to start recepies-service');
            console.error(error);
        } else {
            server.start();

            console.log(`recepies-service is running on localhost:${PORT}`);
        }
    });
};

bootstrap();
