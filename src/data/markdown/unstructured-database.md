# Syllabus
## Unit-I: Introduction to Unstructured Database
1. Overview of Unstructured Data
2. Introduction to Unstructured Databases
3. Use Cases and Benefits of Unstructured DBMS
4. Data Models for Unstructured Databases
5. Choosing the Appropriate Data Model
## Unit-II: Data Ingestion, Extraction & Querying Unstructured Data
1. Data Ingestion Techniques
2. Extracting Structured Information from Unstructured Data
3. Pre-processing and Cleaning Unstructured Data
4. Handling Multimedia and Binary Data
5. Query Languages for Unstructured Databases
## Unit-III: Introduction to MongoDB
1. Overview of MongoDB
2. Comparison with Relational Databases
3. Installing and Setting Up MongoDB
4. MongoDB Data Model
5. CRUD Operations
6. Indexing, Aggregation, and Replication
## Unit-IV: Advanced MongoDB
1. Relationships and Database References
2. Advanced Indexing
3. MapReduce
4. Text Search and Regular Expressions
5. MongoDB Atlas
6. MongoDB-Python Integration
## Unit-V: Backup, Recovery, Disaster Planning, and Emerging Trends
1. Backup and Recovery Procedures
2. Disaster Recovery Planning
3. MongoDB in Production
4. Integration with Other Database Systems
5. Handling Streaming and Real-time Data
6. Exploring Cloud-based Unstructured Databases


# Unstructured Databases: Comprehensive Course Notes

## Unit-I: Introduction to Unstructured Database

### 1. Overview of Unstructured Data

Unstructured data refers to information that doesn't conform to a predefined data model or doesn't fit neatly into relational tables. Unlike structured data (which is organized in rows and columns), unstructured data lacks a specific format or organization.

**Characteristics of Unstructured Data:**
- No predefined data model
- Variable formats
- Irregular or unpredictable content
- Often text-heavy or multimedia-based
- Difficult to analyze using traditional methods

**Common Examples of Unstructured Data:**
- Text documents (Word files, PDFs)
- Emails and chat logs
- Social media posts
- Images, audio, and video files
- Sensor data
- Scientific data (genomic sequences, astronomical observations)

**Growth and Importance:**
Unstructured data constitutes approximately 80-90% of all data generated today. This explosive growth is driven by:
- Increased digital communication
- Widespread use of social media
- Growth in multimedia content creation
- IoT device proliferation
- Digital transformation across industries

The challenge of managing, storing, and analyzing this vast amount of unstructured data has led to the development of specialized database systems beyond traditional relational databases.

### 2. Introduction to Unstructured Databases

Unstructured databases (also called NoSQL databases) are database management systems designed specifically to handle unstructured or semi-structured data efficiently.

**Key Features of Unstructured Databases:**
- Schema flexibility (schema-less or dynamic schema)
- Horizontal scalability
- Distributed architecture
- Specialized data models
- Non-relational approach
- Eventually consistent (vs. ACID compliance in many cases)

**Types of Unstructured Databases:**
- **Document databases** (MongoDB, CouchDB): Store data as JSON-like documents
- **Key-value stores** (Redis, DynamoDB): Simple key-value pairs
- **Wide-column stores** (Cassandra, HBase): Store data in column families
- **Graph databases** (Neo4j, Amazon Neptune): Store relationship information
- **Search engines** (Elasticsearch, Solr): Specialized for text search and analysis
- **Time-series databases** (InfluxDB, TimescaleDB): Optimized for time-based data

**Evolution from Relational Databases:**
Unstructured databases emerged as a response to limitations in traditional relational database management systems (RDBMS) when dealing with:
- Large volumes of data (beyond what a single server could handle)
- Data with variable structure or frequent schema changes
- Horizontally scalable architectures
- Low-latency access patterns
- Complex hierarchical or nested data structures

### 3. Use Cases and Benefits of Unstructured DBMS

**Common Use Cases:**
- **Content Management Systems**: Storing articles, blogs, multimedia content
- **Customer 360 Views**: Consolidating varied customer data from multiple sources
- **Social Media Analytics**: Processing and analyzing posts, comments, reactions
- **Log Analysis**: Storing and querying application logs, system events
- **IoT Applications**: Managing sensor data from various devices
- **Real-time Analytics**: Processing streaming data
- **Personalization Engines**: Storing user preferences and behavior
- **Mobile Applications**: Backend storage for flexible data requirements

**Benefits of Unstructured DBMS:**

- **Flexibility**: Adapts to changing data requirements without schema migrations
- **Scalability**: Easily scales horizontally across commodity hardware
- **Performance**: Optimized for specific data access patterns
- **Developer Productivity**: Aligns with modern programming paradigms and data structures
- **Cost-effectiveness**: Often more economical for large-scale deployments
- **Specialized Optimizations**: Designed for specific workloads (text search, time series, etc.)
- **Resilience**: Distributed architectures provide fault tolerance
- **Agile Development Support**: Accommodates rapid iterations and changing requirements

**Industry Applications:**
- **Healthcare**: Patient records, medical imaging, research data
- **Financial Services**: Transaction analysis, fraud detection, customer analytics
- **E-commerce**: Product catalogs, customer reviews, recommendation engines
- **Media**: Content management, digital asset management
- **Telecommunications**: Network logs, customer interaction records
- **Manufacturing**: Sensor data, quality control logs

### 4. Data Models for Unstructured Databases

Data models define how data is organized, stored, and accessed within a database system. Unstructured databases use various data models, each optimized for specific use cases.

**Document Model:**
- Stores data as self-contained documents (typically JSON or BSON)
- Documents can contain nested structures and arrays
- Each document can have a different structure
- Examples: MongoDB, CouchDB, Firestore

```json
// Example document representing a customer
{
  "_id": "1234",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "zip": "12345"
  },
  "orders": [
    { "id": "A001", "date": "2023-01-15", "total": 59.99 },
    { "id": "A002", "date": "2023-02-28", "total": 29.99 }
  ]
}
```

**Key-Value Model:**
- Simplest NoSQL data model
- Associates each key with a single value
- Values can be simple types or complex objects
- Optimized for high-throughput, low-latency operations
- Examples: Redis, DynamoDB, Riak

```
# Key-value examples
user:1234:name = "Jane Doe"
user:1234:email = "jane@example.com"
session:5678 = {encrypted session data}
```

**Column-Family Model:**
- Organizes data in column families
- Each row can have different columns within a family
- Optimized for queries over large datasets
- Examples: Cassandra, HBase, Google Bigtable

```
// Conceptual representation of column-family storage
RowKey | Profile Column Family       | Activity Column Family
-------+-----------------------------+------------------------
user1  | name:"Jane" | email:"j@e.com" | lastLogin:"2023-03-01" | posts:["A","B"]
user2  | name:"Bob"  | phone:"555-1234"| lastLogin:"2023-02-28"
```

**Graph Model:**
- Stores entities as nodes and relationships as edges
- Optimized for traversing relationships
- Powerful for connected data problems
- Examples: Neo4j, JanusGraph, Amazon Neptune

```
// Conceptual representation of a graph
(Person:Jane)-[FRIEND_OF]->(Person:John)
(Person:Jane)-[PURCHASED]->(Product:Laptop)
(Person:John)-[REVIEWED]->(Product:Laptop)
```

**Search-Oriented Model:**
- Optimized for full-text search and analytics
- Uses inverted indices for efficient text queries
- Supports complex search features (faceting, highlighting)
- Examples: Elasticsearch, Solr

**Time-Series Model:**
- Optimized for data points collected over time
- Efficient storage and retrieval of time-stamped data
- Examples: InfluxDB, TimescaleDB

### 5. Choosing the Appropriate Data Model

Selecting the right data model is crucial for application performance, scalability, and development productivity. The choice depends on several factors:

**Data Access Patterns:**
- How will the data be queried?
- Is it read-heavy or write-heavy?
- Are there complex relationships to traverse?
- Is full-text search a primary requirement?

**Data Structure Considerations:**
- How complex is your data?
- How often does the schema change?
- Are hierarchical relationships important?
- Is the data naturally document-oriented or graph-oriented?

**Scalability Requirements:**
- How much data do you anticipate?
- What are your read/write throughput needs?
- Is horizontal scaling important?

**Performance Requirements:**
- What are your latency requirements?
- Do you need real-time analytics?
- Are there specific operations that must be optimized?

**Decision Framework:**
- **Choose Document Databases** when:
  - Data is naturally document-oriented (JSON-like)
  - Schema flexibility is important
  - You need rich query capabilities

- **Choose Key-Value Stores** when:
  - Simple, high-throughput operations are primary
  - Data access is primarily by a known key
  - Complex querying is not needed

- **Choose Column-Family Stores** when:
  - Working with massive datasets
  - Read/write patterns are predictable
  - High write throughput is required

- **Choose Graph Databases** when:
  - Relationship traversal is the primary operation
  - Data is highly connected
  - Relationships are as important as the data itself

- **Choose Search Engines** when:
  - Full-text search is a core requirement
  - Complex text analysis is needed
  - Faceted navigation is important

- **Choose Time-Series Databases** when:
  - Data is primarily time-stamped
  - Time-based aggregations are common
  - You need efficient storage of sequential measurements

**Polyglot Persistence:**
Many modern applications employ multiple database types to leverage the strengths of each for different aspects of the application—an approach known as polyglot persistence.

## Unit-II: Data Ingestion, Extraction & Querying Unstructured Data

### 1. Data Ingestion Techniques

Data ingestion is the process of obtaining and importing data for immediate use or storage in the database. For unstructured data, this process involves specialized techniques to handle diverse data formats and sources.

**Batch Ingestion:**
- Processing data in chunks or batches at scheduled intervals
- Suitable for large volumes of historical data
- Examples: ETL processes, scheduled imports
- Tools: Apache NiFi, Talend, Informatica

**Real-time Ingestion:**
- Processing data as it is generated
- Critical for time-sensitive applications
- Examples: Log streaming, IoT sensor data collection
- Tools: Apache Kafka, Amazon Kinesis, RabbitMQ

**Ingestion Architectures:**
- **Hub and Spoke**: Central ingestion service distributes to various storage systems
- **Pipeline**: Sequential processing stages
- **Lambda Architecture**: Combines batch and streaming processing
- **Kappa Architecture**: Unified processing path for all data

**Common Ingestion Challenges with Unstructured Data:**
- Handling diverse file formats
- Dealing with inconsistent data quality
- Managing large binary files
- Extracting meaningful metadata
- Maintaining data lineage
- Scaling for volume and velocity

**Ingestion Strategies for Different Data Types:**
- **Text Documents**:
  - Parse metadata (author, creation date)
  - Extract full text for indexing
  - Generate summary information

- **Images and Videos**:
  - Extract EXIF metadata
  - Generate thumbnails
  - Perform content analysis for automatic tagging

- **Social Media Data**:
  - Capture engagement metrics
  - Extract entities (hashtags, mentions)
  - Preserve relationship information

- **Logs and Events**:
  - Parse structured elements
  - Normalize timestamps
  - Categorize by severity or type

**Data Ingestion Best Practices:**
- Validate and clean data early in the pipeline
- Implement robust error handling
- Maintain data provenance information
- Design for scalability from the beginning
- Monitor pipeline health and performance
- Implement data governance controls

### 2. Extracting Structured Information from Unstructured Data

Converting unstructured data into structured formats makes it more accessible for analysis and querying. This process involves various techniques to identify and extract meaningful elements.

**Text Analysis Techniques:**
- **Named Entity Recognition (NER)**: Identifying entities like people, organizations, locations
- **Part-of-Speech Tagging**: Categorizing words as nouns, verbs, adjectives, etc.
- **Sentiment Analysis**: Determining emotional tone
- **Topic Modeling**: Identifying main themes
- **Keyword Extraction**: Finding significant terms
- **Text Summarization**: Generating concise summaries

**Tools for Text Analysis:**
- Natural Language Processing (NLP) libraries: NLTK, spaCy, Stanford NLP
- Cloud services: Google Natural Language API, AWS Comprehend, Azure Text Analytics

**Image and Video Analysis:**
- **Object Detection**: Identifying objects within images
- **Facial Recognition**: Detecting and identifying faces
- **Optical Character Recognition (OCR)**: Extracting text from images
- **Scene Classification**: Categorizing image content
- **Video Segmentation**: Breaking video into scenes

**Audio Processing:**
- **Speech-to-Text**: Converting spoken words to text
- **Speaker Diarization**: Identifying who spoke when
- **Audio Classification**: Categorizing sounds
- **Emotion Detection**: Identifying emotional states from voice

**Implementation Approaches:**
- **Rule-based Systems**: Using predefined patterns and rules
- **Machine Learning Models**: Supervised learning for classification and extraction
- **Deep Learning**: Neural networks for complex pattern recognition
- **Hybrid Approaches**: Combining multiple techniques

**Example: Extracting Information from an Invoice**
```
# Original: Unstructured PDF invoice
# Extracted structured data:
{
  "invoice_number": "INV-2023-0042",
  "date": "2023-03-15",
  "vendor": "Acme Supplies Inc.",
  "total_amount": 1245.67,
  "line_items": [
    {"description": "Office Desk", "quantity": 2, "unit_price": 350.00},
    {"description": "Office Chair", "quantity": 5, "unit_price": 109.00}
  ]
}
```

**Extraction Pipeline Design:**
1. **Document parsing**: Convert to processable format
2. **Preprocessing**: Clean and normalize
3. **Structure identification**: Detect sections, tables, lists
4. **Entity extraction**: Apply appropriate techniques
5. **Post-processing**: Validate and standardize
6. **Output transformation**: Convert to desired structure

**Evaluation Metrics:**
- Precision: Accuracy of extracted information
- Recall: Completeness of extraction
- F1 Score: Balanced measure of precision and recall
- Processing time: Performance efficiency

### 3. Pre-processing and Cleaning Unstructured Data

Pre-processing transforms raw unstructured data into a consistent, clean format suitable for storage and analysis. This critical step improves data quality and extraction accuracy.

**Text Pre-processing Techniques:**
- **Tokenization**: Breaking text into words or phrases
- **Normalization**: Converting to lowercase, handling special characters
- **Stop Word Removal**: Eliminating common words (the, and, is)
- **Stemming/Lemmatization**: Reducing words to their root form
- **Spell Correction**: Fixing spelling errors
- **Character Encoding Handling**: Managing UTF-8, ASCII, etc.

**Image Pre-processing:**
- **Resizing**: Standardizing dimensions
- **Noise Reduction**: Smoothing and filtering
- **Normalization**: Adjusting brightness, contrast
- **Color Correction**: Balancing color profiles
- **Compression**: Reducing file size while preserving quality

**Audio Pre-processing:**
- **Noise Filtering**: Removing background noise
- **Normalization**: Adjusting volume levels
- **Segmentation**: Breaking into manageable chunks
- **Feature Extraction**: Converting to spectrograms or other representations

**Data Cleaning Challenges in Unstructured Data:**
- Inconsistent formatting
- Missing sections or elements
- Duplicate content
- Multilingual content
- Spam and irrelevant content
- Sensitive information (PII)

**Cleaning Pipeline Implementation:**
```python
# Example text preprocessing pipeline
def preprocess_text(text):
    # Normalize case
    text = text.lower()

    # Remove special characters
    text = re.sub(r'[^\w\s]', '', text)

    # Tokenize
    tokens = word_tokenize(text)

    # Remove stop words
    stop_words = set(stopwords.words('english'))
    tokens = [word for word in tokens if word not in stop_words]

    # Stemming
    stemmer = PorterStemmer()
    tokens = [stemmer.stem(word) for word in tokens]

    return tokens
```

**Quality Assurance Measures:**
- Automated validation rules
- Manual sampling and review
- Statistical anomaly detection
- Feedback loops for continuous improvement

**Handling Special Cases:**
- **Multilingual Content**: Language detection and appropriate processing
- **Domain-Specific Terminology**: Custom dictionaries and rules
- **Abbreviations and Acronyms**: Expansion and standardization
- **Temporal References**: Normalization to standard formats

### 4. Handling Multimedia and Binary Data

Multimedia data (images, audio, video) and other binary formats present unique challenges for storage, retrieval, and analysis in unstructured databases.

**Storage Considerations:**
- **Direct Storage**: Storing files directly in the database
  - Advantages: Transactional consistency, simplified backups
  - Disadvantages: Database size, performance impact

- **External Storage with References**: Storing files in a file system or object store
  - Advantages: Better performance, specialized storage
  - Disadvantages: Synchronization challenges, complexity

- **Hybrid Approaches**: Storing small files in DB, large files externally
  - Advantages: Balance of benefits
  - Disadvantages: Increased complexity

**Storage Options for Binary Data:**
- **GridFS (MongoDB)**: Divides large files into chunks
- **Object Storage**: Amazon S3, Google Cloud Storage, Azure Blob Storage
- **Specialized Systems**: Content Delivery Networks (CDNs), Digital Asset Management (DAM)

**Metadata Management:**
- Extracting technical metadata (dimensions, format, duration)
- Generating descriptive metadata (tags, categories)
- Managing rights and usage information
- Linking to related content

**Example: Storing an Image in MongoDB with GridFS**
```javascript
// Store file
const bucket = new mongodb.GridFSBucket(db);
const uploadStream = bucket.openUploadStream('image.jpg', {
  metadata: {
    contentType: 'image/jpeg',
    uploadDate: new Date(),
    description: 'Product photo',
    tags: ['product', 'official']
  }
});
fs.createReadStream('path/to/image.jpg').pipe(uploadStream);

// Retrieve file
const downloadStream = bucket.openDownloadStreamByName('image.jpg');
downloadStream.pipe(fs.createWriteStream('retrieved-image.jpg'));
```

**Binary Data Processing Techniques:**
- **Thumbnailing**: Creating smaller versions for preview
- **Transcoding**: Converting between formats
- **Feature Extraction**: Deriving features for indexing/search
- **Content Analysis**: Automated tagging and classification

**Performance Optimization:**
- Caching frequently accessed binary data
- Progressive loading for large files
- Asynchronous processing workflows
- Content versioning and delta storage

**Specialized Binary Data Types:**
- **Geographic Data**: Spatial indices and specialized operations
- **Time Series**: Optimized storage for sequential measurements
- **Scientific Data**: High-dimensional arrays, specialized formats

### 5. Query Languages for Unstructured Databases

Unstructured databases use specialized query languages optimized for their data models, moving beyond the SQL paradigm used in relational databases.

**Document Database Query Languages:**
- **MongoDB Query Language**: JSON-based query expressions
  ```javascript
  // Find documents where age > 25 and city is "New York"
  db.users.find({
    age: { $gt: 25 },
    city: "New York"
  })
  ```

- **CouchDB/PouchDB**: MapReduce views and Mango queries
  ```javascript
  // MapReduce view
  function(doc) {
    if (doc.type === 'user') {
      emit(doc.city, doc);
    }
  }
  ```

**Graph Query Languages:**
- **Cypher (Neo4j)**: Pattern-matching language for graph traversal
  ```cypher
  // Find friends of friends
  MATCH (person:Person {name: 'Jane'})-[:FRIEND]->(friend)-[:FRIEND]->(friendOfFriend)
  RETURN friendOfFriend.name
  ```

- **Gremlin**: Graph traversal language
  ```gremlin
  g.V().has('name', 'Jane').out('friend').out('friend').values('name')
  ```

**Search Query Languages:**
- **Elasticsearch Query DSL**: JSON-based query language
  ```json
  {
    "query": {
      "bool": {
        "must": { "match": { "content": "database" }},
        "filter": { "range": { "date": { "gte": "2023-01-01" }}}
      }
    }
  }
  ```

- **Lucene Syntax**: Text-based query syntax
  ```
  content:database AND date:[2023-01-01 TO *]
  ```

**Query Language Features for Unstructured Data:**
- **Full-text Search**: Relevance ranking, fuzzy matching, phrase queries
- **Geospatial Queries**: Finding points within areas, calculating distances
- **Array Operations**: Querying elements within arrays, array manipulation
- **Aggregation Frameworks**: Computing statistics and transformations
- **Projections**: Returning specific fields or computed values
- **Query Composition**: Building complex queries from simpler ones

**Comparison with SQL:**
- SQL: Declarative, table-oriented, join-heavy
- NoSQL: Often more programmatic, data-model specific, denormalized

**Query Execution Concepts:**
- **Indexing Strategies**: B-trees, inverted indices, spatial indices
- **Query Planning**: How the database optimizes query execution
- **Distributed Query Execution**: Running queries across multiple nodes

**Advanced Query Techniques:**
- **Faceted Search**: Categorizing results by multiple dimensions
- **Similarity Queries**: Finding "similar" items (text, images)
- **Recommendation Queries**: "People who liked X also liked Y"
- **Time-based Analysis**: Trends, patterns over time

## Unit-III: Introduction to MongoDB

### 1. Overview of MongoDB

MongoDB is a document-oriented NoSQL database designed for scalability and flexibility. It stores data in flexible, JSON-like documents where fields can vary between documents and data structure can change over time.

**Key Features of MongoDB:**
- Document-oriented storage
- High performance
- High availability through replication
- Horizontal scalability via sharding
- Rich query language
- Aggregation framework
- Secondary indexing
- File storage (GridFS)
- Ad-hoc queries
- Real-time aggregation
- Map-reduce support

**MongoDB Architecture:**
- **Documents**: The basic unit of data (BSON format)
- **Collections**: Groups of documents (similar to tables)
- **Databases**: Sets of collections
- **Clusters**: Groups of servers hosting replicated data
- **Shards**: Partitions of data across clusters

**MongoDB Ecosystem:**
- **MongoDB Community Edition**: Free, open-source version
- **MongoDB Enterprise Advanced**: Commercial version with enhanced security and tools
- **MongoDB Atlas**: Cloud database as a service
- **MongoDB Compass**: GUI for exploring and manipulating data
- **MongoDB Charts**: Data visualization tool
- **MongoDB Stitch**: Serverless platform for apps

**Use Cases for MongoDB:**
- Content management systems
- Mobile applications
- Real-time analytics
- Catalog applications
- Personalization engines
- IoT data storage
- Single view applications (customer 360)

**MongoDB Document Example:**
```json
{
  "_id": ObjectId("5f8a716b1c4d7500069bd9c4"),
  "title": "MongoDB Overview",
  "author": {
    "name": "John Smith",
    "email": "john@example.com"
  },
  "tags": ["database", "NoSQL", "document-oriented"],
  "comments": [
    {
      "user": "Alice",
      "text": "Great introduction!",
      "date": ISODate("2023-03-10T14:25:00Z")
    },
    {
      "user": "Bob",
      "text": "Very helpful",
      "date": ISODate("2023-03-11T09:15:00Z")
    }
  ],
  "views": 1250,
  "published": true,
  "created_at": ISODate("2023-03-01T10:00:00Z")
}
```

### 2. Comparison with Relational Databases

Understanding the differences between MongoDB and traditional relational database management systems (RDBMS) helps in making appropriate architectural decisions.

**Terminology Comparison:**
| RDBMS | MongoDB |
|-------|---------|
| Table | Collection |
| Row | Document |
| Column | Field |
| Join | Embedding & Linking |
| Primary Key | _id field |
| Foreign Key | Reference |
| Index | Index |

**Structural Differences:**
- **RDBMS**: Rigid schema, normalization, table-based
- **MongoDB**: Flexible schema, denormalization encouraged, document-based

**Data Modeling Differences:**
- **RDBMS**: Entity-Relationship model, normalization to reduce redundancy
- **MongoDB**: Embedded documents or references, denormalization for performance

**Example: Modeling a Blog in Both Systems**

RDBMS (Normalized):
```sql
-- Posts table
CREATE TABLE posts (
  id INT PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  author_id INT,
  created_at TIMESTAMP,
  FOREIGN KEY (author_id) REFERENCES authors(id)
);

-- Authors table
CREATE TABLE authors (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

-- Comments table
CREATE TABLE comments (
  id INT PRIMARY KEY,
  post_id INT,
  user_name VARCHAR(255),
  content TEXT,
  created_at TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES posts(id)
);
```

MongoDB (Embedded Documents):
```javascript
// Single document with embedded author and comments
{
  "_id": ObjectId("..."),
  "title": "My Blog Post",
  "content": "This is the content...",
  "author": {
    "name": "John Smith",
    "email": "john@example.com"
  },
  "comments": [
    {
      "user_name": "Alice",
      "content": "Great post!",
      "created_at": ISODate("2023-03-15T10:30:00Z")
    },
    // More comments...
  ],
  "created_at": ISODate("2023-03-01T08:00:00Z")
}
```

**Query Differences:**
- **RDBMS**: SQL with JOINs for related data
- **MongoDB**: JSON-like queries, often no joins needed due to embedding

SQL query:
```sql
SELECT p.title, a.name, c.content
FROM posts p
JOIN authors a ON p.author_id = a.id
LEFT JOIN comments c ON c.post_id = p.id
WHERE p.created_at > '2023-01-01';
```

MongoDB query:
```javascript
db.posts.find({
  "created_at": { $gt: ISODate("2023-01-01T00:00:00Z") }
},
{
  "title": 1,
  "author.name": 1,
  "comments.content": 1
})
```

**Performance Considerations:**
- **RDBMS**:
  - Better for complex transactions
  - Mature optimization techniques
  - More predictable performance for joins

- **MongoDB**:
  - Better for read-heavy workloads
  - Faster for denormalized data access
  - Better horizontal scaling
  - No join penalty with embedded documents

**When to Choose MongoDB over RDBMS:**
- Evolving data schemas
- Document-oriented data
- High write load
- Need for horizontal scaling
- Complex hierarchical data
- Geospatial applications

**When to Choose RDBMS over MongoDB:**
- Complex transactions (ACID requirements)
- Data with many relationships
- Legacy system integration
- Structured reporting needs
- When SQL expertise is widely available

### 3. Installing and Setting Up MongoDB

Setting up MongoDB involves installation, configuration, and initial setup steps to prepare the database for use.

**Installation Methods:**
- **Package Managers**: apt, yum, homebrew
- **Direct Download**: MongoDB Community or Enterprise installers
- **Docker**: Containerized deployment
- **Cloud Providers**: MongoDB Atlas, AWS, Azure, GCP marketplace offerings

**Linux Installation (Ubuntu):**
```bash
# Import MongoDB public GPG key
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

# Create list file for MongoDB
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Reload local package database
sudo apt-get update

# Install MongoDB packages
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod

# Enable MongoDB to start on boot
sudo systemctl enable mongod
```

**macOS Installation (Homebrew):**
```bash
# Install MongoDB Community Edition
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community
```

**Windows Installation:**
1. Download the MSI installer from the MongoDB website
2. Run the installer, selecting "Complete" setup
3. Install MongoDB Compass (optional)
4. Start the MongoDB service

**Docker Installation:**
```bash
# Pull the MongoDB image
docker pull mongo

# Run MongoDB container
docker run -d -p 27017:27017 --name mongodb mongo
```

**Configuration Basics:**
MongoDB configuration is stored in `mongod.conf` (Linux/macOS) or `mongo.cfg` (Windows).

Essential configuration settings:
```yaml
# Basic configuration
storage:
  dbPath: /var/lib/mongodb
  journal:
    enabled: true

systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log

net:
  port: 27017
  bindIp: 127.0.0.1

security:
  authorization: enabled
```

**Initial Database Setup:**
1. Connect to MongoDB shell:
```bash
mongosh
```

2. Create administrator user:
```javascript
use admin
db.createUser({
  user: "adminUser",
  pwd: "securePassword",
  roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
})
```

3. Enable authentication in configuration file:
```yaml
security:
  authorization: enabled
```

4. Restart MongoDB service:
```bash
sudo systemctl restart mongod
```

5. Connect with authentication:
```bash
mongosh --authenticationDatabase admin -u adminUser -p
```

**Basic Security Measures:**
- Always enable authentication
- Use strong passwords
- Restrict network access (bindIp)
- Use TLS/SSL for encryption
- Implement role-based access control
- Regularly update MongoDB version

**Verification and Testing:**
```javascript
// Check MongoDB version
db.version()

// Check status
db.serverStatus()

// Create test database and collection
use testDB
db.testCollection.insertOne({ test: "Hello MongoDB" })

// Verify data was saved
db.testCollection.find()
```

### 4. MongoDB Data Model

The MongoDB data model is centered around flexible, JSON-like documents that can contain varied structures, making it adaptable to evolving application requirements.

**BSON Document Format:**
MongoDB stores data as BSON (Binary JSON) documents, which extends JSON with additional data types:
- ObjectId: Unique identifier (default for `_id` field)
- Date: ISODate for timestamp storage
- NumberLong and NumberDecimal: For precise numeric values
- Binary: For binary data
- Regular expressions: For pattern matching

**Document Structure:**
- Documents contain field-value pairs
- Values can be simple types, arrays, or embedded documents
- Each document has a unique `_id` field
- Field names are case-sensitive strings
- Documents in a collection can have different fields
- Maximum document size: 16MB

**Example Document:**
```javascript
{
  "_id": ObjectId("60a67c8d1f0d7d2b280b5e42"),
  "product_name": "Ergonomic Chair",
  "price": NumberDecimal("249.99"),
  "category": "Furniture",
  "tags": ["office", "ergonomic", "chair"],
  "in_stock": true,
  "specifications": {
    "weight_kg": 15.2,
    "dimensions": {
      "width_cm": 60,
      "depth_cm": 65,
      "height_cm": 115
    },
    "adjustable_height": true
  },
  "warranty_years": 3,
  "created_at": ISODate("2023-01-15T10:30:00Z")
}
```

**Data Modeling Approaches:**

1. **Embedded Documents** (Denormalization):
   - Nesting related data within a single document
   - Advantages: Single query retrieval, atomic operations
   - Use when: Data is primarily accessed together, one-to-few relationships

   Example (Order with line items):
   ```javascript
   {
     "_id": ObjectId("..."),
     "order_number": "ORD-12345",
     "customer_id": ObjectId("..."),
     "order_date": ISODate("2023-03-15"),
     "items": [
       {
         "product_id": ObjectId("..."),
         "name": "Wireless Mouse",
         "quantity": 1,
         "price": 29.99
       },
       {
         "product_id": ObjectId("..."),
         "name": "USB Keyboard",
         "quantity": 1,
         "price": 49.99
       }
     ],
     "shipping_address": {
       "street": "123 Main St",
       "city": "Anytown",
       "state": "CA",
       "zip": "12345"
     },
     "total": 79.98
   }
   ```

2. **References** (Normalization):
   - Storing references (usually ObjectIds) to documents in other collections
   - Advantages: Avoids duplication, better for frequent updates
   - Use when: Many-to-many relationships, large subdocuments, data accessed separately

   Example (Customer and orders using references):
   ```javascript
   // Customer document
   {
     "_id": ObjectId("cust123"),
     "name": "Jane Smith",
     "email": "jane@example.com"
   }

   // Order documents (separate collection)
   {
     "_id": ObjectId("ord456"),
     "customer_id": ObjectId("cust123"),
     "order_date": ISODate("2023-03-15"),
     "total": 79.98
   }
   ```

**Data Modeling Patterns:**

1. **Subset Pattern**:
   - Store a subset of fields from a related document
   - Useful for reducing query complexity while minimizing duplication

2. **Extended Reference Pattern**:
   - Store frequently accessed fields from referenced documents
   - Reduces need for joins (lookups)

3. **Computed Pattern**:
   - Store computed values for frequent queries
   - Example: storing total number of comments on a post

4. **Bucket Pattern**:
   - Group related documents together (time-series data)
   - Reduces document count and index size

5. **Schema Versioning**:
   - Include schema version in documents
   - Helps manage schema evolution

**Schema Design Considerations:**

- **Document Size**: Keep under 16MB limit
- **Access Patterns**: Design for most frequent queries
- **Write Frequency**: Consider impact on embedded vs. reference
- **Consistency Requirements**: Transaction needs
- **Indexing Strategy**: Fields to be indexed
- **Growth Projections**: How data will scale over time

### 5. CRUD Operations

CRUD (Create, Read, Update, Delete) operations form the foundation of interacting with MongoDB data.

**Create Operations:**

1. **Insert a Single Document**:
   ```javascript
   db.products.insertOne({
     name: "Wireless Headphones",
     price: 99.99,
     category: "Electronics",
     in_stock: true
   })
   ```

2. **Insert Multiple Documents**:
   ```javascript
   db.products.insertMany([
     {
       name: "Smart Watch",
       price: 199.99,
       category: "Electronics",
       in_stock: true
     },
     {
       name: "Bluetooth Speaker",
       price: 79.99,
       category: "Electronics",
       in_stock: false
     }
   ])
   ```

3. **Insert with Options**:
   ```javascript
   db.products.insertOne(
     { name: "Tablet", price: 349.99 },
     { writeConcern: { w: "majority", wtimeout: 5000 } }
   )
   ```

**Read Operations:**

1. **Find All Documents**:
   ```javascript
   db.products.find()
   ```

2. **Find with Query Criteria**:
   ```javascript
   db.products.find({ category: "Electronics", in_stock: true })
   ```

3. **Field Projection** (selecting specific fields):
   ```javascript
   db.products.find(
     { category: "Electronics" },
     { name: 1, price: 1, _id: 0 }
   )
   ```

4. **Find a Single Document**:
   ```javascript
   db.products.findOne({ name: "Smart Watch" })
   ```

5. **Query Operators**:
   ```javascript
   // Price greater than 100
   db.products.find({ price: { $gt: 100 } })

   // Category is either Electronics or Accessories
   db.products.find({ category: { $in: ["Electronics", "Accessories"] } })

   // Products with tags containing "wireless"
   db.products.find({ tags: "wireless" })

   // Logical operators
   db.products.find({
     $and: [
       { price: { $lt: 100 } },
       { in_stock: true }
     ]
   })
   ```

6. **Cursor Methods**:
   ```javascript
   // Limit results
   db.products.find().limit(10)

   // Skip results (for pagination)
   db.products.find().skip(10).limit(10)

   // Sort results
   db.products.find().sort({ price: -1 }) // Descending

   // Count documents
   db.products.countDocuments({ category: "Electronics" })
   ```

**Update Operations:**

1. **Update a Single Document**:
   ```javascript
   db.products.updateOne(
     { name: "Wireless Headphones" },
     { $set: { price: 89.99, on_sale: true } }
   )
   ```

2. **Update Multiple Documents**:
   ```javascript
   db.products.updateMany(
     { category: "Electronics" },
     { $inc: { price: -10 } }
   )
   ```

3. **Replace a Document**:
   ```javascript
   db.products.replaceOne(
     { name: "Smart Watch" },
     {
       name: "Smart Watch Pro",
       price: 249.99,
       category: "Electronics",
       features: ["Heart Rate", "GPS", "Waterproof"]
     }
   )
   ```

4. **Update Operators**:
   ```javascript
   // Set value
   db.products.updateOne(
     { _id: ObjectId("...") },
     { $set: { in_stock: false } }
   )

   // Increment value
   db.products.updateOne(
     { _id: ObjectId("...") },
     { $inc: { quantity: -1 } }
   )

   // Add to array
   db.products.updateOne(
     { _id: ObjectId("...") },
     { $push: { tags: "gift" } }
   )

   // Remove from array
   db.products.updateOne(
     { _id: ObjectId("...") },
     { $pull: { tags: "clearance" } }
   )

   // Rename field
   db.products.updateMany(
     {},
     { $rename: { "description": "product_description" } }
   )
   ```

5. **Upsert** (insert if not exists):
   ```javascript
   db.products.updateOne(
     { sku: "ABC123" },
     { $set: { name: "New Product", price: 19.99 } },
     { upsert: true }
   )
   ```

**Delete Operations:**

1. **Delete a Single Document**:
   ```javascript
   db.products.deleteOne({ name: "Discontinued Product" })
   ```

2. **Delete Multiple Documents**:
   ```javascript
   db.products.deleteMany({ in_stock: false })
   ```

3. **Delete All Documents in a Collection**:
   ```javascript
   db.products.deleteMany({})
   ```

4. **Drop Collection**:
   ```javascript
   db.products.drop()
   ```

**Bulk Operations** (combining multiple operations):
```javascript
const bulk = db.products.initializeUnorderedBulkOp()
bulk.find({ category: "Electronics" }).update({ $inc: { price: 5 } })
bulk.find({ supplier: "XYZ Corp" }).remove()
bulk.insert({ name: "New Product", price: 29.99 })
bulk.execute()
```

### 6. Indexing, Aggregation, and Replication

**Indexing in MongoDB:**

Indexes improve query performance by creating efficient data structures for searching and sorting. Without indexes, MongoDB must scan every document in a collection.

**Types of Indexes:**

1. **Single Field Index**:
   ```javascript
   // Create index on the "name" field
   db.products.createIndex({ name: 1 }) // 1 for ascending, -1 for descending
   ```

2. **Compound Index** (multiple fields):
   ```javascript
   // Create index on category and price
   db.products.createIndex({ category: 1, price: -1 })
   ```

3. **Multikey Index** (for array fields):
   ```javascript
   // Index for arrays of tags
   db.products.createIndex({ tags: 1 })
   ```

4. **Text Index** (for full-text search):
   ```javascript
   // Create text index on description
   db.products.createIndex({ description: "text" })

   // Search using text index
   db.products.find({ $text: { $search: "wireless bluetooth" } })
   ```

5. **Geospatial Index**:
   ```javascript
   // Create 2dsphere index for geo queries
   db.locations.createIndex({ coordinates: "2dsphere" })

   // Find locations near a point
   db.locations.find({
     coordinates: {
       $near: {
         $geometry: {
           type: "Point",
           coordinates: [-73.9667, 40.78]
         },
         $maxDistance: 5000 // meters
       }
     }
   })
   ```

6. **Hashed Index**:
   ```javascript
   // Create hashed index for sharding
   db.users.createIndex({ user_id: "hashed" })
   ```

**Index Management:**
```javascript
// List all indexes on a collection
db.products.getIndexes()

// Drop an index
db.products.dropIndex("name_1")

// Create index with options
db.products.createIndex(
  { email: 1 },
  { unique: true, sparse: true }
)
```

**Indexing Best Practices:**
- Create indexes to support your queries
- Avoid creating unnecessary indexes
- Consider the impact on write performance
- Use compound indexes for multiple query criteria
- Place most selective fields first in compound indexes
- Use explain() to analyze query performance

**Aggregation Framework:**

The Aggregation Framework provides a way to process and transform data within MongoDB, similar to SQL's GROUP BY operations but more powerful.

**Basic Aggregation Pipeline:**
```javascript
db.orders.aggregate([
  // Stage 1: Filter documents
  { $match: { status: "completed" } },

  // Stage 2: Group and calculate totals
  { $group: {
      _id: "$customer_id",
      total_spent: { $sum: "$total" },
      order_count: { $sum: 1 }
  }},

  // Stage 3: Sort by total spent
  { $sort: { total_spent: -1 } },

  // Stage 4: Limit to top 5
  { $limit: 5 }
])
```

**Common Aggregation Stages:**

1. **$match**: Filters documents (similar to find())
   ```javascript
   { $match: { category: "Electronics" } }
   ```

2. **$group**: Groups documents by a specified expression
   ```javascript
   { $group: {
       _id: "$category",
       average_price: { $avg: "$price" },
       count: { $sum: 1 }
   }}
   ```

3. **$sort**: Sorts documents
   ```javascript
   { $sort: { count: -1 } }
   ```

4. **$project**: Reshapes documents (select/rename/compute fields)
   ```javascript
   { $project: {
       _id: 0,
       product: "$name",
       sale_price: { $multiply: ["$price", 0.9] }
   }}
   ```

5. **$unwind**: Deconstructs array fields
   ```javascript
   { $unwind: "$tags" }
   ```

6. **$lookup**: Performs left outer join with another collection
   ```javascript
   { $lookup: {
       from: "customers",
       localField: "customer_id",
       foreignField: "_id",
       as: "customer_info"
   }}
   ```

**Complex Aggregation Example:**
```javascript
db.sales.aggregate([
  // Match sales from last month
  { $match: {
      date: {
        $gte: ISODate("2023-02-01"),
        $lt: ISODate("2023-03-01")
      }
  }},

  // Group by product category and calculate stats
  { $group: {
      _id: "$product_category",
      revenue: { $sum: { $multiply: ["$price", "$quantity"] } },
      units_sold: { $sum: "$quantity" },
      average_price: { $avg: "$price" }
  }},

  // Calculate profit (assuming 40% margin)
  { $project: {
      _id: 0,
      category: "$_id",
      revenue: 1,
      units_sold: 1,
      average_price: 1,
      profit: { $multiply: ["$revenue", 0.4] }
  }},

  // Sort by revenue
  { $sort: { revenue: -1 } }
])
```

**Replication in MongoDB:**

Replication provides redundancy and high availability by maintaining multiple copies of data across different servers.

**Replica Set Architecture:**
- **Primary Node**: Receives all write operations
- **Secondary Nodes**: Maintain copies of primary's data
- **Arbiter Node** (optional): Participates in elections but doesn't hold data

**Setting Up a Replica Set:**
1. Start MongoDB instances with replica set configuration:
   ```bash
   mongod --replSet "rs0" --port 27017 --dbpath /data/rs0-0
   mongod --replSet "rs0" --port 27018 --dbpath /data/rs0-1
   mongod --replSet "rs0" --port 27019 --dbpath /data/rs0-2
   ```

2. Initialize the replica set:
   ```javascript
   rs.initiate({
     _id: "rs0",
     members: [
       { _id: 0, host: "localhost:27017" },
       { _id: 1, host: "localhost:27018" },
       { _id: 2, host: "localhost:27019" }
     ]
   })
   ```

3. Check replica set status:
   ```javascript
   rs.status()
   ```

**Replication Features:**

- **Automatic Failover**: If the primary goes down, an election selects a new primary
- **Data Redundancy**: Multiple copies ensure data safety
- **Read Scaling**: Configure applications to read from secondaries
- **Geographically Distributed Deployment**: Place members in different locations

**Read Preference Options:**
```javascript
// Read from primary only (default)
db.collection.find().readPref("primary")

// Read from secondary if available
db.collection.find().readPref("secondaryPreferred")

// Read from nearest member (by ping time)
db.collection.find().readPref("nearest")
```

**Write Concern Options:**
```javascript
// Wait for write to be acknowledged by the primary
db.collection.insertOne({ item: "example" }, { writeConcern: { w: 1 } })

// Wait for write to be acknowledged by primary and one secondary
db.collection.insertOne({ item: "example" }, { writeConcern: { w: 2 } })

// Wait for write to be acknowledged by a majority of replica set members
db.collection.insertOne({ item: "example" }, { writeConcern: { w: "majority" } })
```

**Replication Best Practices:**
- Use an odd number of voting members (to avoid ties in elections)
- Distribute replica set members across different failure domains
- Configure appropriate write concern for your application's needs
- Monitor replication lag
- Plan for network partition scenarios
- Perform regular backups despite replication

## Unit-IV: Advanced MongoDB

### 1. Relationships and Database References

MongoDB offers multiple approaches to model relationships between data, each with different trade-offs in terms of performance, complexity, and data consistency.

**Types of Relationships:**

1. **One-to-One (1:1)** - A document in one collection is related to exactly one document in another collection
2. **One-to-Many (1:N)** - A document in one collection is related to multiple documents in another collection
3. **Many-to-Many (N:M)** - Multiple documents in one collection are related to multiple documents in another collection

**Implementation Approaches:**

1. **Embedded Documents (Denormalization)**:
   - Directly nest related data inside the parent document
   - Best for "contains" relationships with a limited number of child documents
   - Allows retrieving all related data in a single query

   ```javascript
   // User document with embedded address (1:1)
   {
     "_id": ObjectId("..."),
     "name": "Alice Smith",
     "email": "alice@example.com",
     "address": {
       "street": "123 Main St",
       "city": "New York",
       "state": "NY",
       "zip": "10001"
     }
   }

   // Product document with embedded reviews (1:N)
   {
     "_id": ObjectId("..."),
     "name": "Wireless Headphones",
     "price": 99.99,
     "reviews": [
       {
         "user_id": ObjectId("..."),
         "rating": 5,
         "comment": "Great sound quality!",
         "date": ISODate("2023-03-10")
       },
       {
         "user_id": ObjectId("..."),
         "rating": 4,
         "comment": "Comfortable but battery life could be better.",
         "date": ISODate("2023-03-15")
       }
     ]
   }
   ```

2. **Document References (Normalization)**:
   - Store references (usually ObjectIds) to documents in other collections
   - Better for relationships where child documents are numerous or shared
   - Requires multiple queries to retrieve related data

   ```javascript
   // Order document with customer reference (1:N)
   // Orders collection
   {
     "_id": ObjectId("order1"),
     "order_number": "ORD-12345",
     "customer_id": ObjectId("cust1"),
     "total": 129.99,
     "date": ISODate("2023-03-15")
   }

   // Customer collection
   {
     "_id": ObjectId("cust1"),
     "name": "Bob Johnson",
     "email": "bob@example.com"
   }
   ```

3. **Hybrid Approach (Extended References)**:
   - Store a reference to the related document
   - Also store commonly accessed fields from the related document
   - Reduces the need for separate queries while maintaining normalization for updates

   ```javascript
   // Order with extended customer reference
   {
     "_id": ObjectId("order1"),
     "order_number": "ORD-12345",
     "customer": {
       "_id": ObjectId("cust1"),
       "name": "Bob Johnson",
       "email": "bob@example.com"
     },
     "total": 129.99,
     "date": ISODate("2023-03-15")
   }
   ```

**Many-to-Many Relationships:**

1. **Array of References**:
   ```javascript
   // Student document with array of course references
   // Students collection
   {
     "_id": ObjectId("student1"),
     "name": "Elena Rodriguez",
     "course_ids": [
       ObjectId("course1"),
       ObjectId("course2"),
       ObjectId("course3")
     ]
   }

   // Courses collection
   {
     "_id": ObjectId("course1"),
     "name": "Introduction to MongoDB",
     "credits": 3
   }
   ```

2. **Intermediate Collection** (similar to junction tables in SQL):
   ```javascript
   // Enrollments collection
   {
     "_id": ObjectId("enroll1"),
     "student_id": ObjectId("student1"),
     "course_id": ObjectId("course1"),
     "enrollment_date": ISODate("2023-01-15"),
     "grade": "A"
   }
   ```

**Querying Related Data:**

1. **Manual Lookup** (Application-side Join):
   ```javascript
   // Step 1: Find the order
   const order = db.orders.findOne({ order_number: "ORD-12345" });

   // Step 2: Use the customer_id to find the customer
   const customer = db.customers.findOne({ _id: order.customer_id });
   ```

2. **$lookup** (Aggregation Framework Join):
   ```javascript
   db.orders.aggregate([
     { $match: { order_number: "ORD-12345" } },
     { $lookup: {
         from: "customers",
         localField: "customer_id",
         foreignField: "_id",
         as: "customer_info"
     }},
     { $unwind: "$customer_info" }  // Flatten the array
   ])
   ```

3. **DBRef** (Database References):
   DBRef is a convention for representing references between documents, though it's generally not recommended over simple references.
   ```javascript
   {
     "_id": ObjectId("order1"),
     "customer": {
       "$ref": "customers",
       "$id": ObjectId("cust1"),
       "$db": "mydb"  // Optional, for cross-database references
     }
   }
   ```

**Relationship Design Considerations:**

- **Read vs. Write Frequency**: Embedded documents are better for read-heavy workloads
- **Data Size and Growth**: References are better for large or rapidly growing related data
- **Data Consistency**: Embedded documents ensure atomic updates
- **Query Patterns**: Design for the most common queries
- **Document Size Limit**: Remember the 16MB document size limit when embedding
- **Duplication Tolerance**: Consider whether your application can tolerate some data duplication

**Best Practices for References:**
- Keep document structures consistent
- Use meaningful field names for references (_id vs. customer_id)
- When using $lookup, create indexes on the join fields
- Consider caching frequently accessed related data
- Use transactions for operations spanning multiple collections (MongoDB 4.0+)

### 2. Advanced Indexing

Beyond basic indexes, MongoDB offers advanced indexing capabilities to optimize complex queries and enforce constraints.

**Compound Indexes:**
Indexes on multiple fields, with order affecting query optimization.

```javascript
// Create compound index on category and price
db.products.createIndex({ category: 1, price: -1 })
```

**Compound Index Query Optimization:**
- Supports queries on prefixes of the index fields
- Supports sort operations following the index order
- First field should be the most selective or most frequently queried

```javascript
// Fully uses the compound index
db.products.find({ category: "Electronics", price: { $gt: 100 } }).sort({ price: -1 })

// Uses only the category part of the index
db.products.find({ category: "Electronics" })

// Doesn't use the index (price without category)
db.products.find({ price: { $gt: 100 } })
```

**Multikey Indexes:**
Indexes on array fields that create separate index entries for each array element.

```javascript
// Create index on tags array
db.products.createIndex({ tags: 1 })

// Query using the multikey index
db.products.find({ tags: "wireless" })
```

**Multikey Compound Indexes:**
- At most one field in a compound index can be an array
- Used for queries that filter on both array and non-array fields

**Text Indexes:**
Specialized indexes for text search operations.

```javascript
// Create text index on multiple fields
db.products.createIndex({
  name: "text",
  description: "text"
}, {
  weights: {
    name: 10,
    description: 5
  },
  default_language: "english"
})

// Text search query
db.products.find({
  $text: {
    $search: "wireless headphones",
    $caseSensitive: false
  }
})

// Sort by text relevance score
db.products.find(
  { $text: { $search: "wireless headphones" } },
  { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } })
```

**Partial Indexes:**
Indexes that only include documents meeting specified criteria, reducing index size and improving performance.

```javascript
// Index only in-stock products
db.products.createIndex(
  { price: 1 },
  { partialFilterExpression: { in_stock: true } }
)

// Query using the partial index (must include filter condition)
db.products.find({ price: { $gt: 100 }, in_stock: true })
```

**TTL Indexes:**
Indexes that automatically remove documents after a specified period.

```javascript
// Create TTL index to expire documents after 1 hour
db.sessions.createIndex(
  { created_at: 1 },
  { expireAfterSeconds: 3600 }
)
```

**Unique Indexes:**
Indexes that enforce uniqueness constraints on the indexed fields.

```javascript
// Create unique index on email field
db.users.createIndex(
  { email: 1 },
  { unique: true }
)

// Create unique compound index
db.products.createIndex(
  { sku: 1, vendor_id: 1 },
  { unique: true }
)

// Create sparse unique index (only indexed documents must be unique)
db.users.createIndex(
  { twitter_handle: 1 },
  { unique: true, sparse: true }
)
```

**Wildcard Indexes:**
Indexes that can cover fields with dynamic or unknown names.

```javascript
// Index all fields within the attributes object
db.products.createIndex({ "attributes.$**": 1 })

// Index only specific patterns
db.data.createIndex(
  { "metrics.$**": 1 },
  { wildcardProjection: { "metrics.cpu": 1, "metrics.memory": 1 } }
)
```

**Index Intersection:**
MongoDB can use multiple indexes for a single query in some cases.

```javascript
// Two separate indexes
db.products.createIndex({ category: 1 })
db.products.createIndex({ price: 1 })

// Query that can use index intersection
db.products.find({ category: "Electronics", price: { $gt: 100 } })
```

**Covered Queries:**
Queries that can be satisfied entirely using the index, without examining documents.

```javascript
// Create index on fields needed for a query
db.users.createIndex({ age: 1, name: 1 })

// Covered query (projection includes only indexed fields)
db.users.find(
  { age: { $gt: 21 } },
  { _id: 0, name: 1, age: 1 }
)
```

**Indexing Best Practices:**

1. **Analyze Query Patterns**:
   - Use `explain()` to analyze query execution plans
   ```javascript
   db.products.find({ category: "Electronics" }).explain("executionStats")
   ```

2. **Monitor Index Usage**:
   ```javascript
   // Get index usage statistics
   db.collection.aggregate([
     { $indexStats: {} }
   ])
   ```

3. **Right-size Indexes**:
   - Use partial indexes for subsets of data
   - Consider dropping unused indexes
   - Index on fields with high cardinality

4. **Background Indexing**:
   ```javascript
   // Create index in the background (for production systems)
   db.products.createIndex(
     { name: 1 },
     { background: true }
   )
   ```

5. **Hidden Indexes**:
   ```javascript
   // Hide an index from query planner (for testing impact)
   db.products.hideIndex("name_1")

   // Unhide the index
   db.products.unhideIndex("name_1")
   ```

### 3. MapReduce

MapReduce is a programming model for processing large data sets, performing aggregation operations on MongoDB collections. While largely superseded by the Aggregation Framework in modern MongoDB versions, understanding MapReduce concepts is still valuable.

**Basic MapReduce Concepts:**

1. **Map Phase**: Transforms each document into a key-value pair
2. **Reduce Phase**: Combines values with the same key
3. **Finalize Phase** (optional): Final modifications to the results

**MapReduce Structure:**
```javascript
db.collection.mapReduce(
  map_function,     // Function that emits key-value pairs
  reduce_function,  // Function that combines values for each key
  {
    out: output,    // Output collection or options
    query: filter,  // Query to select input documents
    sort: sort,     // Sort specification
    limit: limit,   // Maximum number of documents
    finalize: finalize_function, // Optional final processing
    scope: scope    // Variables accessible in map/reduce functions
  }
)
```

**Simple MapReduce Example:**
Calculate the average price per category.

```javascript
// Map function - emits {category: price} pairs
var mapFunction = function() {
  emit(this.category, this.price);
};

// Reduce function - calculates average per category
var reduceFunction = function(key, values) {
  return Array.sum(values) / values.length;
};

// Execute MapReduce
db.products.mapReduce(
  mapFunction,
  reduceFunction,
  {
    out: "category_averages",
    query: { price: { $gt: 10 } }
  }
)
```

**Complex MapReduce Example:**
Calculate sales statistics by month and category.

```javascript
// Map function
var mapFunction = function() {
  var month = this.date.getMonth() + 1;
  var year = this.date.getFullYear();
  var key = year + "-" + month + ":" + this.category;

  emit(key, {
    count: 1,
    total: this.price * this.quantity,
    avg: this.price,
    min: this.price,
    max: this.price
  });
};

// Reduce function
var reduceFunction = function(key, values) {
  var reducedValue = {
    count: 0,
    total: 0,
    avg: 0,
    min: Infinity,
    max: -Infinity
  };

  values.forEach(function(value) {
    reducedValue.count += value.count;
    reducedValue.total += value.total;
    reducedValue.min = Math.min(reducedValue.min, value.min);
    reducedValue.max = Math.max(reducedValue.max, value.max);
  });

  return reducedValue;
};

// Finalize function
var finalizeFunction = function(key, reducedValue) {
  reducedValue.avg = reducedValue.total / reducedValue.count;
  return reducedValue;
};

// Execute MapReduce
db.sales.mapReduce(
  mapFunction,
  reduceFunction,
  {
    out: "monthly_category_stats",
    finalize: finalizeFunction
  }
)
```

**Map-Reduce vs. Aggregation Framework:**

While MapReduce is more flexible for complex operations, the Aggregation Framework is generally preferred due to:
- Better performance
- More readable syntax
- More optimized execution path
- Native support for many operations

**Aggregation Framework Equivalent:**
```javascript
db.products.aggregate([
  { $match: { price: { $gt: 10 } } },
  { $group: {
      _id: "$category",
      averagePrice: { $avg: "$price" }
  }},
  { $out: "category_averages" }
])
```

**When to Use MapReduce:**
- When operations are too complex for the Aggregation Framework
- When custom JavaScript logic is required
- For one-time data transformations
- For backward compatibility with older applications

**MapReduce Limitations:**
- Performance is generally slower than the Aggregation Framework
- Limited to JavaScript execution environment
- Cannot be used with sharded collections as output
- Map and reduce functions must be idempotent
- Memory limitations for very large datasets

### 4. Text Search and Regular Expressions

MongoDB provides powerful text search capabilities through text indexes and regular expression support.

**Text Indexes and Search:**

1. **Creating a Text Index**:
   ```javascript
   // Single field text index
   db.articles.createIndex({ content: "text" })

   // Multiple field text index
   db.articles.createIndex({
     title: "text",
     content: "text",
     tags: "text"
   })

   // Weighted text index
   db.articles.createIndex({
     title: "text",
     content: "text"
   }, {
     weights: {
       title: 10,  // Higher weight for title matches
       content: 5
     },
     name: "TextIndex"
   })
   ```

2. **Basic Text Search**:
   ```javascript
   // Search for documents containing "mongodb" or "database"
   db.articles.find({
     $text: { $search: "mongodb database" }
   })
   ```

3. **Phrase Search**:
   ```javascript
   // Search for the exact phrase "mongodb database"
   db.articles.find({
     $text: { $search: "\"mongodb database\"" }
   })
   ```

4. **Term Exclusion**:
   ```javascript
   // Search for "mongodb" but not "sql"
   db.articles.find({
     $text: { $search: "mongodb -sql" }
   })
   ```

5. **Language Support**:
   ```javascript
   // Create index with language specification
   db.articles.createIndex({
     content: "text"
   }, {
     default_language: "spanish"
   })

   // Search with specific language
   db.articles.find({
     $text: {
       $search: "base de datos",
       $language: "spanish"
     }
   })
   ```

6. **Relevance Sorting**:
   ```javascript
   // Search and sort by relevance score
   db.articles.find(
     { $text: { $search: "mongodb database" } },
     { score: { $meta: "textScore" } }
   ).sort({ score: { $meta: "textScore" } })
   ```

7. **Text Search in Aggregation Pipeline**:
   ```javascript
   db.articles.aggregate([
     { $match: { $text: { $search: "mongodb" } } },
     { $project: {
         title: 1,
         score: { $meta: "textScore" }
     }},
     { $match: { score: { $gt: 1.0 } } },
     { $sort: { score: -1 } }
   ])
   ```

**Regular Expression Queries:**

1. **Basic Regular Expression Query**:
   ```javascript
   // Find documents where name starts with "A"
   db.users.find({ name: /^A/ })

   // Find documents where name ends with "son"
   db.users.find({ name: /son$/ })

   // Find documents where name contains "john" (case insensitive)
   db.users.find({ name: /john/i })
   ```

2. **Regex Operator**:
   ```javascript
   // Equivalent to the above using $regex operator
   db.users.find({ name: { $regex: "john", $options: "i" } })

   // Multiple regex options
   db.users.find({
     name: {
       $regex: "^a",
       $options: "im"  // i: case insensitive, m: multiline
     }
   })
   ```

3. **Regex with Anchoring**:
   ```javascript
   // Exact match (^ start, $ end)
   db.products.find({ sku: { $regex: "^ABC123$" } })

   // Starts with
   db.products.find({ sku: { $regex: "^ABC" } })

   // Ends with
   db.products.find({ sku: { $regex: "123$" } })
   ```

4. **Pattern Matching**:
   ```javascript
   // Match phone numbers in format xxx-xxx-xxxx
   db.contacts.find({
     phone: { $regex: "^\\d{3}-\\d{3}-\\d{4}$" }
   })

   // Match email addresses
   db.users.find({
     email: { $regex: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" }
   })
   ```

5. **Regex in Aggregation Pipeline**:
   ```javascript
   db.products.aggregate([
     { $match: { name: /^A/ } },
     { $group: {
         _id: { $substrCP: ["$name", 0, 1] },
         count: { $sum: 1 }
     }}
   ])
   ```

**Performance Considerations:**

1. **Text Search Performance**:
   - Text indexes can be large (up to 100% of data size)
   - Text search has higher overhead than exact field matching
   - Compound text indexes can improve performance for filtered searches
   - Limit the number of fields in text indexes to those needed

2. **Regex Performance**:
   - Anchored regex patterns (^) can use indexes efficiently
   - Unanchored patterns typically require collection scans
   - Case-insensitive regex queries (i option) may be slower
   - Complex regex patterns increase CPU usage

3. **Index Usage with Regex**:
   ```javascript
   // Create index
   db.products.createIndex({ sku: 1 })

   // This uses the index (anchored to start)
   db.products.find({ sku: /^ABC/ })

   // This likely won't use the index efficiently
   db.products.find({ sku: /ABC/ })
   ```

4. **Text Search vs. Regex**:
   - Text search is better for natural language and relevance ranking
   - Regex is better for pattern matching and precise control
   - Text search handles stemming, stop words, and language specific features
   - Regex allows for more specific matching patterns

**Advanced Text Analysis:**

1. **Wildcard Text Index**:
   ```javascript
   // Index all string fields for text search
   db.collection.createIndex({ "$**": "text" })
   ```

2. **Combining Text Search with Other Conditions**:
   ```javascript
   db.articles.find({
     $text: { $search: "mongodb" },
     category: "Database",
     published_date: { $gt: ISODate("2023-01-01") }
   })
   ```

3. **Custom Text Analysis**:
   For more advanced text analysis beyond MongoDB's capabilities, consider:
   - Performing analysis in the application layer
   - Using a dedicated search engine like Elasticsearch
   - Implementing a hybrid approach with MongoDB for storage and specialized tools for search

### 5. MongoDB Atlas

MongoDB Atlas is the cloud database service from MongoDB, providing a fully managed database-as-a-service (DBaaS) solution across multiple cloud providers.

**Key Features of MongoDB Atlas:**

1. **Deployment Options**:
   - Multi-cloud deployment (AWS, Azure, GCP)
   - Global clusters across regions
   - Serverless instances (pay-per-use)
   - Dedicated clusters (various tiers)
   - Multi-tenant shared clusters (free tier available)

2. **Automated Operations**:
   - Automated backups and point-in-time recovery
   - Auto-scaling based on usage
   - Automated patching and upgrades
   - Self-healing infrastructure
   - Performance advice and optimization

3. **Security Features**:
   - End-to-end encryption
   - Network isolation (VPC peering)
   - IP access lists
   - Database auditing
   - Customer-managed encryption keys
   - LDAP and database user authentication

4. **Monitoring and Alerting**:
   - Real-time performance monitoring
   - Custom alert definitions
   - Performance advisor
   - Query profiler
   - Logs viewer

5. **Data Integration**:
   - Atlas Data Lake for analyzing data in S3
   - Charts for visualization
   - Realm for mobile and edge computing
   - Online archive for cold data
   - Data Federation for unified access

**Setting Up MongoDB Atlas:**

1. **Creating an Atlas Account**:
   - Sign up at cloud.mongodb.com
   - Verify email address
   - Create organization and project

2. **Deploying a Cluster**:
   - Select cloud provider and region
   - Choose cluster tier
   - Configure additional settings (backup, version, etc.)
   - Create cluster (deployment takes a few minutes)

3. **Configuring Access**:
   - Set up database users
   - Configure IP access lists
   - Enable network peering if needed

4. **Connecting to Atlas**:
   - Get connection string from Atlas UI
   - Use in application code or MongoDB tools
   ```javascript
   // Example connection string
   mongodb+srv://username:password@cluster0.mongodb.net/mydb?retryWrites=true&w=majority
   ```

**Working with Atlas Services:**

1. **Atlas Search**:
   Advanced full-text search capabilities using Lucene.
   ```javascript
   // Create search index
   {
     "mappings": {
       "dynamic": false,
       "fields": {
         "description": {
           "type": "string"
         },
         "title": {
           "type": "string"
         }
       }
     }
   }

   // Use search index
   db.products.aggregate([
     {
       $search: {
         "text": {
           "query": "wireless headphones",
           "path": ["title", "description"]
         }
       }
     }
   ])
   ```

2. **Atlas Data Lake**:
   Query data stored in S3 without loading into MongoDB.
   ```javascript
   // Query data in S3
   db.myS3Collection.find({ category: "Electronics" })
   ```

3. **Atlas Charts**:
   Create visualizations directly from MongoDB data.
   - Connect to Atlas cluster
   - Define data sources
   - Create charts and dashboards
   - Share with team members

4. **Online Archive**:
   Automatically archive infrequently accessed data to cost-effective storage.
   ```javascript
   // Archive configuration
   {
     "archiveAfterDays": 30,
     "partitionFields": [
       {
         "fieldName": "created_at",
         "order": 0
       }
     ]
   }
   ```

5. **Atlas Realm**:
   Backend app services including authentication, functions, and triggers.
   ```javascript
   // Realm Function Example
   exports = function(arg) {
     const collection = context.services.get("mongodb-atlas").db("mydb").collection("products");
     return collection.find({ category: "Electronics" }).limit(10).toArray();
   };
   ```

**Migrating to Atlas:**

1. **Migration Tools**:
   - Atlas Live Migration Service
   - mongodump/mongorestore
   - mongoexport/mongoimport
   - Database Migration Service (AWS/GCP)

2. **Migration Strategy**:
   - Assess data size and access patterns
   - Choose appropriate cluster tier
   - Set up networking (VPC peering if needed)
   - Create migration plan (downtime requirements)
   - Test migration in staging environment
   - Schedule and execute production migration

3. **Post-Migration Tasks**:
   - Verify data integrity
   - Update connection strings in applications
   - Configure monitoring and alerts
   - Optimize performance (indexes, shard keys)
   - Set up backup and DR strategies

**Atlas Best Practices:**

1. **Cost Optimization**:
   - Right-size clusters based on workload
   - Use auto-scaling appropriately
   - Implement data tiering (online archive)
   - Monitor usage and adjust resources

2. **Performance Optimization**:
   - Follow Atlas Performance Advisor recommendations
   - Implement suggested indexes
   - Review slow queries regularly
   - Use appropriate read/write concerns

3. **Security**:
   - Implement principle of least privilege for users
   - Regularly rotate credentials
   - Use VPC peering for private connectivity
   - Enable audit logging for sensitive data

4. **Monitoring and Management**:
   - Set up alerts for critical metrics
   - Create custom dashboards for key indicators
   - Regularly review performance metrics
   - Schedule maintenance during low-usage periods

### 6. MongoDB-Python Integration

Python is one of the most popular languages for working with MongoDB, offering several libraries for database interaction.

**PyMongo: The Official MongoDB Driver**

1. **Installation**:
   ```bash
   pip install pymongo
   ```

2. **Establishing a Connection**:
   ```python
   from pymongo import MongoClient

   # Connect to a local MongoDB instance
   client = MongoClient('mongodb://localhost:27017/')

   # Connect to MongoDB Atlas
   client = MongoClient('mongodb+srv://username:password@cluster0.mongodb.net/mydb?retryWrites=true&w=majority')

   # Access a database
   db = client['my_database']

   # Access a collection
   collection = db['my_collection']
   ```

3. **CRUD Operations**:

   **Create (Insert)**:
   ```python
   # Insert a single document
   result = collection.insert_one({
       'name': 'Wireless Headphones',
       'price': 99.99,
       'category': 'Electronics',
       'in_stock': True
   })
   print(f"Inserted document ID: {result.inserted_id}")

   # Insert multiple documents
   items = [
       {'name': 'Smart Watch', 'price': 199.99, 'category': 'Electronics'},
       {'name': 'Bluetooth Speaker', 'price': 79.99, 'category': 'Electronics'}
   ]
   result = collection.insert_many(items)
   print(f"Inserted document IDs: {result.inserted_ids}")
   ```

   **Read (Query)**:
   ```python
   # Find a single document
   document = collection.find_one({'name': 'Wireless Headphones'})
   print(document)

   # Find multiple documents
   cursor = collection.find({'category': 'Electronics'})
   for document in cursor:
       print(document)

   # Query with operators
   cursor = collection.find({'price': {'$gt': 100}})
   for document in cursor:
       print(document)

   # Sort, limit, and skip
   cursor = collection.find().sort('price', -1).limit(5).skip(10)
   for document in cursor:
       print(document)

   # Count documents
   count = collection.count_documents({'category': 'Electronics'})
   print(f"Number of electronics products: {count}")
   ```

   **Update**:
   ```python
   # Update a single document
   result = collection.update_one(
       {'name': 'Wireless Headphones'},
       {'$set': {'price': 89.99, 'on_sale': True}}
   )
   print(f"Modified {result.modified_count} document(s)")

   # Update multiple documents
   result = collection.update_many(
       {'category': 'Electronics'},
       {'$inc': {'price': -10}}
   )
   print(f"Modified {result.modified_count} document(s)")

   # Find and modify
   updated_doc = collection.find_one_and_update(
       {'name': 'Smart Watch'},
       {'$set': {'featured': True}},
       return_document=True  # Return the document after update
   )
   print(updated_doc)
   ```

   **Delete**:
   ```python
   # Delete a single document
   result = collection.delete_one({'name': 'Discontinued Product'})
   print(f"Deleted {result.deleted_count} document(s)")

   # Delete multiple documents
   result = collection.delete_many({'in_stock': False})
   print(f"Deleted {result.deleted_count} document(s)")
   ```

4. **Querying with Advanced Operators**:
   ```python
   # Comparison operators
   collection.find({'price': {'$lt': 50}})  # Less than
   collection.find({'price': {'$lte': 50}})  # Less than or equal
   collection.find({'price': {'$gt': 100}})  # Greater than
   collection.find({'price': {'$gte': 100}})  # Greater than or equal
   collection.find({'price': {'$ne': 99.99}})  # Not equal
   collection.find({'category': {'$in': ['Electronics', 'Accessories']}})  # In array

   # Logical operators
   collection.find({
       '$and': [
           {'price': {'$gt': 50}},
           {'category': 'Electronics'}
       ]
   })

   collection.find({
       '$or': [
           {'price': {'$lt': 50}},
           {'category': 'Accessories'}
       ]
   })

   # Element operators
   collection.find({'optional_field': {'$exists': True}})  # Field exists
   collection.find({'price': {'$type': 'number'}})  # Field type

   # Array operators
   collection.find({'tags': {'$all': ['wireless', 'bluetooth']}})  # Contains all
   collection.find({'tags': {'$size': 3}})  # Array size
   collection.find({'tags.0': 'featured'})  # First element equals
   ```

5. **Aggregation Pipeline**:
   ```python
   # Simple aggregation
   pipeline = [
       {'$match': {'category': 'Electronics'}},
       {'$group': {
           '_id': '$brand',
           'avg_price': {'$avg': '$price'},
           'count': {'$sum': 1}
       }},
       {'$sort': {'avg_price': -1}}
   ]

   results = collection.aggregate(pipeline)
   for result in results:
       print(result)

   # More complex example with multiple stages
   pipeline = [
       {'$match': {'order_date': {'$gte': datetime(2023, 1, 1)}}},
       {'$unwind': '$items'},
       {'$group': {
           '_id': '$items.product_id',
           'total_quantity': {'$sum': '$items.quantity'},
           'revenue': {'$sum': {'$multiply': ['$items.price', '$items.quantity']}}
       }},
       {'$lookup': {
           'from': 'products',
           'localField': '_id',
           'foreignField': '_id',
           'as': 'product_info'
       }},
       {'$unwind': '$product_info'},
       {'$project': {
           'product_name': '$product_info.name',
           'total_quantity': 1,
           'revenue': 1
       }},
       {'$sort': {'revenue': -1}},
       {'$limit': 10}
   ]

   top_products = list(collection.aggregate(pipeline))
   for product in top_products:
       print(f"{product['product_name']}: Quantity: {product['total_quantity']}, Revenue: ${product['revenue']:.2f}")
   ```

6. **Indexes**:
   ```python
   # Create index
   collection.create_index('name')

   # Create compound index
   collection.create_index([('category', 1), ('price', -1)])

   # Create unique index
   collection.create_index('sku', unique=True)

   # List indexes
   for index in collection.list_indexes():
       print(index)

   # Drop index
   collection.drop_index('name_1')
   ```

7. **Transactions**:
   ```python
   # Start a session
   with client.start_session() as session:
       # Start a transaction
       with session.start_transaction():
           # Perform operations
           db.accounts.update_one(
               {'account_id': 'A123', 'balance': {'$gte': 100}},
               {'$inc': {'balance': -100}},
               session=session
           )

           db.accounts.update_one(
               {'account_id': 'B456'},
               {'$inc': {'balance': 100}},
               session=session
           )

           # The transaction will be automatically committed
           # If an error occurs, it will be automatically aborted
   ```

8. **Error Handling**:
   ```python
   from pymongo.errors import ConnectionFailure, OperationFailure, DuplicateKeyError

   try:
       # Try to insert a document with a duplicate key
       collection.insert_one({'_id': 'existing_id', 'name': 'Test'})
   except DuplicateKeyError:
       print("Document with this ID already exists")
   except ConnectionFailure:
       print("Failed to connect to MongoDB")
   except OperationFailure as e:
       print(f"Operation failed: {e}")
   except Exception as e:
       print(f"An error occurred: {e}")
   ```

4. **Querying with Advanced Operators**:
   ```python
   # Comparison operators
   collection.find({'price': {'$lt': 50}})  # Less than
   collection.find({'price': {'$lte': 50}})  # Less than or equal
   collection.find({'price': {'$gt': 100}})  # Greater than
   collection.find({'price': {'$gte': 100}})  # Greater than or equal
   collection.find({'price': {'$ne': 99.99}})  # Not equal
   collection.find({'category': {'$in': ['Electronics', 'Accessories']}})  # In array

   # Logical operators
   collection.find({
       '$and': [
           {'price': {'$gt': 50}},
           {'category': 'Electronics'}
       ]
   })

   collection.find({
       '$or': [
           {'price': {'$lt': 50}},
           {'category': 'Accessories'}
       ]
   })

   # Element operators
   collection.find({'optional_field': {'$exists': True}})  # Field exists
   collection.find({'price': {'$type': 'number'}})  # Field type

   # Array operators
   collection.find({'tags': {'$all': ['wireless', 'bluetooth']}})  # Contains all
   collection.find({'tags': {'$size': 3}})  # Array size
   collection.find({'tags.0': 'featured'})  # First element equals
   ```

5. **Aggregation Pipeline**:
   ```python
   # Simple aggregation
   pipeline = [
       {'$match': {'category': 'Electronics'}},
       {'$group': {
           '_id': '$brand',
           'avg_price': {'$avg': '$price'},
           'count': {'$sum': 1}
       }},
       {'$sort': {'avg_price': -1}}
   ]

   results = collection.aggregate(pipeline)
   for result in results:
       print(result)

   # More complex example with multiple stages
   pipeline = [
       {'$match': {'order_date': {'$gte': datetime(2023, 1, 1)}}},
       {'$unwind': '$items'},
       {'$group': {
           '_id': '$items.product_id',
           'total_quantity': {'$sum': '$items.quantity'},
           'revenue': {'$sum': {'$multiply': ['$items.price', '$items.quantity']}}
       }},
       {'$lookup': {
           'from': 'products',
           'localField': '_id',
           'foreignField': '_id',
           'as': 'product_info'
       }},
       {'$unwind': '$product_info'},
       {'$project': {
           'product_name': '$product_info.name',
           'total_quantity': 1,
           'revenue': 1
       }},
       {'$sort': {'revenue': -1}},
       {'$limit': 10}
   ]

   top_products = list(collection.aggregate(pipeline))
   for product in top_products:
       print(f"{product['product_name']}: Quantity: {product['total_quantity']}, Revenue: ${product['revenue']:.2f}")
   ```

6. **Indexes**:
   ```python
   # Create index
   collection.create_index('name')

   # Create compound index
   collection.create_index([('category', 1), ('price', -1)])

   # Create unique index
   collection.create_index('sku', unique=True)

   # List indexes
   for index in collection.list_indexes():
       print(index)

   # Drop index
   collection.drop_index('name_1')
   ```

7. **Transactions**:
   ```python
   # Start a session
   with client.start_session() as session:
       # Start a transaction
       with session.start_transaction():
           # Perform operations
           db.accounts.update_one(
               {'account_id': 'A123', 'balance': {'$gte': 100}},
               {'$inc': {'balance': -100}},
               session=session
           )

           db.accounts.update_one(
               {'account_id': 'B456'},
               {'$inc': {'balance': 100}},
               session=session
           )

           # The transaction will be automatically committed
           # If an error occurs, it will be automatically aborted
   ```

8. **Error Handling**:
   ```python
   from pymongo.errors import ConnectionFailure, OperationFailure, DuplicateKeyError

   try:
       # Try to insert a document with a duplicate key
       collection.insert_one({'_id': 'existing_id', 'name': 'Test'})
   except DuplicateKeyError:
       print("Document with this ID already exists")
   except ConnectionFailure:
       print("Failed to connect to MongoDB")
   except OperationFailure as e:
       print(f"Operation failed: {e}")
   except Exception as e:
       print(f"An error occurred: {e}")
   ```

**MongoDB Object-Document Mappers (ODMs)**

In addition to PyMongo, there are ODMs that provide a higher-level, more Pythonic interface with schema validation, middleware support, and more intuitive operations:

1. **MongoEngine**:

   Installation:
   ```bash
   pip install mongoengine
   ```

   Usage:
   ```python
   from mongoengine import connect, Document, StringField, FloatField, ListField, BooleanField, ReferenceField

   # Connect to database
   connect('my_database')

   # Define document schema
   class Product(Document):
       name = StringField(required=True, max_length=200)
       price = FloatField(required=True)
       category = StringField(required=True)
       tags = ListField(StringField(max_length=50))
       in_stock = BooleanField(default=True)

   # Create a document
   product = Product(
       name='Wireless Headphones',
       price=99.99,
       category='Electronics',
       tags=['wireless', 'audio']
   )
   product.save()

   # Retrieve documents
   products = Product.objects(category='Electronics')
   for product in products:
       print(f"{product.name}: ${product.price}")

   # Update documents
   Product.objects(name='Wireless Headphones').update_one(
       set__price=89.99,
       set__in_stock=True
   )

   # Delete documents
   Product.objects(in_stock=False).delete()
   ```

2. **Motor** (Asynchronous MongoDB Driver):

   Installation:
   ```bash
   pip install motor
   ```

   Usage:
   ```python
   import asyncio
   from motor.motor_asyncio import AsyncIOMotorClient

   async def main():
       # Connect to MongoDB
       client = AsyncIOMotorClient('mongodb://localhost:27017/')
       db = client.test_database
       collection = db.test_collection

       # Insert a document
       document = {'name': 'Async Example', 'value': 42}
       result = await collection.insert_one(document)
       print(f"Inserted document with ID: {result.inserted_id}")

       # Find a document
       document = await collection.find_one({'name': 'Async Example'})
       print(f"Found document: {document}")

       # Update a document
       result = await collection.update_one(
           {'name': 'Async Example'},
           {'$set': {'value': 43}}
       )
       print(f"Modified {result.modified_count} document(s)")

       # Find documents with cursor
       cursor = collection.find({'value': {'$gt': 40}})
       async for document in cursor:
           print(document)

   # Run the async function
   asyncio.run(main())
   ```

**Best Practices for MongoDB with Python**:

1. **Connection Management**:
   - Reuse the MongoClient instance (it's thread-safe)
   - Configure connection pooling appropriately
   - Implement proper error handling and retry logic
   - Set appropriate timeouts for operations
   - Use connection strings with multiple hosts for replica sets

2. **Performance Optimization**:
   - Use projections to retrieve only needed fields
   - Create appropriate indexes for query patterns
   - Batch operations when possible (insert_many, update_many)
   - Use aggregation pipeline over multiple queries
   - Take advantage of cursor batching for large result sets
   - Consider read preferences for read-heavy workloads

3. **Data Validation**:
   - Implement schema validation using MongoDB or ODMs
   - Perform validation before inserting or updating
   - Handle validation errors appropriately
   - Consider JSON Schema validation in MongoDB 4.0+
   - Use middleware in ODMs for consistent transformations

4. **Security**:
   - Store connection strings securely (environment variables, secrets manager)
   - Use TLS/SSL for connections
   - Implement proper authentication and authorization
   - Sanitize user input to prevent injection attacks
   - Follow principle of least privilege for database users
   - Audit sensitive operations

5. **Testing**:
   - Use mocks or in-memory MongoDB for unit tests
   - Create isolated test databases for integration tests
   - Clean up test data after test runs
   - Use fixtures for common test data
   - Test error conditions and edge cases thoroughly

6. **Error Handling**:
   - Catch and handle specific MongoDB exceptions
   - Implement proper logging for database operations
   - Create retry mechanisms for transient failures
   - Use exponential backoff for retries
   - Implement circuit breakers for dependent services

7. **Deployment and Operations**:
   - Implement health checks for database connections
   - Monitor database usage and performance metrics
   - Use connection pooling appropriate to the application scale
   - Consider write concerns based on data importance
   - Implement database migration strategies

## Unit-V: Backup, Recovery, Disaster Planning, and Emerging Trends

This unit focuses on operational aspects of unstructured databases in production environments, including backup strategies, disaster recovery planning, and integration with other systems, as well as emerging trends in the field.

### 1. Backup and Recovery Procedures

Implementing reliable backup and recovery procedures is critical for ensuring data durability and availability in MongoDB deployments.

**Types of MongoDB Backups:**

1. **Logical Backups** (Data Dumps):
   - Export data in a format that can be reimported
   - Tools: mongodump, mongoexport
   - Advantages: Selective backups, human-readable formats
   - Disadvantages: Slower for large databases, higher resource usage

2. **Physical Backups** (File System Snapshots):
   - Copy the underlying data files directly
   - Methods: File system snapshots, disk snapshots, MongoDB Atlas backups
   - Advantages: Faster, lower impact on running system
   - Disadvantages: Less flexibility, requires filesystem support

3. **Continuous Backups**:
   - Capture changes over time via oplog
   - Enables point-in-time recovery
   - Methods: Oplog tailing, Atlas continuous backup
   - Advantages: Minimal data loss, flexible recovery points
   - Disadvantages: More complex, requires replica sets

**Logical Backup Tools:**

1. **mongodump**:
   ```bash
   # Dump entire database
   mongodump --uri="mongodb://username:password@localhost:27017/my_database" --out=/backup/mongodb/full_backup

   # Dump specific collection
   mongodump --uri="mongodb://localhost:27017/my_database" --collection=products --out=/backup/mongodb/products_backup

   # Dump with query filter
   mongodump --uri="mongodb://localhost:27017/my_database" --collection=orders --query='{"order_date":{"$gt":{"$date":"2023-01-01T00:00:00Z"}}}' --out=/backup/mongodb/recent_orders

   # Compressed dump
   mongodump --uri="mongodb://localhost:27017/my_database" --gzip --out=/backup/mongodb/compressed_backup
   ```

2. **mongoexport**:
   ```bash
   # Export collection to JSON
   mongoexport --uri="mongodb://localhost:27017/my_database" --collection=products --out=products.json

   # Export to CSV with selected fields
   mongoexport --uri="mongodb://localhost:27017/my_database" --collection=customers --type=csv --fields=name,email,address --out=customers.csv

   # Export with query and sort
   mongoexport --uri="mongodb://localhost:27017/my_database" --collection=orders --query='{"status":"completed"}' --sort='{"order_date":-1}' --out=completed_orders.json
   ```

**Physical Backup Methods:**

1. **File System Snapshots**:
   ```bash
   # Stop writes to ensure consistency (for non-journaled instances)
   mongo admin --eval "db.fsyncLock()"

   # Take snapshot (example for LVM)
   lvcreate -L 10G -s -n mongodb_backup /dev/vg0/mongodb_data

   # Unlock database
   mongo admin --eval "db.fsyncUnlock()"

   # Mount snapshot and copy files
   mkdir /mnt/snapshot
   mount /dev/vg0/mongodb_backup /mnt/snapshot
   cp -r /mnt/snapshot/mongodb/* /backup/mongodb/files/

   # Clean up
   umount /mnt/snapshot
   lvremove /dev/vg0/mongodb_backup
   ```

2. **MongoDB Atlas Backups**:
   - Automated continuous backup with point-in-time recovery
   - On-demand snapshots via Atlas UI or API
   - Configurable backup retention policies
   - Cross-region backup for disaster recovery

**Recovery Procedures:**

1. **Logical Recovery**:
   ```bash
   # Restore entire database
   mongorestore --uri="mongodb://localhost:27017/" --drop /backup/mongodb/full_backup

   # Restore specific collection
   mongorestore --uri="mongodb://localhost:27017/my_database" --collection=products --drop /backup/mongodb/products_backup/my_database/products.bson

   # Restore with different name/location
   mongorestore --uri="mongodb://localhost:27017/recovery_db" --nsFrom="my_database.*" --nsTo="recovery_db.*" /backup/mongodb/full_backup
   ```

2. **Import Data**:
   ```bash
   # Import JSON to collection
   mongoimport --uri="mongodb://localhost:27017/my_database" --collection=products --file=products.json

   # Import CSV with headers
   mongoimport --uri="mongodb://localhost:27017/my_database" --collection=customers --type=csv --headerline --file=customers.csv
   ```

3. **Point-in-Time Recovery**:
   - Restore full backup
   - Apply oplog entries up to the desired recovery point
   - In Atlas, select the exact timestamp for restoration

**Backup Strategy Best Practices:**

1. **Backup Schedule**:
   - Determine Recovery Point Objective (RPO)
   - Full backups at regular intervals (daily, weekly)
   - Incremental backups between full backups
   - Consider workload patterns for minimal impact

2. **Backup Validation**:
   - Regularly test backups by performing test restores
   - Verify data integrity after restore
   - Document restore procedures and test them

3. **Backup Storage**:
   - Store backups on separate storage systems
   - Implement offsite backup copies
   - Consider encryption for sensitive data
   - Implement appropriate retention policies

4. **Monitoring and Alerting**:
   - Monitor backup job completion
   - Alert on backup failures
   - Track backup sizes and growth trends
   - Regularly audit backup configurations

5. **Documentation**:
   - Maintain detailed backup configuration documentation
   - Create step-by-step recovery procedures
   - Document testing and validation results
   - Train team members on recovery procedures

**Automating Backup Workflows:**

1. **Backup Scripting**:
   ```bash
   #!/bin/bash
   # MongoDB backup script

   # Configuration
   BACKUP_DIR="/backup/mongodb/$(date +\%Y-\%m-\%d)"
   MONGO_URI="mongodb://username:password@localhost:27017/admin"
   LOG_FILE="/var/log/mongodb/backup-$(date +\%Y-\%m-\%d).log"

   # Create backup directory
   mkdir -p $BACKUP_DIR

   # Perform backup
   echo "Starting backup at $(date)" >> $LOG_FILE
   mongodump --uri=$MONGO_URI --out=$BACKUP_DIR --gzip >> $LOG_FILE 2>&1

   # Check result
   if [ $? -eq 0 ]; then
       echo "Backup completed successfully at $(date)" >> $LOG_FILE
       # Archive and compress
       tar -czf $BACKUP_DIR.tar.gz $BACKUP_DIR
       rm -rf $BACKUP_DIR
   else
       echo "Backup failed at $(date)" >> $LOG_FILE
       # Send alert
       mail -s "MongoDB Backup Failed" admin@example.com < $LOG_FILE
   fi

   # Cleanup old backups (keep last 7 days)
   find /backup/mongodb/ -name "*.tar.gz" -type f -mtime +7 -delete
   ```

2. **Cloud Integration**:
   - Upload backups to cloud storage (S3, Azure Blob, GCP)
   - Use cloud provider lifecycle policies for retention
   - Implement cross-region replication for redundancy

3. **Monitoring Integration**:
   - Integrate backup status with monitoring systems
   - Create dashboards for backup metrics
   - Set up notifications for backup issues

### 2. Disaster Recovery Planning

Disaster Recovery (DR) planning ensures that MongoDB data and services can be restored after a significant disruptive event, whether it's hardware failure, data corruption, or a regional disaster.

**Disaster Recovery Concepts:**

1. **Recovery Time Objective (RTO)**:
   - Maximum acceptable time to restore service after a disaster
   - Influences infrastructure design and failover mechanisms
   - Typically measured in minutes or hours
   - Business-critical applications often require RTOs of minutes or less
   - Determines the investment needed in standby systems and automation

2. **Recovery Point Objective (RPO)**:
   - Maximum acceptable data loss measured in time
   - Affects replication strategy and backup frequency
   - Can range from zero (no data loss) to hours or days
   - Drives requirements for synchronous vs. asynchronous replication
   - Often tied to the business value of the data

3. **Disaster Recovery Tiers**:
   - **Tier 0**: Backup and restore (highest RPO/RTO)
     - Simple backup strategy with manual restore
     - RPO: Hours to days, RTO: Hours to days
     - Lowest cost but highest business risk

   - **Tier 1**: Cold standby (pre-configured but inactive)
     - Infrastructure is ready but not running
     - Must be started and data restored before use
     - RPO: Hours, RTO: Hours
     - Lower cost with moderate recovery time

   - **Tier 2**: Warm standby (active but not serving traffic)
     - Systems running but not actively serving
     - Regular data updates from production
     - RPO: Minutes to hours, RTO: Minutes to hours
     - Balance of cost vs. recovery time

   - **Tier 3**: Hot standby (active and ready for immediate failover)
     - Fully operational standby environment
     - Continuous data replication
     - RPO: Seconds to minutes, RTO: Minutes
     - Higher cost with fast recovery

   - **Tier 4**: Active-active (multiple live sites, lowest RPO/RTO)
     - Multiple active sites serving traffic
     - Synchronized data across sites
     - RPO: Near zero, RTO: Seconds to minutes
     - Highest cost but minimal business disruption

**MongoDB Disaster Recovery Strategies:**

1. **Replica Sets** (Basic DR):
   - Distribute replica set members across failure domains
   - Automatic failover to secondary nodes
   - Typical RPO: Near zero (if writes are acknowledged with w:majority)
   - Typical RTO: Seconds to minutes (automatic failover)

   ```javascript
   // Configure replica set with members in different locations
   rs.initiate({
     _id: "rs0",
     members: [
       { _id: 0, host: "mongodb-primary:27017", priority: 2 },
       { _id: 1, host: "mongodb-secondary-dc1:27017", priority: 1 },
       { _id: 2, host: "mongodb-secondary-dc2:27017", priority: 0, slaveDelay: 3600 }  // Delayed secondary for protection against logical errors
     ]
   })
   ```

2. **Sharded Clusters**:
   - Distribute shards across data centers
   - Replicate config servers across locations
   - Multiple mongos router instances for availability
   - Typical RPO: Near zero
   - Typical RTO: Minutes (some manual intervention may be required)

3. **Cross-Region Deployments**:
   - Deploy replica sets across multiple geographic regions
   - Configure appropriate write and read concerns
   - Use delayed secondaries for protection against logical errors
   - Typical RPO: Near zero to seconds
   - Typical RTO: Minutes to hours (depending on configuration)

4. **Backup-Based Recovery**:
   - Regular backups stored offsite or in different regions
   - Point-in-time recovery capabilities
   - Typical RPO: Hours (depending on backup frequency)
   - Typical RTO: Hours to days (manual restore required)

**Disaster Recovery Testing:**

1. **Regular Testing Methods**:
   - Table-top exercises (scenario walkthrough)
   - Controlled failover testing
   - Full DR simulation
   - Backup restore testing

2. **Testing Schedule**:
   - Perform DR tests at regular intervals
   - Update DR procedures after infrastructure changes
   - Include team training in DR test plans
   - Document test results and improvement areas

3. **Test Automation**:
   - Automate failover testing where possible
   - Use "chaos engineering" approaches to test resilience
   - Build testing into CI/CD pipelines

**DR Plan Documentation:**

1. **DR Plan Components**:
   - Contact information and escalation procedures
   - Detailed recovery procedures for different scenarios
   - Infrastructure diagrams and dependencies
   - Recovery success criteria
   - Return to normal operations procedures

2. **Scenario-Specific Procedures**:
   - Single node failure
   - Data center outage
   - Regional disaster
   - Data corruption
   - Security incident

**MongoDB Atlas Disaster Recovery Features:**

1. **Multi-Cloud, Multi-Region Clusters**:
   - Deploy across AWS, Azure, and GCP
   - Automatic failover across regions
   - Configure read/write distribution for global applications
   - Global write distribution options

2. **Atlas Business Continuity Features**:
   - Point-in-time recovery
   - Cross-region backup
   - Automated snapshots
   - Continuous backup
   - Queryable backups (Atlas Data Lake)

**MongoDB DR Implementation Example:**

```javascript
// Configure a cross-region replica set
rs.initiate({
  _id: "production-rs",
  members: [
    // Primary data center (US-East)
    { _id: 0, host: "mongodb-primary-us-east:27017", priority: 10, tags: { "dc": "us-east" } },
    { _id: 1, host: "mongodb-secondary1-us-east:27017", priority: 5, tags: { "dc": "us-east" } },

    // DR data center (US-West)
    { _id: 2, host: "mongodb-secondary1-us-west:27017", priority: 2, tags: { "dc": "us-west" } },
    { _id: 3, host: "mongodb-secondary2-us-west:27017", priority: 1, tags: { "dc": "us-west" } },

    // Delayed secondary for logical error protection
    { _id: 4, host: "mongodb-delayed-us-west:27017", priority: 0, slaveDelay: 3600, tags: { "dc": "us-west", "backup": "delayed" } }
  ],
  settings: {
    getLastErrorDefaults: { w: "majority", wtimeout: 5000 }
  }
})

// Configure read preference for application
// Normal operations: read from primary region
db.getMongo().setReadPref("primaryPreferred", [{ "dc": "us-east" }])

// During DR scenario: read from DR region
// db.getMongo().setReadPref("primaryPreferred", [{ "dc": "us-west" }])
```

This configuration provides several DR features:
1. **Geographic redundancy** across two regions (US-East and US-West)
2. **Prioritized election** through priority settings (higher values in primary region)
3. **Automatic failover** if the primary region is unavailable
4. **Read scaling** through tag-aware read preferences
5. **Protection against logical errors** with the delayed secondary
6. **Region-specific routing** through read preference tags

**DR Automation Script Example:**

```python
#!/usr/bin/env python3
# MongoDB DR failover script

import argparse
import pymongo
import time
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    filename='/var/log/mongodb/dr_failover.log',
    filemode='a'
)

def perform_dr_failover(primary_uri, dr_uri, step_delay=60):
    """Performs controlled DR failover from primary to DR site"""

    logging.info("Starting DR failover procedure")

    try:
        # Connect to primary
        primary_client = pymongo.MongoClient(primary_uri)
        primary_admin = primary_client.admin

        # Connect to DR site
        dr_client = pymongo.MongoClient(dr_uri)
        dr_admin = dr_client.admin

        # Step 1: Verify DR site is healthy
        logging.info("Checking DR site health")
        dr_status = dr_admin.command('replSetGetStatus')
        dr_members_healthy = sum(1 for m in dr_status['members'] if m['health'] == 1)

        if dr_members_healthy < 2:
            logging.error("Not enough healthy members in DR site. Aborting.")
            return False

        # Step 2: Disable automatic failover temporarily
        logging.info("Disabling automatic failover")
        primary_admin.command('replSetFreeze', 120)  # Freeze for 2 minutes

        # Step 3: Step down current primary
        logging.info("Stepping down current primary")
        try:
            primary_admin.command('replSetStepDown', 60, secondaryCatchUpPeriodSecs=30)
        except pymongo.errors.ConnectionFailure:
            # Expected as connection to primary will drop
            logging.info("Primary stepped down successfully")

        # Step 4: Wait for new primary election
        logging.info(f"Waiting {step_delay} seconds for election")
        time.sleep(step_delay)

        # Step 5: Promote DR member to higher priority
        logging.info("Reconfiguring replica set to prefer DR members")

        # Get current config
        dr_config = dr_admin.command('replSetGetConfig')
        config = dr_config['config']

        # Update priorities - increase DR members, decrease original primary
        for member in config['members']:
            if 'us-west' in member['host']:  # DR data center
                member['priority'] = 10
            else:  # Primary data center
                member['priority'] = 1

        # Increment config version
        config['version'] += 1

        # Apply new configuration
        dr_admin.command('replSetReconfig', config)

        # Step 6: Verify new primary is in DR site
        logging.info("Waiting for DR site primary election")
        time.sleep(step_delay)

        dr_status = dr_admin.command('replSetGetStatus')
        new_primary = next((m for m in dr_status['members'] if m['state'] == 1), None)

        if new_primary and 'us-west' in new_primary['name']:
            logging.info(f"DR failover successful. New primary: {new_primary['name']}")
            return True
        else:
            logging.error("DR failover failed: Primary not in DR site")
            return False

    except Exception as e:
        logging.error(f"DR failover failed with exception: {str(e)}")
        return False

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='MongoDB DR Failover Tool')
    parser.add_argument('--primary-uri', required=True, help='URI for primary site')
    parser.add_argument('--dr-uri', required=True, help='URI for DR site')
    parser.add_argument('--step-delay', type=int, default=60, help='Delay between steps in seconds')

    args = parser.parse_args()

    if perform_dr_failover(args.primary_uri, args.dr_uri, args.step_delay):
        print("DR failover completed successfully")
        exit(0)
    else:
        print("DR failover failed - check logs for details")
        exit(1)
```

### 3. MongoDB in Production

Moving MongoDB from development to production requires careful planning and configuration to ensure performance, reliability, and security.

**Production Deployment Architecture:**

1. **Single-Server Deployment**:
   - Suitable for small applications, development, or testing
   - Limited redundancy and scalability
   - Lower operational complexity
   - No automatic failover capabilities
   - Good for proof-of-concept or personal projects
   - Typical max data volume: < 100 GB

2. **Replica Set Deployment**:
   - Minimum 3 nodes for proper failover
   - Primary for writes, secondaries for reads and failover
   - Arbiter option when even number of nodes
   - Automatic failover with election of new primary
   - High availability with minimal downtime
   - Typical max data volume: Several TB

3. **Sharded Cluster Deployment**:
   - Multiple shards (each a replica set)
   - Config servers (replica set)
   - Mongos routers
   - Used for horizontal scaling of large datasets
   - Distributes data across multiple replica sets
   - Allows for massive data volumes and high throughput
   - Increased operational complexity
   - Typical max data volume: Petabyte scale

4. **Reference Architecture (Medium-Scale)**:
   ```
   Application Servers
          |
    Load Balancer/Proxy
          |
   Mongos Routers (2+)
          |
   ------------------------------
   |                            |
   Shard 1 (Replica Set)        Shard 2 (Replica Set)
   - Primary                    - Primary
   - Secondary                  - Secondary
   - Secondary                  - Secondary
   |                            |
   Config Server Replica Set (3 nodes)
   ```

**Operating System Configuration:**

1. **Linux Kernel Settings**:
   ```bash
   # /etc/sysctl.conf

   # File handles and network connections
   fs.file-max = 100000
   net.ipv4.tcp_max_syn_backlog = 4096
   net.core.somaxconn = 4096

   # Virtual memory settings
   vm.swappiness = 1
   vm.zone_reclaim_mode = 0

   # Apply settings
   sysctl -p
   ```

2. **User Limits**:
   ```bash
   # /etc/security/limits.conf

   mongodb soft nofile 64000
   mongodb hard nofile 64000
   mongodb soft nproc 32000
   mongodb hard nproc 32000
   ```

3. **Filesystem Considerations**:
   - Use XFS or ext4 for best performance
   - Consider separate volumes for data, journals, and logs
   - Disable atime updates for data volumes

**MongoDB Configuration for Production:**

1. **Basic mongod.conf**:
   ```yaml
   # Basic production configuration

   systemLog:
     destination: file
     path: /var/log/mongodb/mongod.log
     logAppend: true
     logRotate: reopen

   storage:
     dbPath: /var/lib/mongodb
     journal:
       enabled: true
     engine: wiredTiger
     wiredTiger:
       engineConfig:
         cacheSizeGB: 4  # Adjust based on available RAM (typically 50-60% of RAM)
         journalCompressor: snappy
       collectionConfig:
         blockCompressor: snappy

   net:
     port: 27017
     bindIp: 0.0.0.0  # Restrict in production to specific IPs
     maxIncomingConnections: 2000

   security:
     authorization: enabled
     keyFile: /etc/mongodb/keyfile  # For replica sets

   operationProfiling:
     mode: slowOp
     slowOpThresholdMs: 100

   replication:
     replSetName: rs0

   processManagement:
     fork: true
     pidFilePath: /var/run/mongodb/mongod.pid
     timeZoneInfo: /usr/share/zoneinfo
   ```

2. **WiredTiger Cache Configuration**:
   - Set to 50-60% of available RAM for dedicated servers
   - For shared environments, use a more conservative setting
   - Leave enough memory for other processes and OS file cache

3. **Security Configuration**:
   ```javascript
   // Create admin user
   db.createUser({
     user: "admin",
     pwd: "secure_password",
     roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
   })

   // Create application user with specific privileges
   db.createUser({
     user: "app_user",
     pwd: "app_password",
     roles: [
       { role: "readWrite", db: "app_database" },
       { role: "read", db: "reference_data" }
     ]
   })

   // Create monitoring user
   db.createUser({
     user: "monitoring",
     pwd: "monitoring_password",
     roles: [
       { role: "clusterMonitor", db: "admin" },
       { role: "read", db: "local" }
     ]
   })
   ```

**Performance Tuning:**

1. **Indexing Strategy**:
   - Create indexes for common query patterns
   - Avoid over-indexing (impacts write performance)
   - Use compound indexes efficiently
   - Consider index size in memory requirements

2. **Query Optimization**:
   - Use explain() to analyze query performance
   - Restructure queries to leverage indexes
   - Implement appropriate pagination
   - Consider denormalization for read-heavy workloads

3. **Connection Pooling**:
   - Configure appropriate connection pool in drivers
   - Monitor connection usage
   - Set reasonable maxPoolSize based on workload

4. **Hardware Recommendations**:
   - Prioritize RAM for WiredTiger cache
   - Use SSDs for data files
   - Consider RAID for redundancy (RAID 10 recommended)
   - Fast network connections between cluster members

**Monitoring and Alerts:**

1. **Key Metrics to Monitor**:
   - Resource utilization (CPU, memory, disk I/O, network)
   - MongoDB metrics (operations/sec, connections, replication lag)
   - Query performance (slow queries)
   - Error rates and types
   - Connection pool status

2. **Monitoring Tools**:
   - MongoDB Atlas monitoring
   - MongoDB Cloud Manager / Ops Manager
   - Prometheus + Grafana
   - Self-hosted monitoring (Nagios, Zabbix, etc.)
   - Log analysis platforms (ELK, Graylog)

3. **Sample Prometheus Alerts**:
   ```yaml
   # Alert rules for MongoDB monitoring

   groups:
   - name: mongodb_alerts
     rules:
     - alert: MongoDBHighConnections
       expr: mongodb_connections_current / mongodb_connections_available > 0.8
       for: 5m
       labels:
         severity: warning
       annotations:
         summary: "MongoDB high connection usage"
         description: "MongoDB instance {{ $labels.instance }} has used over 80% of available connections for 5 minutes"

     - alert: MongoDBReplicationLag
       expr: mongodb_replset_member_optime_date{state="SECONDARY"} - on(set) group_left() mongodb_replset_member_optime_date{state="PRIMARY"} > 10
       for: 1m
       labels:
         severity: warning
       annotations:
         summary: "MongoDB replication lag"
         description: "Secondary {{ $labels.instance }} is lagging behind primary by more than 10 seconds"

     - alert: MongoDBReplSetNoMaster
       expr: mongodb_replset_member_state{state="PRIMARY"} == 0
       for: 1m
       labels:
         severity: critical
       annotations:
         summary: "MongoDB replica set has no primary"
         description: "Replica set {{ $labels.set }} has no primary member for over a minute"
   ```

**Backup Strategy for Production:**

1. **Regular Backup Schedule**:
   - Full backups at regular intervals
   - Continuous backups for point-in-time recovery
   - Retention policy based on business requirements

2. **Backup Methods**:
   - MongoDB Atlas automated backups
   - File system snapshots (for consistent point-in-time)
   - mongodump (for smaller datasets)
   - Ops Manager backup service

3. **Backup Validation**:
   - Regular restore tests
   - Backup integrity verification
   - Recovery time measurement

**Maintenance Procedures:**

1. **Version Upgrades**:
   - Test upgrades in staging environment
   - Follow rolling upgrade process for clusters
   - Schedule maintenance windows for minimal impact
   - Have rollback plan ready

2. **Index Maintenance**:
   - Regular review of index usage
   - Background index builds for production
   - Remove unused indexes

3. **Data Purging/Archiving**:
   - Implement TTL indexes for automatic expiration
   - Develop archiving strategy for old data
   - Consider time-series collections for time-based data

**Security Best Practices:**

1. **Network Security**:
   - Use TLS/SSL for all connections
   - Implement IP allowlisting
   - Use VPC/private networking when possible
   - Add a proxy layer for additional security

2. **Authentication and Authorization**:
   - Use strong authentication mechanisms
   - Implement role-based access control
   - Audit user access regularly
   - Rotate credentials periodically

3. **Data Security**:
   - Implement field-level encryption for sensitive data
   - Consider client-side encryption options
   - Regular security vulnerability assessments

**Production Checklist:**

1. **Pre-Deployment**:
   - Load testing and performance benchmarking
   - Backup and restore procedures documented and tested
   - Monitoring configuration ready
   - Security controls implemented and validated

2. **Deployment**:
   - Change management procedures followed
   - Rollback plan documented
   - Deployment automation tested
   - Progressive rollout when possible

3. **Post-Deployment**:
   - Validation of functionality
   - Performance monitoring
   - User access verification
   - Backup job verification

### 4. Integration with Other Database Systems

Modern application architectures often require MongoDB to work alongside other database systems, each optimized for specific workloads.

**Types of Database Integration:**

1. **Polyglot Persistence**:
   - Using multiple database types in a single application
   - Choosing the right database for each data workload
   - Common combination: MongoDB + RDBMS + Search Engine

2. **Data Synchronization**:
   - Keeping data consistent across different systems
   - One-way or bidirectional synchronization
   - Batch, near real-time, or real-time approaches

3. **Federated Queries**:
   - Querying across multiple data sources
   - Combining results for unified views
   - Abstracting complexity from applications

**MongoDB with Relational Databases:**

1. **Common Integration Patterns**:
   - MongoDB for flexible/document data, RDBMS for transactional data
   - MongoDB as operational store, RDBMS for reporting
   - MongoDB for high-write workloads, RDBMS for complex joins

2. **Data Synchronization Options**:
   - Change Data Capture (CDC) tools
   - ETL/ELT processes
   - Message queues for event-driven sync
   - MongoDB Connector for BI

3. **Integration Example: MongoDB with PostgreSQL**:
   ```python
   # Python example: Synchronize customer orders from MongoDB to PostgreSQL

   import pymongo
   import psycopg2
   import datetime

   # Connect to MongoDB
   mongo_client = pymongo.MongoClient("mongodb://localhost:27017/")
   mongo_db = mongo_client["retail"]
   orders_collection = mongo_db["orders"]

   # Connect to PostgreSQL
   pg_conn = psycopg2.connect(
       host="localhost",
       database="retail_analytics",
       user="analytics_user",
       password="secure_password"
   )
   pg_cursor = pg_conn.cursor()

   # Get last sync timestamp from PostgreSQL
   pg_cursor.execute("SELECT MAX(last_updated) FROM order_sync_status")
   last_sync = pg_cursor.fetchone()[0] or datetime.datetime(1970, 1, 1)

   # Find orders updated since last sync
   recent_orders = orders_collection.find({
       "last_updated": {"$gt": last_sync}
   }).sort("last_updated", 1)

   # Sync each order to PostgreSQL
   sync_count = 0
   latest_timestamp = last_sync

   for order in recent_orders:
       # Extract order data
       order_id = str(order["_id"])
       customer_id = str(order["customer_id"])
       order_date = order["order_date"]
       total = order["total"]
       status = order["status"]
       last_updated = order["last_updated"]

       # Upsert order into PostgreSQL
       pg_cursor.execute("""
           INSERT INTO orders (order_id, customer_id, order_date, total, status, last_updated)
           VALUES (%s, %s, %s, %s, %s, %s)
           ON CONFLICT (order_id)
           DO UPDATE SET
               customer_id = EXCLUDED.customer_id,
               order_date = EXCLUDED.order_date,
               total = EXCLUDED.total,
               status = EXCLUDED.status,
               last_updated = EXCLUDED.last_updated
       """, (order_id, customer_id, order_date, total, status, last_updated))

       # Process order items
       for item in order.get("items", []):
           pg_cursor.execute("""
               INSERT INTO order_items (order_id, product_id, quantity, price)
               VALUES (%s, %s, %s, %s)
               ON CONFLICT (order_id, product_id)
               DO UPDATE SET
                   quantity = EXCLUDED.quantity,
                   price = EXCLUDED.price
           """, (order_id, str(item["product_id"]), item["quantity"], item["price"]))

       # Track latest timestamp
       if last_updated > latest_timestamp:
           latest_timestamp = last_updated

       sync_count += 1

   # Update sync status
   if sync_count > 0:
       pg_cursor.execute(
           "INSERT INTO order_sync_status (last_updated, records_synced) VALUES (%s, %s)",
           (latest_timestamp, sync_count)
       )

   # Commit changes and close connections
   pg_conn.commit()
   pg_cursor.close()
   pg_conn.close()
   mongo_client.close()

   print(f"Synchronized {sync_count} orders to PostgreSQL")
   ```

**MongoDB with Search Engines:**

1. **Common Integration Patterns**:
   - MongoDB for data storage, Elasticsearch/Solr for full-text search
   - Synchronized indexes for search functionality
   - Combined query results for rich applications

2. **Integration Methods**:
   - MongoDB Connector for Elasticsearch
   - MongoDB Atlas Search (built-in Lucene integration)
   - Custom synchronization through CDC or message queues

3. **Integration Example: MongoDB with Elasticsearch**:
   ```javascript
   // Using MongoDB Connector for Elasticsearch

   // 1. Configure the connector in MongoDB
   db.adminCommand({
     setParameter: 1,
     opensearchURI: "https://elasticsearch-host:9200"
   });

   // 2. Create a pipeline to sync data
   db.createCollection("products_sync_config");
   db.products_sync_config.insertOne({
     "_id": "products_to_es",
     "source": {
       "db": "retail",
       "collection": "products"
     },
     "destination": {
       "index": "products",
       "type": "product"
     },
     "transformation": {
       "script": "function(doc) { return doc; }"
     },
     "fullSyncEvery": 24
   });

   // 3. Start the sync process
   db.adminCommand({
     opensearchStartSyncProcess: "products_to_es"
   });
   ```

**MongoDB with Big Data Platforms:**

1. **Integration with Hadoop Ecosystem**:
   - MongoDB Connector for Spark
   - MongoDB Connector for Hadoop
   - Data lake integration via MongoDB Connector for BI

2. **Common Use Cases**:
   - MongoDB as operational database, Hadoop for analytical processing
   - Real-time data in MongoDB, historical archives in HDFS
   - Using Spark for analytics across MongoDB data

3. **Integration Example: MongoDB with Spark**:
   ```python
   # PySpark example: Analyze MongoDB data

   from pyspark.sql import SparkSession

   # Initialize Spark session with MongoDB connector
   spark = SparkSession.builder \
       .appName("MongoDB Analytics") \
       .config("spark.mongodb.input.uri", "mongodb://localhost:27017/retail.orders") \
       .config("spark.mongodb.output.uri", "mongodb://localhost:27017/analytics.order_stats") \
       .config("spark.jars.packages", "org.mongodb.spark:mongo-spark-connector_2.12:3.0.1") \
       .getOrCreate()

   # Load MongoDB collection into DataFrame
   orders_df = spark.read.format("mongo").load()

   # Register temp view for SQL queries
   orders_df.createOrReplaceTempView("orders")

   # Perform analysis with Spark SQL
   monthly_stats = spark.sql("""
     SELECT
       YEAR(order_date) AS year,
       MONTH(order_date) AS month,
       COUNT(*) AS order_count,
       SUM(total) AS revenue,
       AVG(total) AS avg_order_value,
       COUNT(DISTINCT customer_id) AS unique_customers
     FROM orders
     GROUP BY YEAR(order_date), MONTH(order_date)
     ORDER BY year, month
   """)

   # Write results back to MongoDB
   monthly_stats.write.format("mongo") \
       .mode("overwrite") \
       .option("collection", "monthly_order_stats") \
       .save()
   ```

**MongoDB with Message Queues:**

1. **Event-Driven Architecture**:
   - MongoDB Change Streams to capture data changes
   - Publishing changes to message queues
   - Consuming events for synchronization or processing

2. **Common Message Queue Systems**:
   - Apache Kafka
   - RabbitMQ
   - Amazon SQS/SNS
   - Google Pub/Sub

3. **Integration Example: MongoDB with Kafka**:
   ```javascript
   // MongoDB Change Stream pipeline to capture changes
   const pipeline = [
     {
       $match: {
         'operationType': { $in: ['insert', 'update', 'delete'] },
         'ns.coll': 'products'
       }
     },
     {
       $project: {
         _id: 0,
         operation: '$operationType',
         documentId: '$documentKey._id',
         fullDocument: '$fullDocument',
         updateDescription: '$updateDescription',
         timestamp: '$clusterTime'
       }
     }
   ];

   // Node.js example of consuming change stream and publishing to Kafka
   const { MongoClient } = require('mongodb');
   const { Kafka } = require('kafkajs');

   async function syncToKafka() {
     // Connect to MongoDB
     const mongoClient = new MongoClient('mongodb://localhost:27017');
     await mongoClient.connect();
     const db = mongoClient.db('retail');

     // Set up Kafka producer
     const kafka = new Kafka({
       clientId: 'mongodb-sync',
       brokers: ['kafka1:9092', 'kafka2:9092']
     });
     const producer = kafka.producer();
     await producer.connect();

     // Watch for changes
     const changeStream = db.collection('products').watch(pipeline);

     changeStream.on('change', async (change) => {
       try {
         // Prepare message
         const message = {
           key: change.documentId.toString(),
           value: JSON.stringify(change)
         };

         // Send to appropriate Kafka topic based on operation
         const topic = `mongodb.products.${change.operation}`;
         await producer.send({
           topic,
           messages: [message]
         });

         console.log(`Sent ${change.operation} event to ${topic}`);
       } catch (err) {
         console.error('Error publishing to Kafka:', err);
       }
     });

     // Handle errors and cleanup
     changeStream.on('error', (error) => {
       console.error('Change stream error:', error);
     });

     process.on('SIGINT', async () => {
       try {
         await changeStream.close();
         await producer.disconnect();
         await mongoClient.close();
         console.log('Gracefully shut down');
         process.exit(0);
       } catch (err) {
         console.error('Error during shutdown:', err);
         process.exit(1);
       }
     });
   }

   syncToKafka().catch(console.error);
   ```

**Integration Challenges and Solutions:**

1. **Data Consistency**:
   - **Challenge**: Maintaining consistency across systems
   - **Solutions**:
     - Event sourcing patterns
     - Two-phase commit for critical transactions
     - Eventual consistency with reconciliation

2. **Schema Differences**:
   - **Challenge**: Mapping between different data models
   - **Solutions**:
     - Data transformation layers
     - Canonical data models
     - Schema registry services

3. **Performance Optimization**:
   - **Challenge**: Minimizing impact on source systems
   - **Solutions**:
     - Incremental synchronization
     - Off-peak processing
     - Read from secondaries/replicas

4. **Error Handling and Recovery**:
   - **Challenge**: Handling failures in integration processes
   - **Solutions**:
     - Idempotent operations
     - Transaction logs
     - Dead letter queues
     - Automated reconciliation

### 5. Handling Streaming and Real-time Data

The ability to process and analyze data in real-time is increasingly important for modern applications. MongoDB provides several features for handling streaming and real-time data.

**Streaming Data Concepts:**

1. **Types of Streaming Data**:
   - Application events
   - User activity streams
   - IoT sensor data
   - Log data
   - Transaction streams
   - Social media feeds

2. **Real-time Processing Requirements**:
   - Low latency ingestion
   - Continuous processing
   - Stateful operations
   - Windowed analytics
   - Pattern detection
   - Real-time notifications

**MongoDB Change Streams:**

Change Streams provide a mechanism for applications to access real-time data changes in the database without having to poll for these changes.

1. **Basic Change Stream Usage**:
   ```javascript
   // Open a change stream on a collection
   const changeStream = db.collection('orders').watch();

   // Listen for changes
   changeStream.on('change', (change) => {
     console.log('Detected change:', change);

     // Process based on operation type
     switch(change.operationType) {
       case 'insert':
         handleNewOrder(change.fullDocument);
         break;
       case 'update':
         handleOrderUpdate(change.documentKey._id, change.updateDescription);
         break;
       case 'delete':
         handleOrderDeletion(change.documentKey._id);
         break;
     }
   });
   ```

2. **Filtered Change Streams**:
   ```javascript
   // Pipeline for filtering high-value orders
   const pipeline = [
     {
       $match: {
         $or: [
           { 'fullDocument.total': { $gt: 1000 } },
           { 'fullDocument.priority': 'high' }
         ]
       }
     },
     {
       $project: {
         _id: 1,
         fullDocument: 1,
         ns: 1,
         documentKey: 1
       }
     }
   ];

   // Watch with filter pipeline
   const changeStream = db.collection('orders').watch(pipeline);
   ```

3. **Resuming Change Streams**:
   ```javascript
   let resumeToken = null;

   const changeStream = db.collection('orders').watch();

   changeStream.on('change', (change) => {
     // Store the resume token from the change event
     resumeToken = change._id;

     // Process the change...
     processChange(change);
   });

   // If the connection drops, resume from last processed token
   function resumeChangeStream() {
     if (resumeToken) {
       return db.collection('orders').watch([], { resumeAfter: resumeToken });
     } else {
       return db.collection('orders').watch();
     }
   }

   changeStream.on('error', () => {
     // Handle error and attempt to resume
     const newChangeStream = resumeChangeStream();
     // Re-establish event handlers...
   });
   ```

**Real-time Analytics with MongoDB:**

1. **Rolling Window Calculations**:
   ```javascript
   // Increment counters in a time window document
   db.traffic_stats.updateOne(
     {
       window_start: ISODate("2023-03-15T10:00:00Z"),
       window_end: ISODate("2023-03-15T11:00:00Z")
     },
     {
       $inc: {
         page_views: 1,
         "paths./products": 1
       },
       $addToSet: {
         unique_visitors: "user123"
       }
     },
     { upsert: true }
   );
   ```

2. **Time-Series Collections**:
   ```javascript
   // Create a time-series collection for sensor data
   db.createCollection(
     "device_readings",
     {
       timeseries: {
         timeField: "timestamp",
         metaField: "device_id",
         granularity: "minutes"
       }
     }
   );

   // Insert time-series data
   db.device_readings.insertOne({
     timestamp: ISODate("2023-03-15T10:15:30Z"),
     device_id: "sensor001",
     temperature: 22.5,
     humidity: 45.2,
     battery: 87
   });

   // Query time-series data with time-based filtering
   db.device_readings.find({
     timestamp: {
       $gte: ISODate("2023-03-15T10:00:00Z"),
       $lt: ISODate("2023-03-15T11:00:00Z")
     },
     device_id: "sensor001"
   });
   ```

3. **Real-time Aggregation**:
   ```javascript
   // Aggregation to calculate real-time metrics
   db.orders.aggregate([
     {
       $match: {
         order_date: {
           $gte: new Date(new Date().setHours(0, 0, 0, 0)) // Today
         }
       }
     },
     {
       $group: {
         _id: "$status",
         count: { $sum: 1 },
         total_value: { $sum: "$total" }
       }
     },
     {
       $project: {
         status: "$_id",
         _id: 0,
         count: 1,
         total_value: 1,
         average_value: { $divide: ["$total_value", "$count"] }
       }
     },
     {
       $sort: { total_value: -1 }
     }
   ]);
   ```

**Integration with Stream Processing Systems:**

1. **MongoDB with Apache Kafka**:
   - Use MongoDB Kafka Connector
   - Source connector: Write Kafka topics to MongoDB
   - Sink connector: Stream MongoDB changes to Kafka

   ```java
   // Kafka Connect configuration for MongoDB sink
   {
     "name": "mongo-sink",
     "config": {
       "connector.class": "com.mongodb.kafka.connect.MongoSinkConnector",
       "topics": "orders-topic",
       "connection.uri": "mongodb://localhost:27017",
       "database": "retail",
       "collection": "orders",
       "key.converter": "org.apache.kafka.connect.json.JsonConverter",
       "value.converter": "org.apache.kafka.connect.json.JsonConverter",
       "key.converter.schemas.enable": false,
       "value.converter.schemas.enable": false,
       "writemodel.strategy": "com.mongodb.kafka.connect.sink.writemodel.strategy.ReplaceOneDefaultStrategy"
     }
   }
   ```

2. **MongoDB with Apache Flink**:
   - Use MongoDB Flink Connector
   - Stream processing with stateful operations
   - Complex event processing (CEP)

   ```java
   // Java example using Flink with MongoDB
   StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

   // Create MongoDB source
   MongoSource<Document> source = MongoSource.<Document>builder()
       .setUri("mongodb://localhost:27017")
       .setDatabase("retail")
       .setCollection("orders")
       .setFetchSize(1000)
       .setPartitionStrategy(PartitionStrategy.SHARDED)
       .build();

   // Create stream from MongoDB
   DataStream<Document> stream = env.addSource(source);

   // Process stream
   DataStream<Document> processedStream = stream
       .filter(doc -> doc.getDouble("total") > 100)
       .map(doc -> {
           Document enriched = new Document(doc);
           enriched.put("high_value", true);
           enriched.put("processing_time", new Date());
           return enriched;
       });

   // Create MongoDB sink
   MongoSink<Document> sink = MongoSink.<Document>builder()
       .setUri("mongodb://localhost:27017")
       .setDatabase("retail")
       .setCollection("processed_orders")
       .setReplaceOneStrategy("documentKey")
       .build();

   // Write processed stream to MongoDB
   processedStream.addSink(sink);

   // Execute Flink job
   env.execute("MongoDB Stream Processing");
   ```

3. **MongoDB with Apache Spark Streaming**:
   - Use Spark Structured Streaming with MongoDB connector
   - Window operations and stateful processing
   - Integration with ML pipelines

   ```python
   # PySpark Structured Streaming with MongoDB
   from pyspark.sql import SparkSession
   from pyspark.sql.functions import window, col, avg, count

   # Create Spark session with MongoDB connector
   spark = SparkSession.builder \
       .appName("MongoDB Streaming") \
       .config("spark.mongodb.input.uri", "mongodb://localhost:27017/retail.orders") \
       .config("spark.mongodb.output.uri", "mongodb://localhost:27017/analytics.order_metrics") \
       .config("spark.jars.packages", "org.mongodb.spark:mongo-spark-connector_2.12:3.0.1") \
       .getOrCreate()

   # Read from MongoDB change stream
   orders_stream = spark.readStream \
       .format("mongodb") \
       .option("spark.mongodb.connection.uri", "mongodb://localhost:27017") \
       .option("spark.mongodb.database", "retail") \
       .option("spark.mongodb.collection", "orders") \
       .option("spark.mongodb.change.stream.publish.full.document.only", "true") \
       .load()

   # Process with windowed operations
   metrics = orders_stream \
       .withWatermark("order_date", "1 hour") \
       .groupBy(
           window(col("order_date"), "15 minutes", "5 minutes"),
           col("status")
       ) \
       .agg(
           count("*").alias("order_count"),
           avg("total").alias("avg_order_value")
       )

   # Write results to MongoDB
   query = metrics.writeStream \
       .outputMode("update") \
       .format("mongodb") \
       .option("checkpointLocation", "/tmp/spark-checkpoints/orders") \
       .option("spark.mongodb.connection.uri", "mongodb://localhost:27017") \
       .option("spark.mongodb.database", "analytics") \
       .option("spark.mongodb.collection", "order_metrics") \
       .trigger(processingTime="1 minute") \
       .start()

   query.awaitTermination()
   ```

**Real-time Visualization and Dashboards:**

1. **MongoDB Charts for Real-time Dashboards**:
   - Connect Charts to MongoDB collections
   - Create visualizations with auto-refresh
   - Embed charts in applications
   - Share dashboards with stakeholders

2. **Custom Real-time Dashboards**:
   - Use MongoDB Change Streams with WebSockets
   - Update client UI in real-time
   - Implement dashboard caching and throttling

   ```javascript
   // Node.js example with Express, MongoDB Change Streams, and Socket.io
   const express = require('express');
   const http = require('http');
   const socketIo = require('socket.io');
   const { MongoClient } = require('mongodb');

   const app = express();
   const server = http.createServer(app);
   const io = socketIo(server);

   // Serve static dashboard
   app.use(express.static('public'));

   // Connect to MongoDB
   async function startServer() {
     const client = new MongoClient('mongodb://localhost:27017');
     await client.connect();
     const db = client.db('retail');

     // Set up change streams for real-time metrics
     const ordersChangeStream = db.collection('orders').watch();

     ordersChangeStream.on('change', async (change) => {
       if (change.operationType === 'insert' || change.operationType === 'update') {
         // Calculate updated metrics
         const metrics = await db.collection('orders').aggregate([
           {
             $match: {
               order_date: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) }
             }
           },
           {
             $group: {
               _id: null,
               total_orders: { $sum: 1 },
               revenue: { $sum: "$total" },
               avg_order_value: { $avg: "$total" }
             }
           },
           {
             $project: {
               _id: 0,
               total_orders: 1,
               revenue: 1,
               avg_order_value: 1
             }
           }
         ]).toArray();

         // Emit updated metrics to connected clients
         io.emit('metrics-update', metrics[0]);
       }
     });

     // Socket.io connection handling
     io.on('connection', (socket) => {
       console.log('Client connected');

       // Send initial metrics on connection
       db.collection('orders').aggregate([
         {
           $match: {
             order_date: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) }
           }
         },
         {
           $group: {
             _id: null,
             total_orders: { $sum: 1 },
             revenue: { $sum: "$total" },
             avg_order_value: { $avg: "$total" }
           }
         },
         {
           $project: {
             _id: 0,
             total_orders: 1,
             revenue: 1,
             avg_order_value: 1
           }
         }
       ]).toArray().then(results => {
         socket.emit('metrics-update', results[0] || { total_orders: 0, revenue: 0, avg_order_value: 0 });
       });

       socket.on('disconnect', () => {
         console.log('Client disconnected');
       });
     });

     // Start server
     server.listen(3000, () => {
       console.log('Real-time dashboard server running on port 3000');
     });
   }

   startServer().catch(console.error);
   ```

**Best Practices for Real-time Data Handling:**

1. **Performance Optimization**:
   - Use appropriate indexes for real-time queries
   - Consider in-memory storage for hot data
   - Implement caching layers
   - Optimize change stream filters

2. **Scalability Considerations**:
   - Shard collections for high-volume streams
   - Distribute stream processing
   - Implement backpressure handling
   - Consider consumer group patterns

3. **Resilience Patterns**:
   - Store resume tokens for change streams
   - Implement automatic reconnection
   - Use dead-letter queues for failed events
   - Design for exactly-once processing when needed

4. **Monitoring and Alerting**:
   - Track stream processing latency
   - Monitor consumer lag
   - Alert on processing bottlenecks
   - Log stream processing errors

### 6. Exploring Cloud-based Unstructured Databases

Cloud-based database services offer scalability, reliability, and managed operations for unstructured databases. This section explores various cloud options with a focus on MongoDB Atlas and other solutions.

**MongoDB Atlas:**

1. **Core Features and Benefits**:
   - Fully managed MongoDB service
   - Multi-cloud deployment (AWS, Azure, GCP)
   - Automated backups and point-in-time recovery
   - Auto-scaling and performance optimization
   - Advanced security features
   - Integrated analytics tools (Charts, Data Lake)

2. **Deployment Models**:
   - **Shared Clusters**: Low-cost, multi-tenant (M0 free tier, M2, M5)
   - **Dedicated Clusters**: Single-tenant with dedicated resources
   - **Multi-region Clusters**: Distributed data for global applications
   - **Serverless Instances**: Pay-per-use model without capacity planning

3. **Management Features**:
   - Automated patching and upgrades
   - Performance advisor
   - Real-time monitoring
   - Custom alerts
   - Backup scheduling
   - Data Explorer for querying and visualization

4. **Security Capabilities**:
   - Network isolation (VPC peering)
   - IP access lists
   - Customer-managed encryption keys
   - Field-level encryption
   - Database auditing
   - LDAP and database user authentication

5. **Integration Services**:
   - Atlas Search (Lucene integration)
   - Atlas Data Lake
   - MongoDB Charts
   - Atlas Triggers and Functions
   - Full-text search
   - GraphQL API

**Other Cloud-based Unstructured Database Services:**

1. **Amazon DocumentDB**:
   - MongoDB-compatible document database
   - Integrated with AWS ecosystem
   - Automatic scaling and backup
   - Limited to MongoDB 3.6/4.0 API compatibility
   - Managed by AWS

2. **Azure Cosmos DB**:
   - Multi-model database (document, graph, key-value, column)
   - MongoDB API compatibility
   - Global distribution
   - Five consistency levels
   - 99.999% availability SLA

3. **Google Cloud Firestore**:
   - NoSQL document database
   - Real-time listeners
   - Offline mode for mobile/web
   - Automatic scaling
   - Deep integration with Google Cloud

4. **Amazon DynamoDB**:
   - Key-value and document database
   - Single-digit millisecond performance
   - Auto-scaling
   - On-demand capacity
   - ACID transactions

5. **IBM Cloudant**:
   - Distributed document database
   - Based on Apache CouchDB
   - Multi-region replication
   - Dedicated hardware options
   - HTTP/REST API

**Migration to Cloud Databases:**

1. **Migration Planning**:
   - Assess data volume and access patterns
   - Evaluate application compatibility
   - Choose appropriate instance types
   - Plan for downtime (or zero-downtime strategy)
   - Test migration in non-production environment

2. **Migration Methods**:
   - **MongoDB Atlas Live Migration**: Zero-downtime migration
   - **mongodump/mongorestore**: For smaller datasets
   - **Database Migration Service**: AWS DMS or similar tools
   - **Custom ETL processes**: For complex transformations

3. **MongoDB Atlas Migration Example**:
   ```javascript
   // 1. Create migration project in Atlas UI or API
   // 2. Configure source and target endpoints
   // 3. Test migration connectivity
   // 4. Start initial sync
   // 5. Monitor migration progress
   // 6. Perform cutover when ready

   // Post-migration validation query
   db.runCommand({
     dbHash: 1,
     collections: ["users", "products", "orders"]
   });
   ```

**Cost Optimization for Cloud Databases:**

1. **Selecting the Right Tier**:
   - Match instance size to workload requirements
   - Consider peak vs. average usage
   - Evaluate serverless vs. dedicated options
   - Use shared clusters for development/testing

2. **Scaling Strategies**:
   - Implement auto-scaling for variable workloads
   - Scale down during off-peak hours
   - Use sharding for horizontal scaling
   - Consider read replicas for read-heavy workloads

3. **Storage Optimization**:
   - Implement data archiving for cold data
   - Use appropriate compression options
   - Consider time-to-live (TTL) indexes for temporary data
   - Review index usage and remove unnecessary indexes

4. **Monitoring and Tuning**:
   - Track database metrics
   - Identify expensive queries
   - Implement performance advisor recommendations
   - Rightsize instances based on usage patterns

**Hybrid Cloud Strategies:**

1. **Multi-Cloud Deployment**:
   - Deploy across multiple cloud providers (e.g., AWS, Azure, GCP)
   - Use MongoDB Atlas for consistent management across clouds
   - Implement disaster recovery across cloud providers
   - Balance regional compliance requirements and data sovereignty
   - Mitigate vendor lock-in and negotiate better pricing
   - Optimize for specific cloud provider strengths (ML on GCP, IoT on Azure, etc.)
   - Challenges: Consistent performance, networking costs, operational complexity

2. **Hybrid On-Premises and Cloud**:
   - Keep sensitive data on-premises for security/compliance
   - Use cloud for scalable workloads and elastic capacity
   - Implement secure connectivity (VPN, Direct Connect, Express Route)
   - Synchronize data between environments with replication
   - Implement consistent security and monitoring across environments
   - Use cloud as disaster recovery for on-premises systems
   - Challenges: Synchronization lag, security boundary management, skill requirements

3. **Edge Computing Integration**:
   - Deploy MongoDB at the edge for low-latency access and reduced bandwidth
   - Synchronize with central cloud instances when connectivity allows
   - Use MongoDB Mobile for offline-first applications
   - Implement progressive data synchronization with conflict resolution
   - Process data locally at the edge with limited hardware
   - Optimize for intermittent connectivity scenarios
   - Suitable for IoT deployments, retail locations, remote operations
   - Challenges: Limited resources at edge, conflict resolution, device management

**Emerging Trends in Cloud Databases:**

1. **Serverless Database Models**:
   - Pay-per-operation pricing instead of provisioned capacity
   - Auto-scaling to zero when not in use for cost optimization
   - No capacity planning required, simplifying operations
   - Integration with serverless computing platforms (Lambda, Functions, Cloud Run)
   - Examples: MongoDB Atlas Serverless, Amazon Aurora Serverless, Azure Cosmos DB Serverless
   - Benefits: Cost efficiency, operational simplicity, focus on application logic

2. **AI and ML Integration**:
   - Automated performance optimization based on workload patterns
   - Anomaly detection in data patterns for security and operations
   - Predictive scaling based on historical usage patterns
   - Intelligent query optimization and index suggestions
   - Built-in ML capabilities for data analysis
   - ML-driven data lifecycle management
   - Examples: MongoDB Atlas Performance Advisor, Azure SQL Database Query Performance Insight
   - Benefits: Improved performance, reduced DBA work, intelligent insights

3. **Global Distribution and Edge Computing**:
   - Multi-region deployment by default for global applications
   - Edge-optimized data access reducing latency for users
   - Conflict-free replicated data types (CRDTs) for consistent replication
   - Regional data sovereignty support for compliance
   - Automated data placement based on access patterns
   - Tiered storage across regions (hot/warm/cold)
   - Examples: Cloudflare Workers KV, Fauna, MongoDB Atlas Global Clusters
   - Benefits: Lower latency, better user experience, simplified compliance

4. **Unified Query Interfaces**:
   - Querying across different data models (document, graph, relational)
   - Federated queries across data stores and engines
   - GraphQL as a unified API layer over diverse backends
   - Automated query translation to native query languages
   - Semantic layer abstracting physical data organization
   - Examples: Prisma, Hasura, MongoDB Atlas Data Federation
   - Benefits: Simplified application development, data polyglot persistence

5. **Blockchain and Distributed Ledger Integration**:
   - Immutable audit trails for sensitive operations
   - Cryptographic verification of data integrity
   - Smart contract integration for automated policy enforcement
   - Decentralized database architectures for trust-minimized applications
   - Hybrid models combining traditional databases with blockchain
   - Examples: BigchainDB, Amazon QLDB, MongoDB+Chainpoint
   - Benefits: Enhanced trust, auditability, decentralized applications

6. **Embedded Databases for Edge and IoT**:
   - Lightweight database engines for resource-constrained devices
   - Sophisticated sync mechanisms for intermittent connectivity
   - Purpose-built for sensors and IoT data patterns
   - Time-series optimization for sensor readings
   - Examples: SQLite, MongoDB Mobile, RocksDB, EdgeDB
   - Benefits: Enables offline-first applications, reduced bandwidth needs

7. **Vector Databases for AI Applications**:
   - Specialized storage for embeddings and vector data
   - Efficient similarity search and nearest-neighbor queries
   - Integration with large language models and AI workflows
   - Multimodal data support (text, image, audio vectors)
   - Examples: Pinecone, Milvus, MongoDB Atlas Vector Search
   - Benefits: Enables semantic search, recommendation systems, AI applications

---
##### Contributor Name - Abhirup Kumar
