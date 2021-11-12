export default {
    components: {
        schemas: {
            User: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        description: 'Name of the user',
                        example: 'John doe',
                    },
                    email: {
                        type: 'string',
                        description: 'User email id',
                        example: 'johndoe@someapp.com',
                    },
                    mobile: {
                        type: 'string',
                        description: 'User mobile number',
                        example: '91452122222',
                    },
                    platform: {
                        type: 'string',
                        enum: ['ios', 'web', 'android'],
                        description: 'User login platform',
                        example: '91452122222',
                    },
                    location: {
                        type: 'object',
                        properties: {
                            type: {
                                type: 'string',
                                enum: ['Point'],
                                description: 'Location type',
                            },
                            coordinates: {
                                type: 'array',
                                description: 'coordinates arrey',
                                example: [0.341, 34.122],
                            },
                        },
                    },
                    gender: {
                        type: 'string',
                        enum: ['MALE', 'FEMALE'],
                        description: 'User gender type',
                        example: 'MALE',
                    },
                    loginMethod: {
                        type: 'string',
                        enum: ['GOOGLE', 'OTP', 'FACEBOOK'],
                    },
                },
            },
            ValidationError: {
                type: 'object',
                properties: {
                    status: {
                        type: 'boolean',
                        enum: [false],
                        example: false,
                        description: 'indicates the status of the error',
                    },
                    errorType: {
                        type: 'string',
                        enum: ['ValidationError'],
                        default: 'ValidationError',
                    },
                    message: {
                        type: 'string',
                        description: 'error mesage regarding the api error',
                        example: 'Mobile number must be 10 digit long',
                    },
                },
            },
            AuthorizationError: {
                type: 'object',
                properties: {
                    status: {
                        type: 'boolean',
                        enum: [false],
                        example: false,
                        description: 'indicates the status of the error',
                    },
                    errorType: {
                        type: 'string',
                        enum: ['UnauthorizedError'],
                        default: 'UnauthorizedError',
                    },
                    message: {
                        type: 'string',
                        description: 'error mesage regarding the api error',
                        example: 'No auth token found',
                    },
                },
            },
            APIError: {
                type: 'object',
                properties: {
                    status: {
                        type: 'boolean',
                        enum: [false],
                        example: false,
                        description: 'indicates the status of the error',
                    },
                    errorType: {
                        type: 'string',
                        enum: ['APIError'],
                        default: 'APIError',
                    },
                    message: {
                        type: 'string',
                        description: 'error mesage regarding the api error',
                        example: 'no user found for given user id',
                    },
                },
            },
        },
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
};
