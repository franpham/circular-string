
Your challenge this morning is to create a function that implements an algorithm using the concepts we've covered this week.

###Challenge
1. Write an algorithm that takes in 2 strings as parameters (source, find).
2. Your function should return true if the string passed in as the `find` parameter is found in the `source` parameter if `source` were circular in nature. Meaning there is no end to the `source` string.
3. _Important_: A match would be true if the word to find is partially at the end of the word and at the beginning in sequence.

Ex.
```
Source: Hotdog

Target: dog

Return: true

Source: Assignments

Target: sass

Return: true

Source: Assignments

Target: sassy

Return: false