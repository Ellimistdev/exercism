module BookKeeping
  VERSION = 1
end

class Array
  def accumulate &block
    return to_enum unless block_given? 
    
    newArr = []
    each do |entry| 
      newArr << yield(entry)
    end
    newArr
  end
end