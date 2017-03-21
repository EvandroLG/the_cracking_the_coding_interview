# Implement an algorithm to delete a node in the middle of a single linked list, given only access to that node.

# Complexity O(1)
def delete_node node
  if !node || !node[:node_next] then return false end

  node_next = node[:node_next]
  node[:data] = node_next[:data]
  node[:node_next] = node_next[:node_next]

  true
end

# testing
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

delete_node(b)
assert_equal 'c', a[:node_next][:data]
