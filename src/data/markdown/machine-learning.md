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

### 1. Gradient-Decent
### 2. OLS(Odinary Least Square)
if the linear Regression formula is like: <br />
y = a<sub>0</sub> + a<sub>1</sub>x

a<sub>1</sub> = avg(xy) - avg(x) * avg(y) / avg(x<sup>2</sup> - avg(x)<sup>2</sup>)
<br />
a<sub>0</sub> = avg(y) - a * avg(x)
<br />

#### Problem
You have a data set that relate the number of hour studied to the exam score obtained you want to fit a simple linear regression model to this data using OSL method to predict the exam score based on the number of hour studied.

- Hour studied - 2 3 4 5 6
- Score Obtained - 60 70 80 85 90

Use the regression line to predict the exam score for a student who studied for 7 hours. <br />
**Ans:** <br />
y = 99.5

## Multi-Linear Regression
##### **Overfiting**:
Overfitting is a common problem in machine learning where a model becomes too complex and starts to fit the noise in the training data, rather than generalizing well to new, unseen data. <br />
Here are some common causes of overfitting:
- **Model complexity** : Using too many parameters or layers in your model can lead to overfitting.
- **Insufficient training data** : Training a model on a small dataset may not provide enough examples for the model to learn from, leading to overfitting.
- **Lack of regularization** : Failing to regularize the model (e.g., using dropout or L1/L2 regularization) can lead to overfitting.
- **Data preprocessing issues** : If the data is not properly preprocessed, it may contain noise or irrelevant features that contribute to overfitting.
##### Under-fiting:

##### Bias and Variance
There are two types of Bias:
- High
- Low
There are two tyepes of Variance:
- High
- Low
##### Train Data
##### Test Data

# Classification
## KNN (K - neares-neighbour)
- Select the k-value
- Calcuate the equilidian distance of k-number of neighbours
- Take the k-nearest neighbour as per the calculated equilidian distance.
- Among this k-neighbours count the number of data points
- Asign the new data point to category for which the number of neighbour is maximum.

#### Problem
We have data from questioners survey and objective testing with two attributes to classify whether a special paper tissue is good or not. <br />
Acid Durability = 7, 7, 3, 1 (Test Data = 3) <br />
Strength = 7, 4, 4, 4 (Test Data = 7) <br />
Class = Bad, Bad, Good, Good <br />
Distance = 4, 5, 3, 3.6 <br />
#### Problem 2
![classificationproblem](/images/problem2classification.png)


# Regression Evaluation Meteric
1. MAE
2. MSE
3. RMSE
4. R<sup>2</sup> Score
5. Adjusted-R<sup>2</sup>-Score

> Feature Selection

---
##### Contributor Name - Abhirup Kumar
