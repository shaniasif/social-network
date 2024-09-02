import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
  @Input() postId: number | null = null; // מזהה הפוסט הנבחר, יכול להיות מספר או null
  @Input() postTitle: string = ''; // כותרת הפוסט הנבחר, תמיד מחרוזת
  @Output() commentAdded = new EventEmitter<void>(); // אירוע שנפלט כאשר התגובה מתווספת
  
  commentForm: FormGroup; // טופס התגובה

  constructor(private fb: FormBuilder) {
    // יצירת הטופס עם השדות הנדרשים
    this.commentForm = this.fb.group({
      authorName: [''], // שם המחבר
      postTitle: [''], // כותרת הפוסט
      commentContent: [''] // תוכן התגובה
    });
  }

  // פונקציה שמתעדכנת כאשר נכנסים שינויים בקומפוננטה
  ngOnChanges(): void {
    if (this.postId !== null) {
      // עדכון כותרת הפוסט בטופס לפי הכותרת שהתקבלה בקלט
      this.commentForm.patchValue({
        postTitle: this.postTitle
      });
    }
  }

  // פונקציה לשליחת התגובה
  submitComment(): void {
    console.log(this.commentForm.value); // הצגת ערכי הטופס בקונסול לצורך בדיקה
    this.commentAdded.emit(); // שליחת אירוע שמציין שהתגובה נוספה
  }
}
