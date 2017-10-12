using System;
using System.Collections.Generic;

public static class Raindrops
{
    static readonly Dictionary<int, string> Sounds = new Dictionary<int, string>()
    {
        {3, "Pling"},
        {5, "Plang"},
        {7, "Plong"}
    };
            
    public static string Convert(int number)
    {
        string result = "";
        
        foreach (KeyValuePair<int, string> sound in Sounds) {
            result += number % sound.Key == 0 ? sound.Value : "";
        }
        
        return String.IsNullOrEmpty(result) ? number.ToString() : result;
    }
}