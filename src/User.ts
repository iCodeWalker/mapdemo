import faker from "faker";
import { Mappable } from "./CustomMap";

// --------->   By adding "implements" in code
// --------->   We want every user ewe create to satisfy Mappable interface
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),

      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User name is: ${this.name} `;
  }
}
