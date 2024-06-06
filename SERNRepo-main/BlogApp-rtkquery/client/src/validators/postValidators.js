import * as yup from 'yup';
export const postSchema = yup.object().shape({
    post_title: yup.string().required('Title is required'),
    post_content: yup.string().required('Content is required')
});
