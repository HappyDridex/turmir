import { HttpError } from '@/classes/HttpError';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const { apiBaseUrl } = config.public;

  const $appFetch = $fetch.create({
    baseURL: apiBaseUrl,

    onRequestError() {
      throw new HttpError({
        status: 500,
        message: 'Произошла ошибка запроса',
      });
    },

    onResponseError({ response }) {
      const { _data: data } = response;

      throw new HttpError({
        status: response.status,
        message: data?.message ?? 'Произошла ошибка запроса',
        details: data?.verbose_message ?? '',
      });
    },
  });

  return {
    provide: {
      appFetch: $appFetch,
    },
  };
});
