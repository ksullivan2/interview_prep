#given a string of unique characters, return a list of all possible permutations of the same length as the input string

s = "abcd"



def stringPermute(s):
	out = process("", s)

	print(out)


def process(current_string, remaining_string):
	if remaining_string == "":
		return [current_string]

	out = []
	for character in remaining_string:
		out.extend(process(current_string+character, remaining_string.replace(character, '')))

	return out

stringPermute(s)



