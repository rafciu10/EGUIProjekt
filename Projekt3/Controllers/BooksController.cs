using System;
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
        public string Post([FromBody] string value)
        {
            
            return value;
        }

        // PUT: api/Books/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
