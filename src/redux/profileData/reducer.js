export const profileAction={
    username:"sai"
}

export const profileReducer=(state=profileAction,action)=>{
    switch(action.type)
    {
        case "CHANGE_USERNAME":
            return {...state,username:action.payload}
            default: return state
    }

}