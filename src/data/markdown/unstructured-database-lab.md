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

---
##### Contributor Name - Abhirup Kumar