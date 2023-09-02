'use client';
import { useMemo, useState } from 'react';
import data from '../books.json';

const books = data.library.map((item) => item.book);
const genres = Array.from(new Set(books.map((book) => book.genre)));

export default function Home() {
  const [genre, setGenre] = useState('');
  const [readList, setReadList] = useState([]);
  const matches = useMemo(() => {
    if (!genre) return books;
    return books.filter((book) => {
      if (book.genre !== genre) return false;
      return true;
    });
  }, [genre]);

  function handleBookClick(bookISBN) {
    setReadList((readList) => {
      return readList.includes(bookISBN)
        ? readList.filter((isbn) => isbn !== bookISBN)
        : [...readList, bookISBN];
    });
  }

  return (
    <div className='flex flex-row gap-4'>
      <article className='grid gap-4 max-w-screen-lg m-auto'>
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
            <li
              key={book.ISBN}
              className='grid gap-2'
              onClick={() => handleBookClick(book.ISBN)}
            >
              <img
                className='aspect-[9/14] object-cover'
                src={book.cover}
                alt={book.title}
              />
              <p>
                {readList.includes(book.ISBN) && <span>💫 </span>}
                {book.title}
              </p>
            </li>
          ))}
        </ul>
      </article>
      {readList.length > 0 && (
        <article className='flex flex-col gap-2'>
          <h1 className='text-2xl'>Lista de favoritos</h1>
          <ul>
            {books
              .filter((book) => readList.includes(book.ISBN))
              .map((book) => (
                <li
                  key={book.ISBN}
                  className='flex w-full justify-center  gap-4 mb-2'
                >
                  <img
                    className='aspect-[9/14] object-cover max-h-[150px] '
                    src={book.cover}
                    alt={book.title}
                  />
                </li>
              ))}
          </ul>
        </article>
      )}
    </div>
  );
}
