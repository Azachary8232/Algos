import math


def binarySearch(arr, target):
    return binarySearchHelper(arr, target, 0, len(arr) - 1)


def binarySearchHelper(arr, target, left, right):
    if left > right:
        return False
    mid =  math.floor((left + right) / 2)
    if target == arr[mid]:
        return mid
    elif target < arr[mid]:
        return binarySearchHelper(arr, target, left, mid - 1)
    else:
        return binarySearchHelper(arr, target, mid + 1, right)




# def binarySearch(arr, target):
#     left = 0
#     right = len(arr) - 1
#     while left < right:
#         mid = math.floor((left + right) / 2)
#         if arr[mid] == target:
#             return mid
#         elif target < arr[mid]:
#             right = mid - 1
#         else:
#             left = mid + 1
#     return False





print(binarySearch([2,7,8,9,10,13,17,19,21], 19))