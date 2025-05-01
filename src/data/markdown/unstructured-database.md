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

## Extracting Structured Infromation From Unstructured Data
Extracting Structured information from unstructured data involves using various techniques to identify, extract, and organize meaningful patterns and entities from freeform text, images, audio, or other unstructured sourses.

## Handling Multimedia (GridFS & Base64)
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
