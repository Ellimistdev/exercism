module BookKeeping
  VERSION = 3
end

class RunLengthEncoding
  # given a string, returns a run length encoded string
  def self.encode str
    count = 0
    char = ''
    out = ""
    
    str.scan(/./).each_with_index do |alpha, i|
      count += 1
      if str[i] != char
        if char != ''
          out += append_encoded(char, count)
        end
        char = alpha
        count = 0     
      end
    end
    out += append_encoded(char, count + 1)
  end
  
  # given a run length encoded string, returns the decoded string
  def self.decode str
    # use a string to store count to account for multi digit nums
    count = ""
    out = ""
    
    str.scan(/./).each do |char|
      # build the count string
      if char.match(/\d/)
        count += char 
        next
      end
      # using the count and the current char, build the output string
      if char.match(/\D/)
        count = "1" if count == ""
        count.to_i.times do
          out += char
        end
        count = ""
      end
    end
    out
  end
  
  private
  
  def self.append_encoded  char, count
    out = ""
    if count > 1
      out += count.to_s
    end
    out += char
    out
  end
  
end