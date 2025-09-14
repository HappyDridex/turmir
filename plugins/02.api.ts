interface IApiInstance {}

export default defineNuxtPlugin(() => {
  const { $appFetch: fetcher } = useNuxtApp();

  const modules: IApiInstance = {};

  return {
    provide: {
      api: modules,
    },
  };
});
