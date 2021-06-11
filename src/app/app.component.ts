import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-demo-app';

  tools = [
    {
      id: 0,
      title: 'Title 0',
      desc: 'Description',
      cat: 'Category 1',
      year: '2012',
    },
    {
      id: 1,
      title: 'Title 1',
      desc: 'Description',
      cat: 'Category 1',
      year: '2013',
    },
    {
      id: 2,
      title: 'Title 2',
      desc: 'Description',
      cat: 'Category 2',
      year: '2012',
    },
    {
      id: 3,
      title: 'Title 3',
      desc: 'Description',
      cat: 'Category 3',
      year: '2020',
    },
    {
      id: 4,
      title: 'Title 4',
      desc: 'Description',
      cat: 'Category 1',
      year: '2020',
    },
    {
      id: 5,
      title: 'Title 4',
      desc: 'Description',
      cat: 'Category 1',
      year: '2012',
    },
    {
      id: 6,
      title: 'Title 4',
      desc: 'Description',
      cat: 'Category 1',
      year: '2018',
    },
    {
      id: 7,
      title: 'Title 4',
      desc: 'Description',
      cat: 'Category 1',
      year: '2018',
    },
  ];
  groupedObservable: any;
  subscribedValue: any;
  groupedItem: any[] = [];

  ngOnInit() {
    const example = from(this.tools);

    this.groupedObservable = example.pipe(
      groupBy((person) => person.year),
      // return each item in group as array
      mergeMap((group) => group.pipe(toArray()))
    );

    this.subscribedValue = this.groupedObservable.subscribe((val) => {
      console.log(val);
     this.groupedItem.push(val);
      console.log(this.groupedItem);
    });
  }
}
