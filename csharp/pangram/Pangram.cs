using System;
using System.Text.RegularExpressions;

public static class Pangram
{
    public static bool IsPangram(string input) => Regex
        .Matches(input.ToLower(), @"([a-z])(?!.*\1)")
        .Count == 26;
}
