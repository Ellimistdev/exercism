using System;
using System.Collections.Generic;
using System.Linq;

public static class SumOfMultiples
{
    public static int Sum(IEnumerable<int> multiples, int max)
    {
        HashSet<int> result =new HashSet<int>();
        
        foreach (int mult in multiples) 
        {
            for (int i = 1; i < max; i++) 
            {
                if ((i % mult == 0) && !result.Contains(i)) 
                {
                    result.Add(i); 
                }
            }
        }
        return result.Sum();
    }
}