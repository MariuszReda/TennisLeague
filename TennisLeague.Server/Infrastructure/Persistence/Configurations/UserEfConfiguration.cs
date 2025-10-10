using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TennisLeague.Server.Domain.Entities;

namespace TennisLeague.Server.Infrastructure.Persistence.Configurations
{
    internal class UserEfConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasOne(user => user.Player)
                .WithOne(player => player.User)
                .HasForeignKey<Player>(player => player.UserId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
