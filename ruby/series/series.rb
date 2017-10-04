class Series
  def initialize(string)
    @input = string
  end

  def slices(num)
    raise ArgumentError if num > @input.length
    @input.chars.each_cons(num).map(&:join)
  end
end
