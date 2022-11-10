

export enum ActionFormSelect{
    SELECT='SELECT'
}
export type Select={
    type:ActionFormSelect.SELECT,
    payload:string
}
export const getRegion=(region:string)=>{
   return {
    type:ActionFormSelect.SELECT,
    payload:region
   }
}