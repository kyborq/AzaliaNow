import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {uuid4} from '../uuid4';

export type TTask = {
  id: string;
  label: string;
  completed: boolean;
};

interface ITaskSlice {
  tasks: TTask[];
}

const initialState: ITaskSlice = {
  tasks: [
    {id: uuid4(), label: 'Сделать тестовое', completed: true},
    {id: uuid4(), label: 'Сдать тестовое', completed: false},
    {id: uuid4(), label: 'Начать зарабатывать', completed: false},
  ],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      const label = action.payload;

      const task: TTask = {
        id: uuid4(),
        label,
        completed: false,
      };

      state.tasks = [...state.tasks, task];
    },
    completeTask(state, action: PayloadAction<string>) {
      const id = action.payload;

      state.tasks = state.tasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      );
    },
    deleteTask(state, action: PayloadAction<string>) {
      const id = action.payload;

      state.tasks = state.tasks.filter(task => task.id !== id);
    },
  },
});

export const {addTask, completeTask, deleteTask} = taskSlice.actions;

export default taskSlice.reducer;
