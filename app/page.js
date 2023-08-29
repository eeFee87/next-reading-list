'use client';
import data from '../books.json';

const books = data.library.map((data) => data.book);
export default function Home() {
  return (
    <main>
      <h1>Reading List</h1>
      <article>
        {books.map((book) => (
          <div key={book.ISBN}>
            <p>{book.title}</p>
          </div>
        ))}
      </article>
    </main>
  );
}
