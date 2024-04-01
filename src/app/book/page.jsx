import React from 'react'
import books  from '@/lib/books.json'
import Image from 'next/image';
import Link from 'next/link';

const Books = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-xl md:text-4xl p-4 font-bold">Programming Books Library</h1>
      <div className="grid-cols-2 grid md:grid-cols-5 gap-8">
        {books ? (
          books.map((book) => (
            <Link key={book.isbn} href={`book/${book.isbn}/`} className='border bg-slate-200 rounded-md p-2 hover:shadow-md hover:bg-slate-300 ease-in'>
              <Image
                src={book.thumbnailUrl}
                width={200}
                loading="lazy"
                height={200}
                alt=""
              />
              <span>{book.categories}</span>
              <h2 className="font-bold">{book.title}</h2>
              <small>{book.author}</small>
              <i>{book.status}</i>
            </Link>
          ))
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
}

export default Books