using Microsoft.AspNetCore.Mvc;

namespace mvc_demo.Controllers
{
    public class LessonsController : Controller
    {
        public IActionResult Roadmap() => View();
        public IActionResult Overview() => View();
        public IActionResult Variables() => View();
        public IActionResult Components() => View();
        public IActionResult Directives() => View();
        public IActionResult Forms() => View();
        public IActionResult Events() => View();
        public IActionResult Services() => View();
        public IActionResult Counter() => View();
        public IActionResult Async() => View();
        public IActionResult Auth() => View();
        public IActionResult AdvancedSignals() => View();
        public IActionResult State() => View();
    }
}
