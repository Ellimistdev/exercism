module BookKeeping
  VERSION = 3
end

class BeerSong
  def verse(num)
    verse = template(
      bottles(num),
      line_three(num),
      bottles(num - 1)
    )
    verse[0].upcase + verse.slice(1, verse.length)
  end

  def verses(start, finish = 0)
    song = ''

    start.downto(finish) do |i|
      song << verse(i)
      song << "\n" if i != finish
    end

    song
  end

  def bottles(num)
    return '99 bottles of beer' if num < 0
    return "#{num} bottles of beer" if num > 1
    return '1 bottle of beer' if num == 1
    'no more bottles of beer'
  end

  def line_three(num)
    count = num > 1 ? 'one' : 'it'
    return "Take #{count} down and pass it around" if num > 0
    'Go to the store and buy some more'
  end

  def template(bottle_count, line_three, bottle_count_two)
    "#{bottle_count} on the wall, #{bottle_count}.\n" \
      "#{line_three}, #{bottle_count_two} on the wall.\n"
  end
end
