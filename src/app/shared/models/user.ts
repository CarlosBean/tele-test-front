export interface IUser {
    _id?: string,
    name?: string,
    email?: string,
    role?: string,
    status?: boolean,
    google?: boolean,
}

export class User implements IUser {
    constructor(
        public _id?: string,
        public name?: string,
        public email?: string,
        public role?: string,
        public status?: boolean,
        public google?: boolean,
    ) { }
}