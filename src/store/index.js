import { createStoreHook } from "react-redux";

const reduceFun = (state = {counter: 0},actions) =>{
return state;
}


const store = createStoreHook(reduceFun);
export default store;