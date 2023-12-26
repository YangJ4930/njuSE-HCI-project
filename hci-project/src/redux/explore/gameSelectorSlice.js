import { createSlice } from '@reduxjs/toolkit';
import { fa } from '@faker-js/faker';

const gameTypes = [
    'Rogue-lite',
    '城市建造',
    '动作',
    '格斗',
    '回合制',
    '即时战略',
    '竞速',
    '卡牌游戏',
    '恐怖',
    '冒险',
    '射击',
    '喜剧',
    '休闲',
    '叙事',
];

const gameTypeSelectorSlice = createSlice({
    name: 'gameSelector',
    initialState: {
        gameTypes: gameTypes,
        selected: Array.from({ length: gameTypes.length }).fill(false),
    },
    reducers: {
        selectGameTypes: (state, action) => {
            const index = action.payload;
            state.selected[index] = !state.selected[index];
        },
    },
});

export const { selectGameTypes } = gameTypeSelectorSlice.actions;

export default gameTypeSelectorSlice.reducer;
