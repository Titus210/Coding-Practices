#!/bin/python3

import math
import os
import random
import re
import sys


if __name__ == '__main__':
    n = int(input().strip())

    # check if even
if (n % 2) == 0:
    if n in range(2,5):
        print("Not Weird")
    if n in range(6,20 + 1):
        print("Weird")
    if n > 20:
        print("Not Weird")
    # else if odd
else:
    print("Weird")
    