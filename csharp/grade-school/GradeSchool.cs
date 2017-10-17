using System;
using System.Linq;
using System.Collections.Generic;

public class School
{
    private List<Student> roster = new List<Student> ();
    
    public void Add(string student, int grade)
    {
        roster.Add(new Student(student, grade));
    }

    public IEnumerable<string> Roster()
    {
        return roster
            .OrderBy(_ => _.Grade)
            .ThenBy(_ => _.Name)
            .Select(_ => _.Name);
    }

    public IEnumerable<string> Grade(int grade)
    {
        return roster
            .Where(_ => _.Grade == grade)
            .OrderBy(_ => _.Name)
            .Select(_ => _.Name);
    }
}

public class Student 
{
    public Student(string name, int grade)
    {
        Name = name;
        Grade = grade;
    }
    
    public string Name { get; }
    public int Grade { get; }
}
