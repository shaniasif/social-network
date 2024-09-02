import { NgModule } from '@angular/core'; // ייבוא המודול הבסיסי של Angular
import { RouterModule, Routes } from '@angular/router'; // ייבוא המודולים לניהול ניווט

import { PostListComponent } from './post-list/post-list.component'; // ייבוא קומפוננטת רשימת הפוסטים
import { CommentListComponent } from './comment-list/comment-list.component'; // ייבוא קומפוננטת רשימת התגובות
import { AddCommentComponent } from './add-comment/add-comment.component'; // ייבוא קומפוננטת הוספת תגובה

// הגדרת מסלולי הניווט של האפליקציה
const routes: Routes = [
  { path: 'posts/:authorId', component: PostListComponent }, // מסלול לתצוגת רשימת הפוסטים לפי מזהה המחבר
  { path: 'comments/:postId', component: CommentListComponent }, // מסלול לתצוגת רשימת התגובות לפי מזהה הפוסט
  { path: 'add-comment', component: AddCommentComponent }, // מסלול לתצוגת טופס הוספת תגובה
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // ייבוא ה-RouterModule עם המסלולים שהוגדרו
  exports: [RouterModule] // ייצוא ה-RouterModule לשימוש בקומפוננטות אחרות
})
export class AppRoutingModule { } // הגדרת המודול לניווט של האפליקציה
