export default function logger(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
}

export function errorLogger(error) {
    console.error(`[ERROR] ${error.message} at ${error.stack}`);
}