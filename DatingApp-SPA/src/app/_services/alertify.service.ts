import { Injectable } from '@angular/core';
import { ok } from 'assert';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }


  confirm(message: string, okCalback: () => any) {
    alertify.confirm(message , function (e) {
      if (e) {
        okCalback();
      } else {

      }
    });
  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warining(message: string) {
    alertify.warining(message);
  }

  message(message: string) {
    alertify.message(message);
  }

}
