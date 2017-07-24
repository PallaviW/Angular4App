import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name='John';
posts: Post[];

hobbies:string[];

  constructor(private dataservice:DataService) {
    console.log('database connected..');
   }

  ngOnInit() {
    this.hobbies=['Read books','Watch movies','Listen to music'];
    this.dataservice.getPosts().subscribe((posts) => { 
      //console.log(posts);
      this.posts = posts;
    });
  }
    onClick(){
      this.name='Joe';
      this.hobbies.push('new hobby');
    
  }
    addHobby(hobby){
        this.hobbies.unshift(hobby);
        return false;
    }
    deleteHobby(hobby){
        for(let i=0;i<this.hobbies.length; i++){
          if(this.hobbies[i]==hobby){
            this.hobbies.splice(i,1);
          }
        }
    }

    
}

interface Post{
      body: string;
      id:number;
      title:string;
      userId:number;
    }