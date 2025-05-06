# Introducion to Python UNIT - 01

## 1 Introduction
Python is a high-level, interpreted programming language known for its simplicity and readability. It has a large user community and a wide range of libraries that make it versatile and powerful. This cheatsheet provides a quick reference for Python programming concepts.

## 2 Variables and Data Types

### 2.1 Variables
A variable is a named location in memory used to store data. In Python, variable names are case-sensitive and can contain letters, numbers, and underscores.

```python
# Variable assignment
x = 5
y = "Hello, World!"
```

### 2.2 Data Types
Python has several built-in data types, including:
- Numeric: int, float, complex
- Sequence: list, tuple, range
- Mapping: dict
- Set: set, frozenset
- Boolean: bool
- None: NoneType

## 3 Control Flow

### 3.1 Conditional Statements
Conditional statements allow you to perform different actions based on conditions.

```python
# If statement
if condition:
    statement(s)

# If-else statement
if condition:
    statement(s)
else:
    statement(s)

# If-elif-else statement
if condition1:
    statement(s)
elif condition2:
    statement(s)
else:
    statement(s)
```

### 3.2 Loops
Loops enable repeated execution of a block of code.

```python
# For loop
for item in sequence:
    statement(s)

# While loop
while condition:
    statement(s)

# Loop control statements
break

# For loop with break
for item in sequence:
    if condition:
        break
    statement(s)

# Continue statement
for item in sequence:
    if condition:
        continue
    statement(s)

# Range function
for i in range(start, stop, step):
    statement(s)

# Nested loops
for item in sequence:
    for element in nested_sequence:
        statement(s)
```

## 4 Functions
Functions are reusable blocks of code that perform a specific task.

```python
# Defining a function
def function_name(parameters):
    statement(s)
    return value

# Function call
result = function_name(arguments)

# Default parameters
def function_name(parameter=value):
    statement(s)

# Variable number of arguments
def function_name(*args):
    statement(s)

# Keyword arguments
def function_name(**kwargs):
    statement(s)

# Lambda functions
lambda arguments: expression
```

## 5 Lists
A list is a collection of items that are ordered and mutable.

```python
# Creating a list
my_list = [item1, item2, item3]

# Accessing list elements
item = my_list[index]

# Slicing a list
new_list = my_list[start:end]

# Modifying list elements
my_list[index] = new_value

# Adding elements to a list
my_list.append(item)

# Removing elements from a list
my_list.remove(item)

# List operations
combined_list = list1 + list2
repeated_list = my_list * n
```

## 6 Dictionaries
A dictionary is an unordered collection of key-value pairs.

```python
# Creating a dictionary
my_dict = {"key1": value1, "key2": value2}

# Accessing dictionary values
value = my_dict["key"]

# Modifying dictionary values
my_dict["key"] = new_value

# Adding key-value pairs to a dictionary
my_dict["new_key"] = value

# Removing key-value pairs from a dictionary
del my_dict["key"]

# Dictionary operations
keys = my_dict.keys()
values = my_dict.values()
items = my_dict.items()
```

## 7 Modules and Packages
Modules are Python files that contain reusable code, and packages are directories that contain multiple modules.

```python
# Importing a module
import module_name

# Importing specific items from a module
from module_name import item

# Importing an entire module with an alias
import module_name as alias

# Importing specific items from a module with aliases
from module_name import item as alias

# Importing all items from a module
from module_name import *

# Creating a package
__init__.py

# Importing a module from a package
from package_name import module_name
```

## 8 File Handling
Python provides functions for reading from and writing to files.

```python
# Opening a file
file = open(filename, mode)

# Reading from a file
content = file.read()
lines = file.readlines()

# Writing to a file
file.write(content)

# Appending to a file
file = open(filename, "a")
file.write(content)

# Closing a file
file.close()
```

## 9 Exception Handling
Exception handling allows you to handle and manage errors that occur during the execution of your program.

```python
# Try-except block
try:
    statement(s)
except ExceptionType:
    statement(s)

# Handling multiple exceptions
try:
    statement(s)
except ExceptionType1:
    statement(s)
except ExceptionType2:
    statement(s)

# Finally block
try:
    statement(s)
except ExceptionType:
    statement(s)
finally:
    statement(s)

# Raising an exception
raise ExceptionType("Error message")
```

## 10 Classes and Objects
Classes are blueprints for creating objects, and objects are instances of a class.

```python
# Defining a class
class ClassName:
    def __init__(self, parameters):
        self.attribute = value

    def method(self, parameters):
        statement(s)

# Creating an object
object_name = ClassName(arguments)

# Accessing attributes
value = object_name.attribute

# Calling methods
object_name.method(arguments)
```

## 11 Inheritance and Polymorphism
Inheritance allows you to create a new class that inherits the properties and methods of an existing class, while polymorphism enables objects of different classes to be used interchangeably.

```python
# Inheritance
class ChildClass(ParentClass):
    def __init__(self, parameters):
        super().__init__(parameters)
        self.attribute = value

    def method(self, parameters):
        statement(s)

# Polymorphism
class Class1:
    def method(self, parameters):
        statement(s)

class Class2:
    def method(self, parameters):
        statement(s)

def function_name(object):
    object.method(arguments)
```

## 12 Error and Exception Handling
Python provides built-in error and exception handling mechanisms to catch and handle errors during program execution.

```python
# Try-except block
try:
    statement(s)
except ExceptionType as e:
    statement(s)
    print(e)

# Handling multiple exceptions
try:
    statement(s)
except ExceptionType1:
    statement(s)
except ExceptionType2:
    statement(s)

# Finally block
try:
    statement(s)
except ExceptionType:
    statement(s)
finally:
    statement(s)

# Raising an exception
raise ExceptionType("Error message")
```

## Data Structures and Comprehensions

### 1. Lists
- Mutable, ordered collection of items
- Can contain mixed data types
- Created using square brackets `[]`

```python
# List creation and operations
my_list = [1, 2, 3, 'hello']
my_list.append(4)  # Add element
my_list.insert(1, 'inserted')  # Insert at specific index
my_list.remove('hello')  # Remove specific element

# List methods
print(len(my_list))  # Length of list
my_list.sort()  # Sort the list
my_list.reverse()  # Reverse the list
```

### 2. List Comprehensions
- Concise way to create lists
- Combines mapping and filtering in a single line
- More memory-efficient and often more readable than traditional loops

```python
# Basic list comprehension
squares = [x**2 for x in range(10)]  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# List comprehension with conditional
even_squares = [x**2 for x in range(10) if x % 2 == 0]  # [0, 4, 16, 36, 64]

# Nested list comprehension
matrix = [[j for j in range(3)] for i in range(3)]
# [[0, 1, 2], [0, 1, 2], [0, 1, 2]]

# Complex examples
names = ['Alice', 'Bob', 'Charlie']
name_lengths = [len(name) for name in names]  # [5, 3, 7]
uppercase_words = [word.upper() for word in names]
# ['ALICE', 'BOB', 'CHARLIE']
```

### 3. Tuples
- Immutable, ordered collection
- Created using parentheses `()`
- Faster than lists for iteration
- Useful for returning multiple values from functions

```python
# Tuple creation and unpacking
my_tuple = (1, 2, 3)
x, y, z = my_tuple  # Unpacking
coordinates = (10, 20)
x, y = coordinates  # Multiple assignment

# Named tuples for more structured data
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(1, 2)
print(p.x, p.y)  # 1, 2
```

### 4. Dictionaries
- Key-value pairs
- Mutable and unordered
- Created using curly braces `{}`

```python
# Dictionary operations
my_dict = {'name': 'John', 'age': 30}
my_dict['city'] = 'New York'  # Add new key-value pair
value = my_dict.get('name', 'Not found')  # Safe retrieval

# Dictionary methods
print(my_dict.keys())  # Dict keys
print(my_dict.values())  # Dict values
my_dict.update({'country': 'USA'})  # Update multiple key-values
```

### 5. Dictionary Comprehensions
```python
# Dictionary comprehension
squares_dict = {x: x**2 for x in range(6)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Conditional dictionary comprehension
even_squares = {x: x**2 for x in range(10) if x % 2 == 0}
# {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}

# Transforming existing dictionary
original_dict = {'a': 1, 'b': 2, 'c': 3}
doubled_dict = {k: v*2 for k, v in original_dict.items()}
# {'a': 2, 'b': 4, 'c': 6}
```

### 6. Sets
- Unordered collection of unique elements
- Created using `set()`
- Useful for removing duplicates and set operations

```python
# Set operations
my_set = {1, 2, 3}
another_set = {3, 4, 5}
union_set = my_set.union(another_set)
intersection_set = my_set.intersection(another_set)

# Set methods
my_set.add(4)  # Add element
my_set.remove(3)  # Remove specific element
```

### 7. Set Comprehensions
```python
# Set comprehension
unique_squares = {x**2 for x in range(10)}
# {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}

# Set comprehension with filtering
even_squares = {x**2 for x in range(10) if x % 2 == 0}
# {0, 4, 16, 36, 64}
```

## I/O Operations

### 1. File Reading
```python
# Reading files
with open('file.txt', 'r') as file:
    content = file.read()  # Read entire file
    lines = file.readlines()  # Read lines into a list

# Reading line by line
with open('file.txt', 'r') as file:
    for line in file:
        print(line.strip())  # Process each line
```

### 2. File Writing
```python
# Writing to files
with open('output.txt', 'w') as file:
    file.write('Hello, World!')
    file.writelines(['Line 1\n', 'Line 2\n'])

# Appending to files
with open('log.txt', 'a') as file:
    file.write('New log entry\n')
```

### 3. Working with CSV
```python
import csv

# Reading CSV
with open('data.csv', 'r') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        print(row)

# Writing CSV
with open('output.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Name', 'Age'])
    writer.writerow(['John', 30])
```

## Packages and Modules

### 1. Importing Modules
```python
# Different import styles
import math  # Import entire module
from math import sqrt  # Import specific function
import numpy as np  # Common alias for NumPy

# Conditional imports
try:
    import pandas as pd
except ImportError:
    print("Pandas not installed")
```

### 2. Creating Your Own Package
```
my_package/
│
├── __init__.py
├── module1.py
└── module2.py
```

### 3. Popular Python Packages
- NumPy: Numerical computing
- Pandas: Data manipulation
- Matplotlib: Data visualization
- Requests: HTTP library
- scikit-learn: Machine learning

### 4. Package Management
```bash
# Using pip (Python package installer)
pip install package_name
pip list  # List installed packages
pip uninstall package_name
pip freeze > requirements.txt  # Save project dependencies
```

## Best Practices
1. Use appropriate data structures for your use case
2. Always use context managers (`with`) for file operations
3. Import only what you need
4. Use virtual environments for project dependencies
5. Keep packages updated
6. Prefer list/dict/set comprehensions over traditional loops when possible

## Advanced Tips
- Use `collections` module for advanced data structures
- Leverage `pathlib` for cross-platform file path handling
- Explore type hints for better code documentation
- Be cautious with memory when using comprehensions on large datasets

# Unit 02 - Data handling With Pandas

## Table of Contents
1. Introduction to Pandas
2. DataFrames
3. Series
4. Loading and Saving Data
5. Data Alignment
6. Handling Missing Data
7. Reshaping and Pivoting
8. Slicing, Indexing, and Subsetting
9. Insertion and Deletion
10. Merge and Join
11. Working with Time Data

---

## 1. Introduction to Pandas

Pandas is a powerful Python library for data manipulation and analysis. It provides two primary data structures:
- **Series**: One-dimensional labeled array.
- **DataFrame**: Two-dimensional labeled array.

### Importing Pandas
```python
import pandas as pd
```

---

## 2. DataFrames

A **DataFrame** is a two-dimensional, size-mutable, and heterogeneous data structure.

### Creating a DataFrame
```python
data = {'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [25, 30, 35]}
df = pd.DataFrame(data)
print(df)
```

### Accessing Data in a DataFrame
- **Columns**: `df['column_name']`
- **Rows**: `df.loc[row_label]` or `df.iloc[row_index]`

### Adding/Removing Columns
```python
df['Salary'] = [50000, 60000, 70000]  # Add column
df.drop('Age', axis=1, inplace=True)  # Remove column
```

---

## 3. Series

A **Series** is a one-dimensional array with labels.

### Creating a Series
```python
s = pd.Series([1, 2, 3], index=['a', 'b', 'c'])
print(s)
```

### Accessing Data in a Series
```python
print(s['a'])  # Access by label
print(s[0])    # Access by position
```

---

## 4. Loading and Saving Data

### Loading Data
```python
df = pd.read_csv('data.csv')  # CSV file
df = pd.read_excel('data.xlsx')  # Excel file
df = pd.read_json('data.json')  # JSON file
```

### Saving Data
```python
df.to_csv('data.csv', index=False)
df.to_excel('data.xlsx', index=False)
df.to_json('data.json')
```

---

## 5. Data Alignment

Alignment ensures operations between Series or DataFrames align based on their indices.

### Example
```python
s1 = pd.Series([1, 2], index=['a', 'b'])
s2 = pd.Series([3, 4], index=['b', 'c'])
result = s1 + s2  # Aligns on index
print(result)
```

---

## 6. Handling Missing Data

### Identifying Missing Data
```python
df.isnull()  # Returns a DataFrame of True/False
df.notnull()
```

### Filling Missing Data
```python
df.fillna(value=0, inplace=True)
```

### Dropping Missing Data
```python
df.dropna(axis=0, inplace=True)  # Drop rows with NaN
```

---

## 7. Reshaping and Pivoting

### Reshaping with `melt`
```python
pd.melt(df, id_vars=['Name'], value_vars=['Age', 'Salary'])
```

### Pivoting
```python
df.pivot(index='Name', columns='Variable', values='Value')
```

---

## 8. Slicing, Indexing, and Subsetting

### Slicing
```python
subset = df[1:3]  # Rows 1 to 2
```

### Indexing
```python
df.set_index('Name', inplace=True)
print(df.loc['Alice'])  # Access row by index
```

### Subsetting
```python
df[['Age', 'Salary']]  # Select multiple columns
```

---

## 9. Insertion and Deletion

### Insertion
```python
df.insert(2, 'Department', ['HR', 'IT', 'Finance'])
```

### Deletion
```python
df.drop('Department', axis=1, inplace=True)
```

---

## 10. Merge and Join

### Merge
```python
df1 = pd.DataFrame({'ID': [1, 2], 'Name': ['Alice', 'Bob']})
df2 = pd.DataFrame({'ID': [1, 2], 'Salary': [50000, 60000]})
merged = pd.merge(df1, df2, on='ID')
```

### Join
```python
df1.set_index('ID', inplace=True)
df2.set_index('ID', inplace=True)
joined = df1.join(df2)
```

---

## 11. Working with Time Data

### Date Range
```python
dates = pd.date_range(start='2023-01-01', periods=5, freq='D')
```

### Converting to Datetime
```python
df['date'] = pd.to_datetime(df['date'])
```

### Resampling
```python
df.resample('M').sum()  # Monthly aggregation
```
---
## Some Important Questions and Answers

## 1. DataFrames and Series
### Q1: What is the difference between a Pandas Series and a DataFrame?
**Answer:**
- A **Series** is a one-dimensional labeled array capable of holding any data type (e.g., integers, strings, floating-point numbers).
- A **DataFrame** is a two-dimensional labeled data structure with columns of potentially different data types. It can be thought of as a dictionary of Series objects.

### Q2: How can you create a DataFrame in Pandas?
**Answer:**
You can create a DataFrame using:
- A dictionary of lists/arrays
- A list of dictionaries
- A NumPy array
- Reading data from external files (e.g., CSV, Excel)

Example:
```python
import pandas as pd
data = {'Name': ['Alice', 'Bob'], 'Age': [25, 30]}
df = pd.DataFrame(data)
```

## 2. Loading and Saving Data
### Q3: How do you read a CSV file into a Pandas DataFrame?
**Answer:**
Use the `pd.read_csv()` function.
Example:
```python
df = pd.read_csv('filename.csv')
```

### Q4: How can you save a DataFrame to an Excel file?
**Answer:**
Use the `to_excel()` function.
Example:
```python
df.to_excel('filename.xlsx', index=False)
```

## 3. Data Alignment and Missing Data
### Q5: How does data alignment work in Pandas?
**Answer:**
When performing operations, Pandas automatically aligns data on their labels, ensuring calculations are accurate even if the data isn't aligned manually.

### Q6: What methods can be used to handle missing data?
**Answer:**
- `fillna()` to replace missing values.
- `dropna()` to remove rows/columns with missing values.
- `isna()` to detect missing values.

## 4. Reshaping and Pivoting
### Q7: What is the purpose of the `pivot_table()` function?
**Answer:**
The `pivot_table()` function is used to summarize data, similar to Excel's pivot table feature. It allows grouping and aggregation.
Example:
```python
df.pivot_table(values='Sales', index='Region', columns='Product', aggfunc='sum')
```

### Q8: How can you reshape data using `melt()`?
**Answer:**
The `melt()` function is used to unpivot a DataFrame from wide to long format.
Example:
```python
pd.melt(df, id_vars=['Category'], value_vars=['2019', '2020'])
```

## 5. Slicing, Indexing, and Subsetting
### Q9: What is the difference between `loc` and `iloc` in Pandas?
**Answer:**
- `loc` is label-based indexing.
- `iloc` is integer-based indexing.
Example:
```python
df.loc[0:2, 'Column1']  # Using labels
df.iloc[0:2, 1]         # Using integers
```

### Q10: How do you subset rows based on a condition?
**Answer:**
You can use boolean indexing.
Example:
```python
df[df['Age'] > 25]
```

## 6. Insertion and Deletion
### Q11: How do you add a new column to a DataFrame?
**Answer:**
Assign a value to a new column name.
Example:
```python
df['NewColumn'] = [1, 2, 3]
```

### Q12: How can you delete a row or column from a DataFrame?
**Answer:**
Use the `drop()` method.
Example:
```python
df.drop('ColumnName', axis=1, inplace=True)  # Deleting a column
df.drop(0, axis=0, inplace=True)            # Deleting a row
```

## 7. Merge and Join
### Q13: What is the difference between `merge()` and `join()` in Pandas?
**Answer:**
- `merge()` is used to combine DataFrames based on common columns or indices.
- `join()` is primarily used for index-based joining.

### Q14: How do you perform an inner join using `merge()`?
**Answer:**
```python
result = pd.merge(df1, df2, on='Key', how='inner')
```

## 8. Time Series
### Q15: How can you convert a column to a datetime object?
**Answer:**
Use the `pd.to_datetime()` function.
Example:
```python
df['Date'] = pd.to_datetime(df['Date'])
```

### Q16: What is the purpose of resampling in time series data?
**Answer:**
Resampling is used to change the frequency of time series data, such as converting daily data to monthly data.
Example:
```python
df.resample('M').sum()
```


# Question Marks 2:

1. What is Python? <br />
Python is a high level-programming language known for it's readability, simplicity and ease of use. It supports multiple programming paradigms, including object-oriented, imperative and functional programming.

2. What are the key features of python? <br />
Key features of python include simplicity, dynamic typing, portability, extensive standered library, and support for multiple programming paradigms.

3. What is the difference between `list` and `tuple` in python?<br />
- A list is mutable (can be modified)
- Tuple is im-mutable (cannot be changed after creation)

4. What are python's inbuilt data type? <br />
Python's inbuilt data types are `int`, `str`, `float`, `list`, `dict`, `set`, `bool`, `tuple`, and `None`.

5. Explain the input() fuction in python?
The input() fuction is used to get input from the user as a string. It reads a line of text entered by the user.

6. What is the use of the len() functions in python?
THe len() function is userd to get the number of elements in a list, tuple, dictionary, or string.

7. What is the difference between == and is in python?<br />
- `==` checks for equality of values
- `is` it compares the identity (memory address) of two objects.

8. What is python dictionary? <br />
A dictionary is an odered collection of key-value pairs, where each key maps to specific value.

9. What are the python function? <br />
Functions in python are defined using the `def` keyword and can accept parameters and returns values.

10. How do you define a variable python? <br />
A variable is defined by simply asssigning a value to a name, such as x = 10.

11. What is Python set?<br />
A set is an unordered collection of unique elements. It is similar to a list but does not allow duplicates.

12. What are list comprehensions in python?<br />
List comprehensions provide a concise way to create lists usign a single line of code, e.g. [x ** 2 for x in range(10)].

13. What does the try and except block do in python? <br />
The try block contains code that might raise an exception, while the except block catches and handles the exception.

14. What is global variable in python? <br />
A global variable is defined outside of function and can be accessed inside any function by using the global keyword.

15. What is the use of the `__init__()` method in Python classes? <br />
The `__init__()` method is a constructor that is automatically called when an object of a class is created.

16. What is slicing in Python? <br />
Slicing is used to extract a portion of a sequence (e.g., list, tuple, or string) using a specified start, stop, and step.

17. What is lambda function in python? <br />
A lambda function is an anonymous function defined using the lambda keyword. It can take any number of arguments but only one expression.

18. What is the difference between deepcopy() and copy() ? <br />
`copy()` creates a shallow copy of the object (only references are copied), while `deepcopy()` creates a new copy whth all nested objects copied as well.

19. What is the assert statements in python? <br />
The asserts statement tests a condition and raises an AssertionError if the condition is False.

20. What are decorators in Python? <br />
Decorators are the functions that modify the behavior of another functuon or method. They are often used to add functionality to existing code without changing the structure.

<br />

> For the Notes of Matplotlib, Pandas, Numpy and Scipy Go to this Link [Google Drive](https://drive.google.com/drive/folders/1eLzZ69YWAP3cNgA6cWJg6fn5C2u7VJYL?usp=sharing)

---
##### Contributor Name - Abhirup Kumar
