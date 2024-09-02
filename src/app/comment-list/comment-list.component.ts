import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// הגדרת ממשק לתגובות, כולל מזהה, מזהה פוסט, שם מחבר ותוכן
interface Comment {
  id: number;
  postId: number;
  authorName: string;
  content: string;
}

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnChanges {
  @Input() postId: number | null = null; // מזהה הפוסט שנבחר
  @Input() postTitle: string = ''; // כותרת הפוסט שנבחר

  // רשימת התגובות
  comments: Comment[] = [
    { id: 1, postId: 1, authorName: 'Bob', content: 'Great overview of Angular!' },
    { id: 2, postId: 1, authorName: 'David', content: 'Thanks for the tips!' },
    { id: 3, postId: 2, authorName: 'Alice', content: 'Good points about clean coding.' },
    { id: 4, postId: 2, authorName: 'Yael', content: 'Interesting insights on web trends.' },
    { id: 5, postId: 3, authorName: 'Eli', content: 'TypeScript is a game changer.' },
    { id: 6, postId: 3, authorName: 'Alice', content: 'CSS Grid is very useful.' },
    { id: 7, postId: 4, authorName: 'Bob', content: 'UX is so important.' },
    { id: 8, postId: 4, authorName: 'Eli', content: 'Excited about ML!' },
    { id: 9, postId: 5, authorName: 'David', content: 'Blockchain has a lot of potential.' },
    { id: 10, postId: 5, authorName: 'Yael', content: 'Cloud computing is essential today.' },
    { id: 11, postId: 6, authorName: 'Yael', content: 'Great insights on RxJS!' },
    { id: 12, postId: 6, authorName: 'Bob', content: 'Angular CLI is a must-learn tool.' },
    { id: 13, postId: 7, authorName: 'Eli', content: 'Mastering CLI is crucial for Angular.' },
    { id: 14, postId: 7, authorName: 'Alice', content: 'RxJS can be quite challenging.' },
    { id: 15, postId: 8, authorName: 'Yael', content: 'Future of web development looks bright!' },
    { id: 16, postId: 8, authorName: 'David', content: 'Modern JS frameworks are evolving fast.' }
  ];

  displayedComments: Comment[] = []; // התגובות שמוצגות
  showForm = false; // האם להציג את טופס התגובה
  commentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // יצירת טופס תגובות
    this.commentForm = this.fb.group({
      authorName: [''],
      postTitle: [{ value: '', disabled: true }],
      content: ['']
    });
  }

  // פונקציה לטעינת תגובות חדשות בהתאם לפוסט הנבחר
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['postId']) {
      if (this.postId !== null) {
        this.displayedComments = this.comments.filter(comment => comment.postId === this.postId);
        this.commentForm.patchValue({
          postTitle: this.postTitle // הצגת כותרת הפוסט בטופס
        });
      } else {
        this.displayedComments = []; // ניקוי התגובות אם אין פוסט נבחר
      }
      this.showForm = false; // הסתרת הטופס כשיש שינוי ב-postId
    }
  }

  // פונקציה להציג את טופס התגובה
  showAddCommentForm(): void {
    this.showForm = true;
  }

  // פונקציה לשליחת תגובה חדשה
  submitComment(): void {
    if (this.postId !== null) {
      const newComment: Comment = {
        id: this.comments.length + 1, // קביעת מזהה ייחודי לתגובה החדשה
        postId: this.postId,
        authorName: this.commentForm.value.authorName, // שם המחבר מהטופס
        content: this.commentForm.value.content // תוכן התגובה מהטופס
      };

      this.comments.push(newComment); // הוספת התגובה לרשימה
      this.displayedComments = [...this.comments.filter(comment => comment.postId === this.postId)]; // עדכון התגובות המוצגות
      this.showForm = false; // הסתרת הטופס לאחר שליחה
      this.commentForm.reset(); // ניקוי הטופס
      this.commentForm.patchValue({
        postTitle: this.postTitle // הצגת כותרת הפוסט בטופס מחדש
      });
    }
  }
}
