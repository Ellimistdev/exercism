using System;
using System.Linq;
using System.Collections.Generic;

public static class Grains
{
    public static IEnumerable<int> _squares = Enumerable.Range(1, 64);
    public static ulong Square(int n)
    {
        if (!_squares.Contains(n))
        {
            throw new ArgumentOutOfRangeException();
        }
        return (ulong)Math.Pow(2, n - 1);
    }

    public static ulong Total()
        => (ulong)_squares
            .Aggregate(0, (total, next) => total + (int)Square(next));
}
