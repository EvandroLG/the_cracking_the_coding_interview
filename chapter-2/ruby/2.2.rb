# Implement an algorithm to find the nth to last element of a singly linked list.

# Complexity O(N)
def nth_to_last(head, nth)
	if !head || nth < 1 then return end

	p1 = head
	i = 0

	while i < nth - 1 do
		if !p1 then return end
		p1 = p1[:node_next]
		i = i + 1
	end

	p2 = head

	while p1[:node_next] do
		p1 = p1[:node_next]
		p2 = p2[:node_next]
	end

	p2
end

# Testing
require 'test/unit/assertions'
include Test::Unit::Assertions

class LinkedList
  attr_reader :size

  def initialize
    @size = 0
    @head = nil
    @tail = nil
  end
  
  private
  def create_node data
    {
      data: data,
      node_next: nil
    }
  end

  public
  def add_node data
    node = create_node data
    @size = @size + 1

    if !@head
      @head = node
    else
      @tail[:node_next] = node 
    end

    @tail = node
  end
end

linked = LinkedList.new
a = linked.add_node 'a'
b = linked.add_node 'b'
c = linked.add_node 'c'
d = linked.add_node 'd'
e = linked.add_node 'e'
f = linked.add_node 'f'

assert_equal e, nth_to_last(a, 2)
assert_equal d, nth_to_last(a, 3)
