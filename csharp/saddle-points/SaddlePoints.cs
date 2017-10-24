using System;
using System.Collections.Generic;
using System.Linq;

public class SaddlePoints
{
    private int[,] matrix;
    public SaddlePoints(int[,] values)
    {
        matrix = values;
    }

    public IEnumerable<Tuple<int, int>> Calculate()
    {
        return GetSaddlePoints(GetRowMins());
    }
    
    private List<Tuple<int, int, int>> GetRowMins()
    {
        // rowIndex, columnIndex, value
        List<Tuple<int, int, int>> testPoints = new List<Tuple<int, int, int>> (); 
        for (int r = 0; r < matrix.GetLength(0); r++)
        {
            int[] row = new int[matrix.GetLength(1)];
            for (int c = 0; c < matrix.GetLength(1); c++)
            {
                row[c] = matrix[r,c];
            }
            var max = row.Max();
            testPoints.Add(new Tuple<int, int, int>(r, Array.IndexOf(row, max), max));
        }
        return testPoints;
    }
    
    private Tuple<int,int>[] GetSaddlePoints(List<Tuple<int, int, int>> testPoints)
    {
        // rowIndex, columnIndex,
        List<Tuple<int, int>> saddlePoints = new List<Tuple<int, int>> (); 
        foreach (var testPoint in testPoints)
        {
            int[] testColumn = new int[matrix.GetLength(1)];
            for (int r = 0; r < matrix.GetLength(1); r++)
            {
                testColumn[r] = matrix[r,testPoint.Item2];    
            }
            
            if (testPoint.Item3 <= testColumn.Min())
            {
                saddlePoints.Add(new Tuple<int,int>(testPoint.Item1, testPoint.Item2));
            }
        }
        return saddlePoints.ToArray();
    }
}