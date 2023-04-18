import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit{
  tweets: string[] = ['Hello word','Salve Salve']

  constructor(private service: MessagesService){
  }
  
  ngOnInit(): void {
    this.tweets = this.service.getMessages()
  }
}
