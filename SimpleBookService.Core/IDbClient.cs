using MongoDB.Driver;

namespace SimpleBookService.Core
{
    public interface IDbClient
    {
        IMongoCollection<Book> GetBooksCollection();
    }
}
