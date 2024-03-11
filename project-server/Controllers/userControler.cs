using System.Text.Json;
using System.Text.Json.Nodes;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Collections.Generic;
using Newtonsoft.Json;


namespace projectServer.Controllers;

[ApiController]
[Route("[controller]")]
public class userControler : ControllerBase
{
    private static List<user> listUsers;
    public userControler()
    {
    }
    string path = "C:/Users/נחמי/Desktop/תכנות/יד/Angular/final new project/Controllers/users.json";



    private void SaveUsersToJson(List<user> users)
    {
        string json = JsonConvert.SerializeObject(users, Formatting.Indented);
        System.IO.File.WriteAllText(path, json);
    }

    private List<user> LoadUsersFromJson()
    {
        string json = System.IO.File.ReadAllText(path);
        if (json != null)
        {
            return JsonConvert.DeserializeObject<List<user>>(json);
        }
        return null;
    }

    [HttpGet(Name = "getUser")]
    public user getUser(string password, string name)
    {
        listUsers = LoadUsersFromJson();
        foreach (var item in listUsers)
        {
            if (item.password == password && item.userName == name)
            {
                return item;
            }
        }
        return null;
    }


    [HttpPut("pushCV", Name = "pushCV")]
    [Produces("application/json")]
    public IActionResult put([FromBody] job job, string password, string name)
    {
        listUsers = LoadUsersFromJson();
        var user = listUsers.FirstOrDefault(u => u.password == password && u.userName == name);
        if (user == null)
        {
            return NotFound();
        }
        else
        {
            int Index = listUsers.IndexOf(user);
            listUsers[Index].CV = user.CV.Concat(new job[] { job }).ToArray();
            SaveUsersToJson(listUsers);
            return Ok(user);
        }

    }

}