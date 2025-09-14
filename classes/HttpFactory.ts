import type { NitroFetchOptions, NitroFetchRequest } from "nitropack";
import type { TRequestMethod } from "@/types/request/method";

type TFetcher = ReturnType<(typeof $fetch)["create"]>;

class HttpFactory {
  protected $fetch: TFetcher;

  constructor(fetcher: TFetcher) {
    this.$fetch = fetcher;
  }

  protected async call<
    DefaultT = unknown,
    DefaultR extends NitroFetchRequest = NitroFetchRequest,
    T = DefaultT,
    R extends NitroFetchRequest = DefaultR,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    O extends NitroFetchOptions<R> = NitroFetchOptions<R>
  >(
    method: TRequestMethod,
    url: string,
    opts?: Parameters<typeof $fetch<T>>[1]
  ): Promise<T> {
    return await this.$fetch(url, { method, ...opts });
  }
}

export default HttpFactory;
