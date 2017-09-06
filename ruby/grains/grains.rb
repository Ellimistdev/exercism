module BookKeeping
  VERSION = 1
end

class Grains
  def self.square(num)
    raise ArgumentError unless num > 0 && num < 65
    
    grain_count = 1
    (num - 1).times do 
      grain_count = grain_count * 2
    end
    grain_count
  end
  
  def self.total
    total = 0
    (1..64).each do |i|
      total += square(i)
    end
    total
  end
end

