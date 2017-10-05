class PhoneNumber
  def self.clean(num)
    phone = num.gsub(/\D/, '').gsub(/^1/, '')
    return nil unless (phone.length == 10) && phone.match(/^[2-9]..[2-9]/)
    phone
  end
end

module BookKeeping
  VERSION = 2
end
