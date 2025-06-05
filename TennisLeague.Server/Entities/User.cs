using Microsoft.AspNetCore.Identity;

namespace TennisLeague.Server.Entities
{
    public class User : IdentityUser
    {
        public string Name { get; set; }
        public string LastName {  get; set; }
        public DateTime DateCreated { get; set; } = DateTime.Now;
        public Player Player { get; set; }
    }
}
