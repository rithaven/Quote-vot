import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'very next level of your life will demand a different you', 'click on upvote button or downvote button', new Date (2019,8,24)),
  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  preNum: number
lastNum: number
counter: number

  upvote(i){
    this.quotes[i].upvoteS+=1
  }
  downvote(i){
    this.quotes[i].downvotes+=1
  }
  deleteQuotes(isComplete, index) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].Quotess}?`)

    if (toDelete) {
      this.quotes.splice(index,1)
    }
  }

addNewQuote (quote){
  let quotelength = this.quotes.length;
  quote.id = quotelength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)

}

highestUpvote(){
  this.preNum = 0
  this.lastNum = 0
  for (this.counter =0 ; this.counter < this.quotes.length;this.counter++){
    this.lastNum = this.quotes[ this.counter].upvoteS;
    if(this.lastNum > this.preNum){
      this.preNum = this.lastNum}
    }
return this.preNum
  }

constructor() { }

ngOnInit() {
}

}
