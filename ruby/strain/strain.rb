class Array
  def keep
    return to_enum unless block_given?
    each_with_object([]) do |element, kept|
      kept << element if yield(element)
    end
  end

  def discard
    return to_enum unless block_given?
    each_with_object([]) do |element, kept|
      kept << element unless yield(element)
    end
  end
end
