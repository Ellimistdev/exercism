using System;

public class BinarySearch
{
    private int[] _haystack;
    public BinarySearch(int[] input)
    {
        _haystack = input;
    }
    
    public int Find(int value, int start, int end)
    {
        int mid = (start + end) / 2;
        
        if (_haystack[mid] == value)
        {
            return mid;
        }
        if (start == end || start > end) 
        {
            return -1;
        }
        
        if (_haystack[mid] > value)
        {
            return Find(value, start, mid != end ? mid : end - 1);
        }
        return Find(value, mid != start ? mid : start + 1, end);
        
    }
    
    public int Find(int value)
    {
        if (_haystack.Length == 0)
        {
            return -1;
        }
        return Find(value, 0, _haystack.Length - 1);
    }
     
}