require 'test/unit/assertions'
include Test::Unit::Assertions

# Write code to reverse a C-Style String. 
# (C-String means that “abcd” is represented as  ve characters, including the null character.)

# Complexity = O(N)
def reverse_c_style(str)
  if str.class != String then return end

  output = []
  i = str.size - 3

  while i >= 0
    output.push str[i] 
    i = i - 1
  end

  output.join('').concat('\0')
end

assert_equal 'fedcba\0', reverse_c_style('abcdef\0')
