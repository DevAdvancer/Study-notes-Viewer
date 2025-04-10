# LABs

## LAB1
### Questions and Answers:-

#### 1. Create a new  database using Mongodb
```mongodb
use LAB1
```
#### 2. Create a new document in collection "posts"
```mongodb
db.posts.insertOne({name: 'Post 1', description: 'Hello, this is my first post', date: '2024-12-3', tags: ['a', 'b', 'c']})
```
**Output**:
```output
{
  acknowledged: true,
  insertedId: ObjectId('67a4bc8961ac63dd4b73f7be')
}
```
#### 3. Insert more similar entries with different values for all the attributes
```mongodb
db.posts.insertMany([{name: 'Post 2', description: 'Hello, this is my second post', date: '2024-12-10', tags: ['a', 'c']}, {name: 'Post 3', description: 'Hello, this is my third post', date: '2024-12-15', tags: ['b', 'c']}])
```
**Output**:
```output
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('67a4bd3561ac63dd4b73f7bf'),
    '1': ObjectId('67a4bd3561ac63dd4b73f7c0')
  }
}
```
#### 4. Query for all the posts
```mongodb
db.posts.find({})
```
**Output**:
```output
[
  {
    _id: ObjectId('67a4bc8961ac63dd4b73f7be'),
    name: 'Post 1',
    description: 'Hello, this is my first post',
    date: '2024-12-3',
    tags: [ 'a', 'b', 'c' ]
  },
  {
    _id: ObjectId('67a4bd3561ac63dd4b73f7bf'),
    name: 'Post 2',
    description: 'Hello, this is my second post',
    date: '2024-12-10',
    tags: [ 'a', 'c' ]
  },
  {
    _id: ObjectId('67a4bd3561ac63dd4b73f7c0'),
    name: 'Post 3',
    description: 'Hello, this is my third post',
    date: '2024-12-15',
    tags: [ 'b', 'c' ]
  }
]
```
#### 5. Query for posts with the tag "b" in tags
```mongodb
db.posts.find({tags: 'b'})
```
**Output**:
```output
[
  {
    _id: ObjectId('67a4bc8961ac63dd4b73f7be'),
    name: 'Post 1',
    description: 'Hello, this is my first post',
    date: '2024-12-3',
    tags: [ 'a', 'b', 'c' ]
  },
  {
    _id: ObjectId('67a4bd3561ac63dd4b73f7c0'),
    name: 'Post 3',
    description: 'Hello, this is my third post',
    date: '2024-12-15',
    tags: [ 'b', 'c' ]
  }
]
```
#### 6. Query the posts with tags "a" or "c"
```mongodb
db.posts.find({$or: [{tags: 'a'}, {tags: 'c'}]})
```
**Output**:
```output
[
  {
    _id: ObjectId('67a4bc8961ac63dd4b73f7be'),
    name: 'Post 1',
    description: 'Hello, this is my first post',
    date: '2024-12-3',
    tags: [ 'a', 'b', 'c' ]
  },
  {
    _id: ObjectId('67a4bd3561ac63dd4b73f7bf'),
    name: 'Post 2',
    description: 'Hello, this is my second post',
    date: '2024-12-10',
    tags: [ 'a', 'c' ]
  },
  {
    _id: ObjectId('67a4bd3561ac63dd4b73f7c0'),
    name: 'Post 3',
    description: 'Hello, this is my third post',
    date: '2024-12-15',
    tags: [ 'b', 'c' ]
  }
]
```
#### 7. Sort the posts according to the increasing and decreasing order of date
```mongodb
db.posts.aggregate({$sort: {date: 1}})
db.posts.aggregate({$sort: {date: -1}})
```
**Output**:
```output
For 1
[
  {
    _id: ObjectId('67a4bd3561ac63dd4b73f7bf'),
    name: 'Post 2',
    description: 'Hello, this is my second post',
    date: '2024-12-10',
    tags: [ 'a', 'c' ]
  },
  {
    _id: ObjectId('67a4bd3561ac63dd4b73f7c0'),
    name: 'Post 3',
    description: 'Hello, this is my third post',
    date: '2024-12-15',
    tags: [ 'b', 'c' ]
  },
  {
    _id: ObjectId('67a4bc8961ac63dd4b73f7be'),
    name: 'Post 1',
    description: 'Hello, this is my first post',
    date: '2024-12-3',
    tags: [ 'a', 'b', 'c' ]
  }
]
For -1
[
  {
    _id: ObjectId('67a4bc8961ac63dd4b73f7be'),
    name: 'Post 1',
    description: 'Hello, this is my first post',
    date: '2024-12-3',
    tags: [ 'a', 'b', 'c' ]
  },
  {
    _id: ObjectId('67a4bd3561ac63dd4b73f7c0'),
    name: 'Post 3',
    description: 'Hello, this is my third post',
    date: '2024-12-15',
    tags: [ 'b', 'c' ]
  },
  {
    _id: ObjectId('67a4bd3561ac63dd4b73f7bf'),
    name: 'Post 2',
    description: 'Hello, this is my second post',
    date: '2024-12-10',
    tags: [ 'a', 'c' ]
  }
]
```
#### 8. Update all the posts using updateMany and set a new field likes
```mongodb
db.posts.updateMany({},{$set: {likes: 7}})
```
**Output**:
```output
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}
```
#### 9. Change the like amount for each post to be a different number
```mongodb
db.posts.updateOne({name: 'Post 2'},{$set: {likes: 8}})
db.posts.updateOne({name: 'Post 3'},{$set: {likes: 9}})
```
**Output**:
```output
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```
#### 10. Follow step 8 & 9 for dislikes
```mongodb
db.posts.updateMany({},{$set: {dislikes: 2}})
db.posts.updateOne({name: 'Post 2'},{$set: {dislikes: 3}})
db.posts.updateOne({name: 'Post 3'},{$set: {dislikes: 1}})
```
**Output**:
```output
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```
#### 11. Sort by the number of Likes and Dislikes
```mongodb
db.posts.aggregate({$sort: {like: 1, dislikes: -1}})
db.posts.aggregate({$sort: {like: -1, dislikes: 1}})
```
**Output**:
```output
For 1 & -1
[
  {
    _id: ObjectId('67a4bd3561ac63dd4b73f7bf'),
    name: 'Post 2',
    description: 'Hello, this is my second post',
    date: '2024-12-10',
    tags: [ 'a', 'c' ],
    likes: 8,
    dislikes: 3
  },
  {
    _id: ObjectId('67a4bc8961ac63dd4b73f7be'),
    name: 'Post 1',
    description: 'Hello, this is my first post',
    date: '2024-12-3',
    tags: [ 'a', 'b', 'c' ],
    likes: 7,
    dislikes: 2
  },
  {
    _id: ObjectId('67a4bd3561ac63dd4b73f7c0'),
    name: 'Post 3',
    description: 'Hello, this is my third post',
    date: '2024-12-15',
    tags: [ 'b', 'c' ],
    likes: 9,
    dislikes: 1
  }
]
For -1 & 1
[
  {
    _id: ObjectId('67a4bd3561ac63dd4b73f7c0'),
    name: 'Post 3',
    description: 'Hello, this is my third post',
    date: '2024-12-15',
    tags: [ 'b', 'c' ],
    likes: 9,
    dislikes: 1
  },
  {
    _id: ObjectId('67a4bc8961ac63dd4b73f7be'),
    name: 'Post 1',
    description: 'Hello, this is my first post',
    date: '2024-12-3',
    tags: [ 'a', 'b', 'c' ],
    likes: 7,
    dislikes: 2
  },
  {
    _id: ObjectId('67a4bd3561ac63dd4b73f7bf'),
    name: 'Post 2',
    description: 'Hello, this is my second post',
    date: '2024-12-10',
    tags: [ 'a', 'c' ],
    likes: 8,
    dislikes: 3
  }
]
```
## Questions and Answers:-
### 1.Create a new db
```mongodb
use libraryDB
```
**Output**:
```output
switched to db libraryDB
```
### 2.In that db add two collections one for books one for authors.
```mongodb
db.createCollection("authors")
db.createCollection("books")
```
**Output**:
```output
{ ok: 1 }
{ ok: 1 }
```
### 3.Authors will have - name, age & Add 3-5 authors
```mongodb
db.authors.insertMany([
    {name: "J.K. Rowling", age: 58 },
    {name: "George R.R. Martin", age: 75 },
    {name: "J.R.R. Tolkien", age: 127 },
    {name: "Agatha Christie", age: 85 },
    {name: "Stephen King", age: 76 }
])
```
**Output**:
```output
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('67a4bfcd56cbdf24cd804767'),
    '1': ObjectId('67a4bfcd56cbdf24cd804768'),
    '2': ObjectId('67a4bfcd56cbdf24cd804769'),
    '3': ObjectId('67a4bfcd56cbdf24cd80476a'),
    '4': ObjectId('67a4bfcd56cbdf24cd80476b')
  }
}
```
### 4.Add 1-3 for authors for each book
```mongodb
db.books.insertMany([
    { name: "Harry Potter and the Philosopher's Stone", authorId: ObjectId("67a4bfcd56cbdf24cd804767"), genre: "Fantasy", year: 1997 },
    { name: "A Game of Thrones", authorId: ObjectId("67a4bfcd56cbdf24cd804768"), genre: "Fantasy", year: 1996 },
    { name: "The Hobbit", authorId: ObjectId("67a4bfcd56cbdf24cd804769"), genre: "Fantasy", year: 1937 },
    { name: "Murder on the Orient Express", authorId: ObjectId("67a4bfcd56cbdf24cd80476a"), genre: "Mystery", year: 1934 },
    { name: "The Shining", authorId: ObjectId("67a4bfcd56cbdf24cd80476b"), genre: "Horror", year: 1977 }
])
```
**Output**:
```output
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('67a4c08c56cbdf24cd80476c'),
    '1': ObjectId('67a4c08c56cbdf24cd80476d'),
    '2': ObjectId('67a4c08c56cbdf24cd80476e'),
    '3': ObjectId('67a4c08c56cbdf24cd80476f'),
    '4': ObjectId('67a4c08c56cbdf24cd804770')
  }
}
```
### 5.Find/List all the books written by "author_name".(Use internet to find how to lookup)
```mongodb
db.books.aggregate([
    {
        $lookup: {
            from: "authors",
            localField: "authorId",
            foreignField: "_id",
            as: "authorDetails"
        }
    },
    {
        $match: { "authorDetails.name": "J.K. Rowling" }
    },
    {
        $project: { name: 1, genre: 1, year: 1, "authorDetails.name": 1, _id: 0 }
    }
])
```
**Output**:
```output
{
  name: "Harry Potter and the Philosopher's Stone",
  genre: 'Fantasy',
  year: 1997,
  authorDetails: [
    {
      name: 'J.K. Rowling'
    }
  ]
}
```
## LAB2
### Questions and Answers:-
#### 1.Create a new db
```mongodb
use libraryDB
```
**Output**:
```output
switched to db libraryDB
```
#### 2.In that db add two collections one for books one for authors.
```mongodb
db.createCollection("authors")
db.createCollection("books")
```
**Output**:
```output
{ ok: 1 }
{ ok: 1 }
```
#### 3.Authors will have - name, age & Add 3-5 authors
```mongodb
db.authors.insertMany([
    {name: "J.K. Rowling", age: 58 },
    {name: "George R.R. Martin", age: 75 },
    {name: "J.R.R. Tolkien", age: 127 },
    {name: "Agatha Christie", age: 85 },
    {name: "Stephen King", age: 76 }
])
```
**Output**:
```output
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('67a4bfcd56cbdf24cd804767'),
    '1': ObjectId('67a4bfcd56cbdf24cd804768'),
    '2': ObjectId('67a4bfcd56cbdf24cd804769'),
    '3': ObjectId('67a4bfcd56cbdf24cd80476a'),
    '4': ObjectId('67a4bfcd56cbdf24cd80476b')
  }
}
```
#### 4.Add 1-3 for authors for each book
```mongodb
db.books.insertMany([
    { name: "Harry Potter and the Philosopher's Stone", authorId: ObjectId("67a4bfcd56cbdf24cd804767"), genre: "Fantasy", year: 1997 },
    { name: "A Game of Thrones", authorId: ObjectId("67a4bfcd56cbdf24cd804768"), genre: "Fantasy", year: 1996 },
    { name: "The Hobbit", authorId: ObjectId("67a4bwfcd56cbdf24cd804769"), genre: "Fantasy", year: 1937 },
    { name: "Murder on the Orient Express", authorId: ObjectId("67a4bfcd56cbdf24cd80476a"), genre: "Mystery", year: 1934 },
    { name: "The Shining", authorId: ObjectId("67a4bfcd56cbdf24cd80476b"), genre: "Horror", year: 1977 }
])
```
**Output**:
```output
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('67a4c08c56cbdf24cd80476c'),
    '1': ObjectId('67a4c08c56cbdf24cd80476d'),
    '2': ObjectId('67a4c08c56cbdf24cd80476e'),
    '3': ObjectId('67a4c08c56cbdf24cd80476f'),
    '4': ObjectId('67a4c08c56cbdf24cd804770')
  }
}
```
#### 5.Find/List all the books written by "author_name".(Use internet to find how to lookup)
```mongodb
db.books.aggregate([
    {
        $lookup: {
            from: "authors",
            localField: "authorId",
            foreignField: "_id",
            as: "authorDetails"
        }
    },
    {
        $match: { "authorDetails.name": "J.K. Rowling" }
    },
    {
        $project: { name: 1, genre: 1, year: 1, "authorDetails.name": 1, _id: 0 }
    }
])
```
**Output**:
```output
{
  name: "Harry Potter and the Philosopher's Stone",
  genre: 'Fantasy',
  year: 1997,
  authorDetails: [
    {
      name: 'J.K. Rowling'
    }
  ]
}
```
## LAB3

### Python Flask Server
```python
from flask import Flask, request, jsonify
from bson.objectid import ObjectId
import pymongo
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

mongo = pymongo.MongoClient('mongodb://localhost:27017/')
db = mongo["todo"]
collection = db["todos"]

@app.route('/api/todos', methods=['GET'])
def get_todo():
  todo = collection.find()
  return jsonify([{"id": str(todo["_id"]), "todo": todo["todo"], "status": todo["status"]} for todo in todo])

@app.route('/api/todos', methods=['POST'])
def add_todo():
  todo = request.json
  if "todo" not in todo and "status" not in todo:
    return jsonify({"error": "Missing data"}), 400
  collection.insert_one(todo)
  return jsonify({"message": "Todo added"}), 201

@app.route('/api/todos/<id>', methods=['PUT'])
def update_todo(id):
  todo = request.json
  collection.update_one({"_id": ObjectId(id)}, {"$set": todo})
  return jsonify({"message": "Todo updated"})

@app.route('/api/todos/<id>', methods=['DELETE'])
def delete_todo(id):
  collection.delete_one({"_id": ObjectId(id)})
  return jsonify({"message": "Todo deleted"})

if __name__ == "__main__":
  app.run(port=3000, debug=True)
```
# Pratice CRUD OPERATIONS AND AGGREGATE FUNCTIONs
# MongoDB Terminal Commands Guide

This guide covers essential MongoDB operations through the terminal, including:
- Creating and connecting to databases
- Creating collections with dummy data
- CRUD operations (Create, Read, Update, Delete)
- Aggregation framework operations

## Connecting to MongoDB

```bash
# Connect to MongoDB locally
mongo

# Connect to a specific database
mongo mydatabase

# Connect to a remote MongoDB instance
mongo mongodb://username:password@hostname:port/database
```

## Database Operations

```bash
# Show all databases
show dbs

# Create/use a database
use school

# Show current database
db

# Drop database
db.dropDatabase()
```

## Collection Operations

```bash
# Show collections in current database
show collections

# Create collection
db.createCollection("students")

# Drop collection
db.students.drop()
```

## Create Operations (Insert)

Let's insert some dummy data for a school database:

```javascript
// Insert one document
db.students.insertOne({
  name: "John Smith",
  age: 20,
  email: "john.smith@example.com",
  major: "Computer Science",
  gpa: 3.7,
  courses: ["Database Systems", "Algorithms", "Web Development"],
  address: {
    street: "123 College Ave",
    city: "University City",
    state: "CA",
    zip: "90210"
  },
  enrolled: true,
  graduationYear: 2025
})

// Insert multiple documents
db.students.insertMany([
  {
    name: "Maria Garcia",
    age: 22,
    email: "maria.garcia@example.com",
    major: "Biology",
    gpa: 3.9,
    courses: ["Genetics", "Physiology", "Organic Chemistry"],
    address: {
      street: "456 Science Blvd",
      city: "University City",
      state: "CA",
      zip: "90210"
    },
    enrolled: true,
    graduationYear: 2024
  },
  {
    name: "David Kim",
    age: 19,
    email: "david.kim@example.com",
    major: "Mathematics",
    gpa: 4.0,
    courses: ["Calculus", "Linear Algebra", "Number Theory"],
    address: {
      street: "789 Math Road",
      city: "University City",
      state: "CA",
      zip: "90210"
    },
    enrolled: true,
    graduationYear: 2026
  },
  {
    name: "Sarah Johnson",
    age: 21,
    email: "sarah.johnson@example.com",
    major: "Psychology",
    gpa: 3.5,
    courses: ["Cognitive Psychology", "Social Psychology", "Statistics"],
    address: {
      street: "321 Mind St",
      city: "University City",
      state: "CA",
      zip: "90210"
    },
    enrolled: true,
    graduationYear: 2024
  },
  {
    name: "James Wilson",
    age: 23,
    email: "james.wilson@example.com",
    major: "Computer Science",
    gpa: 3.2,
    courses: ["Database Systems", "Networking", "Operating Systems"],
    address: {
      street: "654 Tech Drive",
      city: "University City",
      state: "CA",
      zip: "90210"
    },
    enrolled: false,
    graduationYear: 2023
  }
])

// Let's create another collection for professors
db.professors.insertMany([
  {
    name: "Dr. Robert Brown",
    department: "Computer Science",
    email: "robert.brown@university.edu",
    courses: ["Database Systems", "Data Mining"],
    officeHours: ["Monday 2-4pm", "Wednesday 1-3pm"],
    tenured: true,
    publications: 45,
    yearsOfExperience: 15
  },
  {
    name: "Dr. Lisa Chen",
    department: "Biology",
    email: "lisa.chen@university.edu",
    courses: ["Genetics", "Cell Biology"],
    officeHours: ["Tuesday 10am-12pm", "Thursday 2-4pm"],
    tenured: true,
    publications: 78,
    yearsOfExperience: 22
  },
  {
    name: "Dr. Michael Davis",
    department: "Mathematics",
    email: "michael.davis@university.edu",
    courses: ["Calculus", "Linear Algebra"],
    officeHours: ["Monday 10am-12pm", "Friday 1-3pm"],
    tenured: false,
    publications: 12,
    yearsOfExperience: 5
  }
])

// Let's create a courses collection
db.courses.insertMany([
  {
    name: "Database Systems",
    code: "CS301",
    department: "Computer Science",
    credits: 4,
    professor: "Dr. Robert Brown",
    students: 35,
    days: ["Monday", "Wednesday"],
    time: "10:00 - 11:50",
    building: "Technology Hall",
    room: "201"
  },
  {
    name: "Genetics",
    code: "BIO405",
    department: "Biology",
    credits: 4,
    professor: "Dr. Lisa Chen",
    students: 28,
    days: ["Tuesday", "Thursday"],
    time: "14:00 - 15:50",
    building: "Science Building",
    room: "305"
  },
  {
    name: "Calculus",
    code: "MATH201",
    department: "Mathematics",
    credits: 3,
    professor: "Dr. Michael Davis",
    students: 45,
    days: ["Monday", "Wednesday", "Friday"],
    time: "09:00 - 09:50",
    building: "Math Hall",
    room: "101"
  },
  {
    name: "Algorithms",
    code: "CS401",
    department: "Computer Science",
    credits: 4,
    professor: "Dr. Sarah Williams",
    students: 30,
    days: ["Tuesday", "Thursday"],
    time: "13:00 - 14:50",
    building: "Technology Hall",
    room: "205"
  }
])
```

## Read Operations (Query)

```javascript
// Find all documents in a collection
db.students.find()

// Format the output to be more readable
db.students.find().pretty()

// Find documents with specific criteria
db.students.find({ major: "Computer Science" })

// Find documents with comparison operators
db.students.find({ age: { $gt: 20 } })  // greater than
db.students.find({ gpa: { $gte: 3.5 } })  // greater than or equal
db.students.find({ age: { $lt: 21 } })  // less than
db.students.find({ graduationYear: { $lte: 2024 } })  // less than or equal
db.students.find({ major: { $ne: "Biology" } })  // not equal

// Find documents with logical operators
db.students.find({ $and: [{ major: "Computer Science" }, { gpa: { $gte: 3.5 } }] })
db.students.find({ $or: [{ major: "Computer Science" }, { major: "Mathematics" }] })
db.students.find({ age: { $not: { $gt: 21 } } })  // not greater than 21
db.students.find({ $nor: [{ major: "Biology" }, { major: "Psychology" }] })  // neither Biology nor Psychology

// Find documents with element operators
db.students.find({ gpa: { $exists: true } })  // field exists
db.students.find({ "address.zip": { $type: "string" } })  // field is of type string

// Find documents with array operators
db.students.find({ courses: "Database Systems" })  // array contains element
db.students.find({ courses: { $all: ["Algorithms", "Web Development"] } })  // array contains all elements
db.students.find({ courses: { $size: 3 } })  // array has specific size
db.professors.find({ courses: { $elemMatch: { $eq: "Calculus" } } })  // array contains element matching criteria

// Find documents with specific fields (projection)
db.students.find({}, { name: 1, email: 1, _id: 0 })  // include only name and email, exclude _id
db.students.find({ major: "Computer Science" }, { courses: 1, gpa: 1 })  // only courses and gpa for CS students

// Count documents
db.students.countDocuments({ enrolled: true })

// Limit results
db.students.find().limit(2)

// Skip results
db.students.find().skip(2)

// Sort results
db.students.find().sort({ gpa: -1 })  // descending order by GPA
db.students.find().sort({ name: 1 })  // ascending order by name

// Find distinct values
db.students.distinct("major")

// Find one document
db.students.findOne({ email: "john.smith@example.com" })
```

## Update Operations

```javascript
// Update one document
db.students.updateOne(
  { name: "John Smith" },
  { $set: { gpa: 3.8 } }
)

// Update multiple documents
db.students.updateMany(
  { major: "Computer Science" },
  { $set: { department: "Engineering" } }
)

// Increment numeric fields
db.students.updateOne(
  { name: "David Kim" },
  { $inc: { age: 1 } }
)

// Add to arrays
db.students.updateOne(
  { name: "Maria Garcia" },
  { $push: { courses: "Molecular Biology" } }
)

// Add multiple values to arrays
db.students.updateOne(
  { name: "Sarah Johnson" },
  { $push: { courses: { $each: ["Research Methods", "Developmental Psychology"] } } }
)

// Remove from arrays
db.students.updateOne(
  { name: "John Smith" },
  { $pull: { courses: "Web Development" } }
)

// Update nested documents
db.students.updateOne(
  { name: "James Wilson" },
  { $set: { "address.city": "Tech City" } }
)

// Replace entire document
db.students.replaceOne(
  { name: "James Wilson" },
  {
    name: "James Wilson",
    age: 24,
    email: "james.wilson@example.com",
    major: "Software Engineering",
    gpa: 3.4,
    courses: ["Software Design", "Project Management", "Mobile Development"],
    address: {
      street: "654 Tech Drive",
      city: "Tech City",
      state: "CA",
      zip: "90210"
    },
    enrolled: true,
    graduationYear: 2025
  }
)

// Upsert (update or insert)
db.students.updateOne(
  { name: "Alex Turner" },
  {
    $set: {
      age: 19,
      email: "alex.turner@example.com",
      major: "Physics",
      gpa: 3.6,
      enrolled: true
    }
  },
  { upsert: true }
)
```

## Delete Operations

```javascript
// Delete one document
db.students.deleteOne({ name: "Alex Turner" })

// Delete many documents
db.students.deleteMany({ enrolled: false })

// Delete documents matching criteria
db.students.deleteMany({ gpa: { $lt: 2.0 } })

// Delete all documents
db.students.deleteMany({})
```

## Aggregation Operations

The aggregation framework is powerful for data analysis and transformation:

```javascript
// Simple aggregation with match and group
db.students.aggregate([
  { $match: { enrolled: true } },
  { $group: { _id: "$major", averageGPA: { $avg: "$gpa" } } }
])

// Count students by major
db.students.aggregate([
  { $group: { _id: "$major", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
])

// Find the highest GPA per major
db.students.aggregate([
  { $group: {
      _id: "$major",
      highestGPA: { $max: "$gpa" },
      studentWithHighestGPA: { $first: "$name" }
    }
  }
])

// Project specific fields or create new fields
db.students.aggregate([
  { $project: {
      name: 1,
      major: 1,
      yearsToGraduation: { $subtract: ["$graduationYear", 2023] }
    }
  }
])

// Use multiple stages
db.courses.aggregate([
  { $match: { credits: { $gte: 4 } } },
  { $group: { _id: "$department", totalCourses: { $sum: 1 }, totalStudents: { $sum: "$students" } } },
  { $sort: { totalStudents: -1 } },
  { $project: { department: "$_id", totalCourses: 1, totalStudents: 1, _id: 0 } }
])

// Lookup (join) example
db.courses.aggregate([
  { $lookup: {
      from: "professors",
      localField: "professor",
      foreignField: "name",
      as: "professorDetails"
    }
  },
  { $unwind: "$professorDetails" },
  { $project: {
      courseName: "$name",
      courseCode: "$code",
      professorName: "$professor",
      department: 1,
      professorEmail: "$professorDetails.email",
      professorTenured: "$professorDetails.tenured"
    }
  }
])

// Using $unwind to deconstruct arrays
db.students.aggregate([
  { $unwind: "$courses" },
  { $group: { _id: "$courses", studentCount: { $sum: 1 } } },
  { $sort: { studentCount: -1 } }
])

// Calculate statistics
db.students.aggregate([
  { $match: { enrolled: true } },
  { $group: {
      _id: null,
      avgGPA: { $avg: "$gpa" },
      maxGPA: { $max: "$gpa" },
      minGPA: { $min: "$gpa" },
      stdDevGPA: { $stdDevPop: "$gpa" }
    }
  }
])

// Using $bucket to group data into buckets
db.students.aggregate([
  { $bucket: {
      groupBy: "$gpa",
      boundaries: [0, 2.5, 3.0, 3.5, 4.0, 4.1],
      default: "Other",
      output: {
        count: { $sum: 1 },
        students: { $push: "$name" }
      }
    }
  }
])

// Using $facet for multi-dimensional aggregation
db.students.aggregate([
  { $facet: {
      "byMajor": [
        { $group: { _id: "$major", count: { $sum: 1 } } }
      ],
      "byGraduationYear": [
        { $group: { _id: "$graduationYear", count: { $sum: 1 } } }
      ],
      "gpaStats": [
        { $group: {
            _id: null,
            avgGPA: { $avg: "$gpa" },
            minGPA: { $min: "$gpa" },
            maxGPA: { $max: "$gpa" }
          }
        }
      ]
    }
  }
])
```

## Indexing Operations

```javascript
// Create a single field index
db.students.createIndex({ name: 1 })  // ascending index
db.students.createIndex({ gpa: -1 })  // descending index

// Create a compound index
db.students.createIndex({ major: 1, gpa: -1 })

// Create a unique index
db.students.createIndex({ email: 1 }, { unique: true })

// Create a text index
db.students.createIndex({ name: "text", major: "text" })

// List all indexes
db.students.getIndexes()

// Drop an index
db.students.dropIndex("name_1")

// Create a TTL (Time-To-Live) index
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })  // expires after 1 hour
```

## Export and Import Operations

```bash
# Export data to JSON
mongoexport --db=school --collection=students --out=students.json

# Export data to CSV
mongoexport --db=school --collection=students --type=csv --fields=name,age,email,major,gpa --out=students.csv

# Import data from JSON
mongoimport --db=school --collection=students --file=students.json

# Import data from CSV
mongoimport --db=school --collection=students --type=csv --headerline --file=students.csv
```

## Additional Useful Commands

```javascript
// Get collection statistics
db.students.stats()

// Get database statistics
db.stats()

// Run JavaScript in the shell
var currentDate = new Date();
print("Current date: " + currentDate);

// Define and use a JavaScript function
function findHighGPAStudents(minGPA) {
  return db.students.find({ gpa: { $gte: minGPA } }).toArray();
}
var highAchievers = findHighGPAStudents(3.8);
print(highAchievers.length + " students found with GPA >= 3.8");
```

## Practical Examples for Lab Exam

### Example 1: Find courses with the most students
```javascript
db.courses.find().sort({ students: -1 }).limit(3)
```

### Example 2: Update all CS courses to be worth 1 more credit
```javascript
db.courses.updateMany(
  { department: "Computer Science" },
  { $inc: { credits: 1 } }
)
```

### Example 3: Find professors who teach multiple courses
```javascript
db.professors.find({ courses: { $size: { $gt: 1 } } })
```

### Example 4: Complex aggregation to get course stats by department
```javascript
db.courses.aggregate([
  { $group: {
      _id: "$department",
      totalCourses: { $sum: 1 },
      avgCredits: { $avg: "$credits" },
      totalStudents: { $sum: "$students" }
    }
  },
  { $sort: { totalStudents: -1 } },
  { $project: {
      department: "$_id",
      totalCourses: 1,
      avgCredits: { $round: ["$avgCredits", 1] },
      totalStudents: 1,
      studentsPerCourse: { $round: [{ $divide: ["$totalStudents", "$totalCourses"] }, 0] },
      _id: 0
    }
  }
])
```

---
##### Contributor Name - Abhirup Kumar
