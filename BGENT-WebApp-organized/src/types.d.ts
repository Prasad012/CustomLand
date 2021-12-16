interface IUserState {
    emailId: string,
    name: string,
    userToken: string
}

type IAction = {
    type: string,
    payload: any
}