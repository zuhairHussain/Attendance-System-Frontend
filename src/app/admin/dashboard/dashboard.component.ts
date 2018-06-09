import { Component } from '@angular/core';
import {WebcamImage} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';
@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

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
      console.log('images', webcamImage.imageAsDataUrl)
    }
  
    public get triggerObservable(): Observable<void> {
      return this.trigger.asObservable();
    }

}
