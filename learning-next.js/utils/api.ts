import { Book } from './types';

export const getBooks = async() => {
    const res = await fetch('http://localhost:3000/api/books');

    return res.json() as Promise<Book[]>;
}