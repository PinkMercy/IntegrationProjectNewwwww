import { Component, OnInit } from '@angular/core';
import { EventService as ev } from '../../event/service/event.service';
import { IEvent } from 'src/app/event/model/ievent';
// import { ClubsService as cl } from '../../clubs/service/clubs.service';
// import { IClubs } from 'src/app/clubs/model/iclubs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss',
    '../../../assets/css/bootstrap.css',
  ]
})



export class HomepageComponent implements OnInit {
  clubs = [
    { nom: 'enactus', desc: 'This is the content of card 1.' , img: '../../../assets/images/enactus.jpg'},
    { nom: 'IEEE', desc: 'This is the content of card 2.', img: '../../../assets/images/ieee.jpg'},
    { nom: 'mit', desc: 'This is the content of card 3.', img: '../../../assets/images/mit.jpg'},
    { nom: 'shryss', desc: 'This is the content of card 4.' , img: '../../../assets/images/shryss.jpg'},
  ];

  events = [
    { libelle: 'Stargate', description: 'This is the content of card 1.' , img: '../../../assets/images/stargate.png'},
    { libelle: 'Education Society Infosession', description: 'This is the content of card 2.', img: '../../../assets/images/ieee.jpg'},
    { libelle: 'Free Lance', description: 'This is the content of card 3.', img: 'https://www.shryss.com/wp-content/uploads/2020/07/SHRYSS-LOGO-1.png'},
    { libelle: 'deep into knowledge', description: 'This is the content of card 4.' , img: 'https://www.enactus.org/wp-content/uploads/2020/09/Enactus-Logo-Color-1.png'},
  ];
  
   //events!: IEvent[];
  // clubss!: IClubs[];
  // private clubsService : cl
  constructor(private evenmentsService: ev ) { }
  ngOnInit(): void {
    // this.evenmentsService.getAllEvents().subscribe(events => {
    //   this.events = events;
    // })
  }
}
