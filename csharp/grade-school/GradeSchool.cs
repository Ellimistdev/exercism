using System;
using System.Collections.Generic;
using System.Linq;

public class School
{
    private Dictionary<int, List<string>> roster = 
        new Dictionary<int, List<string>> ();
    
    public void Add(string student, int grade)
    {
        List<string> currentClass = 
            roster.ContainsKey(grade) ?
            roster[grade] :
            new List<string>();
            
        currentClass.Add(student);
        roster[grade] = currentClass;    
    }

    public IEnumerable<string> Roster()
    {
        return roster.Values.SelectMany(x => x);
    }

    public IEnumerable<string> Grade(int grade)
    {
        var currentClass = roster[grade];
        
        currentClass.Sort();
        
        return currentClass.ToArray();
    }
}