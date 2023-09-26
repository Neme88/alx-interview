#!/usr/bin/python3
'''Module to find Pascal's Triangle integers'''

def pascal_triangle(n):
    if n <= 0:
        return []

    triangle = []
    for i in range(n):
        current_line = []
        for j in range(i + 1):
            if j == 0 or j == i:
                current_line.append(1)
            else:
                previous_line = triangle[i - 1]
                current_line.append(previous_line[j - 1] + previous_line[j])
        triangle.append(current_line)

    return triangle

