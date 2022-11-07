export enum ActionsTheme{
    CHANGE="CHANGE"
}
export type Change = {
    type: ActionsTheme.CHANGE,
    payload:boolean
}
export type ActionsThemeChange = Change

export const changeTheme = (payload: boolean) => {
    return {
        type: ActionsTheme.CHANGE,
        payload
    }
}