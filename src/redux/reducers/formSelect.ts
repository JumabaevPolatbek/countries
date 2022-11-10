
export const regionState = ['Asia','Europe','Americas','Ocenia','Polar','Africa'];

const defaultState={
    region:''
}

export const formSelectReducer=(state=defaultState,action:any)=>{
    switch(action.type){
        case 'SELECT':
            return {...state,region:action.payload!=='All'?action.payload:''};
        default:
            return state
    }
}