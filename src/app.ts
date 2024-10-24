import Express from 'express';
import { redis, env } from './utils';
import * as routes from './routes';
const app = Express();

app.use('/', routes.root.default);

app.listen(env.PORT, () => {
    console.log(`Server is running on http://localhost:${env.PORT}`);
});