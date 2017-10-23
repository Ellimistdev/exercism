using System;
using System.Linq;
using System.Collections.Generic;

public class Allergies
{
    private List<string> allergies = new List<string>();
    private Dictionary<byte, string> _allergies = new Dictionary<byte, string>
    {
        {0b0000_0001, "eggs"},
        {0b0000_0010, "peanuts"},
        {0b0000_0100, "shellfish"},
        {0b0000_1000, "strawberries"},
        {0b0001_0000, "tomatoes"},
        {0b0010_0000, "chocolate"},
        {0b0100_0000, "pollen"},
        {0b1000_0000, "cats"}
    };
    
    public Allergies(int mask)
    {
        byte allergySeed = (byte)mask;
        
        allergies = _allergies
            .Where(allergy => ((allergySeed & allergy.Key) == allergy.Key))
            .Select(allergen => allergen.Value)
            .ToList();
    }

    public bool IsAllergicTo(string allergy)
    {
        return allergies.Contains(allergy);
    }

    public IList<string> List()
    {
        return allergies;
    }
}
