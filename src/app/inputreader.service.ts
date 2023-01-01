import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InputreaderService {

  content: string = "azerty";
  constructor(private httpClient: HttpClient) { }

  read(n: number) {
    return this.readFile("" + n);
  }

  readFile(filename: string): Observable<string> {
    console.log("running readFilename(" + filename + ")");
    return this.httpClient.get("assets/data/" + filename + ".txt", { responseType: 'text' })
      .pipe(
        tap({
          next: (data) => { console.log(data); },
          error: (err) => console.log(err)
        })
      )


  }
}
