/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Login or register user
     * @param requestBody
     * @returns any Default Response
     * @throws ApiError
     */
    public static postApiV1AuthLogin(
        requestBody: {
            username: string;
            password: string;
        },
    ): CancelablePromise<{
        username: string;
        role: 'SURVIVOR' | 'NIKITA' | 'ADMIN';
        token: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Resource not found response`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Get current authenticated user
     * @returns any Default Response
     * @throws ApiError
     */
    public static getApiV1AuthMe(): CancelablePromise<{
        username: string;
        role: 'SURVIVOR' | 'NIKITA' | 'ADMIN';
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/auth/me',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Resource not found response`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Logout user
     * @returns any Default Response
     * @throws ApiError
     */
    public static postApiV1AuthLogout(): CancelablePromise<{
        success: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/logout',
        });
    }
}
