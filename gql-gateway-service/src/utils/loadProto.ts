import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

export const loadProto = async <T>(relativePath: string) => {
    const definitions = await protoLoader.load(path.resolve(__dirname, relativePath));
    return grpc.loadPackageDefinition(definitions) as unknown as T;
};
