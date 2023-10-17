
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('loginModalElement') loginModalElement: any;

  constructor(private modalService: NgbModal) {}
  ngAfterViewInit(): void {
    this.openModalOnLoad();
  }
  title = 'login-app';

  openModalOnLoad() {
    // Open the modal on app load
    this.modalService.open(LoginComponent, {
      centered: true, // Center the modal vertically and horizontally
      backdrop: 'static', // Prevent closing the modal by clicking outside
    });
  }
}
