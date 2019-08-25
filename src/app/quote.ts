export class Quote {
showDescription: boolean;
public upvoteS: number;
public downvotes: number;
constructor(public id: number,public Quotess:string, public description:string,public completeDate: Date){
this.showDescription=false;    
this.upvoteS = 0;
this. downvotes = 0;
}
}
