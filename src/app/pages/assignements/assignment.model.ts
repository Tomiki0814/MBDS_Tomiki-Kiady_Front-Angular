export class Assignment {
    _id!: string;
    id!: number;
    idEtudiant!:{
        nom:string
    }
    idMatiere!:{
        nom:string
    }
    nom!: string;
    dateDeRendu!: Date;
    rendu!: boolean;
    note!: number;
}

