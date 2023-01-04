import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type TTask = {
  id: number;
  label: string;
  completed: boolean;
};

interface ITaskSlice {
  tasks: TTask[];
}

const initialState: ITaskSlice = {
  tasks: [
    {id: 0, label: 'Сделать тестовое', completed: true},
    {id: 1, label: 'Сдать тестовое', completed: false},
    {id: 2, label: 'Начать зарабатывать', completed: false},
  ],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      const label = action.payload;

      const task: TTask = {
        id: state.tasks.length,
        label,
        completed: false,
      };

      state.tasks = [...state.tasks, task];
    },
    completeTask(state, action: PayloadAction<number>) {
      const id = action.payload;

      state.tasks = state.tasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      );
    },
    deleteTask(state, action: PayloadAction<number>) {
      const id = action.payload;

      state.tasks = state.tasks.filter(task => task.id !== id);
    },
  },
});

export const {addTask, completeTask, deleteTask} = taskSlice.actions;

export default taskSlice.reducer;
