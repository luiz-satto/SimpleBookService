using MongoDB.Driver;
using System;
using System.Collections.Generic;

namespace SimpleBookService.Core
{
    public class BookAppService : IBookAppService
    {
        private readonly IMongoCollection<Book> _books;
        public BookAppService(IDbClient dbClient)
        {
            _books = dbClient.GetBooksCollection();
        }

        public List<Book> GetBooks() => _books.Find(book => true).ToList();
    }
}
