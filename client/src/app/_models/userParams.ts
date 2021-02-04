import { User } from "./user";

export class UserParams {
    gender: string;
    minage = 18;
    maxage = 99;
    pageNumber = 1;
    pageSize = 5;
    orderBy = 'lastActive';

    /**
     *
     */
    constructor(user: User) {
        this.gender = user.gender === 'female' ? 'male' : 'female';
        
    }

}