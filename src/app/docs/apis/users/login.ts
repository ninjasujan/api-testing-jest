export default {
    post: {
        tags: ['Users'],
        summary: 'User login request',
        requestBody: {
            description: 'User login payload request',
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            name: {
                                type: 'string',
                                example: 'sujan',
                            },
                            email: {
                                type: 'string',
                                example: 'john@gmail.com',
                            },
                            mobile: {
                                type: 'number',
                                example: 917022406442,
                            },
                            latitude: {
                                type: 'number',
                                example: 45.122211111,
                            },
                            longitude: {
                                type: 'number',
                                example: 41.22222,
                            },
                        },
                    },
                },
            },
        },
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
