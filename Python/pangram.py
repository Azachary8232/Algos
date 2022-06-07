


def pangrams(s):
    contains = []
    lower = s.lower()
    for char in lower:
        if char.isalpha():
            if char in contains:
                continue
            else:    
                contains.append(char)
    if len(contains) == 26:
        return "pangram"
    else:
        return "not pangram"



print(pangrams("We promptly judged antique ivory buckles for the next prize"))  