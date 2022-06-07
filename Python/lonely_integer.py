

def lonelyInteger(a):
    new_list = []
    for i in a:
        if i in new_list:
            new_list.remove(i)
        else:
            new_list.append(i)
    return new_list[0]



print(lonelyInteger([2,3,4,3,2]))
# print(lonelyInteger([1,1,2]))
