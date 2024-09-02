import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// הגדרת ממשק לפוסטים, כולל מזהה, מזהה מחבר, כותרת ותוכן
interface Post {
  id: number;
  authorId: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{ 
  currentPostTitle !: string; // כותרת הפוסט הנוכחי שנבחר
  currentPostId !: number; // מזהה הפוסט הנוכחי שנבחר
  isPostClicked : boolean = false; // מצב האם פוסט נבחר או לא
  
  constructor(
    private route: ActivatedRoute, // שירות לקבלת פרמטרים מה-URL
  ) { }

  ngOnInit(): void {
    // הרשמה לאירועים של שינויים בפרמטרים מה-URL
    this.route.params.subscribe(params => {
      this.authorId = +params['authorId'] || null; // קבלת מזהה המחבר מה-URL
      this.loadPosts(); // טעינת הפוסטים
      this.isPostClicked = false; // הגדרת מצב האם פוסט נבחר ל-false
    });

    // קבלת פרמטרים מה-URL (שימוש נוסף במקרה של טעינת הקומפוננטה מחדש)
    this.authorId = Number(this.route.snapshot.paramMap.get('authorId')) || null;

    // ניתן להשתמש ב-authorId כדי לטעון פוסטים או לבצע פעולות נוספות
    console.log(this.authorId + " authorId");
  }

  loadPosts() {
    // פונקציה לטעינת הפוסטים (כאן מדובר בבדיקת המזהה של המחבר)
    console.log(this.authorId);
  }

  @Input() authorId: number | null = null; // מזהה המחבר שנבחר
  @Output() postSelected = new EventEmitter<Post>(); // אירוע שמתרחש כאשר פוסט נבחר

  // רשימת הפוסטים המוגדרת בקומפוננטה
  posts: Post[] = [
    { id: 1, authorId: 1, title: 'Understanding Angular', content: 'A comprehensive guide to Angular.' },
    { id: 2, authorId: 1, title: 'Angular Services', content: 'How to use Angular services effectively.' },
    { id: 3, authorId: 2, title: 'Web Development Trends', content: 'The latest trends in web development.' },
    { id: 4, authorId: 2, title: 'Responsive Design', content: 'Best practices for responsive web design.' },
    { id: 5, authorId: 3, title: 'Introduction to TypeScript', content: 'An introduction to TypeScript and its features.' },
    { id: 6, authorId: 4, title: 'Deep Dive into RxJS', content: 'Understanding Reactive Extensions for JavaScript.' },
    { id: 7, authorId: 4, title: 'Mastering Angular CLI', content: 'Tips and tricks for using Angular CLI efficiently.' },
    { id: 8, authorId: 5, title: 'The Future of Web Development', content: 'Emerging trends and technologies.' },
    { id: 9, authorId: 5, title: 'JavaScript and Beyond', content: 'Exploring modern JavaScript frameworks.' }
  ];

  // פונקציה להחזיר את הפוסטים של המחבר הנבחר
  get displayedPosts(): Post[] {
    return this.posts.filter(post => post.authorId === this.authorId); // סינון הפוסטים לפי מזהה המחבר
  }

  // פונקציה לבחירת פוסט
  selectPost(post: Post): void {
    this.postSelected.emit(post); // שליחה של הפוסט הנבחר
  }

  // פונקציה לטפל באירועים כאשר מחבר נבחר
  onAuthorSelected($event : any){
    console.log($event);
  }

  // פונקציה לשים ערכים במשתנים של מזהה הפוסט וכותרת הפוסט
  putValueInPostIdAndPostTitle(post : Post) : void{
    this.currentPostId = post.id; // הגדרת מזהה הפוסט הנוכחי
    this.currentPostTitle = post.title; // הגדרת כותרת הפוסט הנוכחי
    this.isPostClicked = true; // עדכון מצב הפוסט שנבחר
  }
}
