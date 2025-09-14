const isDev = process.env.NODE_ENV === 'development';
const isSSR = import.meta.server;
const isClient = import.meta.client;

export { isDev, isSSR, isClient };
