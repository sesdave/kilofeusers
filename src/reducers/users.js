
const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            let index = state.findIndex(post => post.id === action.data.id)
            if (index === -1) {
                return [...state, action.data]
            }
            return state;
        case 'DELETE':
            return state.filter((post) => post.id !== action.id)
        
        default:
            return state
    }
}

export default postReducer;