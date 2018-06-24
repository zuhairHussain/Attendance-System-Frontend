import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import { DataService } from '../../../@core/data/data.service';
import {WebcamImage} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./train-student.component.scss'],
  templateUrl: './train-student.component.html',
})
export class TrainStudentsComponent implements OnInit {
  @Input() multiple: boolean = true;
  @ViewChild('fileInput') inputEl: ElementRef;
  constructor(private service: DataService) {}

  response;
  private students = []
  private photo;
  private studentData = {
    user : 1,
    url : []
  }

  ngOnInit(){
    const data = this.service.getStudents()
    .subscribe(data => {
      this.students = data;
    },
    err => {
      console.log(err)
    });
  }

  upload() {
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    console.log(inputEl.files[0])
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) { // a file was selected
        for (let i = 0; i < fileCount; i++) {
          formData.append('photo', inputEl.files.item(i));
          const data = this.service.addPhoto(formData)
          .subscribe(data => {
            console.log(data)
            let d = JSON.stringify(data);
            this.studentData.url.push(JSON.parse(d).photo)
          },
          err => {
            console.log(err)
            this.response = JSON.stringify(err.error);
          },
          () => {
            this.response = 'Student has been created';
          })
        }
        
    }
  }

  selectItem(data){
    this.studentData.user = data;
  }

  train(){
    console.log(this.studentData.url)
    for (let i = 0; i < this.studentData.url.length; i++) {
      this.service.train({user : this.studentData.user, url : this.studentData.url[i]})
      .subscribe(data => {
        console.log(data)
      },
      err => {
        console.log(err)
        this.response = JSON.stringify(err.error);
      },
      () => {
        this.response = 'Student has been trained';
    })
    }
    
  }


  // web cam
  public multipleImages = []

  // toggle webcam on/off
  public showWebcam = true;

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info("received webcam image", webcamImage);
    this.webcamImage = webcamImage;
    this.multipleImages.push(webcamImage.imageAsDataUrl)
    console.log('images', webcamImage.imageAsBase64)
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}
