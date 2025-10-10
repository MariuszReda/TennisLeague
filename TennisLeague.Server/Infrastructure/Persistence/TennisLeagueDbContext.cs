using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TennisLeague.Server.Domain.Entities;
using TennisLeague.Server.Infrastructure.Persistence.Configurations;

namespace TennisLeague.Server.Infrastructure.Persistence
{
    public class TennisLeagueDbContext : IdentityDbContext<User>
    {
        public TennisLeagueDbContext(DbContextOptions<TennisLeagueDbContext> options) : base(options)
        {
        }

        public DbSet<Match> Matches { get; set; }
        public DbSet<Player> Players { get; set; }
        public DbSet<PlayerMatch> PlayersMatches { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfiguration(new UserEfConfiguration());

            builder.ApplyConfiguration(new PlayerEfConfiguration());

            builder.ApplyConfiguration(new PlayerMatchEfConfiguration());

            builder.ApplyConfiguration(new MatchEfConfiguration());

        }

    }
}
