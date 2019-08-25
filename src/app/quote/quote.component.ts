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
    new Quote(2,'change your thought and you change your world. Norman vincent peale', 'click on like button or unlikebutton', new Date (2019,6,24)),
    new Quote(3,'very next level of your life will demand a different you', 'click on upvote button or downvote button', new Date (2019,3,24)),
    new Quote(4,'change your thought and you change your world. Norman vincent peale', 'click on like button or unlikebutton', new Date (2019,7,24)),
  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
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
constructor() { }

ngOnInit() {
}

}
