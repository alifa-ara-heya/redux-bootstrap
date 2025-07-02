import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";
// import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
    tasks: [
        {
            id: "asdf",
            title: "Initialize frontend",
            description: "Create home page and routing",
            dueDate: '2025-01-12',
            isCompleted: false,
            priority: 'high',
            assignedTo: '1112'
        }, {
            id: "gjk",
            title: "Connect Github Repo",
            description: "Create stage branch",
            dueDate: '2025-01-12',
            isCompleted: false,
            priority: 'medium',
            assignedTo: '238'
        },

    ],
    filter: "all"
}

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority" | "assignedTo">;

const createTask = (taskData: DraftTask): ITask => {

    const serializedDueDate =
        taskData.dueDate instanceof Date
            ? taskData.dueDate.toISOString().split("T")[0]
            : taskData.dueDate; //I added this code

    return {
        ...taskData,
        id: nanoid(),
        isCompleted: false,
        assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
        dueDate: serializedDueDate,

    };
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            // const id = uuidv4();

            /*    const taskData = {
                   ...action.payload,
                   id,
                   isCompleted: false
               }; */
            const taskData = createTask(action.payload); //action.payload is the task submitted from the form.
            state.tasks.push(taskData);
        },

        toggleCompleteState: (state, action: PayloadAction<string>) => {
            console.log(action);
            state.tasks.forEach((task) => task.id === action.payload
                ? (task.isCompleted = !task.isCompleted)
                : task
            ) //action.payload is the id of the task to toggle. 
            //forEach doesn't return anything, that's why we didn't assign this function to anything
        },

        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload) //as filter returns an array, we assigned the function to state.tasks
        },

        updateFilter: (state, action: PayloadAction<"all" | "low" | "medium" | "high">) => {
            state.filter = action.payload;

        }

    },

    // extraReducer to handle the logic of deleting the userId from the task (assignedId) if the user is deleted

    extraReducers: (builder) => {
        builder.addCase(removeUser, (state, action) => {
            state.tasks.forEach(task =>
                task.assignedTo === action.payload
                    ? task.assignedTo = null
                    : task
            )
        })
    }
})

export const selectTasks = (state: RootState) => { /* make sure to import the RootState from redux/store */

    const filter = state.todo.filter;

    if (filter === 'low') {
        return state.todo.tasks.filter(task => task.priority === 'low')
    } else if (filter === 'medium') {
        return state.todo.tasks.filter(task => task.priority === 'medium')
    }
    else if (filter === 'high') {
        return state.todo.tasks.filter(task => task.priority === 'high')
    } else {
        return state.todo.tasks;
    }

}

export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export const { addTask, toggleCompleteState, deleteTask, updateFilter } = taskSlice.actions

export default taskSlice.reducer;