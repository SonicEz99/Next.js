import { generateBooks } from "@/utils/generator";

const BooksPage = () => {
  const books = generateBooks();
  return (
    <div>
      Books Page
      <div>
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BooksPage;
