using TennisLeague.Server.Dto;
using TennisLeague.Server.Interface;

namespace TennisLeague.Server.Services
{
    public class MockTableService : ITableService
    {
        public async Task<ICollection<PlayerStatsDto>> GetTable()
        {
            return new List<PlayerStatsDto>
    {
        new PlayerStatsDto
        {
            Id = 1,
            Position = 1,
            FullName = "John Doe",
            Matches = 6,
            Wins = 5,
            Losses = 1,
            SetsWon = 12,
            SetsLost = 4,
            Points = 1500
        },
        new PlayerStatsDto
        {
            Id = 2,
            Position = 2,
            FullName = "Alice Smith",
            Matches = 6,
            Wins = 4,
            Losses = 2,
            SetsWon = 10,
            SetsLost = 6,
            Points = 1250
        },
        new PlayerStatsDto
        {
            Id = 3,
            Position = 3,
            FullName = "Mike Brown",
            Matches = 6,
            Wins = 3,
            Losses = 3,
            SetsWon = 8,
            SetsLost = 8,
            Points = 1100
        }
    };
        }

    }
}
