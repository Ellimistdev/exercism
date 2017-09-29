module BookKeeping
  VERSION = 1
end

class Bob
  def self.hey(str)
    str.gsub!(/\s/, '')
    return 'Fine. Be that way!' if str == ''
    return 'Whoa, chill out!' if str == str.upcase && !str.match(/^[^a-zA-Z]+$/)
    return 'Sure.' if str[-1] == '?'
    'Whatever.'
  end
end
