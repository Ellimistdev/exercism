using System;
using System.Linq;

public static class Hamming
{
    public static int Distance(string firstStrand, string secondStrand)
    {
        if (firstStrand.Length != secondStrand.Length) 
        {
            throw new ArgumentException();
        }
        return firstStrand
            .Where((alpha, index) => firstStrand[index] != secondStrand[index])
            .Count();;  
    }
}
