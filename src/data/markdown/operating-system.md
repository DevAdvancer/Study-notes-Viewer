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


---
##### Contributor Name - Abhirup Kumar
