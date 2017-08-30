class Hamming
  def self.compute(strA, strB)
    count = 0
    pos = 0
    if (strA.length != strB.length)
      raise ArgumentError
    end
    while pos < strA.length do
      if strA[pos] != strB[pos]
        count += 1
      end
    pos += 1
    end
    count
  end
end

module BookKeeping
  VERSION = 3
end
