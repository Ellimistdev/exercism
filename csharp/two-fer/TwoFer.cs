using System;

  public static class TwoFer
  {
      public static string Name(string input = null)
      {
          return $"One for {(String.IsNullOrEmpty(input) ? "you" : input)}, one for me.";
      }
  }
