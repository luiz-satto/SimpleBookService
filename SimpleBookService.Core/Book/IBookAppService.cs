using System.Collections.Generic;
using System.Threading.Tasks;

namespace SimpleBookService.Core
{
    public interface IBookAppService
    {
        List<Book> GetBooks();
        Book GetBook(string id);
        Task<string> CreateBookAsync(Book book);
        Task<Book> UpdateBookAsync(Book book);
        Task DeleteBookAsync(string id);
    }
}
