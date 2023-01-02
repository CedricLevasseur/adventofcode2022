import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { InputreaderService } from './inputreader.service';
import { Elf } from './elf';
import { Challenge } from './challenge';

describe('InputreaderService', () => {
  let service: InputreaderService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]

    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(InputreaderService);
    Elf.order = 1;
    Challenge.order = 1;
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test Read', () => {
    // given
    let result: string = "";
    const mock: string = `aaa
bbbb
ccc`

    // when
    service.read(1).subscribe((res) => result = res);
    // then
    const req = httpTestingController.expectOne('assets/data/1.txt');
    expect(req.request.method).toEqual('GET');
    req.flush(mock);
    expect(result.split('\n')).toEqual(["aaa", "bbbb", "ccc"]);
  });
});
