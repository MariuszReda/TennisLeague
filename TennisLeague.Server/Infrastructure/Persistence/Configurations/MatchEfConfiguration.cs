using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TennisLeague.Server.Infrastructure.Persistence.Entities;

namespace TennisLeague.Server.Infrastructure.Persistence.Configurations
{
    internal class MatchEfConfiguration : IEntityTypeConfiguration<Match>
    {
        public void Configure(EntityTypeBuilder<Match> builder)
        {
            builder.HasKey(e => e.Id);
        }
    }
}
