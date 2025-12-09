/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RoundsService {
    /**
     * Create a new round (Admin only)
     * @returns any Default Response
     * @throws ApiError
     */
    public static postApiV1Rounds(): CancelablePromise<{
        id: string;
        startTime: string;
        endTime: string;
        totalScore: number;
        createdAt: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/rounds',
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
     * Get all rounds with pagination
     * @param cursor
     * @param limit
     * @param status
     * @returns any Default Response
     * @throws ApiError
     */
    public static getApiV1Rounds(
        cursor?: string,
        limit: number = 10,
        status?: 'active' | 'cooldown' | 'finished',
    ): CancelablePromise<{
        data: Array<{
            id: string;
            startTime: string;
            endTime: string;
            totalScore: number;
            createdAt: string;
        }>;
        pagination: {
            limit: number;
            nextCursor: string | null;
            hasMore: boolean;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/rounds',
            query: {
                'cursor': cursor,
                'limit': limit,
                'status': status,
            },
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
     * Get round details
     * @param id
     * @returns any Default Response
     * @throws ApiError
     */
    public static getApiV1Rounds1(
        id: string,
    ): CancelablePromise<{
        round: {
            id: string;
            startTime: string;
            endTime: string;
            totalScore: number;
            createdAt: string;
        };
        topStats: Array<{
            taps: number;
            score: number;
            user: {
                username: string;
            };
        }>;
        myStats: {
            taps: number;
            score: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/rounds/{id}',
            path: {
                'id': id,
            },
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
     * Register a tap in the round
     * @param id
     * @returns any Default Response
     * @throws ApiError
     */
    public static postApiV1RoundsTap(
        id: string,
    ): CancelablePromise<{
        taps: number;
        score: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/rounds/{id}/tap',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Resource not found response`,
                500: `Internal Server Error`,
            },
        });
    }
}
