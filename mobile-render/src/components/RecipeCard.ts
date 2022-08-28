import { DivContainer, DivGrid, DivImage, DivText, reference } from '@divkitframework/jsonbuilder';

/**
 * Компонент карточки рецепта
 *
 * - name - название блюда
 * - description - описание блюда
 * - thumbnail - url до картинки
 */
export const RecipeCard = new DivContainer({
    items: [
        new DivGrid({
            column_count: 3,
            items: [
                new DivImage({
                    image_url: reference('thumbnail'),
                    paddings: {
                        top: 8,
                        bottom: 8,
                        left: 8,
                        right: 8,
                    },
                    row_span: 2,
                    column_span: 1,
                    alignment_vertical: 'center',
                    alignment_horizontal: 'center',
                }),
                new DivText({
                    text: reference('name'),
                    paddings: {
                        top: 8,
                        bottom: 8,
                        left: 8,
                        right: 8,
                    },
                    column_span: 2,
                    alignment_vertical: 'center',
                    alignment_horizontal: 'left',
                }),
                new DivText({
                    text: reference('description'),
                    paddings: {
                        top: 8,
                        bottom: 8,
                        left: 8,
                        right: 8,
                    },
                    column_span: 2,
                    alignment_vertical: 'center',
                    alignment_horizontal: 'left',
                }),
            ],
        }),
    ],
});
