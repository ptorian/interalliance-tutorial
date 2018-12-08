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

const tasks = [
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
];

server.route({
    method: "GET",
    path: "/api/tasks",
    handler: function(request, h) {
        return tasks;
    }
});

server.route({
    method: "POST",
    path: "/api/tasks",
    handler: function(request, h) {
        const newTask = JSON.parse(request.payload);
        tasks.push(newTask);
        return newTask;
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