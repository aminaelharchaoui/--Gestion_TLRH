import {Technologie} from "./technologie";
import {Role} from "./role";
import {Archivage} from "./archivage";
import {Diplome} from "./diplome";
import {Compte} from "./compte";
import {Certificat} from "./certificat";

export class Collaborateur {
  matricule!: number;
  email !: string;
  managerRH !: Collaborateur;
  sexe!: string;
  site!: string;
  technologies  !: Technologie[];
  roles !: Role[];
  archivages!: Archivage[];
  diplomes !: Diplome[];
  statut !: string;
  compte !:Compte ;
  certificats !: Certificat[];
  dateParticipation!: Date;
  seminaireIntegration !: boolean;
  abreviationCollaborateur !: string;
  ancien_Collaborateur !: boolean;
  nom!: string;
  posteActuel!: string;
  salaireActuel!: number;
  posteAPP !: string;
  prenom!: string;
  date_Embauche!: Date;
  ancienManagerRH!: string;
  date_Depart !: Date;
  bu!: string;
  mois_BAP!: string;

}
