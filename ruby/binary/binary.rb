module BookKeeping
  VERSION = 3
end

class Binary
  def self.to_decimal num
    raise ArgumentError if num.chars.any? { |i| !("0..1").include? i }
    count = num.length - 1
    sum = 0
    
    num.chars.each do |i| 
      sum += i.to_i * 2 ** count
      count -= 1
    end
    sum
  end
end