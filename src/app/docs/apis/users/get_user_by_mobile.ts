export default {
    get: {
        security: [{ bearerAuth: [] }],
        tags: ['Users'],
        summary: 'Get user by mobile request',
        parameters: [
            {
                name: 'mobile',
                in: 'query',
                required: true,
                type: 'number',
                description: 'pass mobile in number',
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
