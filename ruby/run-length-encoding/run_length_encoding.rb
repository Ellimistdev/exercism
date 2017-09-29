module BookKeeping
  VERSION = 3
end

class RunLengthEncoding
  # given a string, returns a run length encoded string
  def self.encode(str)
    count = 0
    char = ''
    out = ''

    str.chars.each do |alpha|
      count += 1
      next unless alpha != char
      out += append_encoded(char, count) unless char == ''
      char = alpha
      count = 0
    end
    out += append_encoded(char, count + 1)
  end

  # given a run length encoded string, returns the decoded string
  def self.decode(str)
    # use a string to store count to account for multi digit nums
    count = ''
    out = ''

    str.chars.each do |char|
      # build the count string
      if char =~ /\d/
        count += char
        next
      end
      # using the count and the current char, build the output string
      count = '1' if count == ''
      count.to_i.times do
        out += char
      end
      count = ''
    end
    out
  end

  def self.append_encoded(char, count)
    out = count > 1 ? count.to_s : ''
    out + char
  end
end
