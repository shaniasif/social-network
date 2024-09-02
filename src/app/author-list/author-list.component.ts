import { Component, EventEmitter, Output } from '@angular/core';

// הגדרת ממשק למחברים, כולל מזהה, שם ותמונה
interface Author {
  id: number;
  name: string;
  picture: string;
}

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
  @Output() authorSelected = new EventEmitter<number>(); // אירוע שמתרחש כאשר מחבר נבחר

  // רשימת המחברים
  authors: Author[] = [
    { id: 1, name: 'Alice', picture: 'assets/alice.jpg' },
    { id: 2, name: 'Bob', picture: 'assets/bob.jpg' },
    { id: 3, name: 'David', picture: 'assets/david.jpg' },
    { id: 4, name: 'Yael', picture: 'assets/yael.jpg' },
    { id: 5, name: 'Eli', picture: 'assets/eli.jpg' }
  ];

  // פונקציה לבחירת מחבר
  selectAuthor(authorId: number): void {
    this.authorSelected.emit(authorId); // שליחה של מזהה המחבר הנבחר
  }
}
