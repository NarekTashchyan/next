import { configureStore } from '@reduxjs/toolkit';
import medListSlice from './src/features/medList/medList.slice';

export const store = configureStore({
    reducer: {
        meds: medListSlice,
    },
});