module BookKeeping
  VERSION = 3
end

class Raindrops
  SOUNDS = [[3, 'Pling'],
            [5, 'Plang'],
            [7, 'Plong']].freeze

  def self.convert(num)
    result = ''
    SOUNDS.each do |(divisor, sound)|
      result << sound if (num % divisor).zero?
    end
    result == '' ? num.to_s : result
  end
end
