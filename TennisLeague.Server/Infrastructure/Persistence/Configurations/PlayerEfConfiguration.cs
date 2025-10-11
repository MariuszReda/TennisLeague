using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TennisLeague.Server.Infrastructure.Persistence.Entities;

namespace TennisLeague.Server.Infrastructure.Persistence.Configurations
{
    internal class PlayerEfConfiguration : IEntityTypeConfiguration<Player>
    {
        public void Configure(EntityTypeBuilder<Player> builder)
        {
            builder.HasKey(p => p.Id);


            builder.HasMany(player => player.PlayerMatches)
                .WithOne(playerMatch => playerMatch.Player)
                .HasForeignKey(playerMatch => playerMatch.PlayerId)
                .OnDelete(DeleteBehavior.Restrict);


            builder.Property(p => p.UserId)
            .IsRequired(false);
        }
    }
}
