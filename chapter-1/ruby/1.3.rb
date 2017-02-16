require 'test/unit/assertions'
include Test::Unit::Assertions

#Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer. 
#NOTE: One or two additional variables are fine. An extra copy of the array is not.
#FOLLOW UP
#Write the test cases for this method.

# Complexity O(N^2)

def remove_duplicates(str)
  if str.empty? then return end
  if str.size < 2 then return end

	output = ''
  str.each_char do |v|
		unless output.include? v
			output = output + v
		end
  end

	puts output
end

assert_equal 'abc', remove_duplicates('aabcac')
