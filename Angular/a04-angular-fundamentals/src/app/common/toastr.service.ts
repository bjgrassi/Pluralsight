import { Injectable } from '@angular/core';

declare let toastr: any 
//its okay to declare global variable inside the service
//because its only scoped here

@Injectable()
export class ToastrService {
  success(message: string, title?: string) {
    toastr.success(message, title)
  }
  info(message: string, title?: string) {
    toastr.info(message, title)
  }
  warning(message: string, title?: string) {
    toastr.warning(message, title)
  }
  error(message: string, title?: string) {
    toastr.error(message, title)
  }
}