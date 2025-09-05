
export interface User {
    id:       string;
    email:    string;
    fullName: string;
    isActive: boolean;
    roles:    string[];
}

export interface LoginI {
    email:string;
    password:string;
    fullName:string;
}

