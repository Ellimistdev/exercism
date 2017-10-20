using System;

public struct Clock
{
    private int _minutes;
    public Clock(int hours, int minutes)
    {
        _minutes = hours * 60 + minutes;
        Clean();
    }

    public int Hours
    {
        get
        {
            return _minutes / 60;
        }
    }

    public int Minutes
    {
        get
        {
            return _minutes % 60;
        }
    }

    public Clock Add(int minutesToAdd)
    {
        _minutes += minutesToAdd;
        return Clean();
    }

    public Clock Subtract(int minutesToSubtract)
    {
        return Add(minutesToSubtract);
    }
    
    public Clock Clean()
    {
        _minutes %= 24 * 60;
        
        if (_minutes < 0)
        {
            _minutes += 24 * 60;
        }
        return this;
    }

    public override string ToString()
    {
       return $"{Hours.ToString("00")}:{Minutes.ToString("00")}"; 
    }
}