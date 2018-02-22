import { Iuser } from './iuser';
export interface Ipost {

    id?: number;
    title: String;
    img: String;
    desc: string;
    text:string;
    userId: number;
    //user: Iuser;
    onLine: boolean;
    level: number;
    tagIds: number[];

}
