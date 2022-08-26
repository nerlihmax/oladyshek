import express from 'express';
import 'dotenv/config';
import { divCard, rewriteRefs } from '@divkitframework/jsonbuilder';
import { components, helper } from './components';

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
                    image: 'https://attuale.ru/wp-content/uploads/2018/11/2566165157.jpg',
                }),
            },
        ],
    });

    return res.json(markup);
});

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
    console.log(`running on http://localhost:${port} 🚀`);
});
