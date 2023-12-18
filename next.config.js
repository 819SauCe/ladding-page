module.exports = {
    async redirects() {
        return [
            {
                source: '/about',
                destination: '/sobre',
                permanent: true,
            },
        ];
    },
};
