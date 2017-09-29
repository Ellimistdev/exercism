module BookKeeping
  VERSION = 6
end

class Gigasecond
  def self.from(start)
    start + (10**9)
  end
end
