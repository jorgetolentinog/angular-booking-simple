import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userInfo: any;

  constructor(
    private accountService: AccountService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.exists()) {
      this.accountService.userInfo().subscribe((userInfo) => {
        this.userInfo = userInfo;
      });
    }
  }
}
