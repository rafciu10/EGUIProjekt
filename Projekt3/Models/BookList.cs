using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projekt3.Models
{
    public class BookList
    {

       



        public Book[] getBooks()
        {
            Book[] list;

            Book book1 = new Book();
            Book book2 = new Book();

            book1.author = "RC";
            book1.title = "123";
            book1.year = "2012";

            book2.author = "AD";
            book2.title = "457";
            book2.year = "2009";

            list = new Book[] { book1, book2 };




            return list;
        }

        /*
        public editBook();

        public deleteBook();

        public addBook();

    */
    }
}
