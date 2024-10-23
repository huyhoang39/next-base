/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get all users
   * @returns any A list of users
   * @throws ApiError
   */
  public getUsers(): CancelablePromise<Array<{
    id?: number;
    name?: string;
    email?: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users',
    });
  }
  /**
   * Create a new user
   * @returns any User created successfully
   * @throws ApiError
   */
  public postUsers({
    requestBody,
  }: {
    requestBody: {
      name: string;
      email: string;
    },
  }): CancelablePromise<{
    id?: number;
    name?: string;
    email?: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/users',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
