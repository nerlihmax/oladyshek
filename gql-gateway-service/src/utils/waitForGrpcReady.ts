import { Client } from '@grpc/grpc-js';
import { CONNECTION_TIMEOUT } from '../config';

export const waitForGrpcReady = async (client: Client) => {
    await new Promise<void>((resolve) => {
        const timeout = new Date();
        timeout.setSeconds(timeout.getSeconds() + CONNECTION_TIMEOUT);

        client.waitForReady(timeout, (err) => {
            if (err) {
                console.error('cannot connect to recepieService by timeout');
                process.exit(-1);
            }

            resolve();
        });
    });
};
