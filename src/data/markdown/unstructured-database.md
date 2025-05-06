# Syllabus
---
## UNIT - 1
1. What is UDB?
2. Different types of UDB
3. Use cases and benefits of UDB
4. Data Models
5. Difference Between UDB and DB
6. Semi Structured Data
7. Advantage and DisAdvantage of UDB
## Unit - 2
1. Data Ingestion Techniques
2. Extracting Structured Information from Unstructured Data
3. Handling Images (GridFs && base64) and Videos
## Unit - 3
1. What is Mongodb?
2. Key Features
3. Mongo Query
## Unit - 4
1. Replication
2. Sharding
3. Atomic Operations
4. Relational and Database References.
5. Indexing Limitation
6. Text Search Regular Expression **
7. Studio 3T over Compass.
8. Configure Mongodb Atlas
9. MongoDB-Python Integration
## Unit-5
1. Backup and Recovery Procedures
2. Disaster Recovery Planning
3. MongoDB in Production
4. Integration with Other Database Systems
5. Handling Streaming and Real-time Data
6. Exploring Cloud-based Unstructured Databases

---

# UNIT - I
---
**What is Unstructured Database?** <br />
An Unstructured database is a data storage system that can effieciently store, retrive, and manage data that lacks a predefiend data model or doesn't fit neatly into relational tables. <br />
Examples: Mongodb, Neo4j, etc. <br />

**Characteristics**
- No fixed schema or predefined structure
- Flexible data models that adapt to changing data requirements
- Ability to handle heterogeneous data types
- Scalability to accommodate large volumes of varied data

**Different Types of Unstructured Databases**:
- **Document-oriented databases**:
  1. Stores data in document like structure (JSON, BSON, or XML)
  2. Each documents contains pair of fields and values.
  3. Documents can be nested.
  4. Example: Mongodb
- **Graph databases**:
  1. Use graphs with nodes, edges and properties.
  2. Effiecient for data with complex relationships and interconnections.
  3. Example: Neo4j.
- **Key-value stores**:
  1. Simpleest form of NoSQL databases.
  2. Data stored in key-value pairs.
  3. Highly partitionable and allow horizontal scaling.
  4. Example: Redis.
- **Column-family databases**:
  1. Stores data in columns families
  2. Optimized for queries over large datasets.
  3. Examples: Cassandra, HBase.
- **Time-series databases**:
  1. Optimized for time-stamed or time-sharing data.
  2. Effiecient for handleing metrices, events and measurements over time.
  3. Examples: InfluxDB.
- **Object Database**:
  1. Store data as objects, similear to object-oriented programming.
  2. Direct mapping between objects and application objects.
  3. Exmaple: ObjectDB.

## **Data Model**

**Document Model**
- Data stored as self-contained documents (XML, JSON, BSON)
- No Requirement for all documents to have the same structure
- Documents can be nested and contains array.
- Example: JSON
```json
{
  "name": "Abhirup Kumar",
  "Laguages": ['C', 'C++', 'Python'],
  "Address": {
    "pin": 700126,
    "street": "Adamas University"
  }
}
```

**Key-Values Model**
- Simple pairs of keys and values
- Values can be simple data types or complex objects.
- keys must be unique within a collection.
- Exampe Structure:
```key-value
key1 -> "Simple String Value"
key2 -> [Complex binary object]
user:1001 -> {user profile data}
```

**Columns-Family Model**
- Data Orgamnized into colmuns families
- Each row can have different colomns within a family
- Effective for read-heavy workloads and analytics
- Examle Structure:
```
  RowKey1: {
    personal_info: {name: "Abhirup", age: 21}
    contact_info: {email: "abhirupRam@mail.com", phone: "82504685355"}
  }
```

**Graph Model**
- Data Stored as nodes, edges, and properties
- Nodes represent entities, edge represnt relationships
- Properties store attributes of nodes and edges
- Optimised for travershing relationships
- Example Structure:
```
(Person:Abhirup)-[FRIENDS_WITH] -> (Person:Ariyan)
(Person:Abhirup)-[LIVE_IN] -> (City:Barasat)
```

**Hybrid Model**
- Combination of multiple data models
- Allows flexibility in representing complex data structures
- Supports diverse query patterns
- Exmaple: Multi-model databaes that support document, graph, and key-value access patterns.

## Difference Between structured, semi-structured and unstructured databases
![structure_semi_un](/images/structure_semi_un.png)

## Semi-structure Data
**Defination** <br />
Semi-Structured data is information that doesn't conform to a rigid structure of tables or relational databases but contains tags, markers, or other elements that separate semantic elements and enforce hierachies within the data.

### Characteristics of Semi-Structured data
1. Contains some organizational properties but lacks a fixed schema.
2. Self-describing using tags or markers
3. Irregular or varying structure
4. Flexible and adaptable
5. Hirearchical Organization

### Examples:
1. XML documents
2. JSON files
3. CSV files
4. HTML pages
5. YAML configurations

## Advantage and Disadvantages of Unstructured databases

**Advantage**:
1. Schema Flexibility
2. Scalability
3. Performance for specific use cases
4. Developer productivity
5. Cost Efficiency

**Disadvantange**
1. Reduced Consistency Guarantees.
2. Limited Transaction support.
3. Lack of Standardization.
4. Immature Tooling Ecosystem
5. Security Concers

# UNIT - II
---
## Data Ingestion Techniques

It is a the process of importing, transfering, loading and processing data for immediate use or storage in a database. This is a critical first step in the data pipeline, especially when dealing with unstructured or semi-structured data.

### Types of Processing

#### Batch Processing

**Definition**: <br />
Batch processing involves collecting data over a period and processing it as a single unit at scheduled intervals.

**Characteristics**:
- Processs large volumnes of data at scheduled intervals
- Typically runs during off-peak hours
- Well-suited for data that doesn't require real-time processing
- Often more resource-efficeient for large datasets.

**Process Flow** <br />
1. Data collection from source system.
2. Data staging in temoporary storage.
3. Data validation and transformation.
4. Bactch loading into the target database.
5. Post-load validation and cleanup

**Use Cases** <br />
1. Daily Sales Report
2. Monthly Financial Report
3. Periodic data warehouse updates
4. Historical data analysis

#### Real-Time Processing (Stream Processing)
**Definition**: <br />
Stream processing involves continous ingestion and processing of data as it is generated, allowing for real-time or near real-time analysis and storage.

**Characteristics**: <br />
- Process data as it arrives
- Minimal latency between data generation and processing
- Continuous Processing model
- Requires systems that can handle high throughtput

**Process Flow** <br />
1. Data capture from streaming sources
2. In-memory processing and transformation
3. Continuous loading into the target database
4. Real-time analytics and monitoring
5. Event triggering based on processed data

**Use Cases** <br />
1. Fraud detection
2. Real-time monitoring systems
3. Social media sentiment analysis
4. IoT sensor data processing

#### Change Data Capture (CDC)
**Defination**: <br />
CDC is a technique that identifies and captures changes made to data in a database and ensures that those chagnes are replicated to a destination database or data warehouse.

**Characteristics**: <br />
- Captures only modified data(inserts, updates, deletes)
- Reduces the amount of data transferred
- Minimizes impact on sourse systems
- Manintains data synchoronization between systems

**Methods** <br />
- Log-based CDC (Reading database transaction logs)
- Trigger-Based CDC (Using databaset triggers)
- Timestamp-based CDC (Comparing timestamp columns)
- Snapshot-based CDC (Comparing full snapshots)

**Use Cases** <br />
1. Database Repication
2. Data warehouse synchronization
3. Cache invalidation
4. Microsevices data sharing
5. Cross-platform data integreation

#### ETL (Extract, Transform, Load)
**Definition**: <br />
ETL is a traditional data integration process that involves extracting data from source systems, transforming it to fit operational needs, and loading it into the target database.

**Process Steps** <br />
1. **Extract**: Retrive data from source systems
2. **Transform**: Clean, validate, and restructure the data
3. **Load**: import the transformed data into the target system

**Types of ETL processes**: <br />
- Batch ETL
- Real-Time ETL
- Cloud-based ETL
- Open-source ETL

**Use Cases** <br />
1. Data warehouse population
2. Business intelligence reporting
3. Data migration projects
4. Master data management
5. Data quality initiatives

#### ELT (Extract, Load, Transfrom)
**Definition** <br />
ELT is a variation ETL where data is first loaded into the target system before transformation, leveraging the processing power of modern data platforms.

**Difference from ETL**: <br />
- Transformation occurs in the target system, not in a separate transformation engine.
- Levereage the processing power of the target database
- Better suited for cloud data warehouses and big data platforms
- Enables more flexible and interative transformations

**Process Flow** <br />
1. Extract data from source systems
2. Load raw data into the target systems
3. Transform data within the target systems
4. Make transformed data avaliable for analysis

**Use Cases** <br />
1. Cloud data warehouse implementation
2. Big data processing
3. Exploratory data analysis
4. Data lake implementations

## 2. Extracting Structured Information from Unstructured Data
Extracting structured information from unstructured data involves using various techniques to identify, extract, and organize meaningful patterns and entities from free-form text, images, audio, or other unstructured sources.

### Text Processing and Natural Language Processing (NLP)

**Techniques:** <br />

1. Named Entity Recognition (NER)

  - Identifies and classifies named entities in text
  - Extracts entities such as names, organizations, locations, dates
  - Example: Extracting "Microsoft" (organization), "Seattle" (location), "May 2023" (date) from news articles


2. Text Classification

  - Categorizes text documents into predefined classes
  - Applications include sentiment analysis, topic categorization, spam detection
  - Example: Classifying customer reviews as positive, negative, or neutral


3. Information Extraction

  - Extracts structured information from unstructured text
  - Identifies relationships between entities
  - Example: Extracting product features and associated sentiments from reviews


4. Tokenization and Part-of-Speech Tagging

  - Breaks text into tokens (words, phrases)
  - Assigns grammatical categories to tokens
  - Foundation for more advanced NLP tasks


5. Text Summarization

  - Generates concise summaries of longer texts
  - Can be extractive (selecting key sentences) or abstractive (generating new text)
  - Useful for document understanding and knowledge extraction



#### Tools and Libraries:

- NLTK (Natural Language Toolkit)
- spaCy
- Stanford NLP
- Hugging Face Transformers
- Google Cloud Natural Language API
- Amazon Comprehend

### Pattern Matching and Regular Expressions

**Techniques:** <br />

1. Regular Expressions (Regex)

  - Formal language for pattern matching in strings
  - Extracts formatted data like email addresses, phone numbers, dates
  - Example pattern: \b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b for email addresses


2. Template Matching

  - Identifies recurring patterns in text
  - Extracts data with consistent formatting
  - Example: Extracting invoice numbers that follow a specific pattern


3. Rule-Based Systems

  - Uses predefined rules to identify and extract information
  - Combines patterns, dictionaries, and grammatical rules
  - Effective for domain-specific data extraction



##### Applications:

- Log file analysis
- Web scraping
- Form data extraction
- Code analysis
- Data cleansing

### Machine Learning Approaches

**Techniques:** <br />

1. Supervised Learning

  - Uses labeled data to train extraction models
  - Models learn patterns associated with specific information types
  - Examples: Support Vector Machines, Random Forests, Neural Networks


2. Deep Learning

  - Uses neural networks with multiple layers
  - Effective for complex pattern recognition tasks
  - Examples: Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), Transformers


3. Topic Modeling

  - Discovers abstract topics in document collections
  - Techniques include Latent Dirichlet Allocation (LDA)
  - Useful for organizing large text collections


4. Word Embeddings

  - Represents words as dense vectors in a continuous vector space
  - Captures semantic relationships between words
  - Examples: Word2Vec, GloVe, FastText


5. Transfer Learning

  - Leverages pre-trained models for specific extraction tasks
  - Fine-tunes models on domain-specific data
  - Examples: BERT, GPT, RoBERTa



#### Tools and Frameworks:

1. TensorFlow
2. PyTorch
3. scikit-learn
4. Gensim
5. Keras
6. FastAI

### Hybrid Approaches
**Techniques:** <br />

1. Ensemble Methods

  - Combines multiple extraction techniques for improved accuracy
  - Integrates rule-based and machine learning approaches
  - Example: Using regex for initial extraction and ML for refinement


2. Pipeline Processing

  - Sequences multiple extraction techniques
  - Each stage processes and refines the output of previous stages
  - Example: Tokenization → NER → Relation Extraction → Knowledge Graph Construction

**Benefits:** <br />

1. Higher accuracy than single-method approaches
2. Adaptability to diverse data types
3. Robustness to variations in data format and quality

## Handling Multimedia (GridFS & Base64)

### GridFS
**Definition** <br />
Unstructured databases need specialized mechanisms to store and process binary data such as images and videos  efficiently.

**Image Storage** <br />
**Definition** <br />
GridFS is a specifications for storing and retieving large files such as images, audio files, and videos in MonogoDB and other document databses.

**How GridFS works:** <br />

1. Divides large files into smaller chunks (typically 255KB each)
2. Stores each chunks as a sparate document
3. Uses two collections: fs.files (file metadata) and fs.chunks (file content)
4. Allows for storing files larger than the document size limit.

**Benifits of GridFS:** <br />
1. Efficient storage of large binary files
2. No need for external file storage systems
3. Automatic load balancing and replication
4. Ability to access portions of files without loading entire files
5. Integration with database query capabilities

**Example :-**
```python
from pymongo import MongoClient
import gridfs

def store_image(image_data):
  client = MonogoClient('monogdb://localhost:27017')
  db = client['imagedb']
  fs = gridfs.GridFS(db)

  file_id = fs.put(
    image_data,
    filename='image.jpg',
    contentType='image/jpeg',
    metadata={'author':'Abhirup Kumar'}
  )

  print(f'Image Stored Successfully with file ID: {file_id}')
  client.close()

store_image()
```
### Base64: Encoding for Image Storage
**Difinition** <br />
Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format, allowing binary data like images to be stored directly in text-based documents.

**How Base64 works:** <br />
- Converts binary data to a set of 64 printable ASCII characters
- Increases storage size by approximately 33% (overhead)
- Allows for embedding images directly to text documents

**Use Cases for Base64** <br />
- Storing small to medium-sized images in document databases
- Embedding images in JSON documents
- Trasmitting images in API responses
- Avoiding Additional file storage systems for small images

**Example Base64 implemetation**
```python
import base64
from pymongo import MongoClient

def store_image_as_base64(base64_image):
  client = MongoClient('monogdb://localhost:27017')
  db = client('imagedb')
  collection = db['images']

  document = {
    'name': 'Abhirup Kumar',
    'description': 'A sample image stored as base64',
    'contentType': 'image/jpeg',
    'image': base64_image
  }

  result = collection.insert_one(document)
  print(f"Image Stored with doceumnt ID: {result.inserted_id}")
  client.close()

store_image_as_base64()
```

#### Differenece Between GridFS and Normal Base64
![gridfsvsbase64](/images/gridfsvsbase64.png)

### Video Storage and Processing

**Strategies for video storage in UDBs:** <br />

1. Chunked Storage with GridFS
  - Similar to image storage but with larger files
  - Divides videos into manageable chunks
  - Stores metadata separatly from content
  - Enables efficient retrieval and streamming
2. External Storage with references
  - Stores videos in specialized storage systems(S3, Azure Blob Storage)
  - Maintains references to videos in the database
  - Optimizes database performance
  - Leverages specialized videos storage and delivery services
3. Hybrid Approaches
  - Stores thumbnails and previews in the database
  - Keeps full videos in external storage
  - Maintains comprehensive metadata in the database

**Video Metadata Management: ** <br />
1. Storage of video properties(duration, resolution, format)
2. Content tags and categorization
3. User-generated metadata(comments, ratings)
4. Processing status and version tracking

**Example :** <br />
```python
from pymongo import MongoClient
from datetime import datetime

client = MonogoClient('monogodb://localhost:21707')
db = client('videoDB')
collection = df['video']

video_document = {
    "title": "Introduction to Databases",
    "description": "A comprehensive introduction to database concepts",
    "duration": 1250,  # in seconds
    "resolution": "1080p",
    "format": "MP4",
    "storageLocation": {
        "type": "s3",
        "bucket": "educational-videos",
        "key": "db-intro-v1.mp4",
        "url": "https://educational-videos.s3.amazonaws.com/db-intro-v1.mp4"
    },
    "metadata": {
        "creator": "Dr. Jane Smith",
        "created": datetime(2023, 2, 15),
        "tags": ["database", "education", "introduction"],
        "chapters": [
            { "title": "Basic Concepts", "startTime": 0 },
            { "title": "Relational Databases", "startTime": 320 },
            { "title": "NoSQL Databases", "startTime": 750 }
        ]
    }
}

result = collection.insert_one(video_document)

client.close()
```

#### Challenges in Video Handling
1. Storage Requirements for hight-resolution videos
2. Processing overhead for video analysis
3. Bandwidth considerations for streaming
4. Metadata extraction complexity
5. Format and codec management

# UNIT - III
---
[MongoDB Tutorial for Queries](https://youtu.be/tww-gbNPOcA?si=8ARwzehV84lEoYMb)


## Aggregation
**Simeple Query => **'db.collection.aggregate(pipeline, options)'** [syntax]**
1. **$match => db.collection.aggregate([{$match: {gender: "male"}}])**
2. **$group => db.collection.aggreagte([{$group: {_id: "$age"}}])**
3. **$push => db.collection.aggreagte([{$group: {_id: "$age", name: { $push: "$name"}}}}])**
4. **$$ROOT => db.collection.aggreagate([$group: {_id: "$age", fullDocs: { $push: "$$ROOT"}]) -> This values is a reference to the current document being processed in the pipeline, which represents the complete document.**
5. **Pipeline example and counting => db.collection.aggregate([{$match: {gender: "male"}}, {$group: {_id: "$age", count: {$sum: 1}}}])**
6. **Count and sort them in desc =>  db.collection.aggregate([{$match: {gender: "male"}}, {$group: {_id: "$age", count: {$sum: 1}}}}, { $sort: {count: -1}}])**
7. **$ifnull => db.collection.aggregate({$group: {_id: null, count: {$sum: {$size: $ifnull: {["$Hobies", []]}} }})**
8. **List all Hobies => db.collection.aggregate([{$unwind: "$Hobies"}, {$group: {_id: null, allHobies: { $push: "$Hobbies"}}}}])**
9. **filter => db.collection.aggregate({$group: {_id: null, avgScore{ $avg: { $filter: {input: "$scores", as: "score", cond: { $gt: ["$age", 20]}}}}}}}}}})**

## Projection
**Simple Query => db.collection.find({}, {field1: 1, field2: 0, _id: 0})**


# UNIT - IV
---
## Relationships in MonogDB
#### Two Main Approaches:
1. Embedded Documents
  - Data is nested within a parent document
  - Creates denormalized data model
  - Reduces query complexity

2. References
  - Store references/IDs linking documents across collections
  - Creates normalized data model
  - Similar to foreign keys in relational databases

###### When to Use Embedded Documents ?

- **"Contains"** relationships between entities
- **One-to-one** relationships (e.g., user and address)
- **One-to-many** with limited children viewed in parent context
- When related data is frequently accessed together

###### When to Use References ?

- When embedding would cause excessive data duplication
- For complex many-to-many relationships
- When related entities are frequently queried independently
- For large hierarchical data structures Mongodb
- Generally better for many-to-many relationships
- When data in referenced collection changes frequently

###### Technical Limitations

- MongoDB documents must be smaller than 16 MB
- Large embedded arrays can hit size limits
- No foreign key constraints in references

## Database References
Database references connect documents stored in different collections. MongoDB offers two types of references:
1. Manual References: <br />
Manual references simply store the **'_id'** field of one document in another document. The application then performs a second query to retrieve the related data. This approach is sufficient for most use cases and is generally recommended.
2. DBRefs: <br />
DBRefs are a convention for representing document references that include additional information beyond just the ID. They contain:

- **'$ref'**: Collection name where the referenced document resides
- **'$id'**: Value of the _id field in the referenced document
- **'$db'**: (Optional) Database name where the document resides

You should generally use manual references unless you need to reference documents across multiple collections or databases where keeping track of collection and database names would be cumbersome.

## Covered Queries
A covered query is a query that can be satisfied entirely using an index and does not have to examine any documents. This makes them significantly faster than queries that must access the actual documents

#### Requirements
For a query to be covered:
- All fields in the query must be part of an index
- All fields returned in the results must be in the same index
- No fields in the query can equal null

#### Benefits
Covered queries significantly improve performance by reducing disk I/O. Since indexes are typically smaller than documents and often reside in RAM, accessing only the index data is much faster.

#### Limitations:
Multikey indexes (indexes on array fields) can only cover queries when the array field itself is not included in the query results and the query doesn't use **'$elemMatch'**

## Analyzing Queries
MongoDB provides tools to analyze query performance and understand how queries interact with indexes. This analysis helps optimize database performance.
##### explain() Method
The explain() method returns information about the query plan and execution statistics. It shows how MongoDB would execute a query, including whether indexes are used. Mongodb
##### Verbosity Modes
explain() offers three verbosity modes:

1. queryPlanner (default): Shows the query plan selected by the optimizer
2. executionStats: Shows the plan plus execution statistics like documents examined
3. allPlansExecution: Shows statistics for both the winning plan and rejected plans

> **'$hint Operator'**: The **'$hint'** operator forces MongoDB to use a specific index for a query. This is useful for testing the performance of different indexes on the same query

## Atomic Operations
##### **Defination**:
Atomicity in MongoDB refers to the all-or-nothing property of database operations — ensuring that a group of operations are either fully completed or none are applied at all, maintaining data consistency.
1. **Single-Document Atomicity**: Single-document atomicity is a core principle in MongoDB. Since you can use embedded documents and arrays to capture relationships within a single document structure, this often eliminates the need for multi-document transactions.
2. **Concurrent Operations**: When multiple update operations happen in parallel, MongoDB ensures that each command verifies that its query condition still matches before making changes. This prevents conflicts during concurrent updates.

#### Data Modeling for Atomicity
For fields that must be updated together atomically, the recommended approach is to embed them within the same document. This data modeling strategy ensures that related fields can be modified in a single atomic operation

#### Ensuring Operation Atomicity
To guarantee that concurrent operations don't conflict, you can specify the expected current value of a field in the update filter. This ensures your update only proceeds if the document is in the expected state

#### Multi-Document Transactions
For situations requiring atomicity across multiple documents or collections, MongoDB supports distributed transactions. These transactions can span operations, collections, databases, documents, and shards. <br />
However, multi-document transactions typically have higher performance costs compared to single-document writes. In most cases, effective schema design with embedded documents is still recommended over transactions.

#### Limitations
MongoDB does not support multi-document atomic transactions in older versions (pre-4.0). Atomicity is maintained only at the document level. <br />
Even when using the $isolated operator (in older versions), a write operation affecting multiple documents does not provide "all-or-nothing" atomicity. If an error occurs during the operation, MongoDB will not roll back changes that preceded the error.

## Indexing
Indexing in MongoDB is a mechanism that improves the speed and efficiency of query operations (like find, sort, filter) by creating a special data structure that allows the database to locate data without scanning every document in a collection.

#### Types of Indexs
1. Compound Indexes: These combine multiple fields into a single index structure, containing up to 32 fields maximum. Order of fields matters significantly for performance - indexes store references to documents in the sequence of indexed fields.
2. Multikey Indexes: Created automatically when you index a field containing array values. MongoDB creates separate index entries for each element of the array, making lookups for individual array items efficient.
3. Text Indexes: Support text search queries on string content fields. Especially useful for natural language searches across document content.
4. Geospatial Indexes: MongoDB offers two types: 2d (for planar coordinates) and 2dsphere (for Earth-like spherical coordinates). These optimize location-based queries.
5. Hashed Indexes: Hash the indexed field values to support equality-based queries. Commonly used for sharding to distribute data evenly.
6. Wildcard Indexes: Index multiple fields using a wildcard pattern, allowing for dynamic field indexing in document structures that have varied fields.

##### Indexing Limitations
1. Collection Limits: A single collection can have no more than 64 indexes. This limit is hardcoded and cannot be changed.
2. Compound Index Limits
- There can be no more than 32 fields in a compound index.
- Compound index can have maximum 31 fields indexed. The length of an index name cannot exceed 125 characters. Wisdom Jobs
3. Multikey Index Restrictions
- In compound multikey indexes, each document can only have one indexed field that is an array. If one field is an array, other indexed fields must not be.
- Multikey indexes cannot be used as shard key indexes and don't support the $expr operator.
4. Size and Memory Limitations: Since indexes are stored in RAM, the total size of indexes should not exceed the available RAM. If index size exceeds RAM, MongoDB will start - deleting some indexes, causing performance degradation.
5. Query Support Limitations:
- Indexes may not be efficiently used with regular expressions, negation operators like $nin or $not, or arithmetic operators like $mod.
- Queries cannot use both text and geospatial indexes simultaneously. You cannot combine $text queries with operators requiring different specialized indexes (like $near).
6. Wildcard Index Restrictions: Wildcard indexes cannot be used as shard key indexes and can support at most one query predicate field. They also cannot support exact equality matches on arrays or documents.
7. Index Key Generation Limits: MongoDB limits the maximum number of keys generated for a single document to 100,000 by default to prevent out-of-memory errors, particularly with multikey indexes.
8. Index Insertion Behavior: MongoDB will not insert a document into an indexed collection if the indexed field value would exceed the index key limit. It will instead return an error.

## ObjectId
##### Definition
In MongoDB, the _id field acts as a primary key for documents stored in a collection. By default, MongoDB uses ObjectId for this field if not specified. ObjectIds are designed to be small, unique, fast to generate, and ordered

###### Structure
An ObjectId is a 12-byte BSON data type composed of:

1. A 4-byte timestamp representing creation time (seconds since Unix epoch)
2. A 5-byte random value unique to the machine and process
3. A 3-byte incrementing counter initialized to a random value


## MapReduce
MapReduce is a data processing model in MongoDB used to analyze and transform large volumes of data by dividing the task into two main functions: Map and Reduce. It’s typically used for aggregation operations when more complex logic is needed than the standard aggregation pipeline provides.

###### idea
1. Map Phase: Extracts key-value pairs from input documents.
2. Reduce Phase: Groups values by key and performs computations (like sum, count, average).

## Text Search Regular Expression
Both Text Search and Regular Expression (Regex) are used to search string fields, but they differ in purpose, performance, and syntax.

1. **Text Search**
Use When:
- You want full-text search (like Google-style search).
- You need language-aware token matching (e.g., ignore stopwords, stemming).

2. Requirements:
You must create a text index first.

###### **Features:**
- Matches words and phrases
- Ignores common words (stopwords)
- Supports "\"exact phrase\"" and -exclude operators
- Fast with large datasets (when indexed)

###### Regular Expression Search (Regex)
- You need pattern matching (e.g., starts with, ends with, contains).
- Useful for complex string patterns.
```monogdb
// Find names starting with "A"
db.users.find({ name: /^A/ });

// Find emails ending in ".edu"
db.users.find({ email: /\.edu$/ });

// Case-insensitive search
db.users.find({ name: { $regex: "john", $options: "i" } });
```

## Studio 3T over Compass
![Studio3TvsCompass](/images/studio3Tvscompass.png)

###### Why to Choose studio 3T
1. SQL to MongoDB Translation: Ideal for users from a relational DB background who want to transition smoothly.
2. Advanced Query Editor: Auto-complete, color syntax, multiple result views (tree, table, JSON).
3. Aggregation Pipeline Helper: Side-by-side view of visual and code-based aggregation – great for learning and debugging.
4. Data Migration Tools: Supports importing from relational DBs (MySQL, PostgreSQL, Oracle) with field mapping.
5. Team and Enterprise Support: Project sharing, audit logs, and enterprise features for team workflows.

###### When to Choose MongoDB Compass
1. You're just getting started with MongoDB and need a simple GUI.
2. You need a lightweight, free, and official MongoDB GUI tool.
3. You're not working with SQL or advanced import/export tasks.
4. Your usage is occasional or for academic purposes.

## Configure Mongodb Atlas
1. **Step-1:** Create an Account
- Visit mongodb.com/cloud/atlas and sign up.

2. **Step-2:** Create a Project and Cluster
- Create a new project.
- Build a cluster by selecting cloud provider, region, and cluster tier (M0 for free).

3. **Step-3:** Set Up Access
- Add a database user with username and password.
- Whitelist your IP address in "Network Access".

4. **Step-4:** Connect to the Cluster
- Copy the connection string from "Connect" → "Connect your application".
- Use it in your app (e.g., with PyMongo or Mongoose) to connect to the database. ("url-mongodb+srv://<username>:<dbpass>@cluster0.mongodb.net/?retryWrites=true&w=majority")

## MongoDB-Python Integration
#### CRUD OPERATIONS USING FLASK
```python
from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId

app = Flask(__name__)

client = MongoClient("mongodb://localhost:27017/")
db = client['myDatabase']
collection = db['myCollection']

# Create
@app.route('/create', methods=['POST'])
def create():
    data = request.json
    collection.insert_one(data)
    return "Data inserted", 201

# Read all
@app.route('/read', methods=['GET'])
def read():
    data = []
    for doc in collection.find():
        doc['_id'] = str(doc['_id'])  # Convert ObjectId to string
        data.append(doc)
    return jsonify(data)

# Update by ID
@app.route('/update/<id>', methods=['PUT'])
def update(id):
    new_data = request.json
    collection.update_one({"_id": ObjectId(id)}, {"$set": new_data})
    return "Data updated"

# Delete by ID
@app.route('/delete/<id>', methods=['DELETE'])
def delete(id):
    collection.delete_one({"_id": ObjectId(id)})
    return "Data deleted"

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
```

# UNIT - V
---
## Backup and Recovery procedures in Monogdb

### Backup Procedures
##### **Definations**:
Backup in MonogDB refers to the process of creating a copy of the database to prevent data loss in case of hardware failure, corruption, or accidental deletion.

##### Types of Backup Methods:
1. monogodump:
  - Command-line utility to export MonogoDB databases as **'.bson'** files.
  - Syntax: **'monogodump --db <dbname> --out /path/to/backup'**.
  - Suitable for small to medium-sized deployments.
2. File System Snapshot:
  - Involves taking a snapshot of the data directory.
  - Must be done when the databases is either shut down or journaling is enabled.
  - Fast for large dataasets.
3. MonogoDB atlas Backup (Cloud):
  - Automated cloud backups with scheduling and point-in-time restore.
  - useful for managed cloud databases.
4. Ops Manager / Cloud Manager:
  - Enterprise tools provided by MongoDB for automation and backup.
  - Allows centralized backup scheduling, monitoring, and encryption.

##### Types of Backup
1. Full Backup:
  - Complete copy of the entire database
  - All collections and documents are backed up.
  - Largest storage requirements but simplest recovery.
  - Slower to create than incremenatl or differential backups
  - Suitable baseline for any backup strategy
2. Incremental Backup
  - Only backs up data changed since the last backup (full or incremental)
  - Significantly smaller than full backups
  - Faster to create than full backups
  - Requires all previous incremental backups plus the last full backup for complete recovery
  - More complex recovery process
  - Can be implemented in MongoDB using oplog-based approaches

3. Differential Backup
  - Backs up all changes since the last full backup
  - Larger than incremental backups but smaller than full backups
  - Simpler recovery than incremental (only requires last full backup plus the differential)
  - Balances storage requirements with recovery complexity
  - Can be implemented through custom scripts leveraging MongoDB change streams
###### BEST TO PRATICE
- Perform regular backups.
- Store backups in mulitple safe locations (e.g., local + cloud).
- Automate the backup process with scripts or tools.

### Recovery Procedures
##### **Definations**:
Recovery in MonogoDB is the process of restoring data from backups in case of faliure, data loss, or corruption.
##### Common Recovery Methods:
1. monogorestore:
  - Restores backups created the **'monogodump'**.
  - Syntax: **'mongorestore /path/to/backup'**.
  - Can restore entire database or specific collections.
2. Manual File Restore(Snapshot):
  - Stop MongoDB service.
  - Replace current data files with snapshot files.
  - Restart MonogDB server.
3. Point-in-Time Recovery(MongoDB Atlas):
  - Restores the database to any moment in time within the backup window.
  - Useful for undoing accidental deletes or corruption.
4. Recovery with Journaling:
  - MongoDB uses a journal to recover from unexpected shutdowns.
  - On startup, it applies journaled operations to ensure consistency.

#### Point-in-Time Recovery (PITR)
Point-in-Time Recovery allows restoring a database to a specific moment, critical for recovering from logical corruption or accidental data modifications.

###### How PITR Works in MongoDB:
1. Oplog-Based Recovery:
  - The oplog (operations log) is a special capped collection that records all write operations
  - PITR works by replaying operations from the oplog up to a specific timestamp
  - The process requires a base backup plus all relevant oplog entries
2. Implementation Process:
  - Take a full backup (snapshot or mongodump with --oplog)
  - Capture and store the oplog entries continuously
  - During recovery, restore the full backup first
  - Replay oplog entries up to the desired recovery point
3. Recovery Granularity:
  - Recovery is possible to any point within the oplog retention window
  - Timestamps can be specified with second-level precision
  - Operations can be replayed selectively if needed

###### BEST TO PRACTICE
- Verify backup integrity before restoring.
- Perform recovery in a test environment before applying to production.
- Monitor database after restore for consistency and errors.

### Backup and Recovery Best Practices
##### Planning Your Backup Strategy:

1. Define RPO and RTO Requirements:
  - Recovery Point Objective: Maximum acceptable data loss
  - Recovery Time Objective: Maximum acceptable downtime
  - These metrics will inform your backup frequency and method
2. Documentation:
  - Maintain detailed documentation of your backup procedures
  - Create step-by-step recovery runbooks for different failure scenarios
  - Document backup schedules, retention policies, and verification processes

3. Backup Frequency:
  - High-value, frequently changing data: Consider continuous backup
  - Medium-value data: Daily backups may be sufficient
  - Low-value, rarely changing data: Weekly backups might be adequate

#### Backup Implementation:

1. Automation:
  - Script your backups using cron jobs, systemd timers, or orchestration tools
  - For Atlas, configure automated backup policies
  - Implement monitoring to verify backup completion and integrity


2. Storage Considerations:
  - Follow the 3-2-1 backup rule: 3 copies of data, on 2 different media types, with 1 copy off-site
  - Use encryption for backups containing sensitive data (AES-256 recommended)
  - Consider compression to reduce storage costs (especially for BSON dumps)


3. mongodump Best Practices:
  - Always use the --oplog option for consistent backups of replica sets
  - Label backups with timestamps and database names for easy identification
  - Consider using --archive and compression options for more efficient storage
  - Run backups against secondary nodes to minimize impact on primary


4. Filesystem Snapshot Best Practices:
  - Ensure consistent snapshots by using db.fsyncLock() or journaling
  - Automate snapshot creation, testing, and rotation
  - Verify snapshot integrity after creation

#### Testing and Verification:

1. Regular Recovery Testing:
  - Schedule monthly or quarterly recovery drills
  - Restore to separate testing environments to verify backup integrity
  - Test different recovery scenarios (full restore, point-in-time, etc.)


2. Verification Procedures:
  - Run data integrity checks after test restorations
  - Verify document counts match the source database
  - Test application functionality against restored data


3. Performance Impact Assessment:
  - Monitor database performance during backups
  - Schedule backups during low-traffic periods when possible
  - Consider read-only secondary nodes for backup operations

#### Monitoring Backup Systems:

1. Oplog Monitoring:
  - Ensure oplog size is sufficient for your PITR requirements
  - Monitor oplog utilization and growth rates
  - Set alerts for oplog approaching capacity


2. Storage Monitoring:
  - Track backup storage growth over time
  - Set alerts for approaching storage limits
  - Implement automated cleanup for expired backups


3. Backup Success Verification:
  - Implement automated verification of backup completion
  - Check for backup size consistency between runs
  - Set up alerts for failed backups or verification issues

## Disaster Recovery in MongoDB
##### **Definations**:
When unexpected disruptions strike, the impact on business operations can be immediate and significant. A disaster recovery plan (DRP) is essential for these events, designed to safeguard core IT functions and support recovery when disruptions threaten business continuity.

**Key Metrics:**
- **Recovery time objective (RTO)**: The maximum acceptable downtime for critical apps, typically measured in hours or minutes. RTO defines the speed at which operations need to be restored to avoid a significant impact on the business.
- **Recovery point objective (RPO**): The maximum age of data that must be recovered to resume normal operations effectively. RPO determines the allowable data loss measured in time (e.g., last 15 minutes, last hour) to ensure essential data is available post-recovery.

###### Benifites of Disaster Recovery Planning
- Protects against data loss
- Mitigates financial impact
- Preserves customers confidence
- Ensures regulatory compliance
- Speeds up recovery time
- Enhance security preparedness
- Supports strategic decision-making

###### Key components of a DRP
1. **Prevension**: A strong prevention plan keeps businesses prepared, reducing the chances that physical disasters or technology issues will disrupt operations. This phase focuses on creating a secure, resilient environment that actively reduces risks before they are known. It involves establishing protocols, designating disaster recovery team members, and setting up secure recovery systems.
2. **Anticipation and detection**: This phase is focused on spotting potential risks as they happen and preparing for anything that could impact critical business operations. This includes creating a business impact analysis, setting recovery time objectives (RTO) and recovery point objectives (RPO), and developing disaster recovery procedures for specific events. Communication plans should be ready in advance so stakeholders and clients receive timely updates no matter the situation.

## Integration of Unstructured DBMS with other database systems
1. Polyglot Persistence: Using multiple database types in a single application, choosing the right database for each specific task.
2. Hybrid Architectures: Combining SQL and NoSQL databases to leverage strengths of each - relational for structured transactions, NoSQL for unstructured data and scaling.
3. Multi-Model Databases: Systems like CosmosDB and ArangoDB support multiple data models within a single database instance.
4. Integration Methods: Data pipeline platforms and ETL tools connect SQL and NoSQL systems, transforming data between formats.
5. Object-Data Mapping: ODM frameworks help work with NoSQL data in object-oriented applications.

## Unstructured Databases for Streaming & Real-time Data
#### Core Capabilities:
- Immediate Processing: Process data as it arrives without batch delay
- Schema Flexibility: Adapt to changing data structures on-the-fly
- Low Latency: Minimize time between data creation and availability
- High Throughput: Handle millions of operations per second
- Horizontal Scaling: Add nodes to distribute processing load

#### Implementation Consideration
- CAP Theorem Tradeoffs: Often favor availability over consistency
- Data Enrichment: Combine streams with reference data for context
- Fault Tolerance: Ensure data durability during node failures
- Backpressure Handling: Manage overflow during traffic spikes
- State Management: Track computation state across distributed systems

#### Common Applications
- IoT Sensor Data: Process telemetry from connected devices
- Financial Trading: Execute transactions based on market events
- Network Security: Detect anomalies in network traffic patterns
- Social Media Analytics: Track trends and sentiment in real-time
- Microservices Communication: Enable event-driven architecture

#### Technical Implementation
- In-memory Processing: Keep active data in RAM for faster access
- Event-driven Architecture: React to data events in real-time
- Distributed Computing: Process across multiple nodes simultaneously
- Sliding Window Analysis: Process data in continuous time windows
- Streaming SQL: Apply SQL-like queries to data in motion

## Tutorial Points Notes
---
[tutorialpoint notes](https://drive.google.com/file/d/15wKNFFrKxX3f31Kh3JmtoNbINtWacG7Z/view)

## Prabhat Sir's Question Bank
---
[Question Bank](https://drive.google.com/file/d/1J5m9uKdY8CzUMbf7WfKcCC-gvEPrLneb/view)

## Answers of Question Bank
---
[Answers of Question Bank](https://drive.google.com/file/d/1FP-ew56r9NrZlH4mMtBtanN-35gglCRz/view?usp=sharing)

---
##### Contributor Name - Abhirup Kumar
