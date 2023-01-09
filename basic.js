// //create state
// //action
// //reducer
// //store

// const{createStore, combineReducers,applyMiddleware}=require("redux");
// const { default: logger } = require("redux-logger");
// const INCREMENT='INCREMENT'
// const ADD_USER='ADD_USER'
// //state
// const initiatState = {
//     // users:["sakib"],
//     count:1,
// }
// const initiaUsertState = {
//     users:["sakib"],
//     count:1,
// }
// //action
// const incrementAction =()=>{
//     return{
//         type:INCREMENT
//     }
// }
// const addUser =(user)=>{
//     return{
//         type:ADD_USER,
//         payload:user
//     }
// }

// const counterReducer =(state=initiatState,action)=>{
//     switch (action.type) {
//         case INCREMENT:
            
//            return{
//             ...state,
//             count:state.count+1
//            }
    
//         default:
//            return state
//     }

// }
// const addUserReducer =(state=initiaUsertState,action)=>{
//     switch (action.type) {
//         case ADD_USER:
            
//            return{
//            users:[...state.users,action.payload],
//             // count:state.count+1
//            }
    
//         default:
//            return state
//     }

// }
// const rootReducet =combineReducers({
//     incrementR:counterReducer,
//     adduserR:addUserReducer
// })
    

// //store
// const store=createStore(rootReducet,applyMiddleware(logger))
// store.subscribe(()=>{
//     console.log(store.getState())
// })

// store.dispatch(addUser("Alam"))
// store.dispatch(incrementAction ())
// store.dispatch(addUser("rakib"))
// store.dispatch(incrementAction ())
// // store.dispatch(incrementAction())
// // store.dispatch(incrementAction())