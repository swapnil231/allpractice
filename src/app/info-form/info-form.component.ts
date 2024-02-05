import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { DateAdapter } from '@angular/material/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { samaAsValidator } from '../shared/validators/customValidatorsReactiveForm';
import { BehavioursubjectService } from '../shared/services/behavioursubject.service';

interface nationality {
  value: string;
  viewValue: string;
}

export class imagesnippet {
  src!: any;
  file!: any;
  status!: string;
  constructor(file?: File) {
    this.file = file;
    this.status = 'INIT';
  }
}

export interface UserModel {
  id: any;
  name: any;
  email: any;
  mobileNo: any;
  conformMobileNo: any;
  salary: any;
  Nationality: any;
  location: any;
  isworking: any;
  gender: any;
  birthdate: any;
  image: any;
  task: any;
}

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.scss'],
})
export class InfoFormComponent {
  inputdata: any;
  filereader = new FileReader();
  selectedimage!: imagesnippet;
  imagename = '';
  value = false;

  constructor(
    private matdilog: MatDialogRef<InfoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dateadaptor: DateAdapter<Date>,
    private behsubject: BehavioursubjectService,
    private openMatdilog: MatDialog
  ) {
    this.dateadaptor.setLocale('en-GB');
  }

  ngOnInit(): void {
    this.inputdata = this.data;
    if (this.inputdata.title == 'editdata') {
      this.setpopupdata();
      // this.value = true;
    } else {
      this.myform.reset();
      // this.value = false;
    }
  }

  nation: nationality[] = [
    { value: 'indian', viewValue: 'indian' },
    { value: 'others', viewValue: 'others' },
  ];

  closedilog() {
    this.matdilog.close();
  }

  myform = this.fb.group<UserModel>(
    {
      id: ['', Validators.required],
      name: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', Validators.required],
      conformMobileNo: ['', Validators.required],
      location: ['', Validators.required],
      birthdate: ['', Validators.required],
      isworking: [false],
      gender: ['', Validators.required],
      Nationality: ['', Validators.required],
      salary: ['', Validators.required],
      image: ['', Validators.required],
      task: ['', Validators.required],
    },
    { validators: [samaAsValidator(['mobileNo', 'conformMobileNo'])] }
  );

  dataurl: any;
  OnImageLoad($event: any) {
    const file = $event.target.files[0];

    this.filereader.readAsDataURL(file);
    this.selectedimage = new imagesnippet(file);
    console.log(this.selectedimage);
    console.log(file);

    if (!this.validatefile(this.selectedimage.file.name)) {
      alert('file format not supported');
      return;
    }

    this.filereader.addEventListener('load', () => {
      this.dataurl = this.filereader.result;
      console.log(this.dataurl);
      this.myform.controls.image.patchValue(this.dataurl);
    });
  }

  get formcontrol() {
    return this.myform.controls;
  }

  saveformdata() {
    this.myform.markAllAsTouched();
    if (this.image?.pristine && this.image.value == '') {
      alert('please select image it is required');
      return;
    }

    if (this.myform.invalid) {
      alert('form invalid,data incomplete');
      return;
    }

    if (this.myform.valid) {
      alert('sucessfull');
    }

    this.behsubject.setvalue(this.myform.value);
    // this.matdilog.close();
  }

  getcheckboxvalue($event: MatCheckboxChange) {
    this.myform.controls.isworking.setValue($event.checked);
  }

  validatefile(name: string) {
    let ext = name.substring(name.lastIndexOf('.') + 1);
    if (
      ext.toLocaleLowerCase() === 'jpeg' ||
      ext.toLocaleLowerCase() === 'png' ||
      ext.toLocaleLowerCase() === 'jpg'
    ) {
      return true;
    } else {
      return false;
    }
  }

  geterrorid() {
    if (this.myform.controls.id.hasError('required')) {
      return 'you must enter a value';
    }
    return '';
  }

  geterrorname() {
    if (this.myform.controls.name.hasError('required')) {
      return 'you must enter a value';
    }
    if (this.myform.controls.name.hasError('maxlength')) {
      return 'max 10 character allowed';
    }
    return '';
  }
  geterroremail() {
    if (this.myform.controls.email.hasError('required')) {
      return 'you must enter a value';
    }
    if (this.myform.controls.email.hasError('email')) {
      return 'invalid email format';
    }
    return '';
  }
  geterrormobno() {
    if (this.myform.controls.mobileNo.hasError('required')) {
      return 'you must enter a value';
    }
    return '';
  }

  geterrorconfirmobno() {
    if (this.myform.controls.conformMobileNo.hasError('required')) {
      return 'you must enter a value';
    }
    return '';
  }
  geterrorsalary() {
    if (this.myform.controls.id.hasError('required')) {
      return 'you must enter a value';
    }
    return '';
  }
  geterrornationality() {
    if (this.myform.controls.Nationality.hasError('required')) {
      return 'you must enter a value';
    }
    return '';
  }

  geterrorlocation() {
    if (this.myform.controls.id.hasError('required')) {
      return 'you must enter a value';
    }
    return '';
  }
  geterrorgender() {
    if (this.myform.controls.gender.hasError('required')) {
      return 'you must select a value';
    }
    return '';
  }
  geterrorbirthdate() {
    if (this.myform.controls.birthdate.hasError('required')) {
      return 'you must enter a value';
    }
    return '';
  }
  geterrorimage() {
    if (this.myform.controls.image.value === '') {
      return 'you must select a image';
    }
    return '';
  }
  geterrortask() {
    if (this.myform.controls.task.hasError('required')) {
      return 'you must give value';
    }
    return '';
  }

  get image() {
    return this.myform.get('image');
  }

  getErrorOnForm() {
    if (this.myform.hasError('sameAs')) {
      return 'mobileNo and confirmMobileNo Not Same';
    }
    return '';
  }

  editdata: any;

  setpopupdata() {
    this.behsubject.getvalue2().subscribe({
      next: (res: any) => {
        this.editdata = res;

        console.log(this.editdata, 'editdata');
        this.myform.setValue({
          id: this.editdata.id,
          name: this.editdata.name,
          salary: this.editdata.salary,
          email: this.editdata.email,
          mobileNo: this.editdata.mobileNo,
          conformMobileNo: this.editdata.mobileNo,
          Nationality: this.editdata.Nationality,
          location: this.editdata.location,
          isworking: this.editdata.isworking,
          gender: this.editdata.gender,
          birthdate: this.editdata.birthdate,
          image: this.editdata.image,
          task: this.editdata.task,
        });
      },
    });
  }

  update() {
    console.log(this.myform.value);
    this.behsubject.setvalue(this.myform.value);
  }
}
