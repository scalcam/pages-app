import { Injectable } from '@angular/core';
import { Person } from './person';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personsRef: AngularFireList<any>;
  personRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}

  /* Create person */
  AddPerson(person: Person) {
    this.personsRef.push({
      name: person.name,
      age: person.age,
      weight: person.weight
    })
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  /* Get person */
  GetPerson(id: string) {
    this.personRef = this.db.object('persons-list/' + id);
    return this.personRef;
  }  

  /* Get person list */
  GetPersonList() {
    this.personsRef = this.db.list('persons-list');
    return this.personsRef;
  }

  /* Update person */
  UpdatePerson(id, person: Person) {
    this.personRef.update({
      name: person.name,
      age: person.age,
      weight: person.weight
    })
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  /* Delete person */
  DeletePerson(id: string) {
    this.personRef = this.db.object('persons-list/' + id);
    this.personRef.remove()
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  // Error management
  private errorMgmt(error) {
    console.log(error)
  }
}
