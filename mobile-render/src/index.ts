import express from 'express';
import 'dotenv/config';
import { divCard, rewriteRefs } from '@divkitframework/jsonbuilder';
import { components, helper } from './components/index';

const app = express();

app.get('/render', (req, res) => {
    const markup = divCard(rewriteRefs(components), {
        log_id: 'recipe_card',
        states: [
            {
                state_id: 0,
                div: helper.RecipeCard({
                    name: 'Оладушек',
                    description: 'Вкусный и быстрый завтрак',
                    thumbnail: 'https://yastatic.net/s3/home/divkit/logo.png',
                }),
            },
        ],
    });

    return res.json(markup);
});

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
    console.log(`mobile-render-service running on http://localhost:${port} 🚀`);
});
