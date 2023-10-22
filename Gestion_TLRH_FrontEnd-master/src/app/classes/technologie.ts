import {Collaborateur} from "./collaborateur";

export class Technologie {
  id!:number;
  nom!: string;
  niveau!:number;
  collaborateurs!:Collaborateur[];
}
