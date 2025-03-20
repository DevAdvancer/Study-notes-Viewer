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

# Multiple Linear Regression
## **2. Multicoliniarity**
1. Person Corelation Coefficient
Formula: <br />
r = Σ[(xi - x̄)(yi - ȳ)] / sqrt(Σ(xi - x̄)² * Σ(yi - ȳ)²)
**where:**
- x and y are the two variables
- xi and yi are individual data points in the dataset
- x̄ and ȳ are the means of the datasets
- Σ denotes summation (sum)
- r is the Pearson correlation coefficient

(x)CNS - 9, 8, 5, 1, 4, 2, 6, 7 = Sum = 45 <br />
(y)Hardness - 126, 130, 90, 150, 160, 100, 190, 80, 200 = Sum = 1170

- xy = 1080, 1090, 950, 150, 690, 200, 420, 480, 1900 = Sum = 5840
`Complete After SomeDays..`

### Feature Selection
1. **Filter Methods**

These methods evaluate the features of a dataset without considering their interactions. They are typically used for smaller datasets.

* **Correlation-based filters**: Select features based on their correlation with the target variable.
* **Information Gain**: Calculate the information gain of each feature by splitting the data into subsets.
* **Mutual Information**: Measure the mutual information between each feature and the target variable.
* **Recursive Feature Elimination (RFE)**: Recursively eliminate features that contribute least to the model's performance.

2. **Wrapper Methods**

These methods evaluate the features of a dataset while considering their interactions with other variables. They are typically used for larger datasets.

* **Forward Selection**: Start by selecting the most informative feature and then recursively add more features.
* **Backward Elimination**: Start by including all features and then remove the least important ones.
* **Wrapper Methods with RFE**: Use recursive feature elimination to eliminate features that contribute least to the model's performance.
* **Lasso Regression**: Penalize large coefficients to select a subset of relevant features.

3. **Embedded Methods**

These methods combine feature selection and model estimation into a single step. They are typically used for larger datasets.

* **Regularization-based methods**: Regularization techniques like L1, L2, or Elastic Net can automatically select relevant features.
* **Shrinkage-based methods**: Techniques like least angle regression (LAR) and thresholded recursive least squares (TRLS) can also be used.
* **Gradient Boosting**: Gradient boosting machines have a built-in feature selection mechanism.

4. **Hybrid Methods**


These methods combine multiple feature selection techniques to improve performance.

* **Stacking**: Use an ensemble method like stacking to combine the predictions of multiple models, each trained on different subsets of features.
* **Random Forests with Feature Selection**: Use random forests to select a subset of relevant features and then use those features for hyperparameter tuning.

5. **Other Methods**

* **Feature Importance**: Calculate feature importance using techniques like permutation importance or SHAP (SHapley Additive exPlanations).
* **Clustering-based methods**: Clustering algorithms can be used to group similar features together.
* **Evolutionary algorithms**: Evolutionary algorithms like genetic programming and genetic drift can be used for feature selection.

# Variance of Regression
- Ridge Regression
- Lasso Regression
Regularization techniques are used to address overfitting, especially when dealing with large datasets. Ridge and Lasso regression modify the standard regression approach by adding penalty terms to the loss function, helping to control the complexity of the model.
### Understanding Regularization
Regularization penalizes the magnitude of coefficients of features while minimizing the error between predicted and actual observations. When the size of coefficients increases exponentially, the model becomes increasingly complex and prone to overfitting.

### What Does a Large Coefficient Signify?
A large coefficient indicates that a particular feature is given significant importance in predicting the outcome. While this feature may be a strong predictor, excessively large coefficients can lead to overfitting, where the model captures noise rather than underlying patterns.
### Properties of LASSO and RIDGE Regression
1. Ridge Regression
- Ridge Regression introduces a penalty term to shrink coefficient values.
- It employs an L2 penalty, which adds the sum of squared coefficient values multiplied by a tuning parameter (alpha).
- The L2 penalty discourages large coefficient values, pushing them toward zero but never exactly reaching zero, thereby reducing the impact of less important features.
- Feature Selection: Ridge regression retains all features in the model while shrinking the impact of less important ones.
- Use Case: Useful when the objective is to minimize the impact of less important features while preserving all variables.
- Bias-Variance Tradeoff: Ridge regression reduces variance but may introduce slight bias, leading to better generalization.
- Interpretability: Since Ridge does not eliminate features, all coefficients remain in the model, making interpretation slightly more challenging.
- Sensitivity: Less sensitive to outliers compared to standard regression methods.

2. Lasso Regression
- Lasso Regression (Least Absolute Shrinkage and Selection Operator) introduces an L1 penalty, which adds the absolute values of coefficients multiplied by a tuning parameter.
- The L1 penalty encourages sparsity, meaning it can shrink some coefficients to zero, effectively performing feature selection.
- Feature Selection: Lasso regression can eliminate less important features by setting their coefficients to zero, making the model more interpretable.
- Use Case: Useful when there are many features, but only a few are expected to have significant predictive power.
- Bias-Variance Tradeoff: Lasso regression introduces more bias than Ridge but results in a simpler, more interpretable model.
- Interpretability: Since Lasso can remove features entirely, it provides a more interpretable model by highlighting only the most significant predictors.
- Sensitivity: More sensitive to outliers compared to Ridge regression due to its reliance on absolute values.

## Logistic Regression
1. Supervised
2. Classification

## Classification Model
1. Accuracy <br />
**Formula**: Number of Correct prediction / Total number of Prediction.
2. Confusion Matrix

> All mathematical expression with respect to this Logistic Regression


# Clusturing.

## SVM (Support vector Machine)
A SVM is a machine learning algorithm used for classification and regression. It finds the best fir line or hyper plane, to separate data into groups.
### Linear SVM
A linear SVM is a type of SVM that uses a linear kernel to separate data into groups. It is useful when the data is linearly separable.
#### Non-linear SVM
A non-linear SVM is a type of SVM that uses a non-linear kernel to separate data into groups. It is useful when the data is not linearly separable. Which means when the data points cannot be separated into two classes by using a straight line. Then, we use some advance techniques like kernel tricks to classify them. In Most Real world applications, We Donot Find Lineraly separable data points. Hence, we use kernel tricks to solve them in higher dimensions.


## Logistic Regression vs SVM
w
---
##### Contributor Name - Abhirup Kumar
