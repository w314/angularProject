import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../models/Animal'

@Component({
  selector: 'app-zoo-animal',
  templateUrl: './zoo-animal.component.html',
  styleUrls: ['./zoo-animal.component.css']
})
export class ZooAnimalComponent implements OnInit {

  @Input() animal: Animal;
  @Output() likeAnimal: EventEmitter<Animal> = new EventEmitter;

  constructor() {
    this.animal = {
      id: 0,
      name: '',
      diet: '',
      votes: 0,
    }
  }

  ngOnInit(): void {
  }

  upvote(animal: Animal): void {
    animal.votes++;
  }

  like(animal: Animal): void {
    this.likeAnimal.emit(animal)
  }

}
