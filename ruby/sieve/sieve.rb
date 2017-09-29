module BookKeeping
  VERSION = 1
end

class Sieve
  def initialize(num)
    @num = num
  end

  def primes
    primes = []
    values = *(2..@num)

    # while values exist that could be prime
    until values.empty?
      # select the next value
      i = values.first
      # this value must be prime at this point, so add it to primes
      primes << i
      # see if it is a divisor for any remaining values
      values.each do |val|
        # if it is
        if (val % i).zero?
          # remove that value from consideration
          values.delete(val)
        end
      end
    end
    primes
  end
end
