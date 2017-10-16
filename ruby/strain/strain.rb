class Array
  def keep
    kept = []
    each do |element|
      kept << element if yield(element)
    end
    kept
  end

  def discard
    discarded = []
    each do |element|
      discarded << element unless yield(element)
    end
    discarded
  end
end
