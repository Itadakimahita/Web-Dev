n = int(input())
counter = 0
arr = list(map(int, input().split()))

for i in range(1, n):
    if arr[i - 1] < arr[i]:
        counter += 1
print(counter)