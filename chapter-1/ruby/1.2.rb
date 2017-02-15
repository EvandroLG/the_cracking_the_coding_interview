require 'test/unit/assertions'
include Test::Unit::Assertions

# Write code to reverse a C-Style String. 
# (C-String means that “abcd” is represented as  ve characters, including the null character.)

# Complexity = O(N)
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
