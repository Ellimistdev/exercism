module BookKeeping
  VERSION = 2
end

class Integer
  def to_roman
    num = self
    result = ''

    while num > 0
      ROMAN_NUMERALS.reverse_each do |key, val|
        count = num / key
        if count > 0
          count.times do
            result << val
          end
          num -= (key * count)
        end
      end
    end
    result = clean_roman(result)
  end

  private

  def clean_roman(string)
    ROMAN_SPECIAL.each do |key, val|
      string.gsub!(key, val)
    end
    string
  end

  ROMAN_NUMERALS = { 1 => 'I',
                     5 => 'V',
                     10 => 'X',
                     50 => 'L',
                     100 => 'C',
                     500 => 'D',
                     1_000 => 'M' }.freeze

  ROMAN_SPECIAL = { 'VIIII' => 'IX',
                    'LXXXX' => 'XC',
                    'DCCCC' => 'CM',
                    'IIII' => 'IV',
                    'XXXX' => 'XL',
                    'CCCC' => 'CD' }.freeze
end
