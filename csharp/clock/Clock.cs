using System;

public struct Clock
{
    private int _hours;
    private int _minutes;
    public Clock(int hours, int minutes)
    {
        _hours = hours + (minutes / 60);
        _minutes = minutes % 60;
        Clean();
    }

    public int Hours
    {
        get
        {
            return _hours;
        }
    }

    public int Minutes
    {
        get
        {
            return _minutes;
        }
    }

    public Clock Add(int minutesToAdd)
    {
        if (minutesToAdd < 0)
        {
            return Subtract(Math.Abs(minutesToAdd));
        }
        _minutes += minutesToAdd;
        
        return Clean();
    }

    public Clock Subtract(int minutesToSubtract)
    {
        _minutes -= minutesToSubtract;
        
        return Clean();
    }
    
    public Clock Clean()
    {
        while (_minutes < 0)
        {
            _hours -= 1;
            _minutes += 60;
        }
        while (_minutes > 60)
        {
            _hours += 1;
            _minutes -= 60;
        }
        while (_hours < 0) 
        {
            _hours += 24;
        }
        _hours = _hours % 24;
        
        return this;
    }

    public override string ToString()
    {
       return $"{Hours.ToString("00")}:{Minutes.ToString("00")}"; 
    }
}