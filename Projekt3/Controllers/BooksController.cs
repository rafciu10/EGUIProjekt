﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Projekt3.Models;

namespace Projekt3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {

        public static List<Book> LoadJson()
        {
            using (StreamReader r = new StreamReader("Data.json"))
            {
                var json = r.ReadToEnd();
                var items = JsonConvert.DeserializeObject<List<Book>>(json);

                return items;
            }
        }

       


        // GET: api/Books
        [HttpGet]
        public List<Book> Get()
        {           
            List <Book> list;
            list = LoadJson();
            return list;
        }

        // GET: api/Books/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }



        // POST: api/Books
        [HttpPost]
        public List<Book> Post([FromBody] Book newBook)
        {
            List<Book> list;
            list = LoadJson();

            int max = 0;
            foreach (Book singleBook in list)
            {
                if (singleBook.id > max)
                {
                    max = singleBook.id;
                }

            }
            max = max + 1;
            newBook.id = max;
            list.Add(newBook);
            string json = JsonConvert.SerializeObject(list.ToArray());

            //write string to file
            System.IO.File.WriteAllText("Data.json", json);
            return list;
          
        }

        // PUT: api/Books/5
        [HttpPut("{id}")]
        public List<Book> Put(int id, [FromBody] Book editBook)
        {

            List<Book> list;
            list = LoadJson();
            int bookIndex = list.FindIndex((book) => book.id.ToString() == id.ToString());
            editBook.id = id;
            list[bookIndex] = editBook;

            string json = JsonConvert.SerializeObject(list.ToArray());
            
            //write string to file
            System.IO.File.WriteAllText("Data.json", json);

            return list;

        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public List<Book> Delete(int id)
        {
            List<Book> list;
      
            list = LoadJson();
            int bookIndex = list.FindIndex((book) => book.id.ToString() == id.ToString());
            list.RemoveAt(bookIndex);


            string json = JsonConvert.SerializeObject(list.ToArray());

            //write string to file
            System.IO.File.WriteAllText("Data.json", json);

            return list;

        }
    }
}
