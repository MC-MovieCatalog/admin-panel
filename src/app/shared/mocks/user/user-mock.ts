import { UserModel } from '../../models/user.model';
import { usersData } from './users';

const users: UserModel[] = [];

for (const userItem of usersData) {
    const user = new UserModel();

    user.id = userItem.id;
    user.roles = userItem.roles;
    user.isVerify = userItem.isVerify;
    user.lastName = userItem.lastName;
    user.firstName = userItem.firstName;
    user.isActive = userItem.isActive;
    user.agreeTerms = userItem.agreeTerms;

    users.push(user);
}

export const userMock = users;
