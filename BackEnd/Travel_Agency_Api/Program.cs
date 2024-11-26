using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Travel_Agency_Api.Extensions;

var builder = WebApplication.CreateBuilder(args);
ConfigurationManager configuration = builder.Configuration;
string connectionString = configuration.GetValue<string>("ConnectionStrings:SQLServer");

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<DbContextSql>(options => { options.UseSqlServer(connectionString); });
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddServices();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "front-end-Cors",
                      policy =>
                      {
                          policy
                                    .AllowAnyOrigin()
                                    .AllowAnyHeader()
                                    .AllowAnyMethod();
                      });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.UseHttpsRedirection();
app.UseCors("front-end-Cors");

app.UseAuthorization();

app.MapControllers();

app.Run();
