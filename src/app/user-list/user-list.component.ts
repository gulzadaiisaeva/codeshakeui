import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from '../service/api.service';
import { User } from '../user'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  dtOptions: DataTables.Settings = {pagingType: 'full_numbers'};
  dtTrigger: Subject<any> = new Subject<any>();
  
  users: User[] = [];
  
  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.getSyncResults();
  }

  getSyncResults() {
    this.api.getSynchronizationResults().subscribe({
      error: () => { alert("Failed") },    // errorHandler 
      next: (data) => { 
        this.users = data; 
        this.dtTrigger.next(null);
      },     // nextHandler
  });
  }

}
