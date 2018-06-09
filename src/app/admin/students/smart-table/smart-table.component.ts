import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { DataService } from '../../../@core/data/data.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      first_name: {
        title: 'First Name',
        type: 'string',
      },
      last_name : {
        title : 'Last Name',
        type: 'string',
      },
      username : {
        title : 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      student_class: {
        title: 'Class',
        type: 'number',
      },
    },
    hideSubHeader : true
  };

  source: LocalDataSource = new LocalDataSource();

  private dta = [
  ];

  constructor(private service: DataService) {
    const data = this.service.getStudents()
    .subscribe(data => {
      this.dta = data;
    },
    err => {
      console.log(err)
    },
    ()=> {
      this.source.load(this.dta);
    })
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
