'use client';
import data from '../books.json';

const books = data.library.map((data) => data.book);
export default function Home() {
  return (
    <main>
      <h1>Reading List</h1>
      <article className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4'>
        {books.map((book) => (
          <div key={book.ISBN}>
            <img
              className='aspect-[9/14] object-cover'
              src={book.cover}
              alt={book.title}
            />
            <p>{book.title}</p>
          </div>
        ))}
      </article>
    </main>
  );
}
