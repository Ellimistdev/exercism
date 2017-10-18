using System;

public static class CollatzConjecture
{
    public static int Steps(int number)
    {
        int stepCount = 0;
        int value = number;
        
        if (value < 1)
        {
            throw new ArgumentException();
        }
        
        while (value > 1) 
        {
            if (value.IsEven())
            {
                value /= 2;
            } 
            else 
            {
                value = (value * 3) + 1;
            }
            stepCount += 1;
        }
        return stepCount;
    }
}

public static class IntExtensions
{
    public static bool IsEven(this int number)
    {
        return number % 2 == 0;
    }
}