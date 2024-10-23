import { AppClient, OpenAPI } from './generated';
import type { ApiRequestOptions } from './generated/core/ApiRequestOptions';

export class SdkAppClient {
  private static instance: AppClient;

  public static getAppClientInstance(
    token?: string | ((opt: ApiRequestOptions) => Promise<string>),
    headers?: Record<string, string>,
  ): AppClient {
    if (!SdkAppClient.instance) {
      SdkAppClient.instance = new AppClient({
        ...OpenAPI,
        BASE: process.env.NEXT_PUBLIC_API_ENDPOINT,
        TOKEN: token,
        HEADERS: headers,
        ENCODE_PATH: encodeURIComponent,
      });
    }

    if (!token || typeof token === 'string') {
      // reset token for static token passing
      SdkAppClient.instance.request.config.TOKEN = token;
    }

    if (headers) {
      SdkAppClient.instance.request.config.HEADERS = {
        ...SdkAppClient.instance.request.config.HEADERS,
        ...headers,
      };
    }

    return SdkAppClient.instance;
  }
}
