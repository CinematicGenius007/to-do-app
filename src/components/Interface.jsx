import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import ActionPalette from "./ActionPalette";

const Interface = () => {
    const [newTask, setNewTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [updateState, setUpdateState] = useState({
        update: false,
        id: null,
        title: null,
    });

    const refreshTaskList = () => {
        axios.get('http://localhost:5000/api/tasks')
            .then((response) => {
                console.log(response.data);
                setTaskList(response.data);
            })
            .catch((error) => {console.log(error)});
    };

    const addNewTask = () => {
        if (newTask !== "") {
            axios.post('http://localhost:5000/api/tasks/create', {
                title: newTask,
                time_created: moment().format('YYYY-MM-DD HH:mm:ss'),
            })
                .then((response) => {
                    console.log(response);
                    setNewTask("");
                    refreshTaskList();
                })
                .catch((error) => {console.log(error)});
        }
    };

    const changeTaskStatus = (id, status = 1) => {
        axios.post('http://localhost:5000/api/tasks/updateStatus', {
            task_id: id,
            status: status,
        })
            .then((response) => {
                console.log(response);
                refreshTaskList();
            })
            .catch((error) => {console.log(error)});
    };

    const deleteTask = (id) => {
        axios.delete('http://localhost:5000/api/tasks/delete', {
            data: {task_id: id}
        })
            .then((response) => {
                console.log(response);
                refreshTaskList();
            })
            .catch((error) => {console.log(error)});
    };

    const setUpUpdate = (id, title) => {
        setUpdateState({
            update: true,
            id: id,
            title: title,
        });
        setNewTask(title);
    };

    const updateTask = () => {
        if (newTask === updateState.title) {
            setNewTask("");
            setUpdateState({
                update: false,
                id: null,
                title: null,
            });
        } else if (newTask !== "") {
            axios.put('http://localhost:5000/api/tasks/update', {
                task_id: updateState.id,
                title: newTask,
            })
                .then((response) => {
                    console.log(response);
                    setNewTask("");
                    setUpdateState({
                        update: false,
                        id: null,
                        title: null,
                    });
                    refreshTaskList();
                })
                .catch((error) => {console.log(error)});
        }
    };

    useEffect(() => {
        refreshTaskList();
    }, []);

    return (
        <div className="flex relative min-h-screen w-full bg-dark">
            <ActionPalette totalTasks={taskList.length} completedTasks={taskList.filter(task => task.status === 1).length} />
            <section className="flex-1 text-orange-dark p-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl">Tasks</h2>
                </div>
                <div className="flex justify-center items-center gap-8 mt-16 mb-10 mx-auto w-full max-w-xl">
                    <input name="newTask" value={newTask} onChange={(e) => setNewTask(e.target.value)} className="py-1 px-4 bg-gray-dark-600 outline-none rounded text-lg" placeholder="Type in the task" />
                    {
                        !updateState.update 
                        ? <button onClick={addNewTask} className="py-1 px-4 rounded bg-green-dark text-lg text-dark">+ Add</button>
                        : <button onClick={updateTask} className="py-1 px-4 rounded bg-yellow-dark text-lg text-dark">Update</button>
                    }
                </div>
                
                <div className="my-6 mx-auto max-w-4xl text-teal-dark">
                    <div className="py-2 px-3 flex justify-between w-full transition-colors duration-500">
                        <h3 className="text-xl">Pending Tasks</h3>
                        {/* <button></button> */}
                    </div>
                    {
                        taskList.filter((task) => task.status === 0).sort((a, b) => a.time_created < b.time_created).map((task) => (
                            <div key={task.task_id} className="flex flex-col gap-4 my-4">
                                <div className="flex items-start gap-6 p-6 w-full bg-gray-dark-600">
                                    <button onClick={() => changeTaskStatus(task.task_id)}>
                                        <span className="material-symbols-outlined font-extralight">
                                            radio_button_unchecked
                                        </span>
                                    </button>
                                    <div className="flex-1">
                                        <div className="mb-1">{task.title}</div>
                                        <div className="text-xs text-gray-dark-200">{moment(task.time_created).format('h:m a, MMM d, YYYY')}</div>
                                    </div>
                                    <button onClick={() => setUpUpdate(task.task_id, task.title)}>
                                        <span className="material-symbols-outlined p-2 h-10 w-10 hover:bg-dark transition-colors duration-500 rounded-full text-yellow-dark font-extralight">
                                            edit
                                        </span>
                                    </button>
                                    <button onClick={() => deleteTask(task.task_id)}>
                                        <span className="material-symbols-outlined p-2 h-10 w-10 hover:bg-dark transition-colors duration-500 rounded-full text-red-dark font-extralight">
                                            delete
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="mt-12 mb-6 mx-auto max-w-4xl text-green-dark">
                    <div className="py-2 px-3 flex justify-between w-full transition-colors duration-500">
                        <h3 className="text-xl">Finished Tasks</h3>
                        {/* <button></button> */}
                    </div>
                    {
                        taskList.filter((task) => task.status === 1).sort((a, b) => a.time_created > b.time_created).map((task) => (
                            <div key={task.task_id} className="flex flex-col gap-4 my-4">
                                <div className="flex items-start gap-6 p-6 w-full bg-gray-dark-600">
                                    <button onClick={() => changeTaskStatus(task.task_id, 0)}>
                                        <span className="material-symbols-outlined font-extralight">
                                            check_circle
                                        </span>
                                    </button>
                                    <div className="flex-1">
                                        <div className="mb-1">{task.title}</div>
                                        <div className="text-xs text-gray-dark-200">{moment(task.time_created).format('h:m a, MMM d, YYYY')}</div>
                                    </div>
                                    <button onClick={() => setUpUpdate(task.task_id, task.title)}>
                                        <span className="material-symbols-outlined p-2 h-10 w-10 hover:bg-dark transition-colors duration-500 rounded-full text-yellow-dark font-extralight">
                                            edit
                                        </span>
                                    </button>
                                    <button onClick={() => deleteTask(task.task_id)}>
                                        <span className="material-symbols-outlined p-2 h-10 w-10 hover:bg-dark transition-colors duration-500 rounded-full text-red-dark font-extralight">
                                            delete
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default Interface;