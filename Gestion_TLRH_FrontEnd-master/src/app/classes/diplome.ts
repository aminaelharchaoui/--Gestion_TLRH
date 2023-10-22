import {Ecole} from "./ecole";

export class Diplome {

  id !: number;
  type !: string;
  niveau!: number;
  promotion !: number;
  ecole !:Ecole;
}
