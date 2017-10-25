using System;
using System.Text.RegularExpressions;

// Ordered methods in the sequence they are called.
public static class Markdown
{
    private static int _liCount; // extract list check that's being passed around
    private static int _liMax;
    public static string Parse(string markdown)
    {
        var lines = markdown.Split('\n');
        var result = "";
        _liCount = 0;
        _liMax = 0;

        foreach (var line in lines)
        {
            if (line.StartsWith("*"))
            {
                _liMax++;
                _liCount++;
            }
        }

        for (int i = 0; i < lines.Length; i++)
        {
            result += ParseLine(lines[i]);  // no need to declare var lineresult
        }

        return result; // moved <ul> tag assignment to ParseLineItem()
    }

    // combine null checks
    private static string ParseLine(string markdown)
    {
        return ParseHeader(markdown) ??
               ParseLineItem(markdown) ??
               ParseText(markdown) ??
               throw new ArgumentException("Invalid markdown"); //Replaced ParseParagraph() with ParseText
    }

    private static string ParseHeader(string markdown)
    {
        var count = Regex.Match(markdown, @"#+").Length; // get '#' count via regex

        return count == 0 ? null : Wrap(markdown.Substring(count + 1), "h" + count); // switched to ternary
    }

    private static string Wrap(string text, string tag) => "<" + tag + ">" + text + "</" + tag + ">";

    private static string ParseLineItem(string markdown)
    {
        if (markdown.StartsWith("*"))
        {
            var innerHtml = Wrap(ParseText(markdown.Substring(2), true), "li");
            _liCount--;

            if(_liCount == _liMax - 1)
                return "<ul>" + innerHtml;
            if(_liCount > 0)
                return innerHtml;

            return innerHtml + "</ul>";
        }

        return null;
    }

    private static string ParseText(string markdown, bool list = false)
    {
        var parsedText = Parse_(Parse__((markdown)));

        return list ? parsedText : Wrap(parsedText, "p"); // switched to ternary
    }

    private static string Parse__(string markdown) => Parse(markdown, "__", "strong");
    private static string Parse_(string markdown) => Parse(markdown, "_", "em");

    private static string Parse(string markdown, string delimiter, string tag)
    {
        var pattern = delimiter + "(.+)" + delimiter;
        var replacement = "<" + tag + ">$1</" + tag + ">";

        return Regex.Replace(markdown, pattern, replacement);
    }
    // removed unused methods ParseParagraph() and IsTag()
}
