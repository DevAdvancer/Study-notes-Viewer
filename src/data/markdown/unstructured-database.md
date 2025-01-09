# Introduction
- what is data? anything can be data
- database - a platform where we store data
- There are two kinds of database - structured database and unstructured database
- why unstructured database?
    - Faster
    - Easier to scale
    - Not rigid
- why not unstructred database (disadvantages)?
    - need to define some structure later on to be consumed properly by programs
    - not the best with join like queries
- Types of unstructured database
    - graph DB - neo4j
    - columnar DB - cassandra
    - document based DB - mongoDB (The one we will talk about mostly)
    - key value pair - Redis
    - time series data - InfluxDB
- Use of unstructred database
    - huge amount of read writes of data is there
    - data is distributed
    - sensor data


### Honorable mentions in class

[Discord switching from cassandra to scylla db](https://www.scylladb.com/tech-talk/how-discord-migrated-trillions-of-messages-from-cassandra-to-scylladb/)

[Facebook Tao - graph database](https://engineering.fb.com/2013/06/25/core-infra/tao-the-power-of-the-graph/)

## How it works:-
- Key value pair database - redis
    - Uses key value pair like dictionaries and hash maps
    - extremely fast cause mostly in memory
    - redis
    - localstorage in web works similar

- Document based
    - mainly two kinds of documents - JSON and XML - JSON is predominantly used for Document based database
- Javascript deep copy vs shallow copy
    - Normal copy/reference
    ```js
    let obj1 = { name: "John", age: 30 };
    let obj2 = obj1;  // obj2 is a reference to obj1
    obj2.age = 31;
    console.log(obj1.age); // 31
    console.log(obj2.age); // 31
    ```
    - Shallow copy
    ```js
    let obj1 = { name: "John", age: 30, address: { city: "New York" } };
    let obj2 = Object.assign({}, obj1);  // Shallow copy

    obj2.age = 31;
    obj2.address.city = "Los Angeles";

    console.log(obj1.age);               // 30
    console.log(obj1.address.city);      // "Los Angeles"
    console.log(obj2.age);               // 31
    console.log(obj2.address.city);      // "Los Angeles"
    ```
    - deep copy
    ```js
    let obj1 = { name: "John", age: 30, address: { city: "New York" } };
    let obj2 = JSON.parse(JSON.stringify(obj1));  // Deep copy

    obj2.age = 31;
    obj2.address.city = "San Francisco";

    console.log(obj1.age);               // 30
    console.log(obj1.address.city);      // "New York"
    console.log(obj2.age);               // 31
    console.log(obj2.address.city);      // "San Francisco"
    ```
## Disadvantage of Unstructured Database
- **Unstructured data has no predefined structure** : In an unstructured database, there are no specific rules defining the way data is structured within tables or fields. This means it's difficult to create a consistent format for each individual document in the database, leading to variations in information.
- **Lack of uniformity and consistency** : With unstructured databases, different documents may not have the same level of detail or be formatted exactly as required by the exam. This lack of uniformity can affect the quality of the data used for analysis and interpretation.
- **Interpretation challenges** : If questions in an examination are based on a variety of unstructured documents, it's challenging to ensure that all students have access to the same source materials or use the right level of detail in their responses.
- **Time-consuming for reviewers** : For reviewers, sorting through potentially hundreds or thousands of individual documents to find relevant data can be time-consuming and confusing. This process may lead to errors or misinterpretations if not done carefully.
- **Increased administrative burden** : Managing and maintaining a large database with unstructured information requires additional effort in terms of cataloging, indexing, searching, and updating. This can increase the workload for exam organizers and administrators responsible for the examination.
- **Lack of standardized format** : Without an organized structure, it's harder to standardize marking rubrics or grading criteria, which is crucial for consistency across different students' scores.
