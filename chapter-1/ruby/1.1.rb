require 'test/unit/assertions'
include Test::Unit::Assertions

#Implement an algorithm to determine if a string has all unique characters.
#What if you can not use additional data structures?

def unique_characters(str)
  first_character = str[0]
  index = 1
  size = str.size

  while index < size do
    if str[index] != first_character
      return false
    end

    index = index + 1
  end

  true
end

assert unique_characters('aaaaa')
assert !unique_characters('beta')
