export enum ActionSearch{
    SEARCH='SEARCH'
}



export const searchReducer = (state='',action:any)=>{
    switch(action.type){
        case ActionSearch.SEARCH:
            return state+=action.payload;
        default:
            return state;
    }
};