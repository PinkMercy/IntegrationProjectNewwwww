import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.scss']
})

export class EventdetailComponent implements OnInit{
  eventId: string;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('id');
  }

}
