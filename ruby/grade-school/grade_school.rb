class School
  def initialize
    @roster = Hash.new { |grade, students| grade[students] = [] }
  end

  def students(grade)
    @roster[grade].sort
  end

  def add(name, grade)
    @roster[grade] << name
  end

  def students_by_grade
    @roster.sort.map do |grade, students|
      {
        grade: grade,
        students: students.sort
      }
    end
  end
end

module BookKeeping
  VERSION = 3
end
