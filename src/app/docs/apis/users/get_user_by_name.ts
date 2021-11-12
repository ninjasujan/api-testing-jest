export default {
    get: {
        security: [{ bearerAuth: [] }],
        tags: ['Users'],
        summary: 'Get user by name request',
        parameters: [
            {
                name: 'name',
                in: 'path',
                required: true,
                type: 'string',
                description: 'pass name in request path',
            },
        ],
        responses: {
            200: {
                description: 'success response',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#components/schemas/User',
                        },
                    },
                },
            },
            400: {
                description: 'API Error',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#components/schemas/APIError',
                        },
                    },
                },
            },
            401: {
                description: 'Authorization Error',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#components/schemas/AuthorizationError',
                        },
                    },
                },
            },
            422: {
                description: 'Validation Error',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#components/schemas/ValidationError',
                        },
                    },
                },
            },
        },
    },
};
