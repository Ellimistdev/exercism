class PrimeFactors
  def self.for(num)
    test_num = num
    divisor = 2
    factors = []

    while test_num > 1
      if (test_num % divisor).zero?
        test_num /= divisor
        factors << divisor
        # retry successful factor
        divisor -= 1
      end
      divisor += 1
    end
    factors
  end
end
