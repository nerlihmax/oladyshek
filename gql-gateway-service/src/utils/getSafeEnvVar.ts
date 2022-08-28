export const getSafeEnvVar = (key: string): string => {
    const value = process.env[key];

    if (value === undefined) {
        console.error(`failed to start, ${key} is not defined`);
        process.exit(-1);
    }

    return value;
};
