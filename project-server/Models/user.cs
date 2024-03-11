namespace projectServer;

public class user{
    public string userName { get; set; }

    public string password { get; set; }
    public int id { get; set; }
    public string JobSearchField  { get; set; }
    public job[] CV {get; set;}
}
