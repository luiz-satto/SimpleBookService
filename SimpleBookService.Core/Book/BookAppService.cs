using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SimpleBookService.Core
{
    public class BookAppService : IBookAppService
    {
        private readonly IMongoCollection<Book> _books;
        public BookAppService(IDbClient dbClient)
        {
            _books = dbClient.GetBooksCollection();
        }

        /// <summary>
        /// Returns all books
        /// </summary>
        /// <returns></returns>
        public List<Book> GetBooks() => _books.Find(book => true).ToList();

        /// <summary>
        /// Returns a book by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Return entire book structure back to the client</returns>
        public Book GetBook(string id) => _books.Find(book => book.Id == id).FirstOrDefault();

        /// <summary>
        /// Creates a new book and returns the new book Id
        /// </summary>
        /// <param name="book"></param>
        /// <returns>Return the new book Id</returns>
        public async Task<string> CreateBookAsync(Book book)
        {
            await _books.InsertOneAsync(book);
            return book.Id;
        }

        /// <summary>
        /// Updates an existing book and return the updated book
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Returns the updated book structure back to the client</returns>
        public async Task<Book> UpdateBookAsync(Book book)
        {
            GetBook(book.Id);
            await _books.ReplaceOneAsync(b => b.Id == book.Id, book);
            return book;
        }

        /// <summary>
        /// Deletes an existing book
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task DeleteBookAsync(string id)
        {
            await _books.DeleteOneAsync(book => book.Id == id);
        }
    }
}
