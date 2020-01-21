import * as yup from 'yup';

const validationSchema = yup.object().shape({
    markdown: yup.object().when('images', {
        is: images => images.length,
        then: yup.object().notRequired(),
        otherwise: yup.object().shape({
            length: yup.number().positive(),
        }),
    }),
    images: yup.array().notRequired(),
})
export default validationSchema;