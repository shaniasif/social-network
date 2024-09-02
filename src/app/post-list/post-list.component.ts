import { Component, EventEmitter, Input, Output } from '@angular/core';

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
export class PostListComponent {
  @Input() authorId: number | null = null; // מזהה המחבר שנבחר
  @Output() postSelected = new EventEmitter<Post>(); // אירוע שמתרחש כאשר פוסט נבחר

  // רשימת הפוסטים
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
    return this.posts.filter(post => post.authorId === this.authorId);
  }

  // פונקציה לבחירת פוסט
  selectPost(post: Post): void {
    this.postSelected.emit(post); // שליחה של הפוסט הנבחר
  }
}
