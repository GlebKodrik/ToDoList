const appReducer = (state, action) => {
    switch (action.type) {
        case 'add': {
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload.title,
                    date: action.payload.date,
                    completed: false
                }]
        }
        case 'toggleTodo': {
            return state.map(item => {
                if (item.id === action.payload) {
                    item.completed = !item.completed
                }
                return item;
            })
        }
        case 'removeTodo': {
            return state.filter(item => item.id !== action.payload)
        }
        default:
            return state;
    }
}

export default appReducer;