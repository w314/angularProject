import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/Animal'

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit {
  title: string = 'Animals in the Zoo';
  animals: Animal[] = [];  

  constructor() { }

  ngOnInit(): void {
    this.animals = [
      { id: 1, name: 'frog', diet: 'flies', votes: 0},
      {id: 2, name: 'stork', diet: 'frogs', votes: 0}
    ]    
  }

  likeAnimal(animal: Animal): void {
    alert(`You liked ${animal.name}!`)
  }
}
