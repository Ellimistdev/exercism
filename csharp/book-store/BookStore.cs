using System;
using System.Linq;
using System.Collections.Generic;

public static class BookStore
{
    private static Dictionary<int, double> _prices = new Dictionary<int, double>
    {
        {0, 0},
        {1, 8},
        {2, 15.2},
        {3, 21.6},
        {4, 25.6},
        {5, 30}
    };
    
    public static double Total(IEnumerable<int> books)
    {
        return GetTotal(books);
    }
    
    
    private static double GetTotal(IEnumerable<int> books)
    {
        List<List<int>> seriesGroups = new List<List<int>>() { new List<int>() };
        
        foreach (var book in books)
        {
            GenGroups(book, ref seriesGroups);
        }
        
        return FindBestDiscount(seriesGroups);
    }
    
    // Given a book, add the book to a series of which it is not already a member, 
    // return a new series with the book in it otherwise;
    private static void GenGroups(int book, ref List<List<int>> seriesGroups)
    {
        foreach (var series in seriesGroups)
        {
            if (!series.Contains(book))
            {
                series.Add(book);
                return;
            }
        }
        
        seriesGroups.Add(new List<int>() { book });
    }
    
    // Given a List<List<int>> accumulate a total value for all entries,
    // Compile into a single int[], return the value and compiled int[]
    private static KeyValuePair<double, int[]> CompileBasket(List<List<int>> groups)
    {
        double total = 0;
        List<int> cart = new List<int>();
        
        foreach (var series in groups)
        {
            total += _prices[series.Count()];
            for (int i = 0; i < series.Count(); i++)
            {
                cart.Add(series[i]);
            }
        }
        return new KeyValuePair<double, int[]>(total, cart.ToArray());
    }
    
    // Given a List<List<int>> find different variations of the collection and values for each
    // return the lowest value
    private static double FindBestDiscount(List<List<int>> groups)
    {
        var possibleDiscounts = new Dictionary<double, int[]>();
        var basket = CompileBasket(groups);
        possibleDiscounts.Add(basket.Key, basket.Value);
        BalanceBaskets(groups, ref possibleDiscounts);
        
        return possibleDiscounts.Aggregate((a,b) => a.Key < b.Key ? a : b).Key;
    }
    
    // Given a set of Lists, move elements from larger lists to smaller lists.
    private static void BalanceBaskets(List<List<int>> groups, ref Dictionary<double, int[]> possibleDiscounts)
    {
        List<List<int>> newBasket = groups.Count() > 1 
            ? BalanceLists(groups[0], groups[groups.Count() - 1]) : groups;
        if (groups.Count() <= 2)
        {
            groups = newBasket;
        }
        else
        {
            groups.RemoveAt(groups.Count() - 1);
            groups.RemoveAt(0);
            groups.AddRange(newBasket);
        }
        var basket = CompileBasket(groups);
        if (!possibleDiscounts.Keys.Contains(basket.Key))
        {
            possibleDiscounts.Add(basket.Key, basket.Value);
        }
    }
    
    // Given two lists, find values not present in both lists, 
    // move a value from larger list to smaller list.
    private static List<List<int>> BalanceLists(List<int> listA, List<int> listB)
    {
        var basket = new List<List<int>>();
        if (listA.Count - listB.Count > 1)
        {
            var disjoint = listA.Where(e => !listB.Contains(e)).ToList();
            int target = disjoint[disjoint.Count() - 1];
            listA.Remove(target);
            listB.Add(target);
        }
        basket.Add(listA);
        basket.Add(listB);
        return basket;
    }
}
