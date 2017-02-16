require 'test/unit/assertions'
include Test::Unit::Assertions

# Write a method to decide if two strings are anagrams or not. 

def _sort(str)
  str.downcase.split('').sort.join
end

def are_anagrams?(str_1, str_2)
  if str_1.class != String || str_2.class != String then return end
  _sort(str_1) == _sort(str_2)
end

assert are_anagrams?('beta', 'beat')
assert !are_anagrams?('bety', 'beat')
