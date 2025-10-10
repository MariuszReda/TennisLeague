using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TennisLeague.Server.Domain.Entities;

namespace TennisLeague.Server.Infrastructure.Persistence.Configurations
{
    internal class PlayerMatchEfConfiguration : IEntityTypeConfiguration<PlayerMatch>
    {
        public void Configure(EntityTypeBuilder<PlayerMatch> builder)
        {
            builder.HasKey(x => x.Id);


            builder.HasIndex(pm => new { pm.PlayerId, pm.MatchId })
                .IsUnique();


            builder.HasOne(playermatch => playermatch.Match)
                .WithMany(match => match.PlayerMatches)
                .HasForeignKey(playermatch => playermatch.MatchId)
                .OnDelete(DeleteBehavior.Cascade);


            builder.HasOne(playerMatch => playerMatch.Player)
                .WithMany(player => player.PlayerMatches)
                .HasForeignKey(playerMatch => playerMatch.PlayerId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
