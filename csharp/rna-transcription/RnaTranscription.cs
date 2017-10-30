using System;
using System.Linq;
using System.Collections.Generic;

public static class RnaTranscription
{
    private static Dictionary<char, char> nucleotides = new Dictionary<char, char>() {
    {'G', 'C'},
    {'C', 'G'},
    {'T', 'A'},
    {'A', 'U'}
    };

    public static string ToRna(string nucleotide)
    {
        if (nucleotide.Any(x => !nucleotides.ContainsKey(x)))
        {
            throw new ArgumentException();
        }

        return new string(nucleotide.Select(x => nucleotides[x]).ToArray());
    }
}
