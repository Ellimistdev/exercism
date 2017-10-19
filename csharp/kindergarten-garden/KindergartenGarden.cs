using System;
using System.Linq;
using System.Collections.Generic;

public enum Plant
{
    Violets,
    Radishes,
    Clover,
    Grass
}

public class KindergartenGarden
{    
    public Dictionary<string, List<Plant>> _students = new Dictionary<string, List<Plant>>();
    
    public KindergartenGarden(string diagram)
    {
        List<string> students = new List<string>
        {
            "Alice",
            "Bob",
            "Charlie",
            "David",
            "Eve",
            "Fred",
            "Ginny",
            "Harriet",
            "Ileana",
            "Joseph",
            "Kincaid",
            "Larry"
        };
        
       BuildGarden(diagram, students);
    }

    public KindergartenGarden(string diagram, IEnumerable<string> students)
    {
        BuildGarden(diagram, students);
    }

    public IEnumerable<Plant> Plants(string student)
    {
        return _students[student];
    }
    
    private void BuildGarden(string diagram, IEnumerable<string> students)
    {
        foreach (string student in students)
        {
            _students.Add(student, new List<Plant>());
        }
        
        AssignPlants(diagram); 
    }
    
    private void AssignPlants(string diagram)
    {
        List<string> roster = _students.Keys.OrderBy(s => s).ToList();
        
        foreach (string row in diagram.Split("\n")) 
        {
            int studentID = 0;
            int count = 0;
            foreach (char plant in row)
            {
                _students[roster[studentID]].Add(MatchPlant(plant));
                count += 1;
                
                if (count == 2)
                {
                    count = 0;
                    studentID += 1;
                }
            }
        }
    }
    
    private Plant MatchPlant(char sym)
    {
        switch(char.ToLower(sym)) 
        {
            case 'v':
                return Plant.Violets;
            case 'r':
                return Plant.Radishes;
            case 'c':
                return Plant.Clover;
            case 'g':
                return Plant.Grass;
            default:
                throw new ArgumentException();
        }
    }
}