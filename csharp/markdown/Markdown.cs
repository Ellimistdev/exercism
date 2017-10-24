using System;
using System.Text.RegularExpressions;

// Ordered methods in the sequence they are called.
public static class Markdown
{
    private static bool _list; // extract list check that's being passed around
    public static string Parse(string markdown)
    {
        var lines = markdown.Split('\n');
        var result = "";
        _list = false;
        
        for (int i = 0; i < lines.Length; i++)
        {
            result += ParseLine(lines[i]);  // no need to declare var lineresult
        }
        
        return _list ? result + "</ul>" : result; // switched to ternary
    }
    
    // combine null checks & assignment
    private static string ParseLine(string markdown)
    {
        return ParseHeader(markdown) ?? 
               ParseLineItem(markdown) ?? 
               ParseParagraph(markdown) ??
               throw new ArgumentException("Invalid markdown"); 
    }
    
    private static string ParseHeader(string markdown)
    {
        var regex = new Regex(@"#+");
        var count = regex.Match(markdown).Length; // get '#' count via regex
        
        if (count == 0)
        {
            return null;
        }

        var headerTag = "h" + count;
        var headerHtml = Wrap(markdown.Substring(count + 1), headerTag);

        if (_list)
        {
            _list = false;
            return "</ul>" + headerHtml;
        }
        else
        {
            return headerHtml;
        }
    }
    
    private static string Wrap(string text, string tag) => "<" + tag + ">" + text + "</" + tag + ">";

    private static string ParseLineItem(string markdown)
    {
        var tempList = _list;
        if (markdown.StartsWith("*"))
        {
            _list = true;
            var innerHtml = Wrap(ParseText(markdown.Substring(2)), "li");
            _list = tempList;
            
            if (_list)
            {
                return innerHtml;
            }
            else
            {
                _list = true;
                return "<ul>" + innerHtml;
            }
        }

        return null;
    }

    private static string ParseText(string markdown)
    {
        var parsedText = Parse_(Parse__((markdown)));

        return _list ? parsedText : Wrap(parsedText, "p"); // switched to ternary
    }

    private static string Parse__(string markdown) => Parse(markdown, "__", "strong");
    private static string Parse_(string markdown) => Parse(markdown, "_", "em");
    
    private static string Parse(string markdown, string delimiter, string tag)
    {
        var pattern = delimiter + "(.+)" + delimiter;
        var replacement = "<" + tag + ">$1</" + tag + ">";
        return Regex.Replace(markdown, pattern, replacement);
    }
    
    private static string ParseParagraph(string markdown)
    {
        if (!_list)
        {
            return ParseText(markdown);
        }
        else
        {
            _list = false;
            return "</ul>" + ParseText(markdown);
        }
    }
}
