import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public data: TestItem[] = [new TestItem('test 1')];

  constructor() { }

  ngOnInit(): void {
  }

}

export class TestItem {
  public test: string;

  constructor(test: string) {
    this.test = test;
  }
}
