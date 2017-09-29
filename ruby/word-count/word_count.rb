module BookKeeping
  VERSION = 1
end

class Phrase
  def initialize(phrase)
    @phrase = phrase.downcase
  end

  def word_count
    counts = Hash.new(0)
    # remove single quotes surrounding words
    @phrase.gsub!(/'([^\s]+)'/, '\1')

    # split on all non alphanumeric characters except "'" and all whitespace.
    @phrase.split(/[\W\s&&[^']]+/).each do |word|
      counts[word] += 1
    end
    counts
  end
end
