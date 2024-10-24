import { createClient } from 'redis';
import { env } from './env';

const redis = createClient({
    url: env.REDIS_URI
});
redis.connect();
redis.on('connect', (done) => {
    console.log('Connected');
})

redis.on('error', (err) => {
    console.error('Error connecting to Redis:', err);
});

export {
    redis
}