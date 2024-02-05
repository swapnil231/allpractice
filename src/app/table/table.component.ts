import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { InfoFormComponent, UserModel } from '../info-form/info-form.component';
import { BehavioursubjectService } from '../shared/services/behavioursubject.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Output() data: EventEmitter<any> = new EventEmitter();
  @Input() sendDataToTable: any;
  datafromcard: any;
  resData: any[] = [
    {
      id: 121,
      name: 'om prakash',
      email: 'om@gmail.com',
      mobileNo: '9090',
      salary: 50000,
      Nationality: 'indian',
      location: 'pune',
      isworking: true,
      gender: 'male',
      birthdate: Date(),
      image: '',
      action: '',
      task: 1,
    },
  ];
  dataSource = new MatTableDataSource<any>(this.resData);

  constructor(
    private behsubject: BehavioursubjectService,
    private matdilog: MatDialog
  ) {
    this.dataSource.sort = this.sort;
  }
  ngOnChanges(changes: any): void {
    this.behsubject.getvalue().subscribe({
      next: (res: any) => {
        if (res.id) {
          this.resData.forEach((el) => {
            if (el.id == res.id) {
              const x = this.resData.indexOf(el.id);
              console.log(x);
              this.resData.splice(x, 1);
            }
          });
          this.resData.push(res);
          console.log(res, 'res');
          this.dataSource.data = this.resData;
          this.dataSource.paginator = this.pagination;
          this.dataSource.sort = this.sort;

          console.log(this.resData);
          this.matdilog.closeAll();
        }
      },
    });
    if (this.sendDataToTable) {
      this.datafromcard = this.sendDataToTable;

      this.resData.forEach((el) => {
        if (el.id == this.datafromcard.id) {
          const index = this.resData.indexOf(this.datafromcard.name);
          this.resData.splice(index, 1, this.datafromcard);
        }
      });
    }
  }

  displayedColumns: any = [
    'no',
    'id',
    'name',
    'email',
    'mobileNo',
    'task',
    'salary',
    'Nationality',
    'location',
    'isworking',
    'gender',
    'birthdate',
    'image',
    'action',
  ];

  sendrowdata(element: any) {
    console.log(element);

    this.data.emit(element);
  }

  del(el2: any) {
    this.resData.forEach((el, i) => {
      if (el.id == el2.id) {
        this.resData.splice(i, 1);
        this.dataSource.data = this.resData;
      }
    });
  }

  edit(el: any, image: any) {
    console.log(image);
    this.behsubject.setvalue2(el);
    console.log(el), this.openpopup('editdata', el);
  }

  openpopup(title: any, value: any) {
    this.matdilog.open(InfoFormComponent, {
      width: 'auto',
      height: '120vh',
      data: {
        title: title,
        data: value,
      },
    });
  }

  @ViewChild(MatPaginator) pagination!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  filter($event: KeyboardEvent) {
    const value = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
}
