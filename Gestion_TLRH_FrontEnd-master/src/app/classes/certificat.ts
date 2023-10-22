import {Collaborateur} from "./collaborateur";
export class Certificat {

  id!: number;
  nom!: string;
  date!: Date;
  collaborateurs!:Collaborateur[];
}
