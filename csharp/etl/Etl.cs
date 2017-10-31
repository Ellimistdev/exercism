using System;
using System.Linq;
using System.Collections.Generic;

public static class Etl
{
    public static IDictionary<string, int> Transform(IDictionary<int, IList<string>> old)
    {
        var newData = new Dictionary<string, int>();
        foreach (var entry in old)
        {
            foreach (var value in entry.Value)
            {
                newData[value.ToLower()] = entry.Key;
            }
        }
        return newData;
    }
}