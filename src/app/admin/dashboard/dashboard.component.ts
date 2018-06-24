import { Component } from '@angular/core';
import {WebcamImage} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';
import { DataService } from '../../@core/data/data.service';
@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private service: DataService) {}
  public multipleImages;
  public img;
  public response;
  public studentData = 1;
  private classes = []
    // toggle webcam on/off
    public showWebcam = false;

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
      this.multipleImages = webcamImage.imageAsDataUrl
      this.img = webcamImage.imageAsBase64
      
      console.log('images', webcamImage.imageAsBase64)
    }
  
    public get triggerObservable(): Observable<void> {
      return this.trigger.asObservable();
    }

    ngOnInit(){
      const data = this.service.getClasses()
      .subscribe(data => {
        this.classes = data;
      },
      err => {
        console.log(err)
      });
    }

    selectItem(data){
      this.studentData = data;
    }

    submit(){
      this.service.attendance({imageBase64 : this.img, student_class : this.studentData})
      .subscribe(data => {
        console.log(data)
        this.response = data;
      },
      err => {
        console.log(err)
        //this.response = JSON.stringify(err.error);
      },
      () => {
        //this.response = 'Student has been trained';
    })
    }

}
