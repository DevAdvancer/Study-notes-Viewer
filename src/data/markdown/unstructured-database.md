# Syllabus
## UNIT - 1
1. What is UDB?
2. Different types of UDB
3. Use cases and benefits of UDB
4. Data Models
5. Difference Between UDB and DB
6. Semi Structured Data
7. Adv and Disady of UDB
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

# UNIT - I

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
  3. Example: Nep4j.
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

def store_image():
  client = MonogoClient('monogdb://localhost:27017')
  db = client['imagedb']
  fs = gridfs.GridFS(db)

  with open('image.jpg', 'rb') as image_file:
    image_data = image_file.read()

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

def store_image_as_base64():
  client = MongoClient('monogdb://localhost:27017')
  db = client('imagedb')
  collection = db['images']

  with open('image.jpg', 'rb') as image_file:
    base64_image = base64.b64ncode(image_file.read()).decode('utf-8')

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
To be done after ML : ) thank for watching till here stay tuned...



---
##### Contributor Name - Abhirup Kumar
