import { Component } from '@angular/core';

// הגדרת ממשק לפוסטים, כולל מזהה, מזהה מחבר, כותרת ותוכן
interface Post {
  id: number;
  authorId: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedAuthorId: number | null = null; // מזהה המחבר שנבחר, אם קיים
  selectedPostId: number | null = null; // מזהה הפוסט שנבחר, אם קיים
  selectedPostTitle: string = ''; // כותרת הפוסט שנבחר

  // פונקציה שמתעדכנת כאשר נבחר מחבר חדש
  onAuthorSelected(authorId: number): void {
    this.selectedAuthorId = authorId; // שמירה על מזהה המחבר שנבחר
    this.selectedPostId = null; // ביטול הבחירה של פוסט
    this.selectedPostTitle = ''; // ביטול הכותרת של פוסט
  }

  // פונקציה שמתעדכנת כאשר נבחר פוסט חדש
  onPostSelected(post: Post): void {
    this.selectedPostId = post.id; // שמירה על מזהה הפוסט שנבחר
    this.selectedPostTitle = post.title; // שמירה על כותרת הפוסט שנבחר
  }
}
