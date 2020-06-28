import faker from 'faker';
import {Marker} from './CustomMap';

export default class User implements Marker {
  public name: string;
  public location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent() : string {
      return `User name : ${this.name}`
  }
}