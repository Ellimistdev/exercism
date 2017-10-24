using System;
using System.Collections.Generic;
using System.Linq;

public class SaddlePoints
{
    private int[,] matrix;
    private int matrixD0;
    private int matrixD1;
    public SaddlePoints(int[,] values)
    {
        matrix = values;
        matrixD0 = matrix.GetLength(0);
        matrixD1 = matrix.GetLength(1);
    }

    public IEnumerable<Tuple<int, int>> Calculate()
    {
        var testPoints = new List<Tuple<int, int>> (); 
        var saddlePoints = new List<Tuple<int, int>> (); 
        
        for (var r = 0; r < matrixD0; r++)
        {
            var row = TestSet(matrixD1, r, true);
            
            testPoints.Add(Tuple.Create(r, Array.IndexOf(row, row.Max())));
        }
        
        foreach (var testPoint in testPoints)
        {
            var testColumn = TestSet(matrixD0, testPoint.Item2, false);
            
            if (matrix[testPoint.Item1, testPoint.Item2] <= testColumn.Min())
            {
                saddlePoints.Add(Tuple.Create(testPoint.Item1, testPoint.Item2));
            }
        }
        
        return saddlePoints.ToArray();
    }
    
    private int[] TestSet(int size, int x, bool isRow)
    {
        var set = new int[size];
            
            for (int i = 0; i < size; i++)
            {
                set[i] = isRow ? matrix[x,i] : matrix[i,x];
            }
            
        return set;
    }
}
