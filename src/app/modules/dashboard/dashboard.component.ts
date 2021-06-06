import { StatsComponentService } from './../../services/stats.component.service';
import { Component, OnInit } from '@angular/core';
import { IconComponentService } from 'src/app/services/icon.component.service';
import { addressMock } from 'src/app/shared/mocks/address/address-mock';
import { invoiceMock } from 'src/app/shared/mocks/invoice/invoice-mock';
import { movieMock } from 'src/app/shared/mocks/movie/movie-mock';
import { userMock } from 'src/app/shared/mocks/user/user-mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [StatsComponentService]
})
export class DashboardComponent implements OnInit {

  invoices = invoiceMock;
  users = userMock;
  movies = movieMock;
  addresses = addressMock;

  /* Users */
  totalUsers: number;
  totalActiveUsers: number;
  totalVerifyUsers: number;
  totalWaitingVerifyUsers: number;
  totalUnactiveUser: number;

  /* Movies */
  totalMovies: number;
  totalBestMoviesRating: number;
  totalMostViewedMovies: number; 
  totalLowestRatedMovies: number;
  totalVeryBadRatedMovies: number;
  currentlyReadingMovies: number;

  constructor(
    public iconService: IconComponentService,
    private statsService: StatsComponentService
  ) {
    /* Users */
    this.totalUsers = 0;
    this.totalActiveUsers = 0;
    this.totalVerifyUsers = 0;
    this.totalWaitingVerifyUsers = 0;
    this.totalUnactiveUser = 0;
    /* Movies */
    this.totalMovies = 0;
    this.totalBestMoviesRating = 0; // A faire
    this.totalMostViewedMovies = 0; // A faire
    this.totalLowestRatedMovies = 0; // A faire
    this.totalVeryBadRatedMovies = 0; // A faire
    this.currentlyReadingMovies = 0; // A faire
  }

  ngOnInit(): void {
    this.getCountAllUsers();
    this.getCountActiveUsers();
    this.getCountVerifyUsers();
    this.getCountUsersAwaitingVerify();
    this.getCountUsersUnactiveActive();
    this.getCountAllMovies();
  }

  getCountAllUsers() {
    this.totalUsers = this.statsService.getCountAllUsers(this.users);
  }

  getCountActiveUsers() {
    this.totalActiveUsers = this.statsService.getCountActiveUsers(this.users);
  }

  getCountVerifyUsers() {
    this.totalVerifyUsers = this.statsService.getCountVerifiedUsers(this.users);
  }

  getCountUsersAwaitingVerify() {
    this.totalWaitingVerifyUsers = this.statsService.getCountUsersAwaitingVerify(this.users);
  }

  getCountUsersUnactiveActive() {
    this.totalUnactiveUser = this.statsService.getCountUsersUnactiveActive(this.users);
  }

  getCountAllMovies() {
    this.totalMovies = this.statsService.getCountAllMovies(this.movies);
  }
}
