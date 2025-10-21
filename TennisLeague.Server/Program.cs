using Microsoft.EntityFrameworkCore;
using TennisLeague.Server.Application;
using TennisLeague.Server.Application.Interfaces;
using TennisLeague.Server.Application.Services;
using TennisLeague.Server.Domain.Repositories;
using TennisLeague.Server.Domain.Services;
using TennisLeague.Server.Infrastructure.Persistence;
using TennisLeague.Server.Infrastructure.Repositories;
using TennisLeague.Server.Infrastructure.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<TennisLeagueDbContext>(
    context => context.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ITableService, MockTableService>();
builder.Services.AddScoped<IMatchAppService, MatchAppService>();
builder.Services.AddScoped<IMatchRepository, MatchRepository>();
builder.Services.AddScoped<IPlayerRepository, PlayerRepository>();
builder.Services.AddScoped<MatchResultService, MatchResultService>();

var app = builder.Build();

app.UseDefaultFiles();
app.MapStaticAssets();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
