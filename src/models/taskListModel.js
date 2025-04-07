let taskLists = [
    { id: '1', title: 'Estudos', tasks: [{ id: "1", title: 'Estudar Node', completed: false }] },
    { id: '2', title: 'Tarefas de Casa', tasks: [] },
    { id: '3', title: 'Coisas do trabalho', tasks: [] }
]

module.exports = {
    // Model -> Index GET /app
    getAllTaskLists: () => {
        return taskLists
    },

    getTaskListById: (id) => {
        return taskLists.find(list => list.id === id)
    },

    // Model -> Save POST /app/nova-lista (Criando a lista)
    createList: (title) => {
        const newList = {
            id: Math.floor(Math.random() * 9999999).toString(),
            title: title,
            tasks: []
        }
        return newList
    },

    // Model -> Save POST /app/nova-lista (Aqui verifica e salva)
    saveList: (taskList) => {
        if (taskList.title === '') throw new Error('Titulo da lista não pode ficar vazio.')
        taskLists.push(taskList)
    },

    deleteList: (listId) => {
        const listIndex = taskLists.findIndex(list => list.id === listId)
        taskLists.splice(listIndex, 1)
    },

    addTask: (listId, taskTitle) => {
        const newTask = {
            id: Math.floor(Math.random() * 9999999).toString(),
            title: taskTitle,
            completed: false
        }
        if (newTask.title === '') {
            throw new Error("Insira o titulo da task");
        } else {
            taskLists.find(list => list.id === listId).tasks.push(newTask)
        }

    },

    completeTask: (listId, taskId) => {
        const taskList = taskLists.find(list => list.id === listId)
        const task = taskList.tasks.find(task => task.id === taskId)
        task.completed = true
    },

    undoTask: (listId, taskId) => {
        const taskList = taskLists.find(list => list.id === listId)
        const task = taskList.tasks.find(task => task.id === taskId)
        task.completed = false
    }
}