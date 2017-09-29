module BookKeeping
  VERSION = 3
end

class Year
  def self.leap?(num)
    if (num % 4).zero?
      return true unless (num % 100).zero? && !(num % 400).zero?
    end
    false
  end
end
