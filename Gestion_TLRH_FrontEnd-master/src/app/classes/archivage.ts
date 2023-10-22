import {Collaborateur} from "./collaborateur";

export class Archivage {

  id !:number;
  dateArchivage !: Date;
  posteActuel !: string;
  posteApp !: string;
  salaire !: number;
  collaborateur !: Collaborateur;
}
