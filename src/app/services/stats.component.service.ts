import { MovieModel } from './../shared/models/movie.model';
import { UserModel } from './../shared/models/user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class StatsComponentService {

  /* Utilisateurs */

  getCountAllUsers(users: UserModel[]): number {
    if (users.length > 0) {
      return users.length;
    } else {
      return 0;
    }
  }

  getCountActiveUsers(users: UserModel[]): number {
    if (users.length > 0) {
      let activeUsersLenght = 0;
      for (let index = 0; index < users.length; index++) {
        if (users[index].isActive !== undefined && users[index].isActive !== null && users[index].isActive === true) {
          activeUsersLenght += 1;
        }
      }
      return activeUsersLenght;
    } else {
      return 0;
    }
  }

  getCountVerifiedUsers(users: UserModel[]): number {
    if (users.length > 0) {
      let verifyUserLenght = 0;
      for (let index = 0; index < users.length; index++) {
        if (users[index].isVerify !== undefined && users[index].isVerify !== null && users[index].isVerify === true) {
          verifyUserLenght += 1;
        }
      }
      return verifyUserLenght;
    } else {
      return 0;
    }
  }

  getCountUsersAwaitingVerify(users: UserModel[]): number {
    if (users.length > 0) {
      let awaitingVerifyUserLenght = 0;
      for (let index = 0; index < users.length; index++) {
        if (users[index].isVerify !== undefined && (users[index].isVerify === null || users[index].isVerify === false)) {
          awaitingVerifyUserLenght += 1;
        }
      }
      return awaitingVerifyUserLenght;
    } else {
      return 0;
    }
  }

  getCountUsersUnactiveActive(users: UserModel[]): number {
    if (users.length > 0) {
      let unactiveUserLenght = 0;
      for (let index = 0; index < users.length; index++) {
        if (users[index].isActive !== undefined && (users[index].isActive === null || users[index].isActive === false)) {
          unactiveUserLenght += 1;
        }
      }
      return unactiveUserLenght;
    } else {
      return 0;
    }
  }

  /* Films */

  getCountAllMovies(movies: MovieModel[]): number {
    if (movies.length > 0) {
      return movies.length;
    } else {
      return 0;
    }
  }


}
