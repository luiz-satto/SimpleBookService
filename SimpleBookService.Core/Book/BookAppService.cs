using System;
using System.Collections.Generic;

namespace SimpleBookService.Core.Book
{
    public class BookAppService : IBookAppService
    {
        public List<Book> GetBooks()
        {
            return new List<Book>()
            {
                new Book()
                {
                    Name = "History of Brazil Book",
                    Author = "Luiz Satto",
                    Category = "History",
                    Description = "History of Brazil",
                    Price = 10.99,
                    Registration = new DateTime()
                }
            };
        }
    }
}
