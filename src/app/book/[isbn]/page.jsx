"use client"
import { useParams } from "next/navigation"
import books from "@/lib/books.json"
import Image from "next/image"

const Book = () => {
    const { isbn } = useParams()

    const selectedBook = books.filter((book, i) => (
        isbn === String(book.isbn)
    ))
  return (
    <div className="flex flex-col gap-4 border p-2">
      <h2 className="font-bold p-2 text-4xl mt-4">{selectedBook[0].title}</h2>
      <div className="flex items-start gap-4 flex-wrap">
        <Image
          src={selectedBook.thumbnailUrl}
          width={300}
          height={300}
          alt={selectedBook.title}
        />
        <div>
          <h3>{selectedBook[0].status}</h3>
          <span>
            <strong>Authors</strong>
            <small className="flex">{selectedBook[0].authors}</small>
          </span>
        </div>
      </div>
      <p className="text-lg md:text-xl">{selectedBook[0].shortDescription}</p>
      <span className="text-lg md:text-xl">{selectedBook[0].longDescription}</span>
    </div>
  );
}

export default Book