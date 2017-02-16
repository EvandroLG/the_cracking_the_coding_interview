require 'test/unit/assertions'
include Test::Unit::Assertions

# Write a method to replace all spaces in a string with ‘%20’.

# Complexity O(N)
def replace_all_spaces(str)
  if str.class != String then return end
  
  output = []
  str.split('').each do |v|
    if v == ' '
      output.push '%20'
    else
      output.push v
    end
  end

  output.join ''
end

assert_equal 'Lua%20is%20a%20great%20language', replace_all_spaces('Lua is a great language')
