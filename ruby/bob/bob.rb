module BookKeeping
  VERSION = 1
end

class Bob
  def self.hey(str)
    # remove all whitespace
    str.gsub!(/\s/, "")
    case
    # this case must go before the str.upcase check, str.upcase on "" returns true. 
    when str == ""
      "Fine. Be that way!"
    # TODO: find solution that is not true when str == ""
    when str == str.upcase && !str.match(/^[^a-zA-Z]+$/)
      "Whoa, chill out!"
    when str[-1] == '?'
      "Sure."
    else
      "Whatever."
    end
  end
end