//state - count:0
//action - increment,decrrement,reset
//reducer
//store

const { createStore } = require("redux");

const  INCREMENT='INCREMENT'
const DECREMENT='DECREMENT'
const RESET='RESET'
const ADD_USER='ADD_USER'
const initialState  = {
    users:["sakib"],
    count:1
}

const addUser=(user)=>{
    return{
        type:ADD_USER,
        payload:user
    }
}
const incrementAction = ()=>{
    return{
        type: INCREMENT,
    }

    
};

const decrementAction = ()=>{
    return{
        type: DECREMENT,
    }

    
};
const recrementAction = ()=>{
    return{
        type: RESET,
    }

    
}
//createing Reducer
const counterReducer= (state=initialState,action)=>{
switch(action.type){
    case  ADD_USER:
            return{
              users:[...state.users,action.payload],
                count:state.count + 1
            }
    case  INCREMENT:
            return{
                ...state,
                count:state.count+1
            }
            case  DECREMENT:
            return{
                ...state,
                count:state.count-1
            }
            case  RESET:
                return{
                    ...state,
                    count:0
                }
      
        default:
           state


}

}
// store

const store = createStore(counterReducer);

store.subscribe(()=>{

console.log(store.getState())
})
store.dispatch( addUser("Didarul"));
//store.dispatch(incrementAction());
