import faker from 'faker';

import {Marker} from './CustomMap';

export default class Company implements Marker {
  public name: string;
  public catchPhrase: string;
  public location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
        <h1>Company name : ${this.name}</h1>
        <h3>Catchphrase : ${this.catchPhrase}</h3>
    </div>`;
  }
}
