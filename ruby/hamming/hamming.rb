class Hamming
  def self.compute(str_a, str_b)
    count = 0
    pos = 0
    raise ArgumentError if str_a.length != str_b.length
    while pos < str_a.length
      count += 1 if str_a[pos] != str_b[pos]
      pos += 1
    end
    count
  end
end

module BookKeeping
  VERSION = 3
end
