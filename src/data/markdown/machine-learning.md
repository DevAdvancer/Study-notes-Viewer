# Data Science
## Life Cycle
1. Business Objective
2. Data Collection
3. Data Cleaning
4. EDA
5. Model Building
6. Model Evaluation
7. Model Deployment

## Machine Learning
#### 1. Supervised Learning
- Regression
- Classification
#### 2. Unsupervised Learning
- Clastering

### Missing Value
#### 1. Remove
#### 2. Imputation
##### 1. Univariate
- Numerical (1. Mean/Median 2. Random Value)
- Categorical (1. Mode 2. Missing Time)
##### 2. Multivariate
- KNN Imputer
- MIACE

# Outlier:
An outlier is a data point that significantly deviates from the rest of the data. It can be either much higher or much lower than the other data points, and its presence can have a significant impact on the results of machine learning algorithms. They can be caused by measurement or execution errors. The analysis of outlier data is referred to as outlier analysis or outlier mining.

1. Capping
2. Trimming

#### Interquartile Range(IQR):
The quartiles of a ranked set of data values are three points that divide the data into exactly four equal parts, each part comprising quarter data.

- Q1 is defined as the middle number between the smallest number and the median of the data set.
- Q2 is the median of the data.
- Q3 is the middle value between the median and the highest value of the data set.

The interquartile range IQR tells us the range where the bulk of the values lie. The interquartile range is calculated by subtracting the first quartile from the third quartile.
> IQR = Q3 - Q1

`We Use Box Plot and Distribution`


##### Points Coverd:
###### Sklearn
1. Functional Transforms
- Log Transform
- Reciprocal Transform

###### Label Encoder
###### One hot Encoding
###### Feature Selection
###### Feature Scaling
###### Normalisation Standerdisation


# Supervised Learning
### 1. Linear Regression
> y = mx + c

m = Slope <br />
y = Dependent Variable<br />
x = Independent Variable<br />
c = Intercept<br />

We have to find the best fit line by changing the `m` and `c`.

### 2. Multiple Linear Regression
> y = m<sub>1</sub>x<sub>1</sub>+m<sub>2</sub>x<sub>2</sub>+.....+m<sub>n</sub>x<sub>n</sub> + c

This is Dynamic and used for multiple dependent variable in realtime issues.

## Algorithm
1. Gradient-Decent. (Optimisation-Based) [OLS]
2. Distance Based.
3. Probability Based.
4. Pre Based.


---
##### Contributor Name - Abhirup Kumar
