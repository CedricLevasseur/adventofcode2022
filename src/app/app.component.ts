import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InputreaderService } from './inputreader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'adventofcode2022';
  data: string = "";

  constructor(private inputReaderService: InputreaderService) {

  }

  ngOnInit(): void {
    console.log("ngOnitInit()");
    this.inputReaderService.read(1)
      .subscribe(res => { console.log("end of http call" + (res)); this.data = res; }, err => { console.log('error', err); });;
    console.log("data=", this.data);
  }

  ngAfterViewInit(): void {

  }
}
