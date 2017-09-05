module BookKeeping
  VERSION = 3
end

class Year
  def self.leap?(num)
    if num % 4 == 0
      return true unless (num % 100 == 0) && !(num % 400 == 0)
    end
    false
  end
end