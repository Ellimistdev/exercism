using System;
using System.Linq;

public static class Bob
{
    public static string Response(string statement)
    {
        string prompt = statement.Replace(" ", String.Empty);
        
        if (string.IsNullOrWhiteSpace(prompt)) {
            return "Fine. Be that way!";
        }
        
        if (prompt == prompt.ToUpper() && prompt.Any(c => char.IsLetter(c))) {
            
            return "Whoa, chill out!";
        }
        
        if (prompt[prompt.Length - 1] == '?') {
            return "Sure.";
        }
        
        return "Whatever.";
    }
}