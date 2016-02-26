#from unsorted linked list, remove the duplicates

arr = [1,2,3,4,3,2,1,5,4]

def removeDupes(arr):
	dict = {}
	for x in arr:
		dict[x] = True

	return dict.keys()

print(removeDupes(arr))


#another version with a class of nodeList

class NodeList:
	def __init__(self, value, next):
		self.value = value
		self.next = 

class LinkedList:
	def __init__(array)