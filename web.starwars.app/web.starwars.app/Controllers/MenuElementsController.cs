using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace web.starwars.app.Controllers
{
    public class MenuElementsController : Controller
    {
        [HttpGet]
        [Route("api/MenuItems/GetItems")]
        public IEnumerable<string> WeatherForecasts()
        {
            return new List<string>
            {
                "Films",
                "People",
                "Planets",
                "Species",
                "StarShips",
                "Vehicles"
            };
        }
    }
}
