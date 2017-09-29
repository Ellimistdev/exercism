module BookKeeping
  VERSION = 5
end

class Pangram
  def self.pangram?(string)
    string = string.downcase
    ('a'..'z').all? do |char|
      string.include?(char)
    end
  end
end
