export class Quote {
showDescription: boolean;
numberOfLikes: number;
numberOfDislikes: number;
constructor(public id: number, public Quotess: string, public description: string, public completeDate: Date) {
this.showDescription = false;
}
}
