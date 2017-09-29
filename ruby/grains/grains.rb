module BookKeeping
  VERSION = 1
end

class Grains
  def self.square(num)
    raise ArgumentError unless (1..64).cover?(num)
    2**(num - 1)
  end

  def self.total
    total = 0
    (1..64).each do |i|
      total += square(i)
    end
    total
  end
end
