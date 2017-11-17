module BookKeeping
  VERSION = 1
end

class Trinary
  def initialize(num)
    @num = num =~ /\D/ ? [0] : num.split('').map(&:to_i)
  end

  def to_decimal
    return 0 if @num.any? { |n| n > 2 }
    @num.each_with_index.inject(0) do |sum, (val, index)|
      sum + (val * (3**(@num.count - (index + 1))))
    end
  end
end
