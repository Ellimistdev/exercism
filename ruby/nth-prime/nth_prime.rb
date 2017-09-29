module BookKeeping
  VERSION = 1
end

class Prime
  def self.nth(n)
    raise ArgumentError if n < 1

    # estimate ceiling | avg gap between consecutive primes is roughly log(n)
    ceiling = (n * (Math.log(n) + 2)).floor

    # check 2, and all odds up to ceiling
    primes = [2, *(3..ceiling).step(2)]

    primes.each do |num|
      # delete from array if i is divisible by any predecessors
      primes.delete_if { |i| i > num && (i % num).zero? }
    end

    primes[n - 1]
  end
end
