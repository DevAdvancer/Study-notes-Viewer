> Book: Operating System Concepts by: Galvin and Silver Scerd
# Syllabus
### 1. Basics
- As a resource allocator
- Types of OS
- User and System view
- Basic Terminologies like BIOS, Kernel, Shell, etc.
- System Call
### 2. Process Management
- Process
- Therad
- CPU scheduling
- Deadlock
- Process Syncronization
### 3. Storage Management
- Basics of Memory
- Memory Management schemes
- Virtual Memory
- Disk Scheduling
### 4. I/O Management
- I/O communication
- I/O access techniques
### 5. Production and security
- Production
- Security

# UNIT 1

## Types of Operating Systems
### 1. Batch Operating Systems
![batchos](/images/batch-os.webp)

This type of operating system does not interact with the computer directly. There is an operator which takes similar jobs having the same requirements and groups them into batches. It is the responsibility of the operator to sort jobs with similar needs. Batch Operating System is designed to manage and execute a large number of jobs efficiently by processing them in groups. <br />
###### **Advantages:**
- Multiple users can share the batch systems.
- The idle time for the batch system is very less.
- It is easy to manage large work repeatedly in batch systems.
###### **Dis-Advantages:**
- CPU is not used efficiently. When the current process is doing IO, CPU is free and could be utilized by other processes waiting.
- The other jobs will have to wait for an unknown time if any job fails.
- In batch operating system, average response time increases as all processes are processed one by one.

### 2. Multi-Programming Operating Systems
![multiprogrammingos](/images/multi-programmingos.webp)

Multiprogramming Operating Systems can be simply illustrated as more than one program is present in the main memory and any one of them can be kept in execution. This is basically used for better utilization of resources. <br />
###### **Advantages:**
- CPU is better utilized and overall performance of the system improves.
- It helps in reducing the response time.
###### **Dis-Advantages:**
- Efficiently allocating CPU, memory, and I/O among multiple programs is challenging and prone to errors.
- Multiple programs competing for resources can cause delays in task execution.

### Time-Sharing Operating Systems (Logical Extension of Multi-Programming OS)
It is a type of Multiprogramming system with every process running in round robin manner. Each task is given some time to execute so that all the tasks work smoothly. Each user gets the time of the CPU as they use a single system. These systems are also known as Multitasking Systems. <br />
###### **Advantages:**
- Each task gets an equal opportunity.
- Fewer chances of duplication of software.
- CPU idle time can be reduced.
###### **Dis-Advantages:**
- Reliability problem.
- One must have to take care of the security and integrity of user programs and data.
- Data communication problem.

###### Multitasking
Time Sharing and Multiprogramming systems are also called multitasking sometimes as multiple tasks run in interleaving manner.
![multitasking](/images/multitasking.webp)

### 3. Multi-Processing Operating System
![multiprocessingos](/images/multiprocessingos.webp)

Multi-Processing is an approach to improving the efficiency and responsiveness of computing systems by dividing a single core CPU into multiple processes. This approach enables each process to execute its own code, parallelize its computation, and perform tasks concurrently instead of sequentially. <br />

###### **Advantages:**
- Reduced Wait Times
- Parallel Execution
- Cost Effective
- Better System Reliability
- Increased Scalability

###### **Dis-Advantages:**
- Complexity
- Hardware Overhead
- Memory Management
- Interprocess Communication
- Synchronization Issues

### Types of Multi-Processing System
#### 1. **Parallel Operating System**
- **Symetric-Multi Processor (SMP)**: In an SMP system, all processors in the system share a common memory space and clock cycle, allowing them to compete for access to this shared resources as if they were all located on a single processor. This is called parallel system.
- **Asymetric-Multi Processor (RMA)**: An RMA system is similar to an SMP system but with one or more of its processors having no direct access to the same common memory space and clock cycle as the others, thus allowing them to compete for access to shared resources while limiting each other's performance. The main difference between these two types is that in an RMA system, there can be multiple `rival` CPUs in the system (compared to only one in an SMP).
#### 2. Distributed Operating System

##### Definition:
A Distributed Operating System (OS) is an operating system that allows multiple computers to share resources and work together as a single system. It consists of multiple nodes or machines that are interconnected through a network, and each node runs the same OS instance.
###### Characteristics:
1. **Decentralization**: Each node in the distributed system operates independently, making decisions based on local information.
2. **Autonomy**: Nodes can join or leave the system at any time without affecting other nodes.
3. **Redundancy**: Data and resources are replicated across multiple nodes to ensure availability and fault tolerance.
4. **Communication**: Nodes communicate with each other using standardized protocols.
###### Types of Distributed Operating Systems:
1. **Client-Server Architecture**: A client node requests services from a server node, which provides access to shared resources.
2. **Peer-to-Peer Architecture**: All nodes in the system are equal and can request services from any other node.
3. **Cluster Architecture**: Multiple nodes work together to provide high availability and scalability.
###### Advantages:
1. **Scalability**: Distributed systems can scale horizontally by adding more nodes, making them ideal for large-scale applications.
2. **High Availability**: With multiple nodes, failures are less likely to bring the system down, ensuring high availability.
3. **Fault Tolerance**: Replicated data and resources ensure that the system remains operational even in case of node failure.
4. **Improved Security**: Distributed systems can implement redundancy and failover mechanisms to prevent data loss and unauthorized access.
###### Disadvantages:
1. **Complexity**: Distributed systems are more complex to manage, maintain, and troubleshoot than centralized systems.
2. **Latency**: Communication between nodes can introduce latency, affecting system responsiveness.
3. **Security Risks**: With multiple nodes, there is a higher risk of security breaches and unauthorized access.
4. **Data Consistency**: Ensuring data consistency across all nodes can be challenging in distributed systems.
###### Real-World Examples:
1. **Google's Compute Engine**: A cloud-based infrastructure that uses a distributed operating system to manage resources and ensure high availability.
2. **Apache Hadoop**: An open-source distributed computing framework used for big data processing and storage.
3. **Amazon Web Services (AWS)**: A cloud-based platform that uses a distributed operating system to provide scalability, high availability, and fault tolerance.


## Master-Slave Relationship

###### Definition
A configuration where one device (master) controls and manages data and resources, while other devices (slaves) replicate and provide backup functionality.
###### Components
1. **Master**:
- Primary controller
- Manages data and resources
- Replicates data to slave(s)
2. **Slave(s)**:
- Secondary controllers
- Replicate master's data
- Provide backup functionality

###### How it Works
1. **Data Replication**: Master device replicates data to one or more slave devices.
2. **Master-Slave Communication**: Master device sends requests to slave device(s) for processing and response.
3. **Slave Device Control**: Slave devices can control specific resources or services.
###### Advantages
- High Availability: Data is protected by replication on multiple slave devices.
- Scalability: Adding new slave devices increases overall system capacity.
- Data Protection: Data is replicated across multiple devices, ensuring high availability.
###### Challenges
- Synchronization: Synchronizing data between master and slave devices can be challenging.
- Conflict Resolution: Conflicts may arise when updating data on one device while another is accessing it.
- Maintenance and Upgrade: Master-slave relationships require regular maintenance and upgrades.

###### Real-World Examples
- Google's Bigtable
- Amazon Web Services (AWS)
- Microsoft Azure
#### 4. Hand-Help System

A hand-help system is an artificial intelligence (AI) solution that uses machine learning algorithms to assist humans in performing tasks or making decisions, especially when the tasks are repetitive and require little-to-no judgment. It can be applied across various fields like healthcare, manufacturing, customer service, financial services, and more.

Advantages of Hand-Help Systems include:

1. **Efficiency**: These systems automate tedious tasks, reducing human error and increasing productivity.
2. **Cost-effectiveness**: They often cost less than hiring additional staff for similar tasks.
3. **Scalability**: As the workload increases or teams expand, the system can adapt to handle more users.

4. **Accuracy**: AI-driven systems are capable of making decisions based on data, thus enhancing their accuracy compared to human decision-making processes.

Disadvantages of Hand-Help Systems include:

1. **Training**: Implementing and maintaining an AI system can be complex, requiring specialized training.
2. **Privacy Concerns**: The use of personal health data or other sensitive information may raise concerns regarding privacy and security.
3. **Adaptation**: As technology evolves, new systems need to be trained regularly, which can become costly.

4. **Bias**: AI models are subject to bias due to the data used for training, hence creating an ethical dilemma in decision-making scenarios where fairness is crucial.
#### 5. Real-Time System

A real-time system is a computer system or software that processes input information at the same rate it receives new input from external sources such as data streams, sensors, and network traffic without waiting for its output to be completed.

Advantages of Real-Time Systems include:

1. **High Performance**: Since real-time systems have to process events occurring in real time, they must respond quickly, often under pressure or emergency conditions.
2. **Reliability**: In case of critical errors, data loss is not a risk since the system processes information as it arrives.

3. **Real-Time Applications**: They are used for applications that require immediate response from users, such as video streaming services, online trading platforms, and real-time operational systems in industries like healthcare or manufacturing.

Disadvantages of Real-Time Systems include:

1. **Complexity**: Designing and implementing a real-time system can be challenging due to the high demands on performance.
2. **Resource Management**: Real-time systems require efficient use of resources, including CPU time, memory, and I/O operations, to ensure they can handle additional data or commands as needed.

3. **Costs**: Implementing and maintaining real-time systems might incur significant costs in terms of hardware, software, training personnel, and ongoing monitoring services.
4. **Accuracy**: Real-time systems have to meet stringent timing requirements for their response times, which can lead to delays if not properly managed or monitored.

5. **Complexity**: The complexity associated with handling time-sensitive data could lead to more complex system architectures that require additional software or hardware resources.

## Memory Hirerchy
![MemoryHirerchy](/images/memoryHirerchy.png)

# Process Management
A program at the time of execution

## Process Control Block
## States of a Process
There are five states of a process

# Types of Process
- Independent
- Co-Operating: (IPC) Inter-process Communication.

### CPU SCHEDULING
1. First come first serve (QUEUE TECHNIQUE)
2. Shortest job first.
3. Shortest remaining time first.
4. Round robin scheduling.
5. priority scheduling.

### Non - Premitive
1. First come first serve (QUEUE TECHNIQUE)
2. Shortest job first.

### premitive
1. Shortest remaining time first.
2. Round robin scheduling.
3. priority scheduling.

### 1. First come first serve (QUEUE TECHNIQUE)
##### Given the table below find out the average waiting time, response time, and turn-around time for 5 process and also show the GNADD chart. Assume all the processes have arrived in the system at time 0.
![FCFS](/images/FCFS.png)
=> <br />
The GANDD chart is as follows:
![GANNDCHART](/images/GANDDchartfcfs.png)
Response time calculation:
1. Response time of P1 = 0 - 0 = 0 mS
2. Response time of P2 = 10 - 0 = 10 mS
3. Response time of P3 = 23 - 0 = 23 mS
4. Response time of P4 = 28 - 0 = 28 mS
5. Response time of P5 = 42 - 0 = 42 mS

Therefore, Avg response time = 69.4 <br />
Average waiting time - Since, it's non-premitive scheduling algorithm, waiting time will be same as response time = 69.4 <br />
Average Turn around time: (Waiting time + Response time + Brust time)
1. Turn around time of P1 = 0 + 0 + 10 = 10
2. Turn around time of P2 = 10 + 13 = 23
3. Turn around time of P3 = 23 + 5 = 28
4. Turn around time of P4 = 28 + 14 = 42
5. Turn around time of P5 = 42 + 7 = 49

### 2. Shortest Job First

### 3. Round robin scheduling
Turnaround time = brust time + waiting time + response time

### 4. Priority Algortihm


### 5. Shortest remaining time first


## Multilevel Queue Scheduling
---

## Memory Management Schemes

## Disk Scheduling Algorithm
1. FCFS
2. SSTF
3. SCAN
4. C-SCAN
5. LOOK
6. C-LOOK

Q1. Consider a Disk Queue with request for I/O to blocks on cylinders 98, 183, 37, 122, 14, 124, 65, 67 in that order. The present position of disk head at cylinder 53. <br />
-> <br />
Head Moments = From 53 -> 98 -> 183 -> 37 -> 122 -> 14 -> 124 -> 65 -> 67 <br />
Total = 45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 640 cylinders. <br />
Average Head Movement = 640 / 8 = 80 cylinders. <br />




---
##### Contributor Name - Abhirup Kumar
