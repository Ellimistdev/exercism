using System;
using System.Linq;
using System.Collections.Generic;

public class NucleotideCount
{
    private string sequence;
    private Dictionary<char, int> counts;
    
    public NucleotideCount(string sequence)
    {
        this.sequence = sequence;
        this.counts = new Dictionary<char, int>() 
        {
            { 'A', 0 },
            { 'T', 0 },
            { 'C', 0 },
            { 'G', 0 }
        };
        
        if (this.sequence.Any(c => !this.counts.ContainsKey(c))){
            throw new InvalidNucleotideException();
        }
    }

    public IDictionary<char, int> NucleotideCounts
    {
        get {
            foreach (char nucleotide in counts.Keys.ToArray()) {
                counts[nucleotide] = 
                    sequence.Length - sequence.Replace(nucleotide.ToString(), "").Length;
            }
            return counts;
        }
    }
}

public class InvalidNucleotideException : Exception { }
