window.addEventListener("load", function() {
    const table = document.getElementById("myTaskTable");

    function loadTable() {
        fetch('http://localhost:3000/api/tasks')
            .then(function(response) {
                return response.json();
            })
            .then(function(taskList) {
                taskList.forEach(function(task) {
                    const row = table.insertRow();
                    const cell1 = row.insertCell();
                    cell1.innerText = task.id;
                    const cell2 = row.insertCell();
                    cell2.innerText = task.name;
                    const cell3 = row.insertCell();
                    cell3.innerText = task.frequency;
                });
            });
    }

    loadTable();

    const addNewTaskButton = document.getElementById("addNewTask");
    addNewTaskButton.addEventListener("click", function() {
        /*
            1. Get new task input elements
            2. Get the contents of the task input elements
            3. Create a new row, and add new task cells
        */

        const newTaskIDElement = document.getElementById("newTaskID");
        const newTaskNameElement = document.getElementById("newTaskName");
        const newTaskFrequencyElement = document.getElementById("newTaskFrequency");

        const newTaskID = newTaskIDElement.value;
        const newTaskName = newTaskNameElement.value;
        const newTaskFrequency = newTaskFrequencyElement.value;

        const row = table.insertRow();
        const cell1 = row.insertCell();
        cell1.innerText = newTaskID;
        const cell2 = row.insertCell();
        cell2.innerText = newTaskName;
        const cell3 = row.insertCell();
        cell3.innerText = newTaskFrequency;

    });
});