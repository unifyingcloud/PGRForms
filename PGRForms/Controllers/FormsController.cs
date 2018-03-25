using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PGRForms.Controllers
{
    [Route("api/[controller]")]
    public class FormsController : Controller
    {
 
        private IHostingEnvironment _env;
        public FormsController(IHostingEnvironment env)
        {
            _env = env;
        }

        // GET: api/values
        [HttpGet("{id}")]
        public string Get(string formName)
        {

          string res=  System.IO.File.ReadAllText(_env.ContentRootPath.ToString()+ "//formSchemas//tortura.json");
 
            object jsonObject = JsonConvert.DeserializeObject(res);
          
            return jsonObject.ToString() ;
        }

        // GET api/values/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/values
        [HttpPost]
        public ActionResult   Post([FromBody]string value)
        {


            System.IO.File.WriteAllText(_env.ContentRootPath.ToString() + "//formSchemas//Tortura_bak.json", value);

            System.IO.File.WriteAllText(_env.ContentRootPath.ToString() + "//formSchemas//Tortura.json", value);

          
            return Ok(Json("OK"));
         
             
        }

 

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
