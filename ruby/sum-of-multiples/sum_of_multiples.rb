module BookKeeping
  VERSION = 1
end

class SumOfMultiples
  def initialize(*nums)
    @multiples = nums
  end

  # find multiples of #{@multples} up to #{limit}
  def to(limit)
    result = []
    @multiples.each do |mult|
      (1...limit).each do |i|
        result << i if (i % mult).zero? && result.include?(i) == false
      end
    end
    result.sum
  end
end
