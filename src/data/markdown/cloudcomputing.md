# Syllabus

## Unit I: Introduction

- Definition and evolution of Cloud Computing
- Enabling Technologies
- Service and Deployment Models
- Popular Cloud Stacks and Use Cases
- Benefits, Risks, and Challenges of Cloud Computing
- Economic Models and SLAs
- Topics in Cloud Security
- Common cloud providers and their cloud stacks and use case scenarios

## Unit II: Cloud Infrastructure

- Historical Perspective of Data Centers
- Datacenter Components: IT Equipment and Facilities
- Design Considerations: Requirements, Power, Efficiency, Redundancy
- Power calculations, PUE (Power Usage Effectiveness)
- Challenges in Cloud Data Centres
- Cloud Management and Cloud Software Deployment Considerations

## Unit III: Virtualization

- Virtualization concepts for CPU, Memory, I/O
- Case Study: Amazon EC2
- Software Defined Networks (SDN)
- Software Defined Storage (SDS)

## Unit IV: Cloud Storage

- Introduction to Storage Systems
- Cloud Storage Concepts
- Distributed File Systems (HDFS, Ceph FS)
- Cloud Databases (HBase, MongoDB, Cassandra, DynamoDB)
- Cloud Object Storage (Amazon S3, OpenStack Swift, Ceph)

## Unit V: Programming Models

- Distributed Programming for the Cloud
- Data-Parallel Analytics with Hadoop
- MapReduce (YARN)
- Iterative Data-Parallel Analytics with Apache Spark
- Graph-Parallel Analytics with GraphLab 2.0 (PowerGraph)
---
## Unit 1: Introduction
### Definition of Cloud Computing:
Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, and services). These resources can be rapidly provisioned and released with minimal management effort or service provider interaction.

### Evolution of Cloud Computing:

- The roots of cloud computing trace back to the concepts of time-sharing and utility computing from the 1950s and 1960s.
- In the 1990s, the internet and web technology advances drove the growth of web-based services, setting the stage for cloud computing.
- Early 2000s saw the emergence of large data centers and virtualization technology, helping create scalable and elastic IT resources.
- Major cloud service providers like Amazon Web Services (launched in 2006) revolutionized access to computing resources.
- Over time, cloud computing evolved into different service models and deployment models, reflecting customer needs for flexibility, cost-efficiency, and scalability.

### Enabling Technologies:
Cloud computing relies on several key technologies that make its benefits possible:

- Virtualization: Allows creation of virtual versions of physical resources like servers, storage, and networks, enabling resource pooling and dynamic allocation.

- Broad Network Access: Cloud services are accessible over the internet or private networks from various devices such as laptops, smartphones, and tablets.

- Service-Oriented Architecture (SOA): Cloud applications are designed as collections of services that interact over standardized protocols, enabling modularity and reuse.

- Web Services and APIs: Essential for interacting with cloud resources programmatically, enabling integration and automation.

- Distributed Computing: Ability to run processes on multiple machines for scalability and fault tolerance.

- Data Center Technology: Large-scale infrastructure including powerful servers, storage systems, and networking equipment managed efficiently.

- Security Technologies: Technologies like encryption, identity management, and firewalls ensure secure access and data protection in the cloud.

### Service Models:

- **Infrastructure as a Service (IaaS)**: IaaS provides virtualized computing resources over the internet. It delivers hardware infrastructure such as servers, storage, and networking on a pay-as-you-go basis. Users have control over operating systems, storage, and deployed applications but do not manage the underlying cloud infrastructure. It suits companies needing flexible hardware without capital investment.
Example: Amazon EC2, Microsoft Azure Virtual Machines.

- **Platform as a Service (PaaS)**: PaaS offers a development and deployment environment in the cloud, with resources that enable customers to build, test, and deploy applications quickly without managing the underlying infrastructure. It provides middleware, development tools, and database management services. This model helps developers focus on coding and business logic.
Example: Google App Engine, Microsoft Azure App Services.

- **Software as a Service (SaaS)**: SaaS delivers software applications over the internet, managed entirely by a third party. Users access software through web browsers, with no need for installation or maintenance. SaaS is ideal for end-users wanting ready-to-use solutions without concern for underlying technology.
Example: Gmail, Salesforce CRM.

### Deployment Models:

- **Public Cloud**: Public clouds are owned and operated by third-party cloud service providers, delivering services over the internet to multiple customers or tenants. They offer scalability and cost advantages but may have security and compliance concerns for sensitive data. Users share computing resources in a multi-tenant environment.
Example: Amazon Web Services (AWS), Google Cloud Platform.

- **Private Cloud**: Private clouds are dedicated environments used exclusively by a single organization. They can be hosted on-premises or at a third-party data centre. Private clouds provide enhanced security, control, and customization, making them suitable for organizations with strict compliance or performance requirements.
Example: VMware-based private clouds, OpenStack.

- **Hybrid Cloud**: Hybrid clouds integrate public and private clouds, enabling data and application portability between them. This model allows businesses to leverage the cost-effectiveness of public clouds while keeping sensitive operations in private clouds. Hybrid clouds support dynamic workloads and disaster recovery.
Example: A company using private cloud for confidential data and public cloud for web hosting.

- **Community Cloud**: Community clouds are shared by several organizations with common concerns like mission, security requirements, or compliance considerations. They can be managed internally or by a third party and provide a collaborative environment while balancing cost and security.
Example: Cloud for government agencies or healthcare organisations.

### Difference between Service Model vs Deployment Models
| Aspect | Service Models | Deployment Models |
| :-- | :-- | :-- |
| **Purpose** | Define the level of cloud services provided | Define the ownership and access model |
| **Types** | IaaS, PaaS, SaaS | Public, Private, Hybrid, Community |
| **Control Level** | Varies: IaaS (most control), SaaS (least control) | Varies: Private (most control), Public (least control) |
| **User Responsibility** | IaaS: Manage OS/applications; PaaS: Manage apps; SaaS: Use apps only | Depends on deployment: Private requires more management by organization |
| **Cost Model** | Pay-as-you-go based on resource consumption | Varies: Public is pay-per-use; Private may involve CAPEX; Hybrid mixes both |
| **Security** | Managed by provider, user responsibility varies | Private offers highest security, Public lowest |
| **Examples** | AWS EC2 (IaaS), Google App Engine (PaaS), Gmail (SaaS) | AWS (Public), VMware (Private), Hybrid integration |

### Difference between Different Service Models.
| Aspect | Infrastructure as a Service (IaaS) | Platform as a Service (PaaS) | Software as a Service (SaaS) |
| :-- | :-- | :-- | :-- |
| **Definition** | Provides virtualized hardware resources like servers, storage, and networks. | Provides a platform with tools and environment for app development and deployment. | Provides fully functional software applications over the internet. |
| **User Control** | High control over OS, applications, and configurations. | Control mainly over deployed applications; underlying OS and infrastructure are managed by provider. | Minimal control; users use the application without managing infrastructure or platforms. |
| **Management** | Users manage OS, runtime, middleware, and applications; provider manages hardware. | Provider manages OS, middleware, runtime; users manage applications only. | Provider manages everything; users just use the software. |
| **Flexibility** | Most flexible; suitable for custom infrastructure needs. | Limited to platform features and tools offered. | Least flexible; software usage as provided. |
| **Examples** | Amazon EC2, Microsoft Azure VMs | Google App Engine, Microsoft Azure App Services | Gmail, Salesforce, Dropbox |
| **Use Cases** | Organizations needing scalable hardware resources and custom stack. | Developers building and deploying applications without managing infrastructure. | End-users needing ready-to-use applications. |

## Difference between Different Deployment Models.

| Aspect | Public Cloud | Private Cloud | Hybrid Cloud | Community Cloud |
| :-- | :-- | :-- | :-- | :-- |
| **Definition** | Cloud services offered over the public internet, accessible to any user. | Cloud infrastructure used exclusively by one organization. | Combination of private and public clouds. | Shared cloud infrastructure for a specific group with common concerns. |
| **Ownership** | Owned and operated by third-party providers. | Owned or leased by a single organization. | Mixed ownership. | Owned/shared by a community of organizations. |
| **Access** | Open access to general public or large industry group. | Restricted access to a single organization. | Controlled access, depending on workload location. | Shared access among community members. |
| **Security** | Lower than private; depends on provider’s security. | High security; dedicated infrastructure. | Medium; sensitive data in private cloud, others in public. | High; tailored to community’s security needs. |
| **Cost** | Low upfront cost; pay-as-you-go model. | Higher upfront investment and maintenance cost. | Balanced cost depending on usage split. | Shared costs among community members. |
| **Use Cases** | Web hosting, email, and general SaaS apps. | Sensitive data, regulatory compliance, legacy apps. | Disaster recovery, bursting workloads, mixed environments. | Government agencies, healthcare, financial institutions with shared concerns. |

### Popular Cloud Stacks:
Cloud stacks are comprehensive sets of software and tools used to build and manage cloud environments. Some well-known cloud stacks include:

- Amazon Web Services (AWS): The largest and most widely used cloud platform offering compute, storage, databases, analytics, and AI services.
- Microsoft Azure: Integrated cloud services and solutions with a strong presence in enterprise environments and hybrid cloud.
- Google Cloud Platform (GCP): Known for data analytics, AI, and machine learning services along with global infrastructure.
- OpenStack: Open-source cloud computing platform for private and public clouds, widely used for creating customisable cloud environments.
- VMware Cloud: Popular for virtualization-based private clouds and hybrid cloud solutions.

### Use Cases:

- Web Hosting: Hosting websites and web applications with global accessibility and scalability.
- Disaster Recovery and Backup: Cloud as a cost-efficient option for data backup and business continuity.
- Big Data Analytics: Processing and analyzing large datasets with scalable compute and storage.
- Development and Testing: Rapid provisioning of development environments to speed up software delivery.
- Content Delivery Networks (CDNs): Distributing content globally to improve access speed and reliability.
- Internet of Things (IoT): Managing IoT device data and analytics over scalable cloud platforms.
- Enterprise Applications: Running ERP, CRM, and collaboration tools with reliable cloud services.

### Benefits of Cloud Computing:

- Cost Efficiency: Reduces capital expenditures by using a pay-as-you-go model for IT resources.
- Scalability and Elasticity: Allows dynamic scaling of resources to match workload demands.
- Accessibility: Enables access to applications and data from anywhere with internet connectivity.
- Disaster Recovery and Backup: Provides reliable backup and recovery options with minimal effort.
- Automatic Software Updates: Cloud providers manage regular software and security updates.

### Risks of Cloud Computing:

- Security and Privacy: Data stored in the cloud may be vulnerable if not properly secured.
- Compliance: Meeting regulatory requirements can be complex in multi-tenant environments.
- Vendor Lock-in: Dependence on a single cloud provider may make switching difficult.
- Downtime and Reliability: Service outages can impact availability of applications.

### Challenges:

- Data Transfer and Latency: Moving large data volumes can be slow and costly.
- Limited Control: Users may have limited control over infrastructure and data management.
- Integration with Existing Systems: Combining cloud and on-premises infrastructures can be complex.
- Management Complexity: Managing multi-cloud and hybrid environments requires advanced skills.

### Economic Models:

Cloud computing offers flexible economic models that help organizations optimize costs:
- Pay-as-you-go: Users pay only for the resources and services they consume, eliminating investments in idle capacity.
- Subscription Model: Fixed periodic payments (monthly or yearly) for access to cloud services or software.
- Reserved Instances: Users can reserve resources at discounted rates for longer-term commitments.
- Spot Pricing: Users bid for spare cloud capacity at discounted prices, ideal for flexible workloads.

### Service Level Agreements (SLAs):

SLAs are formal contracts between cloud providers and users that define service expectations, including:
- Uptime/Availability: Guaranteed minimum percentage of service availability (e.g., 99.9%).
- Performance: Metrics such as response time, throughput, and latency.
- Support: Levels of technical support and response times.
- Data Security: Policies on data protection, privacy, and compliance standards.
- Penalties: Compensation or service credits in case SLA violations occur.

### Cloud Security Overview:
Securing cloud environments is critical due to the multi-tenant nature and internet accessibility of cloud services. Key cloud security aspects include:

- Data Protection: Encryption of data at rest and in transit to prevent unauthorised access.
- Identity and Access Management (IAM): Controls user access through authentication, authorisation, and role-based access.
- Network Security: Use of firewalls, intrusion detection/prevention systems, and secure VPNs to protect cloud networks.
- Compliance and Auditing: Ensuring cloud deployments adhere to regulatory requirements and conducting regular security audits.
- Threat Detection and Incident Response: Monitoring for security breaches and having plans to respond to incidents quickly.
- Shared Responsibility Model: Security responsibilities are divided between cloud providers and clients, varying by service model.

### Common Cloud Providers:

- Amazon Web Services (AWS): The largest cloud provider with a broad range of services including computing (EC2), storage (S3), databases (RDS), machine learning, and IoT. Used widely by startups to enterprises for hosting, analytics, and AI applications.
- Microsoft Azure: A strong enterprise-focused cloud platform offering integrated tools for app development, AI, blockchain, and hybrid cloud solutions. Popular among organizations with Microsoft software stacks.
- Google Cloud Platform (GCP): Known for big data and machine learning services with tools like BigQuery and TensorFlow. Well-suited for data analytics and containerized applications.
- IBM Cloud: Provides cloud computing with focus on AI, blockchain, and hybrid cloud across public and private sectors.
- Oracle Cloud: Cloud services optimized for Oracle applications and databases, targeting enterprise workloads.

### Use Case Scenarios:

- Startups: Cost-effective development and scaling via AWS or GCP.
- Enterprise IT: Hybrid cloud with Azure or IBM for legacy app integration and compliance.
- Data Analytics: GCP and AWS for processing large datasets and machine learning projects.
- Web Hosting and Content Delivery: AWS CloudFront and Azure CDN services for fast content delivery.
- Backup and Disaster Recovery: Affordable and scalable backup solutions using cloud storage services.

## Sample Questions from UNIT - 1
### 2 marks questions
1. What is cloud computing?
2. Name three cloud service models
3. What is a public cloud?
4. What does SLA stand for?

### 5 marks questions
1. Explain the difference between IaaS, PaaS, SaaS.
2. List Benefits and risks of cloud computing.
3. What are the key characteristics of private and hybrid clouds?

### 10 marks questions

1. Describe the enabling technologies of cloud computing and with their roles.
2. Explain the economic models and SLA components in cloud computing.
3. Discuss the common cloud providers, their cloud stacks, and typical use case scenarios.


## UNIT - 2 Cloud Infrastructure
### Data Centers in Cloud Computing
#### Definition and Role:
A data center is a physical facility used to house critical applications and data. In cloud computing, data centers are massive, centralized hubs of computing power and storage operated by cloud providers like AWS, Google Cloud, and Microsoft Azure. Instead of maintaining their own server rooms, organizations rent resources from these global cloud data centers to gain scalability, reliability, and cost efficiency.

#### Components of a Cloud Data Center:

1. IT Equipment (The "Brain")

- Servers: High-density racks of computers that form the backbone of cloud services, virtualized to create virtual machines (VMs) and containers.
- Storage Systems: Include hard disk drives (HDDs) for bulk storage and solid-state drives (SSDs) for high-performance needs, using technologies like SAN (Storage Area Network) and NAS (Network Attached Storage).
- Networking Equipment: Includes switches and routers to manage traffic within and outside the data center, load balancers for distributing traffic, firewalls for security, and specialized compute accelerators like GPUs and FPGAs.

2. Facilities / Support Infrastructure (The "Body")

- Power Subsystem: Includes utility power, backup generators, uninterruptible power supplies (UPS), and power distribution units (PDUs) to ensure continuous power.
- Cooling Subsystem: Systems like CRAC/HVAC units, chillers, cooling towers, advanced cooling methods such as aisle containment and liquid cooling prevent overheating.
- Physical Security: Multi-layered access control (biometrics, key cards), surveillance, and perimeter security.
- Network Connectivity: Redundant fiber optic links ensure no single point of failure in internet connectivity.

### Cloud Abstraction:
Users interact with an abstracted pool of resources managed via software layers (virtualization, orchestration) rather than the physical infrastructure directly. Resources like compute, storage, and networking are managed via web portals or APIs.

#### Design Considerations for Data Centers:

- Availability and reliability targets often measured in “nines” (99.9%, 99.99%, etc.)
- Scalability to grow capacity without full redesign
- Power density support for high-performance servers
- Energy efficiency measured through metrics like Power Usage Effectiveness (PUE)
- Maintainability with modular components and minimal downtime
- Security, compliance, and physical protection
- Geographic factors including proximity to network backbones and risk of natural disasters
- Budget and cost trade-offs between capital expenditure (CapEx) and operational expenditure (OpEx)

### Design Considerations for Data Centers
#### Key Design Requirements:

- Availability, Reliability, and Uptime: Often measured in “nines” such as 99.9%, 99.99%, or 99.999% uptime. Data center redundancy (N, N+1, N+2, 2N) is designed accordingly to avoid failures.
- Scalability and Modularity: Ability to expand compute, storage, power, and cooling capacity over time without full redesign.
- Density and Power per Rack: Modern servers, especially for AI and GPU workloads, draw several kilowatts; facilities must support high-density racks.
- Energy Efficiency: Important to minimize operational costs and environmental impact; metrics include Power Usage Effectiveness (PUE) and Carbon Usage Effectiveness (CUE).
- Maintainability: Data centers use modular and hot-swappable components allowing maintenance without downtime.
- Manageability and Monitoring: Use of sensors, alarms, automation, and data center infrastructure management (DCIM) tools for operational efficiency.
- Flexibility and Heterogeneity: Support multiple workloads, including compute, storage, and accelerators, and allow easy technology upgrades.
- Geographic Site Selection: Considerations include proximity to network backbones, low power costs, natural disaster risks, cooling climate, connectivity, and regulatory compliance.
- Security and Compliance: Multiple security zones, fire suppression, intrusion detection, and adherence to standards like ISO and Uptime Institute.
- Budget: Tradeoffs between capital expenditure and operating costs must be carefully managed.

### Power Design and Redundancy:

1. Redundancy Models:
- N: Exactly enough capacity, no spares.
- N+1: One extra component above needed (e.g., one spare UPS).
- N+2, 2N, 2(N+1): Increasing levels of redundancy for fault tolerance.
2. Concurrent Maintainability: Ability to maintain or replace components without impacting operations.
3. Fault Tolerance: Systems like UPS, generators, and switchgear handle failures smoothly.
4. Power Budgeting: Estimating current and future IT loads including growth factors and efficiency losses.
5. Power Distribution Topology: Includes arrangements like busways, ring feeders, and segmentation.
6. Backup Battery Sizing: UPS backup duration (typically 5-15 minutes) with appropriate capacity and safety margins.
7. Generator Sizing: Should sustain the full load for extended durations (24-72 hours) plus margin.

### Cooling Design and Efficiency:

- Thermal Management: Cold/hot aisle containment, separation of supply and return air, avoiding air recirculation.
- Chilled Water Systems: Properly sized chillers, pumps, and cooling towers.
- Advanced Cooling: Liquid cooling, evaporative cooling, and use of economizers to reduce chiller load.
- Variable-Speed Fans/Pumps: Adjust cooling capacity dynamically based on IT load.
- Humidity and Dew Point Control: Prevent static or condensation issues.
- Energy Efficiency Tradeoffs: Balancing cooling efficiency with IT hardware reliability.

### Efficiency Metrics and Power Calculations:

- Power Usage Effectiveness (PUE): Ratio of total facility power to IT equipment power. Ideal is 1.0; good data centers achieve 1.1–1.3.
- Other Metrics: Carbon Usage Effectiveness (CUE), Green PUE incorporating renewable energy use.
- Example Calculation: For 500 kW IT load with total facility load of 650 kW, PUE = 1.3.

### Challenges in Cloud Data Centers
Key Challenges:

- Scalability and Resource Management: Managing rapidly growing workloads and dynamically allocating physical and virtual resources efficiently.
- Energy Consumption: Data centers consume significant energy; optimizing for power and cooling efficiency is critical to reduce costs and environmental impact.
- Heat Dissipation and Cooling: Managing heat generated by high-density server racks is challenging; requires advanced cooling techniques to maintain reliability.
- Network Bottlenecks: Ensuring low latency and high bandwidth within data centers and between global sites is vital for cloud performance.
- Security Threats: Protecting physical infrastructure and multi-tenant environments from cyberattacks and unauthorized access.
- Data Privacy and Compliance: Adhering to legal and regulatory requirements related to data sovereignty and privacy laws.
- Fault Tolerance and Disaster Recovery: Designing for hardware failures, natural disasters, and other disruptions to maintain service availability.
- Hardware Failures and Maintenance: Frequent hardware failures require sophisticated monitoring and rapid replacement strategies to avoid downtime.
- Cost Management: Balancing capital and operational expenditures while meeting service level agreements and performance goals.
- Complex Management and Monitoring: Coordinating multiple layers of hardware, software, and network components requires advanced automation and management tools.

### Cloud Management and Cloud Software Deployment Considerations
#### Cloud Management:
Managing cloud infrastructure involves coordinating compute, storage, network, and security resources to ensure efficient and reliable service delivery. Key aspects include:
- Provisioning and Orchestration: Automating the allocation, configuration, and deployment of cloud resources using tools like Kubernetes, OpenStack, or proprietary orchestrators.
- Monitoring and Analytics: Continuously tracking performance, availability, resource utilization, and detecting anomalies to maintain SLAs.
- Security Management: Implementing policies for identity, access control, encryption, and compliance monitoring.
- Cost Management: Tracking and optimizing resource usage to control cloud spending.
- Backup and Disaster Recovery: Ensuring data resilience with regular backups and recovery plans.

#### Cloud Software Deployment Considerations:

- Automation: Use of Infrastructure as Code (IaC) tools like Terraform or Ansible to consistently deploy environments.
- Scalability: Designing software to scale horizontally or vertically in response to load changes.
- Multi-tenancy: Ensuring isolation and security between users sharing the same software platform.
- Continuous Integration/Continuous Deployment (CI/CD): Enabling rapid, automated software updates without downtime.
- Compatibility and Portability: Using containerization (e.g., Docker) to enable software to run uniformly across environments.
- Performance Optimization: Balancing latency, throughput, and resource consumption for user experience.

## Sample Questions from UNIT - 2
### 2 marks questions
1. What are the two fundamental layers of a cloud data center?
2. Name two components of the power subsystems in a data center
3. What does PUE stand for?
4. What is the purpose of load balancers in data centers?

### 5 Marks questions
1. Explain the key components of IT equipment in a cloud data center.
2. List and describe three design considerations for data centers.
3. What are the major challenges faced by cloud data centers?

### 10 Marks questions
1. Describe the design considerations and power management strategies involved in modern data centers.
2. Explain the components and roles of the support infrastructure in a cloud data center.
3. Discuss cloud management and software deployment considerations in cloud infrastructure.

## UNIT - 3 Virtualization
### Virtualization Concepts for CPU, Memory, and I/O
#### Virtualization Overview:
Virtualization is the creation of virtual versions of physical computing resources such as CPUs, memory, storage, and network interfaces. It abstracts hardware to run multiple operating systems and applications on a single physical machine efficiently and securely.

#### CPU Virtualization:

- Allows multiple virtual CPUs (vCPUs) to share physical CPU cores.
- Techniques include time-sharing, binary translation, and hardware-assisted virtualization (using CPU extensions like Intel VT or AMD-V).

#### Memory Virtualization:

- Uses a virtual memory manager to map virtual addresses used by VMs to physical memory.
- Supports memory overcommitment and techniques like ballooning to optimize usage.

#### I/O Virtualization:

- Virtualizes devices like network cards and disks to be shared across multiple VMs.
- Includes device emulation, para-virtualization, and hardware-assisted I/O virtualization (e.g., SR-IOV).

#### Advantages:

- Improved resource utilization and efficiency.
- Isolation and security between VMs.
- Simplified management and automation for cloud environments.

### Case Study - Amazon EC2

#### Amazon Elastic Compute Cloud (EC2):
Amazon EC2 is a prominent example of Infrastructure as a Service (IaaS) that provides scalable virtual servers known as instances. It allows users to rent virtual machines with configurable compute capacity in the cloud for flexible, on-demand usage.

#### Key Features:

- Offers a variety of instance types optimized for compute, memory, storage, or GPU needs.
- Supports automatic scaling through Amazon Auto Scaling groups to match workload demands.
- Provides multiple storage options like Amazon EBS (Elastic Block Store) for persistent volumes.
- Integrates with Amazon Virtual Private Cloud (VPC) for network isolation and security.
- Users can choose operating systems, install software, and configure networking as needed.

#### Benefits:

- Rapid provisioning and deployment of virtual servers.
- Pay-as-you-go pricing model reduces capital expenses.
- High availability across multiple geographic regions and availability zones.
- Supports integration with other AWS services for building comprehensive cloud applications.

### Software Defined Networks (SDN)

#### Definition:
Software Defined Networking (SDN) is an approach that separates the network control plane from the forwarding plane, enabling programmable and centralized network management.

#### Key Components:

- SDN Controller: Centralized software that manages and controls the network by communicating with network devices using protocols like OpenFlow.
- Data Plane: Network devices (switches, routers) that forward traffic based on controller instructions.
- Northbound APIs: Interfaces between SDN controller and applications or orchestration layers for policy enforcement and automation.
- Southbound APIs: Interfaces between the SDN controller and physical or virtual network devices.

#### Benefits:

- Flexibility and Agility: Network administrators can program network behavior dynamically.
- Simplified Management: Centralized control reduces complexity in network configuration and maintenance.
- Enhanced Security: Easier to implement and enforce security policies uniformly.
- Cost Efficiency: Reduces reliance on specialized hardware by using commodity switches.

### Software Defined Storage (SDS)
#### Definition:
Software Defined Storage (SDS) abstracts and virtualizes storage resources, decoupling storage hardware from the software that manages it, to create a flexible and scalable storage infrastructure.

#### Key Concepts:

- SDS manages storage as a unified pool of resources that can be provisioned and managed via software.
- Supports automated data placement, replication, tiering, and recovery without requiring hardware changes.
- Enables use of commodity hardware, reducing costs and vendor lock-in.

#### Benefits:

- Scalability: Easily scale storage capacity and performance independently of hardware.
- Flexibility: Supports heterogeneous storage devices and multiple storage protocols (block, file, object storage).
- Automation: Facilitates simplified management with policies for data protection, archiving, and disaster recovery.
- Cost-Effectiveness: Leverages less expensive hardware and reduces operational complexity.

## Sample Questions from UNIT - 3
### 2 marks questions
1. What is Virtualization?
2. Name three types of virtualization supported in cloud computing.
3. What is Amazon EC2?
4. What does SDN stand for?

### 3 marks questions
1. Explain CPU virtualization and it's importance in cloud computing?
2. What are the key features of Amazon EC2.
3. Describe the main components of Software defined networking (SDN).
4. What are the benifits of Software Defined Storage (SDS)

### 10 marks questions
1. Describe the concepts of CPU, memory and I/O virtualization and their significance in cloud infrastructure
2. Explain the architecture and key feature of Amazon EC2 as an IaaS offering.
3. Discuss Software Defined Networking(SDN) and Software Defined Storage (SDS)and their roles in cloud computing.

## UNIT 4: Cloud Storage
### Cloud Storage Overview
Cloud storage refers to storing data in large-scale data centers managed by cloud service providers. Instead of local, on-premises storage, cloud storage delivers scalable, reliable, and cost-efficient storage accessible over the internet. Cloud providers (AWS, Google Cloud, Azure) operate massive centralized data centers with advanced storage systems to meet diverse user needs.

Key Components of Cloud Storage Infrastructure
1. Storage Systems: Include high-capacity Hard Disk Drives (HDDs) for bulk storage and fast Solid-State Drives (SSDs) for high performance. Technologies used include Storage Area Networks (SAN) and Network-Attached Storage (NAS).
2. Networking Equipment: Ensures data flow within and outside data centers with switches, routers, load balancers, and firewalls.
3. Compute Accelerators: Hardware like GPUs for machine learning and FPGAs for high-speed processing.

### Software Defined Storage (SDS)
SDS abstracts storage software from hardware, pooling diverse physical storage into a single virtual pool managed programmatically. This enables flexibility, automation, scalability, and cost savings by using commodity hardware and dynamic resource allocation.

- Benefits: Flexibility to upgrade hardware independently, scalability, automation of management tasks, cost efficiency, and support for heterogeneous storage resources.

- Use Cases: Managing large, distributed storage systems and optimizing storage utilization in cloud environments.

### Distributed File Systems: Hadoop Distributed File System (HDFS)
HDFS allows storage of extremely large data files across commodity hardware with fault tolerance and high throughput. It divides files into blocks (default sizes such as 128 MB), which are distributed and replicated across multiple nodes. Key components:

- NameNode (Master): Manages metadata and namespace, very reliable and high-memory system.
- DataNode (Slaves): Store actual data blocks and perform data operations.

The replication of blocks (default factor 3) provides fault tolerance by maintaining multiple copies of data across the cluster.

### Cloud Databases
Several database types support cloud storage with different architectures:

1. HBase: A column-oriented, open-source database modeled after Google’s BigTable. Ideal for sparse, big datasets, supporting scalability, versioning, compression, and distributed processing. Limitations include lack of SQL support and transaction handling.
2. MongoDB: Document-oriented NoSQL database storing data in flexible BSON format. Supports replication, sharding for scalability, indexing for performance, and aggregation operations. Offers wide language support and is used in real-time analytics and content management.
3. Apache Cassandra: Distributed NoSQL database with a masterless ring architecture supporting scalability, fault tolerance, and flexible data models.
4. Amazon DynamoDB: Fully managed NoSQL offering, provides fast and flexible performance, encryption, backups, and auto-scaling but has some operational limits compared to RDBMS.

### Cloud Object Storage
1. Amazon S3: Highly scalable, durable object storage supporting unlimited files (objects), versioning, lifecycle management, and access controls through buckets. Used for backup, big data, hosting static websites, and archiving.

2. OpenStack Swift: An open-source, distributed object storage system designed for large scale, cost-effective storage with horizontal scalability and built-in replication.

### Cloud Storage Concepts and Architecture
#### Cloud Storage Models:

1. Block Storage: Data is stored in fixed-size blocks, similar to traditional SAN systems. VMs and databases frequently use block storage for high performance and low latency.
2. File Storage: Provides a shared file system accessible over the network. Commonly used for home directories, content management systems, and media storage.
3. Object Storage: Stores data as objects with metadata and unique identifiers. It is highly scalable and suitable for unstructured data like multimedia, backups, and archives.

#### Characteristics of Cloud Storage:

1. Scalability: Can scale from gigabytes to petabytes with minimal effort.
2. Durability: Data replication and erasure coding ensure high durability against hardware failures.
3. Availability: Data center and geographic redundancy provide high availability.
4. Accessibility: Accessible from anywhere over APIs and web interfaces.
5. Cost-Efficiency: Pay-as-you-go pricing with varying tiers based on availability and performance.

#### Cloud Storage Architecture:

1. Data is distributed across multiple servers and data centers.
2. Uses metadata services to manage object locations and properties.
3. Supports consistent or eventual consistency models depending on use case.
4. Employs caching and CDN integration for improved data access speeds.

### Cloud Databases
Cloud databases are designed to provide database services that are scalable, available, and managed in cloud environments. They handle large volumes of structured, semi-structured, or unstructured data required by cloud applications.

#### Types of Cloud Databases:

1. Relational Databases (RDBMS): Traditional SQL-based databases like Amazon RDS, Azure SQL Database which run in the cloud and benefit from scalability and managed services. Ideal for transaction-heavy applications.
2. NoSQL Databases: These include Document stores, Column-family stores, Key-value stores, and Graph databases. They cater to flexible schema and horizontal scalability needs.

#### Popular Cloud NoSQL Databases:

1. HBase: Modeled after Google's BigTable, provides column-oriented storage atop Hadoop, supports massive scalability and data versioning.
2. MongoDB: Stores data as documents in JSON-like format; supports dynamic schemas and is widely used for web and mobile applications.
3. Cassandra: A decentralized, peer-to-peer database known for high availability and fault tolerance with tunable consistency.
4. DynamoDB: Amazon’s fully managed NoSQL database with high performance, automatic scaling, and integrated security.

#### Key Features:

1. Scalability: Supports horizontal scaling through sharding and replication.
2. Replication: Provides fault tolerance and disaster recovery via data replication across multiple nodes or geographies.
3. Consistency Models: Includes eventual consistency, strong consistency, or tunable consistency based on application needs.
4. Management and Maintenance: Cloud providers handle patching, backups, software upgrades, and hardware failures.

### Cloud Object Storage
##### Definition:
Cloud object storage is a data storage architecture that manages data as objects, unlike file systems that manage files in a hierarchy or block storage that manages data as blocks. Each object contains the data itself, metadata, and a unique identifier.

#### Characteristics:

1. Scalability: Designed to store vast amounts of unstructured data such as multimedia, backups, archives, and web content.
2. Metadata-rich: Each object has customizable metadata helping with indexing, classification, and workflow automation.
3. Accessibility: Accessible via RESTful APIs over HTTP, enabling easy integration with web and mobile apps.
4. Durability and Availability: Data is replicated across multiple data centers or zones ensuring high durability and availability.
5. Cost Efficiency: Supports tiered storage with different performance and availability levels to balance cost and speed.

#### Popular Implementations:

1. Amazon S3: Leading cloud object storage with features like versioning, lifecycle rules to transition data between tiers, cross-region replication, and strong security controls.
2. OpenStack Swift: An open source object storage system designed for large scale, multi-tenant environments with built-in replication and fault tolerance.

#### Use Cases:

1. Backup and restore.
2. Content storage and distribution.
3. Big data analytics platforms storing raw or processed data.
4. Archiving and compliance storage.

## Sample Questions from UNIT - 4
### 2 marks questions
1. What is cloud object storage?
2. Name two popular cloud NoSQL databases.
3. What does SDS stand for in cloud storage?
4. What is the default replication factor in HDFS?

### 5 marks questions
1. Explain the characteristics of cloud storage systems.
2. Describe the architecture of Hadoop Distributed File System (HDFS)
3. What are the benefits of software developer storage (SDS)?
4. List Common Features of cloud databases.

### 10 marks questions
1. Discuss different types of cloud storage and their use cases.
2. Explain the design and key components of Hadoop Distributed File System (HDFS).
3. Compare and contrast MongoDB and Cassandra as cloud NoSQL databases.
4. Describe cloud object storage, including its architecture, benefits, and examples.

## UNIT 5: Cloud Security
### Cloud Security Concepts
Cloud security involves protecting cloud computing environments—including data, applications, and infrastructure—from threats and vulnerabilities. It addresses challenges unique to cloud models such as multi-tenancy, shared responsibilities, and internet accessibility.

Shared Responsibility Model
1. Cloud Provider Responsibilities: Security of the cloud infrastructure (hardware, software, networking, facilities).
2. Customer Responsibilities: Security in the cloud, including data, identity, applications, and access controls.

### Key Security Areas
1. Identity and Access Management (IAM): Enforces authentication and authorization policies to ensure only authorized users access cloud resources.
2. Data Protection: Encryption of data at rest and in transit safeguards data confidentiality and integrity. Tools include key management and tokenization.
3. Network Security: Firewalls, virtual private networks (VPNs), intrusion detection/prevention systems (IDS/IPS), and segmentation isolate resources and monitor traffic.
4. Compliance and Governance: Adherence to regulatory frameworks (GDPR, HIPAA, PCI-DSS) and auditing requirements.
5. Threat Detection and Incident Response: Implement monitoring, log analysis, anomaly detection, and rapid incident handling processes.

### Security Challenges in Cloud
1. Data Breaches: Due to improper configuration or vulnerabilities.
2. Insider Threats: Including malicious or careless insiders.
3. Account Hijacking: Phishing and credential theft.
4. Insecure APIs: Exploited vulnerabilities in management interfaces.
5. Shared Technology Vulnerabilities: Flaws in hypervisors or shared components.
6. Denial of Service (DoS) Attacks: Disrupting availability by overwhelming resources.

### Cloud Security Technologies and Best Practices
- Multi-factor Authentication (MFA) enhances account protection.
- Encryption Standards: AES, TLS/SSL for securing data.
- Security Information and Event Management (SIEM): Centralizes logs and alerts for proactive defense.
- Zero Trust Architecture: Requires continuous verification of users, devices, and connections.
- Micro-segmentation: Minimizes attack surface by isolating workloads.
- Regular Audits and Penetration Testing: To identify and fix vulnerabilities proactively.
- Automation and Orchestration: For consistent security policy application at scale.

### Cloud Security Models
- Perimeter-based Security: Traditional, focuses on securing the boundary. Less effective in cloud’s distributed architecture.

- Data-centric Security: Focuses on data protection regardless of location using encryption and access controls.

- Identity-centric Security: Identity and access management core to security posture.

### Cloud Threats and Vulnerabilities
#### Common Cloud Threats:

1. Data Breaches and Data Loss: Unauthorized access or accidental deletion of sensitive data due to misconfiguration or attacks.
2. Account Hijacking: Attackers gain access to user credentials through phishing, stealing API keys, or credential reuse.
3. Insecure Interfaces and APIs: Exploiting cloud management interfaces if poorly designed or implemented.
4. Denial of Service (DoS) Attacks: Flooding cloud resources with excessive requests to disrupt services.
5. Malicious Insiders: Employees or contractors intentionally or unintentionally causing harm or data leaks.
6. Advanced Persistent Threats (APTs): Prolonged cyberattacks targeting sensitive data over time.
7. Shared Technology Vulnerabilities: Risks arising from multi-tenant infrastructure and shared resources (e.g., hypervisor vulnerabilities).

#### Vulnerabilities in Cloud Environments:

1. Misconfiguration: Simplest and most common cause of cloud security incidents, such as open storage buckets or overly permissive access controls.
2. Weak Authentication Mechanisms: Lack of strong multi-factor authentication (MFA).
3. Insufficient Logging and Monitoring: Delayed detection of attacks and anomalies.
4. Lack of Data Encryption: Leaving data unprotected both at rest and in transit.
5. Software Vulnerabilities: Bugs in applications or cloud platform components.

#### Risk Mitigation Strategies:

1. Regular security audits and compliance checks.
2. Implement robust IAM policies with least privilege and MFA.
3. Enable encryption for sensitive data.
4. Continuous monitoring with anomaly detection and alerting.
5. Patch management and vulnerability scanning.
6. Educating users about phishing and social engineering risks.
