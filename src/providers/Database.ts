import mongoose from 'mongoose';

export class Database {
    /**
     * Initializing the database
     */
    public static init(mongoURI: string): any {
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useUnifiedTopology', true);

        mongoose.connect(mongoURI, {
            keepAlive: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });

        mongoose.connection.on('connected', async () => {
            /* eslint-disable-next-line no-console */
            console.log(`[Mongoose connection] success`);
        });

        mongoose.connection.on('error', (reson) => {
            /* eslint-disable-next-line no-console */
            console.log(`[Mongoose connection] error`, reson);
        });
    }
}

export default mongoose;
