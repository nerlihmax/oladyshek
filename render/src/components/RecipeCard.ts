import { DivContainer, DivImage, DivText, reference } from '@divkitframework/jsonbuilder';

export const RecipeCard = new DivContainer({
    items: [
        new DivText({
            text: reference('name'),
        }),
        new DivText({
            text: reference('description'),
        }),
        new DivImage({ image_url: reference('image') }),
    ],
});
