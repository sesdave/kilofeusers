import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

function saveToLocal(state){
    try{
        const serializedState=JSON.stringify(state)
         localStorage.setItem('state',serializedState)
    }catch(e){
        console.log(e)
    }
    
}
function loadfromLocalStore(){
        try{
            const serializedState=localStorage.getItem('state')
            if (serializedState===null) return undefined
                return JSON.parse(serializedState)
        }catch(e){
            console.log(e)
            return undefined
        }
    
    }
    const persistedState=loadfromLocalStore()
    

const store=createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
    
)

store.subscribe(()=>saveToLocal(store.getState()))

export default store;