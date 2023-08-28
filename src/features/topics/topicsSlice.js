import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: "topics",
    initialState: {
        topics: {},
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon,
                quizIds: []
            }
        },
        addQuizId: (state, action) => {
            const { quizId, topicId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

export const { addTopic, addQuizId } = topicsSlice.actions;
export const selectTopices = state => state.topics.topics;
export default topicsSlice.reducer;
