'''
    it is time to take up some challenge and figure out how to solve it
'''

def get_longest_substring(s : str):
    output: str = s[0]
    for i in range(0, len(s)):
        for j in range(i+`1`, len(s)):
            checkStr=s[i:j]
            if checkStr == checkStr[::-1] and len(output) < len(checkStr):
                output = checkStr
    return output



print(get_longest_substring("babad"))
print(get_longest_substring("cbbd"))
print(get_longest_substring("bb"))