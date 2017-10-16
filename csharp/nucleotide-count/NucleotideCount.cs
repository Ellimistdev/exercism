using System;
using System.Linq;
using System.Collections.Generic;

public class NucleotideCount
{
    private Dictionary<char, int> counts = new Dictionary<char, int>() 
    {
        { 'A', 0 },
        { 'T', 0 },
        { 'C', 0 },
        { 'G', 0 }
    };
    
    public NucleotideCount(string sequence)
    {
        if (sequence == null || sequence.Any(c => !this.counts.ContainsKey(c))) 
        {
            throw new InvalidNucleotideException();        
        }
        
        foreach (char nucleotide in counts.Keys.ToArray()) 
        {
           counts[nucleotide] =
                sequence.Length - sequence.Replace(nucleotide.ToString(), "").Length;
        }
    }

    public IDictionary<char, int> NucleotideCounts
    {
        get 
        {
            return counts;
        }
    }
}

public class InvalidNucleotideException : Exception { }
