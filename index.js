const Hapi = require('hapi');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/static/{filename}',
    handler: function (request, h) {
        return h.file(request.params.filename);
    }
});

const init = async () => {
    await server.register(require('inert'));
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();