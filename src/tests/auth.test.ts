import { Application } from 'express';
import mongoose from 'mongoose';
import request from 'supertest';
import Express from '../providers/Express';
import { dbUrl } from './util';
import userModel from '../models/user.model';

describe('Auth controller test', () => {
    let app: Application;
    let token: string;

    beforeAll(async () => {
        app = Express.getExpress();
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        await userModel.deleteMany({});
        await await mongoose.connection.close();
    });

    describe('auth flow test', () => {
        it('/login - should give validation error', async () => {
            const response = await request(app)
                .post('/api/v1/auth/login')
                .send({
                    name: 'sujan',
                    email: 'sujan@appyhigh.com',
                    mobile: 917022406442,
                });
            expect(response.status).toEqual(422);
        });

        it('/login - should create user', async () => {
            const response = await request(app)
                .post('/api/v1/auth/login')
                .send({
                    name: 'sujan',
                    email: 'sujan@appyhigh.com',
                    mobile: 917022406442,
                    latitude: 34.12,
                    longitude: 23.12,
                });
            token = response.body.token;
            const { status, body } = response;
            expect(status).toEqual(200);
            expect(body.message).toEqual('user successfully logged in');
        });

        it('/update should give error on update', async () => {
            const update = await request(app)
                .put('/api/v1/auth/update-user')
                .send({})
                .set('Authorization', `Bearer ${token}`);

            expect(update.status).toEqual(422);
        });

        it('/update should update user mobile and name', async () => {
            const update = await request(app)
                .put('/api/v1/auth/update-user')
                .send({
                    mobile: 917022406442,
                    name: 'sujanb',
                })
                .set('Authorization', `Bearer ${token}`);

            expect(update.status).toEqual(200);
        });
    });
});
