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

server.route({
    method: "GET",
    path: "/api/tasks",
    handler: function(request, h) {
        return [
            {
                id: 1,
                name: "Take out the trash",
                frequency: "Weekly"
            },
            {
                id: 2,
                name: "Dishes",
                frequency: "Daily"
            }
        ]
    }
})

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