type Callback<T> = (err: unknown, result?: T) => void;

export const doGrpcUnaryCall = async <T>(fn: (callback: Callback<T>) => void) => {
    return new Promise<T>((resolve) => {
        const callback: Callback<T> = (err, result) => {
            if (err) {
                console.error('failed to do call');
                console.error(err);
                process.exit(-1);
            }

            if (result === undefined) {
                console.error('unexpectedly received undefined');
                process.exit(-1);
            }

            resolve(result);
        };

        fn(callback);
    });
};
