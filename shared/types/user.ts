import { GenericInterface } from "./common";

export interface IUser extends GenericInterface {
    name: string;
    level: 'admin' | 'comercial' | 'operational';
    email: string;
    googleToken?: string;

}