'use client';
import { useState } from 'react';
import data from '../books.json';

const books = data.library.map((item) => item.book);
const genres = Array.from(new Set(books.map((book) => book.genre)));

export default function Home() {
  const [genre, setGenre] = useState('');
  const matches = genre
    ? books.filter((book) => {
        if (book.genre !== genre) return false;
        return true;
      })
    : books;
  return (
    <article className='grid gap-4'>
      <nav>
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value=''>Todos</option>
          {genres.map((genre) => (
            <option
              key={genre}
              value={genre}
            >
              {genre}
            </option>
          ))}
        </select>
      </nav>

      <ul className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4'>
        {matches.map((book) => (
          <li key={book.ISBN}>
            <img
              className='aspect-[9/14] object-cover'
              src={book.cover}
              alt={book.title}
            />
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
