import { NgModule } from '@angular/core'; // מייבא את NgModule לצורך הגדרת מודולים
import { BrowserModule } from '@angular/platform-browser'; // מייבא את BrowserModule לתמיכה באפליקציות דפדפן
import { ReactiveFormsModule } from '@angular/forms'; // מייבא את ReactiveFormsModule לעבודה עם טפסים ריאקטיביים

import { AppComponent } from './app.component'; // מייבא את רכיב היישום הראשי
import { AuthorListComponent } from './author-list/author-list.component'; // מייבא את רשימת המחברים
import { PostListComponent } from './post-list/post-list.component'; // מייבא את רשימת הפוסטים
import { CommentListComponent } from './comment-list/comment-list.component'; // מייבא את רשימת התגובות
import { AddCommentComponent } from './add-comment/add-comment.component'; // מייבא את הוספת התגובות

@NgModule({
  declarations: [
    AppComponent, // מכריז על  AppComponent
    AuthorListComponent, // מכריז על  AuthorListComponent
    PostListComponent, // מכריז על  PostListComponent
    CommentListComponent, // מכריז על  CommentListComponent
    AddCommentComponent // מכריז על  AddCommentComponent
  ],
  imports: [
    BrowserModule, // מוסיף את BrowserModule לצורך תמיכה באפליקציות דפדפן
    ReactiveFormsModule // מוסיף את ReactiveFormsModule לעבודה עם טפסים ריאקטיביים
  ],
  providers: [], // אין ספקים נוספים
  bootstrap: [AppComponent] // מגדיר את AppComponent כרכיב ההתחלה של האפליקציה
})
export class AppModule { } // מייצא את AppModule כך שיהיה זמין לשימוש בשאר היישום
