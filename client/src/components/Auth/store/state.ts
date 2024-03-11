import {atom} from "recoil";

export const loginDetailsState=atom({
    key:"loginDetailsState",
    default:[]
})
export const loginFormState=atom<any>({
    key:"loginDetailsState",
    default:{}
})
export const signUpFormState=atom<any>({
    key:"signUpFormState",
    default:{}
})