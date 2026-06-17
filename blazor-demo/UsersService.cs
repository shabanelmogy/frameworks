using System;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace blazor_demo
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public string Email { get; set; } = "";
        public Company Company { get; set; } = new();
    }

    public class Company
    {
        public string Name { get; set; } = "";
    }

    public class UsersService
    {
        private readonly HttpClient _http;
        private const string ApiUrl = "https://jsonplaceholder.typicode.com/users";

        public UsersService(HttpClient http)
        {
            _http = http;
        }

        public async Task<List<User>> GetUsersAsync()
        {
            return await _http.GetFromJsonAsync<List<User>>(ApiUrl) ?? new List<User>();
        }
    }
}
