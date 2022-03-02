using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace SimpleBookService.Core
{
    public class DbClient : IDbClient
    {
        private readonly IMongoCollection<Book> _books;
        public DbClient(IOptions<DbConfig> dbConfig)
        {
            var client = new MongoClient(dbConfig.Value.CONNECTION_STRING);
            var database = client.GetDatabase(dbConfig.Value.DATABASE_NAME);
            _books = database.GetCollection<Book>(dbConfig.Value.BOOKS_COLLECTION_NAME);
        }

        public IMongoCollection<Book> GetBooksCollection() => _books;
    }
}
