const emailRule = () => ({
    value: /^([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)$/,
    message: 'Invalid email adress',
});

export default emailRule;