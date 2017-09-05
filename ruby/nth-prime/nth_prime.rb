module BookKeeping
  VERSION = 1
end

class Prime
  def self.nth(n)
    raise ArgumentError if n < 1
    
    # estimate ceiling | avg gap between consecutive primes is roughly log(n)
    range = (n * (Math.log(n) + 2)).floor
    primes = *(2..range)
    
    primes.each do |num|
      # delete from array if i is divisible by any predecessors
      primes.delete_if { |i| i > num && (i % num) == 0 }
    end
    
    primes[n - 1]
    
  end


end