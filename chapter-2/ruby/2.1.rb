# Implement an algorithm to find the nth to last element of a singly linked list.

# Complexity O(N)
def remove_duplacate_nodes node
  unless node[:node_next]
    return
  end

  duplicates = []
  duplicates.push node[:data]

  current = node[:node_next]

  while current do
    if duplicates.include? current[:data]
      current[:node_prev][:node_next] = current[:node_next]
      current[:node_next][:node_prev] = current[:node_prev]
    else
      duplicates.push current[:data]
    end

    current = current[:node_next]
  end
end
