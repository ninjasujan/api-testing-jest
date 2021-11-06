import { config } from 'dotenv';
import path from 'path';

import mongoose from 'mongoose';
import { dbUrl } from './util';

config({ path: path.join(__dirname, '../../.env.test') });

beforeAll(async () => {
    await mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Database connection test', () => {
    test('should connect to database', () => {
        const state = mongoose.connection.readyState;
        expect(state).toEqual(1);
    });
});
