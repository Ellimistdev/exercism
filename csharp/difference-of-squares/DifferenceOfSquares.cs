using System;
using System.Linq;
using System.Collections.Generic;

public static class DifferenceOfSquares
{
    public static int CalculateSquareOfSum(int max) => max
        .ToNaturalRange()
        .Sum()
        .Square();

    public static int CalculateSumOfSquares(int max) => max
        .ToNaturalRange()
        .Select(IntExtensions.Square)
        .Sum();

    public static int CalculateDifferenceOfSquares(int max) 
        => CalculateSquareOfSum(max) - CalculateSumOfSquares(max);
}

public static class IntExtensions
{
    public static IEnumerable<int> ToNaturalRange(this int max)
        => Enumerable.Range(1, max);
        
    public static int Square(this int n) 
        => n * n;
}
