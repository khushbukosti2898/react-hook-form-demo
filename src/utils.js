export const emailRule = () => ({
    value: /^([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)$/,
    message: 'Invalid email adress',
});

export const alphabetRule = () => ({
    value: /^[a-zA-Z]+$/,
    message: 'Only alphabetic value allowed.',
});