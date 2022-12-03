import { createSlice } from '@reduxjs/toolkit'
import { Budget } from '../../models'

export interface BudgetState {
    budgets: Budget[] | []
    currentBudget: Budget | null
}

const initialState: BudgetState = {
    budgets: [
        {
            item : 'hola',
            quantity: '2',
            description: 'hola description',
        },
        {
            item : 'hola',
            quantity: '2',
            description: 'hola description',
        },
        {
            item : 'hola',
            quantity: '2',
            description: 'hola description',
        },
        {
            item : 'hola',
            quantity: '2',
            description: 'hola description',
        }
    ],
    currentBudget: null
}

export const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        setBudgetList: (state, action) => {
            state.budgets = action.payload;
        },
        setCurrentBudget : (state, action) =>{
            state.currentBudget = action.payload
        }
    }
})

export const { setBudgetList, setCurrentBudget } = budgetSlice.actions

export default budgetSlice.reducer