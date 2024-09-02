import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  commentForm: FormGroup; // טופס התגובה
  postId: number | null = null; // מזהה הפוסט הנבחר
  postTitle: string = ''; // כותרת הפוסט הנבחרת

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // יצירת הטופס עם השדות הנדרשים
    this.commentForm = this.fb.group({
      authorName: [''], // שם המחבר
      postTitle: [{ value: '', disabled: true }], // כותרת הפוסט (נכנסת כלא ניתנת לעריכה)
      commentContent: [''] // תוכן התגובה
    });
  }

  ngOnInit(): void {
    // קבלת פרמטרים מה-URL
    this.route.queryParams.subscribe(params => {
      this.postId = params['postId'] || null;
      this.postTitle = params['postTitle'] || '';

      // עדכון כותרת הפוסט בטופס לפי הכותרת שהתקבלה בקלט
      this.commentForm.patchValue({
        postTitle: this.postTitle
      });
    });
  }

  // פונקציה לשליחת התגובה
  submitComment(): void {
    if (this.commentForm.valid) {
      console.log(this.commentForm.value); // הצגת ערכי הטופס בקונסול לצורך בדיקה
      // שליחת התגובה תתנהל כאן

      // ניווט לאחר שליחת התגובה אם נדרש
      this.router.navigate(['/comments']); // נווט לדף התגובות או לדף אחר
    }
  }
}
