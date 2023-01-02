import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Challenge } from './challenge';
import { InputreaderService } from './inputreader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'adventofcode2022';
  data: string = "";
  challenges: Challenge[] = [];

  constructor(private inputReaderService: InputreaderService) {
    for (let i = 1; i <= 25; i++) {
      this.challenges.push(new Challenge());
    }
  }

  ngOnInit(): void {
    console.log("ngOnitInit()");
    this.inputReaderService.read(1)
      .subscribe(res => { this.data = res; }, err => { console.log('error', err); });;
  }

  ngAfterViewInit(): void {

  }
}
