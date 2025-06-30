import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

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
            priority: 'High'
        }, {
            id: "asdf",
            title: "Connect Github Repo",
            description: "Create home page and routing",
            dueDate: '2025-01-12',
            isCompleted: false,
            priority: 'Medium'
        },

    ],
    filter: "all"
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export const selectTasks = (state: RootState) => { /* make sure to import the RootState from redux/store */
    return state.todo.tasks;
}

export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export default taskSlice.reducer;