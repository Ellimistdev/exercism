class Array
  def accumulate
    return to_enum unless block_given?

    new_arr = []
    each do |entry|
      new_arr << yield(entry)
    end
    new_arr
  end
end

module BookKeeping
  VERSION = 1
end
