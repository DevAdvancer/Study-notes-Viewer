import { Note } from '../types';

export const notes: Note[] = [
  {
    id: '1',
    subject: 'Intro to Python',
    subjectCode: 'CSE11118',
    content: `# Introducion to Python UNIT - 01

## 1 Introduction
Python is a high-level, interpreted programming language known for its simplicity and readability. It has a large user community and a wide range of libraries that make it versatile and powerful. This cheatsheet provides a quick reference for Python programming concepts.

## 2 Variables and Data Types

### 2.1 Variables
A variable is a named location in memory used to store data. In Python, variable names are case-sensitive and can contain letters, numbers, and underscores.

\`\`\`python
# Variable assignment
x = 5
y = "Hello, World!"
\`\`\`

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

\`\`\`python
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
\`\`\`

### 3.2 Loops
Loops enable repeated execution of a block of code.

\`\`\`python
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
\`\`\`

## 4 Functions
Functions are reusable blocks of code that perform a specific task.

\`\`\`python
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
\`\`\`

## 5 Lists
A list is a collection of items that are ordered and mutable.

\`\`\`python
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
\`\`\`

## 6 Dictionaries
A dictionary is an unordered collection of key-value pairs.

\`\`\`python
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
\`\`\`

## 7 Modules and Packages
Modules are Python files that contain reusable code, and packages are directories that contain multiple modules.

\`\`\`python
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
\`\`\`

## 8 File Handling
Python provides functions for reading from and writing to files.

\`\`\`python
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
\`\`\`

## 9 Exception Handling
Exception handling allows you to handle and manage errors that occur during the execution of your program.

\`\`\`python
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
\`\`\`

## 10 Classes and Objects
Classes are blueprints for creating objects, and objects are instances of a class.

\`\`\`python
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
\`\`\`

## 11 Inheritance and Polymorphism
Inheritance allows you to create a new class that inherits the properties and methods of an existing class, while polymorphism enables objects of different classes to be used interchangeably.

\`\`\`python
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
\`\`\`

## 12 Error and Exception Handling
Python provides built-in error and exception handling mechanisms to catch and handle errors during program execution.

\`\`\`python
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
\`\`\`

## Data Structures and Comprehensions

### 1. Lists
- Mutable, ordered collection of items
- Can contain mixed data types
- Created using square brackets \`[]\`

\`\`\`python
# List creation and operations
my_list = [1, 2, 3, 'hello']
my_list.append(4)  # Add element
my_list.insert(1, 'inserted')  # Insert at specific index
my_list.remove('hello')  # Remove specific element

# List methods
print(len(my_list))  # Length of list
my_list.sort()  # Sort the list
my_list.reverse()  # Reverse the list
\`\`\`

### 2. List Comprehensions
- Concise way to create lists
- Combines mapping and filtering in a single line
- More memory-efficient and often more readable than traditional loops

\`\`\`python
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
\`\`\`

### 3. Tuples
- Immutable, ordered collection
- Created using parentheses \`()\`
- Faster than lists for iteration
- Useful for returning multiple values from functions

\`\`\`python
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
\`\`\`

### 4. Dictionaries
- Key-value pairs
- Mutable and unordered
- Created using curly braces \`{}\`

\`\`\`python
# Dictionary operations
my_dict = {'name': 'John', 'age': 30}
my_dict['city'] = 'New York'  # Add new key-value pair
value = my_dict.get('name', 'Not found')  # Safe retrieval

# Dictionary methods
print(my_dict.keys())  # Dict keys
print(my_dict.values())  # Dict values
my_dict.update({'country': 'USA'})  # Update multiple key-values
\`\`\`

### 5. Dictionary Comprehensions
\`\`\`python
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
\`\`\`

### 6. Sets
- Unordered collection of unique elements
- Created using \`set()\`
- Useful for removing duplicates and set operations

\`\`\`python
# Set operations
my_set = {1, 2, 3}
another_set = {3, 4, 5}
union_set = my_set.union(another_set)
intersection_set = my_set.intersection(another_set)

# Set methods
my_set.add(4)  # Add element
my_set.remove(3)  # Remove specific element
\`\`\`

### 7. Set Comprehensions
\`\`\`python
# Set comprehension
unique_squares = {x**2 for x in range(10)}
# {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}

# Set comprehension with filtering
even_squares = {x**2 for x in range(10) if x % 2 == 0}
# {0, 4, 16, 36, 64}
\`\`\`

## I/O Operations

### 1. File Reading
\`\`\`python
# Reading files
with open('file.txt', 'r') as file:
    content = file.read()  # Read entire file
    lines = file.readlines()  # Read lines into a list

# Reading line by line
with open('file.txt', 'r') as file:
    for line in file:
        print(line.strip())  # Process each line
\`\`\`

### 2. File Writing
\`\`\`python
# Writing to files
with open('output.txt', 'w') as file:
    file.write('Hello, World!')
    file.writelines(['Line 1\n', 'Line 2\n'])

# Appending to files
with open('log.txt', 'a') as file:
    file.write('New log entry\n')
\`\`\`

### 3. Working with CSV
\`\`\`python
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
\`\`\`

## Packages and Modules

### 1. Importing Modules
\`\`\`python
# Different import styles
import math  # Import entire module
from math import sqrt  # Import specific function
import numpy as np  # Common alias for NumPy

# Conditional imports
try:
    import pandas as pd
except ImportError:
    print("Pandas not installed")
\`\`\`

### 2. Creating Your Own Package
\`\`\`
my_package/
│
├── __init__.py
├── module1.py
└── module2.py
\`\`\`

### 3. Popular Python Packages
- NumPy: Numerical computing
- Pandas: Data manipulation
- Matplotlib: Data visualization
- Requests: HTTP library
- scikit-learn: Machine learning

### 4. Package Management
\`\`\`bash
# Using pip (Python package installer)
pip install package_name
pip list  # List installed packages
pip uninstall package_name
pip freeze > requirements.txt  # Save project dependencies
\`\`\`

## Best Practices
1. Use appropriate data structures for your use case
2. Always use context managers (\`with\`) for file operations
3. Import only what you need
4. Use virtual environments for project dependencies
5. Keep packages updated
6. Prefer list/dict/set comprehensions over traditional loops when possible

## Advanced Tips
- Use \`collections\` module for advanced data structures
- Leverage \`pathlib\` for cross-platform file path handling
- Explore type hints for better code documentation
- Be cautious with memory when using comprehensions on large datasets

# Unit 02 - Data handling With Python


# Pandas Notes: Detailed Explanation and Examples

## Table of Contents
1. [Introduction to Pandas](#introduction-to-pandas)
2. [DataFrames](#dataframes)
3. [Series](#series)
4. [Loading and Saving Data](#loading-and-saving-data)
5. [Data Alignment](#data-alignment)
6. [Handling Missing Data](#handling-missing-data)
7. [Reshaping and Pivoting](#reshaping-and-pivoting)
8. [Slicing, Indexing, and Subsetting](#slicing-indexing-and-subsetting)
9. [Insertion and Deletion](#insertion-and-deletion)
10. [Merge and Join](#merge-and-join)
11. [Working with Time Data](#working-with-time-data)

---

## 1. Introduction to Pandas

Pandas is a powerful Python library for data manipulation and analysis. It provides two primary data structures:
- **Series**: One-dimensional labeled array.
- **DataFrame**: Two-dimensional labeled array.

### Importing Pandas
\`\`\`python
import pandas as pd
\`\`\`

---

## 2. DataFrames

A **DataFrame** is a two-dimensional, size-mutable, and heterogeneous data structure.

### Creating a DataFrame
\`\`\`python
data = {'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [25, 30, 35]}
df = pd.DataFrame(data)
print(df)
\`\`\`

### Accessing Data in a DataFrame
- **Columns**: \`df['column_name']\`
- **Rows**: \`df.loc[row_label]\` or \`df.iloc[row_index]\`

### Adding/Removing Columns
\`\`\`python
df['Salary'] = [50000, 60000, 70000]  # Add column
df.drop('Age', axis=1, inplace=True)  # Remove column
\`\`\`

---

## 3. Series

A **Series** is a one-dimensional array with labels.

### Creating a Series
\`\`\`python
s = pd.Series([1, 2, 3], index=['a', 'b', 'c'])
print(s)
\`\`\`

### Accessing Data in a Series
\`\`\`python
print(s['a'])  # Access by label
print(s[0])    # Access by position
\`\`\`

---

## 4. Loading and Saving Data

### Loading Data
\`\`\`python
df = pd.read_csv('data.csv')  # CSV file
df = pd.read_excel('data.xlsx')  # Excel file
df = pd.read_json('data.json')  # JSON file
\`\`\`

### Saving Data
\`\`\`python
df.to_csv('data.csv', index=False)
df.to_excel('data.xlsx', index=False)
df.to_json('data.json')
\`\`\`

---

## 5. Data Alignment

Alignment ensures operations between Series or DataFrames align based on their indices.

### Example
\`\`\`python
s1 = pd.Series([1, 2], index=['a', 'b'])
s2 = pd.Series([3, 4], index=['b', 'c'])
result = s1 + s2  # Aligns on index
print(result)
\`\`\`

---

## 6. Handling Missing Data

### Identifying Missing Data
\`\`\`python
df.isnull()  # Returns a DataFrame of True/False
df.notnull()
\`\`\`

### Filling Missing Data
\`\`\`python
df.fillna(value=0, inplace=True)
\`\`\`

### Dropping Missing Data
\`\`\`python
df.dropna(axis=0, inplace=True)  # Drop rows with NaN
\`\`\`

---

## 7. Reshaping and Pivoting

### Reshaping with \`melt\`
\`\`\`python
pd.melt(df, id_vars=['Name'], value_vars=['Age', 'Salary'])
\`\`\`

### Pivoting
\`\`\`python
df.pivot(index='Name', columns='Variable', values='Value')
\`\`\`

---

## 8. Slicing, Indexing, and Subsetting

### Slicing
\`\`\`python
subset = df[1:3]  # Rows 1 to 2
\`\`\`

### Indexing
\`\`\`python
df.set_index('Name', inplace=True)
print(df.loc['Alice'])  # Access row by index
\`\`\`

### Subsetting
\`\`\`python
df[['Age', 'Salary']]  # Select multiple columns
\`\`\`

---

## 9. Insertion and Deletion

### Insertion
\`\`\`python
df.insert(2, 'Department', ['HR', 'IT', 'Finance'])
\`\`\`

### Deletion
\`\`\`python
df.drop('Department', axis=1, inplace=True)
\`\`\`

---

## 10. Merge and Join

### Merge
\`\`\`python
df1 = pd.DataFrame({'ID': [1, 2], 'Name': ['Alice', 'Bob']})
df2 = pd.DataFrame({'ID': [1, 2], 'Salary': [50000, 60000]})
merged = pd.merge(df1, df2, on='ID')
\`\`\`

### Join
\`\`\`python
df1.set_index('ID', inplace=True)
df2.set_index('ID', inplace=True)
joined = df1.join(df2)
\`\`\`

---

## 11. Working with Time Data

### Date Range
\`\`\`python
dates = pd.date_range(start='2023-01-01', periods=5, freq='D')
\`\`\`

### Converting to Datetime
\`\`\`python
df['date'] = pd.to_datetime(df['date'])
\`\`\`

### Resampling
\`\`\`python
df.resample('M').sum()  # Monthly aggregation
\`\`\`

---

**End of Notes**


##### Contributor Name - Abhirup Kumar
`,
progress: 'in-progress'
  },
  {
    id: '2',
    subject: 'Full Stack SD',
    subjectCode: 'CSE11123',
    content: `# Will be starting after Software Engineering exam`,
    progress: 'not-started'
  }
];
