module BookKeeping
    VERSION = 3
end

class Raindrops
  SOUNDS = [ 
    [3, "Pling"],
    [5, "Plang"], 
    [7, "Plong"]]
  
  def self.convert(num)
    result = "" 
    SOUNDS.each do |(divisor, sound)|
      result << sound if num % divisor == 0
    end
    result = num.to_s if result == ""
    result
  end
end
