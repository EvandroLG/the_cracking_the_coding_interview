require 'test/unit/assertions'
include Test::Unit::Assertions

#Assume you have a method isSubstring which checks if one word is a substring of another.
#Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only
#one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”).

# Complexity O(N)
def rotation?(s1, s2)
  if s1.class == String && s1.size == s2.size
    false
  end

  (s1+s1).include? s2
end

assert !rotation?('waterbottl', 'erbottlewat')
assert rotation?('waterbottle', 'erbottlewat')
