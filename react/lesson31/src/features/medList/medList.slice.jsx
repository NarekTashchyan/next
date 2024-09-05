import { createSlice } from '@reduxjs/toolkit';

const medListSlice = createSlice({
    name: 'meds',
    initialState: [
        { id: 1, name: "Aspirin", rating: 3 },
        { id: 2, name: "Valerianka", rating: 5 },
        { id: 3, name: "Paracetamol", rating: 2 },
    ],
    reducers: {
        changeRating: (state, action) => {
            const { medId, rating } = action.payload;
            const med = state.find((m) => m.id === medId);
            if (med) {
                med.rating = rating;
            }
        },
    },
});

export const { changeRating } = medListSlice.actions;
export default medListSlice.reducer;