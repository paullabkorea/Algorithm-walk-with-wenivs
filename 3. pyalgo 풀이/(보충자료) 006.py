# stack으로 풀기
def solution(data):
    result = 0
    stack = []
    for i in data:
        stack.append(i)
        if stack[-5:] == [1, 2, 3, 4, 1]:
            for _ in range(5) :
                stack.pop()
            result += 1
    return result