# Personal Suggestion for Exam
> Disclaimer: This is not from any teacher or professor; it is purely a personal suggestion. There is no guarantee that it will be accurate, so please don’t blame me if it turns out to be incorrect.

1. HTML
- Basic tags
- Basic attributs
- tables (rowspan, colspan)
- forms (input, label, select, ..etc)

2. CSS
- Basic selectors
- Basic properties
- Understanding of units
- Postion and display property
- Flexbox
- Grid (Not necessarily)
- Bootstrap (just remember the class name)

3. JavaScript
- Basic syntax
- Variables
- Data types
- Conditional statements
- Loops
- Functions
- Arrow Functions
- Arrays
- object literals
- Collection
- DOM (Manupulation)
- DOM Events
- Event Listeners
- Event bubbling
- Event Delegation
- Call back Hell
- Setting Promise
- Async & await
- API
- AXIOS

4. Backend
- Node
- Express
- Ejs
- Crud Operations
- Mongodb

> Complete Suggestion


# Front-End

# HTML Level 1
## HTML5 vs HTML4

![html4vshtml5](/images/html4vshtml5.png)

## Boilerplate Code

```html
<!DOCTYPE html>
<html>
<head>
  <title>Exam Pratice</title>
</head>
<body>

</body>
</html>
```

## Use of Doctype
* The `<!DOCTYPE>` declaration is the first line of code in an HTML document.
* It tells the browser which version of HTML is being used.
* It is case-insensitive, but it is recommended to write it in uppercase.

## Tags and Element in HTML

`<p>` - This is a paragraph tag <br />
`<h1>,<h2>` - This are the heading tags they can be the rage from 1-6.<br />

There are many more tags that you can get in mdn web docs. [MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/HTML)

## arr in HTML
```html
<!DOCTYPE html>
<html>
<head>
  <title>arr Pratice</title>
</head>
<body>
  <h1>Market arr</h1>
  <ul>
    <li>Tomato</li>
    <li>Ginger</li>
    <li>Potato</li>
  </ul>
  <h1>Movie arr</h1>
  <ol>
    <li>Pushpa 2</li>
    <li>Iron Man 3</li>
    <li>The Num 2</li>
  </ol>
</body>
</html>
```
Here the `ul` is the Unordered arr. And `ol` is the orderd arr. The `li` is the arr item.

Output :
![Output Example](/images/arrOutput.png)

## Attributs in HTML

Attributes are used to add more information to an element. For example, the `href` attribute is used to specify the URL of a link.

```html
<html lang="en">
```

This line says that the language of the html is in English. And the `lang` here is the attributs. <br />

For more information about attributs you can check the [MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept)

## Anchor Element
This is used to add links to our page

```html
<a href="https://www.abhirupkumar.in"> Abhirup Kumar</a>
```
`href` - The is an attributes and fullform is Hyper Text Reference. This is used to specify the URL of a link.

This can be used for to navigate through page and websites :)

## Image Element
This is used to add image to our page.
```html
<img src="/images/image.png" alt="Random Image">
```
## Some Extra Tags
`<br>` - This is used to add a line break in our page. <br />
`<b>` - This is used to add bold text in our page. <br />
`<i>` - This is used to add italic text in our page. <br />
`<u>` - This is used to add underline text in our page. <br />
`<s>` - This is used to add strikethrough text in our page. <br />
`<sup>` - This is used to add superscript text in our page. <br />
`<sub>` - This is used to add subscript text in our page. <br />
`<hr>` - This is used to add a horizontal line in our page. <br />

> Notes- For more Information about HTML you can check the [MDN DOCS](https://developer.mozilla.org/en-US/docs)

## Important Points

- HTML is used to add structure to our webpage.
- HTML is not a programming language.
- HTML is not Case sensitive.
```html
<html> = <HTML>
<p> = <P>
<head> = <HEAD>
<body> = <BODY>
```

# HTML Level 2

## Inline vs Block Elements

### Block
Block Elements - This Takes up the full Width available(whole Block) <br />
Start from New Line

Example - `h1`, `p`, `div`

![Block](/images/BlockImage.png)

### Inline
Inline Elements - This takes up only the necessary width <br />
Don't Start From New Line

Example - `span`, `a`, `img`

![Inline](/images/InlineImage.png)

> for more information go to [Google Drive](https://drive.google.com/file/d/1PVhjnfQyz_QsE4WO3-tILUaIjdRgW9C1/view?usp=sharing)

## Div Element

Div is a `container` used to hold other HTML elements. It is a `block`-level element.

```html
<!DOCTYPE html>
<html>
<head>
  <title>arr Pratice</title>
</head>
<body>
  <div style="background-color: green;">
    <a href="https://www.google.com">Google</a>
    <a href="https://www.youtube.com">Youtube</a>
  </div>
  <a href="https://www.instagram.com">instagram</a>
</body>
</html>
```
output

![DivImage](/images/divImage.png)

## Span Element

Span is a generic `container` used to hold other HTML elements. It is an `inline` element.

```html
<span>Hello World</span>
```

## Semantic Markup

It is the markup that provides meaning to the structure of the content. It is used to describe the content.

```plaintext
Semantic Markup
├── Semantic
├── Non-semantic
```
Example:
Semantic - `header`, `nav`, `main` <br />
Non-Semantic - `div`, `span`

## HTML entities
HTML entities are used to represent special characters in HTML.

`&lt;`, `&nbsp;` this are the examples.

- An html entity is a piece of text("String") that beigns with an amperstand (&) and ends with a semicolon(;)
- Used to diplay `reserved characters` (which would otherwise be interpreted as HTML code) and `invisivle charecters`(like non-breaking spaces).
- Can also use in place of charecters that are difficult to type with a standerd keyboard.
- Browser interprets them & renders correct character.

![Entities](/images/EntitiesHTML.png)

# HTML Level - 03 (tables/forms)

## Tables
Tables are used to represent real life table data.

![Table Example](/images/tableExample.png)

`<Table>` - This is used to create a table but it will not show anything as nothing is present.
```html
<table>

</table>
```
`<caption>` - This is used to give Caption is a table. Like - Food Menu according to the above table

`<tr>` - This is for the table row. This is used to define how many rows are present in the table. <br />
`<td>` - This is for the table data. This is used to enter the table data. <br />
`<th>` - This is the table header. This is used to define the table header.

Example of Food Menu
```html
<!DOCTYPE html>
<html>
<head>
  <title>arr Pratice</title>
</head>
<body>
  <table border="black">
    <caption>Food Menu</caption>
    <tr>
      <th>Item</th>
      <th>Price</th>
    </tr>
    <tr>
      <td>Frooti</td>
      <td>10</td>
    </tr>
    <tr>
      <td>Samosa</td>
      <td>12</td>
    </tr>
    <tr>
      <td>Chips</td>
      <td>20</td>
    </tr>
  </table>
</body>
</html>
```

Output:

![output](/images/fooditem.png)

## Sematics in Tables

`<thead>` - to wrap table header <br />
`<tbody>` - to wrap table body <br />
`<tfoot>` - to wrap table footer <br />

```html
<!DOCTYPE html>
<html>
<head>
  <title>arr Pratice</title>
</head>
<body>
  <table border="black">
    <caption>Food Menu</caption>
    <!-- Table head -->
    <thead>
      <tr>
        <th>Item</th>
        <th>Price</th>
      </tr>
    </thead>
    <!-- Table Body -->
    <tbody>
      <tr>
        <td>Frooti</td>
        <td>10</td>
      </tr>
      <tr>
        <td>Samosa</td>
        <td>12</td>
      </tr>
      <tr>
        <td>Chips</td>
        <td>20</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```
Output: This is also result in the same as before.

## Rowspan and Colspan Attributes

This is used to create cells Which spans over multiple rows or columns.

`<th colspan="2">` - This attribute is used to merge two or more columns into a single column.
`<td rowspan="2">` - This attribute is used to merge two or more rows into a single row.

![foodmenu2](/images/Foodmenu2.png)

```html
<!DOCTYPE html>
<html>
<head>
  <title>arr Pratice</title>
</head>
<body>
  <table border="2" style="text-align: center;">
    <caption>Food Menu</caption>
    <thead>
      <tr>
        <th rowspan="2">Item</th>
        <th colspan="2">Price</th>
      </tr>
      <tr>
        <th>INR</th>
        <th>USD</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Frooti</td>
        <td>10</td>
        <td>0.14</td>
      </tr>
      <tr>
        <td>Samosa</td>
        <td>12</td>
        <td>0.17</td>
      </tr>
      <tr>
        <td>Chips</td>
        <td>20</td>
        <td>0.28</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```

Output:

![FoodMenu2](/images/Foodmenu2.png)

### Pratice Problem
Recreate the following table using rowspan and colspan
![praticeproblem](/images/TablePraticeProblem.png)
```html
<!DOCTYPE html>
<html>
<head>
  <title>arr Pratice</title>
</head>
<body>
  <table border="2" style="text-align: center;">
    <caption>A test table with merged cells</caption>
    <thead>
      <tr>
        <th rowspan="2"></th>
        <th colspan="2">Average</th>
        <th rowspan="2">Red Eyes</th>
      </tr>
      <tr>
        <th>Height</th>
        <th>Width</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Males</td>
        <td>1.9</td>
        <td>0.003</td>
        <td>40%</td>
      </tr>
      <tr>
        <td>Females</td>
        <td>1.7</td>
        <td>0.002</td>
        <td>43%</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```
Output:

![output](/images/OutputPraticeProblem.png)

### Pratice Problem 2
Recreate the following table. <br />
![tablePratice Probem 2](/images/tabelpratice2.png)
HTML FILE:
```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Pratice</title>
  <style>
    table {
      border-collapse: collapse;
      width: 300px;
      text-align: center;
    }
    td {
      border: 2px solid black;
      padding: 10px;
      font-size: 20px;
    }
  </style>
</head>
<body>
  <table>
    <tbody>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>
      <tr>
        <td colspan="2">6, 7</td>
        <td rowspan="2" style="width: 10px;">8</td>
        <td>9</td>
        <td>10</td>
      </tr>
      <tr>
        <td>11</td>
        <td>12</td>
        <td>13</td>
        <td>14</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```
## Forms in HTML

Forms are used to collect data from the user.

`Action`Attributes - It is used to define what action need to be performed when the form is submitted or where the form data should be sent.

Example:
```html
<form action="./action.php">
<form action="/action">
```

#### Input Element
- used to create multiple form controls
- There are multiple types of input that can be created using type attribute

```html
<input type="text" name="username" placeholder="Enter your username">
```

Some Elements are

![formelement](/images/FormElements.png)

### Place holder

```html
<input type="text" name="username" placeholder="Enter your username">
```

### Label
- Label element represents a caption for an item in a user interface.

```html
<lable for="username">Enter username:</lable>
<input type="text" id="username" placeholder="username">
```

> `id` it is a unique element to identify the tag

### Implementing the Lable, Placeholder and form

```html
<!DOCTYPE html>
<html>
<head>
  <title>arr Pratice</title>
</head>
<body>
  <form action="#">
    <label for="username">Username: </label>
    <input type="text" id="username" placeholder="Enter the username">
    <br />
    <label for="age">Age: </label>
    <input type="number" id="age" placeholder="age">
    <br />
    <label for="password">Password: </label>
    <input type="password" id="password" placeholder="Enter the password">
  </form>
</body>
</html>
```

output:

![implementation](/images/formlabelplaceholder.png)

### Button

```html
<button> submit </button>
```
>Default behavior of button is submit inside a form

There are 3 types of submit: <br />
1. `<button type="submit"> submit </button>`
2. `<button type="button"> submit </button>`
3. `<button type="reset"> submit </button>`

### Implemnting all in one form
```html
<!DOCTYPE html>
<html>
<head>
  <title>arr Pratice</title>
</head>
<body>
  <form action="#">
    <label for="username">Username: </label>
    <input type="text" id="username" placeholder="Enter the username">
    <br />
    <label for="age">Age: </label>
    <input type="number" id="age" placeholder="age">
    <br />
    <label for="password">Password: </label>
    <input type="password" id="password" placeholder="Enter the password">
    <br />
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
    <button type="button">Button</button>
  </form>
</body>
</html>
```

### Name attribute

Name of the form control. Submitted with the form as part of a name/value pair <br />
Syntax
`<input type="text" id="name" placeholder="Enter Name" name="name">`

## Implementing name
```html
<!DOCTYPE html>
<html>
<head>
  <title>arr Pratice</title>
</head>
<body>
  <form action="/server">
    <label for="username">Username</label>
    <input type="text" id="username" name="name" placeholder="Enter Username">
    <br />
    <label for="password">Password</label>
    <input type="password" id="password" name="password" placeholder="Enter password">
    <br />
    <button type="submit">Submit</button>
  </form>
</body>
</html>
```

Ouput:
![nameattri](/images/nameattribute.png)

## Implementing the name tag and the action tag

```html
<!DOCTYPE html>
<html>
<head>
  <title>arr Pratice</title>
</head>
<body>
  <form action="https://www.youtube.com/results">
    <label for="youtube">Youtube</label>
    <input type="text" id="youtube" name="search_query" placeholder="Search in youtube">
    <button type="submit">Search</button>
  </form>
</body>
</html>
```

Output:
![youtubesearch](/images/youtubesearch.png)

## Example Pratice
![SampleProblem](/images/SampleFormPratice.png)

### Solution:

```html
<!DOCTYPE html>
<html>
<head>
  <title>arr Pratice</title>
</head>
<body>
  <form action="#">
    <label for="name">Name: </label>
    <input type="text" id="name">
    <br />
    <label for="sex">Sex: </label>
    <input type="radio" name="sex" id="male" value="male">
    <label for="male">Male</label>
    <input type="radio" name="sex" id="female" value="female">
    <label for="female">Female</label>
    <br />
    <label for="message">Message</label><br />
    <textarea name="message" id="message"></textarea>
    <br />
    <input type="checkbox" id="subscribe" name="subscribe">
    <label for="subscribe">Subscribe?</label>
    <br />
    <button>Submit</button>
  </form>
</body>
</html>
```
# CSS

## Part - 1 (Basics)
### Units in CSS

Absolute: <br />
px, pt, pc, cm, mm, in
<br />

Relative: <br />
%, em, rem, vw, vh, ch

<br />

### Font Family

```css
font-family: arial;
```

## Part - 2 (Level 2)

### Selectors

![selectors](/images/selectors.png)


### Decendent Selector
A descendant selector is used to select elements that are descendants of a specified element, denoted by a space between the ancestor and descendant elements in the CSS selector.

### Pseudo Class
A keyword added to a selector that specifies a special state of the selected elements.

example:
1. `:hover`
2. `:active`
3. `:checked`
4. `:nth-of-type`

## Part - 4 (Level 3)

### Box Model
This is a way we can give property to a box elements or be specific to a div that properties can be <br />

example: <br />
1. Height
2. Width
3. Border
4. Padding
5. Margin

![boxmodel](/images/box_model.png)

### Pratice Question
Recreate the following Picture:
![pratice1](/images/Css_pratice_1.png)

Code: <br />
index.html (File Name)
```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Pratice</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="main">
    <div id="red" class="main-child"></div>
    <div id="yellow" class="main-child"></div>
    <div id="green" class="main-child"></div>
  </div>
</body>
</html>
```
Styles.css (File name)
```css
.main {
  height: 200px;
  width: 75px;
  border: 2px solid black;

  .main-child {
    height: 30px;
    width: 30px;
    padding: 10px;
    margin: 10px;
    border: 2px solid black;
    border-radius: 50%;
  }

  #red {
    background-color: red;
  }

  #yellow {
    background-color: yellow;
  }

  #green {
    background-color: green;
  }
}
```

### Task - 04 (Hover Effect Using CSS)

index.html (File Name)
```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Pratice</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="main">
    <h1>Abhirup Kumar</h1>
    <p>A software Developer</p>
  </div>
</body>
</html>
```
Styles.css (File name)
```css
.main {
  height: auto;
  width: auto;
  display: inline-block;
  border: 2px solid black;
  padding: 20px;
  margin-top: 40px;
  margin-left: 40px;
  transition: 0.3s;
  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }
}

.main:hover {
  box-shadow: 2px 2px 10px red;
}
```

### Position Property
This position css property sets how an element is positioned in a document.
The top, right, bottom, left properties determine the final location of positioned elements
- Static
- relative
- absolute
- fixed

### Creating Simple Smiley Face using Position

![simplyface](/images/smileyface.png)

Code: <br />
index.html (File Name)
```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Pratice</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="main">
    <div class="eyes"></div>
    <div class="eyes"></div>
    <div id="mouth"></div>
  </div>
</body>
</html>
```
styles.css (File Name)
```css
.main {
  height: 200px;
  width: 200px;
  border: 2px solid orange;
  border-radius: 50%;
  background-color: orange;

  .eyes {
    height: 10px;
    width: 10px;
    border: 2px solid black;
    display: inline-block;
    margin: 20px;
    border-radius: 50%;
    background-color: black;
    position: relative;
    top: 30px;
    left: 40px;
  }

  #mouth {
    width: 100px;
    height: 30px;
    border: 2px solid black;
    border-radius: 0 0 50px 50px;
    position: absolute;
    top: 130px;
    left: 55px;
    background-color: brown;
  }
}
```

## Flex-box

> For General Understanding go and refer this [Google Drive](https://drive.google.com/file/d/1UxJ5VEQQPy-dEvG4g-IqyGNN90_tOIW-/view?usp=sharing)

##### Pratice Question:

![FlexBox Prtice](/images/flexboxPratice.png)

Answers: <br />
index.html (File Name)
```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Pratice</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="child">A</div>
    <div class="child">B</div>
    <div class="child">C</div>
    <div class="child">D</div>
    <div class="child">E</div>
    <div class="child">F</div>
    <div class="child">G</div>
    <div class="child">H</div>
    <div class="child">I</div>
  </div>
</body>
</html>
```
styles.css (File Name)
```css
.container {
  height: 400px;
  width: 400px;
  margin: 5px auto;
  border: 2px solid rgb(41, 206, 232);
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;

  .child {
    height: 100px;
    width: 100px;
    font-size: 50px;
    border: 2px solid black;
    background-color: rgb(101, 100, 100);
    border-radius: 10px;
    text-align: center;
  }
}
```
## BootStrap

Benifits of Bootstrap: <br />
1. Makes Development Faster & Easier
2. Good Choice of pre-built components
3. Good Browser Compatibility


### Getting Started With Boot Strap
```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Pratice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h2>Bootstrap Demo</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat voluptatum unde earum nulla maiores, aperiam perspiciatis, repellat perferendis suscipit rerum necessitatibus ad accusamus exercitationem. Temporibus saepe earum optio esse cum.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat voluptatum unde earum nulla maiores, aperiam perspiciatis, repellat perferendis suscipit rerum necessitatibus ad accusamus exercitationem. Temporibus saepe earum optio esse cum.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat voluptatum unde earum nulla maiores, aperiam perspiciatis, repellat perferendis suscipit rerum necessitatibus ad accusamus exercitationem. Temporibus saepe earum optio esse cum.
    </p>
  </div>
  <hr>
  <div class="container">
    <h2>Button</h2>
    <button class="btn btn-danger">Click Me</button>
  </div>
  <hr>
  <div class="container">
    <h2>Alert</h2>
    <div class="alert alert-danger" role="alert">Download Failed!!</div>
  </div>
  <hr>
  <div class="container">
    <h2>Button Group</h2>
    <div class="btn-group">
      <button class="btn btn-primary">Click Me 1</button>
      <button class="btn btn-outline-success">Click Me 2</button>
      <button class="btn btn-danger">Click Me 3</button>
    </div>
  </div>
  <hr>
  <div class="container">
    <h2>Navbar</h2>
    <nav class="navbar bg-body-tertiary navbar-expand-lg">
      <div class="container-fluid">
        <a href="#" class="navbar-brand">Abhirup Kumar</a>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a href="#" class="nav-link">Home</a>
            <a href="#" class="nav-link">About</a>
            <a href="#" class="nav-link">Contact us</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

Here two things are important remember the class name and also how we are connecting the bootstrap with html.

### card components (Using Bootstrap)

```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Pratice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="card" style="width: 18rem; margin:50px;">
    <img src="IMG_20240906_115854057(1).jpg" alt="" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">Abhirup Kumar</h5>
      <p class="card-text">Software Engineer</p>
      <a href="#" class="btn btn-primary">Hire Me</a>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

here we have build the card using bootstrap and also remember all of this can be done using normal css also it's just for the exam point of view.

### Grid System (Using Bootstrap)
In Bootstrap grid system use 12-column system by default.

```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Pratice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container center">
    <div class="row">
      <div class="col-3">1</div>
      <div class="col-2">2</div>
      <div class="col-2">3</div>
      <div class="col-2">4</div>
      <div class="col-3">5</div>
    </div>
    <div class="row">
      <div class="col">6, 7</div>
      <div class="col">8</div>
      <div class="col">9</div>
      <div class="col">10</div>
    </div>
    <div class="row">
      <div class="col">11</div>
      <div class="col">12</div>
      <div class="col">13</div>
      <div class="col">14</div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Form control in BootStrap
```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Pratice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
   <div class="container">
    <h2>Form Demo</h2>
    <form class="mb-3" action="#"> <!-- mb-3 => margin bottom 3-->
      <div class="mb-3">
        <label for="email" class="form-label">Email address:</label>
        <input type="text" class="form-control" id="email" placeholder="email">
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
        <input type="password" class="form-control" id="password" placeholder="password">
      </div>

      <div class="mb-3">
        <label for="dropdown">Choose Dropdown</label>
        <select class="form-select" id="dropdown">
          <option selected>Choose...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </form>
   </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

Output: <br />
![formbootstrap](/images/formbootstrap.png)

### BootStrap Pratice question

index.html (File Name)
```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Pratice</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container center">
    <h2 style="text-align: center;">Responsive Cards CSS</h2>
    <div class="d-flex flex-wrap justify-content-center gap-3">
      <div class="card" style="width: 18rem;">
        <img src="/picture/twitter.png" alt="twitter" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title" style="text-align: center;">TWITTER</h5>
          <p class="card-text" style="text-align: center;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam corrupti eveniet, eius voluptates obcaecati consequuntur!</p>
          <div class="d-grid">
            <button class="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="/picture/instagram.png" alt="instagram" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title" style="text-align: center;">INSTAGRAM</h5>
          <p class="card-text" style="text-align: center;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam corrupti eveniet, eius voluptates obcaecati consequuntur!</p>
          <div class="d-grid">
            <button class="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="/picture/facebook.png" alt="facebook" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title" style="text-align: center;">FACEBOOK</h5>
          <p class="card-text" style="text-align: center;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam corrupti eveniet, eius voluptates obcaecati consequuntur!</p>
          <div class="d-grid">
            <button class="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

Output: <br />
![imageresponsive](/images/responsive.png)

> End of the CSS for more refer documentation for exam enough. and also please go through the media queries for more information.

# JavaScript

## let, var and const keywords

- `let` - let is a keyword in JavaScript that is used to declare a variable, and the variable it declares is only accessible within the block it's declared in. <br />

- `var` - var is a keyword in JavaScript that is used to declare a variable, and the variable it declares is accessible throughout the function it's declared in.

- `const` - const is a keyword in JavaScript that is used to declare a constant, and the value it declares cannot be changed once it's declared.
<br />
Example:

```
let name = "John Doe";
```
> note let is used now instead of var below is the explaination why
```js
// The let keyword is used to declare a variable, and the variable it declares is only accessible within the block it's declared in.
let name = "John Doe";

// The var keyword is used to declare a variable, and the variable it declares is accessible throughout the function it's declared in.
var age = 30;

// The const keyword is used to declare a constant, and the value it declares cannot be changed once it's declared.
const country = "USA";-
```
> other thing are same as c and java loops, if-else.

### 'This' keyword in Js
`This` keyword refers to an object that is executing the current piece of code.

```js
const student = {
  name: 'Abhirup Kumar',
  age: 20,
  eng: 95,
  math: 93,
  phy: 97,
  getAvg() {
    let avg = (this.eng + this.math + this.phy) / 3
    console.log(`${this.name} got avg marks = ${avg}`)
  }
}

student.getAvg()
```
Output:

```bash
Abhirup Kumar got avg marks = 95
```

### 'function' in js
Syntax:
```js
// Crateing the function
function funcName() {
  //do something
}
// Calling the Function
funcName()
```
### Object literals
It is Used to store keyed collections & complex entities. <br />

property => (key, value) pair <br />

objects are a collection of properties <br />

### Try & Catch
The try statements allows you to define a block of code to be tested for errors while it is being executed. <br />

The catch statements allows you to define a block of code to be executed, if an error occurs in the try block. <br />

Syntax :
```js
try {
  consol.log(a);
} catch {
  console.log('error');
}
```
Example:
```js
console.log('Hello');
console.log('Hello');
try {
  console.log(a);
} catch {
  console.log('Error Occured');
}
console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello');
```

Here in this code the thing is that if we are writing a code inside a try-catch block then if any error occure then it will print that and continue print the other value.

> Single try block cannot be writen single

### Arrow Function

Syntax:
```js
const func = (arg1, arg2) => {
  //function defination
}
```

example:
```js
const sum = (a, b) => {
  return a + b;
}

console.log(sum(2, 3));
```
Here in this code we are defining a function sum which takes two arguments and return their sum.

###### Implicit return of arrow functions
The implicit return in arrow functions is a shorthand that allows you to write cleaner and more concise code. <br />

Syntax:

```js
const func = (arg1, arg2) => (
  a * b
);
```
### SetTime Out

Syntax:
```js
setTimeout(function, timeout) // Here function is the callback and timeout is in millisecond
```
Example:
```js
console.log("hi there! ");

setTimeout ( () => {
  console.log("Abhirup Kumar");
}, 1000);

console.log('Welcome to ');
```
### Set Interval

Syntax:
```js
setInterval(function, timeout) // Here function is the callback and timeout is in millisecond
```

Example:
```js
let id = setInterval( () => {
  console.log('Hi, DevAdvancer !')
}, 1000)
```
we can stop this using `clearInterval(id)`

#### this with arrow functions
the `this` keyword in an arrow function refers to the context in which the function was defined (lexical this), not where it is called. Arrow functions do not bind their own this. <br />

Example:
```js
const student = {
  name: 'Abhirup',
  marks: 92,
  prop: this, //global scope
  getName: function() {
    return this.name;
  },
  getMarks: () => {
    return this.marks; // parent's scope -> window
  },
  getInfo1: function () {
    setTimeout( () => {
      console.log(this)
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function() {
      console.log(this)
    }, 2000);
  },
};

// console.log(student.getName());
// console.log(student.getMarks());

console.log(student.getInfo1())
console.log(student.getInfo2())
```

##### Practice Question:
1. Write an arrow function that returns the square of a number 'n'.
```js
const c = (n) => {
  return n * n;
};

console.log(c(2));
```

2. Write a function that prints "hello world" 5 Times at the interval of 2s each.
```js
let id = setInterval(() => {
  console.log("Hello World");
}, 2000);

setTimeout(() => {
  clearInterval(id);
}, 12000);
```
3. Write a arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

```js
let arrayAverage = (arr) => {
  lengthOfArray = arr.length;
  return arr.reduce((a, b) => a + b, 0) / lengthOfArray; // Just calculating the avg of the Array
};

console.log(arrayAverage([2, 3, 4, 5, 6, 7]));
```

#### Recreating the min function of builtin using REST
```js
function min(...args) {
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
}
console.log(min(1, 2, 3, 4, 5, 6, 7));
```
### Destructuring
Sorting values of array into multiple variables
Example:
```js
let name = ['tony', 'bruce', 'steve', 'peter'];
let [winner, runnerup] = name;
console.log(winner, runnerup); // "tony" "bruce"
```
## DOM (Document Object Model)

- The DOM represents a document with a logical tree.
- It allows us to maipulate/change webpage content (HTML elements).

![DOM](/images/DOM.png)

> For started code to pratice js is [Google Drive](https://drive.google.com/drive/folders/1hpSNQMDImhkoSv42gqVue-Q7sqWoVNey?usp=sharing)

### Selecting Elements

#### By ID
`document.getElementById("id")` - Returns the element as an object or null(if not found)

#### By Class Name
`document.getElementByClassName("classname")` - Returns the elements as an HTML collection or empty collection(if not found)

#### By Tag Name
`document.getElementByTagName("tag")` - Returns the elements as an HTML collection or empty collection (if not found)

#### Query selectors
This Allows us to use any CSS selector <br />

`document.querySelector('p');` - Select first p element <br />
`document.querySelector('#myId')` - Selects first element with id = myId <br />
`document.querySelector('.myClass')` - Selects first element with class name = myClass <br />
<br />

`document.querySelectorAll("p")` - Selects all p elements <br />

## Manupulating Elements
There are mainly three things to understand here: <br />

- **innerTex**t - Shows the visible text contained in a node.
- **textContent** - Shows all the full text.
- **innerHTML** - Shows the full markup.

Example:
```js
let heading = document.querySelector('h1');
heading.innerHTML = `<u>${heading.innerText}</u>`; // With this we are explicitly adding a underline in the heading which is initally not present in page
```

## Manupulaing Attributs
There are two ways we can manupulate:
- `obj.getAttribute(attr)`
- `obj.setAttribute(attr, val)`

## Manupulating Style
There are few important one: <br />
`obj.classList` <br />
- classList.add() - to add new classes.
- classList.remove() - to remove classes.
- classList.contains() - to check if class exits.
- classList.toggle() - to toggle between add & remove.

## Navigation on Page
parentElement <br />
Children <br />
previousElementSibling/nextElementSibling <br />

## Adding Elements on page
`document.createElement('p')`
- appendChild(element)
- append(element)
- prepend(element)
- insertAdjacent(where, element)

## Removing Elements
- removeChild(element)
- remove(element)

#### Pratice Question - DOM
Add the following elements to the container using only Js and DOM methods: <br />

1. a `<p>` with read text that says "Hey I'm red!"
2. an `<h3>` with blue text that says "I'm a blue h3!"
3. a `<div>` with a black border and pink backgroud color with the following elemnts inside of it: <br />
  - another `<h1>` that says "I'm in div"
  - a `<p>` that says "Me TOO!"

index.html (File name)
```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Pratice</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <script src="app.js"></script>
</body>
</html>
```
styles.css (File name)
```css
.red {
  color: red;
}

.blue {
  color: blue;
}

.box {
  border: 2px solid black;
  background-color: pink;
}
```

app.js (File Name)

```js
// 1st part
let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";
document.querySelector('body').append(para1);
para1.classList.add('red');

// 2nd part
let heading1 = document.createElement('h3');
heading1.innerText = "I'm a blue h3!";
document.querySelector('body').append(heading1);
heading1.classList.add('blue');

// 3rd part
let div = document.createElement('div');
let h1 = document.createElement('h1');
let p = document.createElement('p');

h1.innerText = "I'm in a div";
p.innerText = "Me too!";

div.append(h1);
div.append(p);
div.classList.add('box');
document.querySelector('body').append(div);
```
Output:
![Dom_manupulation](/images/DOM_querypratice.png)

#### Pratice Question 2 - DOM
Create a new input and button element on the page using javascript only, set the text if button to 'Click Me'.

index.html (File Name)
```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Pratice</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <script src="app.js"></script>
</body>
</html>
```

style.css (File Name)

```css
/* Empty nothing here  */
```
app.js (File Name)

```js
let input = document.createElement('input');
let label = document.createElement('label');
let button = document.createElement('button');


// Adding the attributes for input
input.type = 'search';
input.placeholder = 'Search for anything';
input.id = 'search';

// Adding the attributes in for label
label.innerText = 'Search for anything';
label.htmlFor = 'search';
label.id = 'search-label';

// Adding attributes for button
button.type = 'button';
button.innerText = 'Click me!';
button.id = 'search-button';

// adding the input in page
document.querySelector('body').append(label)
document.querySelector('body').append(input)
document.querySelector('body').append(button)
```

## DOM Events
Events are signals that something has occurred. (User inputs / actions) <br />
Example:
```html
<button onclick="console.log('Button Was Clicked');">Click Me</button> <!-- here the onclik is a object that triggers a event -->
```
### Mouse/ Pointer Events
onclick (When an element is clicked)

```js
let btn = document.querySelector('button');

btn.onclick = () =>(console.log("Hello!"));
```

onmouseenter (When Mouse enters an element)

```js
let btn = document.querySelector('button');

btn.onclick = () =>(console.log("Hello!"));
btn.onmouseenter =() => (console.log("Mouse is over the button"));
```

### Event Listeners
Syntax : <br />
`element.addEventListener(event, callback)`
Example:
```js
let btns = document.querySelectorAll('button');

for (btn of btns) {
  btn.addEventListener("click", () => (console.log('Hello!')))
  btn.addEventListener("click", () => (console.log('DevAvancer')))
}
```
## Quick Pratice
Random Color Generator using html, css and js.

index.html (File Name)
```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Pratice</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Generate a Random Color</h1>
  <button id="random-color-btn">Generate</button>
  <div id="random-color"></div>
  <script src="app.js"></script>
</body>
</html>
```
style.css (File Name)
```css
* {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: auto;
  margin-top: 20px;
  text-align: center;
}

div {
  margin: auto;
  margin-top: 10px;
  height: 70vh;
  width: 70vw;
  align-items: center;
  border: 2px solid black;
}

button {
  margin: auto;
  margin-top: 10px;
  align-items: center;
}
```
app.js (File Name)
```js
let btn = document.getElementById('random-color-btn');

btn.addEventListener('click', () => {
  let h1 = document.querySelector('h1');
  h1.innerText = randomColorGenerator();

  let randomColor = randomColorGenerator();
  let div = document.getElementById('random-color');
  div.style.backgroundColor = randomColor;
});



let randomColorGenerator = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;

  return color
};
```

Final Output:
![color Genarator](/images/randomColorGenerator.png)

## Event Bubbling

HTML
```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Pratice</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  </div>
  <script src="app.js"></script>
</body>
</html>
```

CSS
```css
* {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: auto;
  margin-top: 20px;
  text-align: center;
}

div {
  background-color: pink;
  height: 200px;
  width: 400px;
}

ul {
  background-color: blue;
}

li {
  background-color: greenyellow;
}
```

JS
```js
let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');


div.addEventListener('click', () => {
  console.log("Div was clicked!!");
});

ul.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log("ul was clicked!!");
});

for (li of lis) {
  li.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log("li was clicked!!");
  });
}
```
Output:
![EventBubbling](/images/eventBubbleing.png)

## Todo List Using Event Bubbling & Event Delegation
HTML
```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Pratice</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>To Do List: </h1>
    <input type="text" id="new-task" placeholder="Enter new task">
    <button id="add-task">Add Task</button>
    <ul id="tasks"></ul>
  </div>
  <script src="app.js"></script>
</body>
</html>
```

CSS
```css
* {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: auto;
  margin-top: 20px;
  font-size: large;
}

h1 {
  text-align: center;
  font-size: 50px;
}

.container {
  height: 400px;
  width: 400px;
  text-align: center;
}

ul {
  text-align: start;
}
```

JS
```js
let btn = document.getElementById('add-task');
let ul = document.getElementById('tasks')
let input = document.getElementById('new-task')

btn.addEventListener('click', () => {
  let list = document.createElement('li');
  list.innerText = input.value;

  let delbtn = document.createElement('button');
  delbtn.innerText = "delete";
  delbtn.classList.add('delete');

  list.appendChild(delbtn)
  ul.appendChild(list);
  input.value = "";
})


ul.addEventListener('click', (event) => {
  if (event.target.nodeName == 'BUTTON') {
    let listItem = event.target.parentElement;
    listItem.remove()
    console.log("deleted");
  }
})
```

Ouput:
![todopratice](/images/todopratice.png)

## Call Back Hell
Nesting call back is known as callback hell
```js
h1 = document.querySelector('h1');

const changeColor = (color, delay, nextColor) => {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColor) nextColor();
  }, delay)
};

changeColor('red', 1000, () => {
  changeColor('orange', 1000, () => {
    changeColor('blue', 1000);
  });
});
```
To prevent the call back hell we use promices, async and await.

### Setting of promises
The Promise object represents the eventual completion (or faliure) of an asynchronous operation and its resulting value. <br />

> Promise is a object

There are two callbacks: <br />
- Resolve
- Reject

There are generally three states:
- Pending
- Reject
- fullfiled

Syntax:
```js
let saveToDb = (data) => {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random()  * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Sucess was saved");
    } else {
      reject("Weak Connection");
    }
  })
};
```

There are two methods in Promises:
- then()
- catch()
Syntax:
```js
let saveToDb = (data) => {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random()  * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Sucess was saved");
    } else {
      reject("Weak Connection");
    }
  })
};

saveToDb("Abhirup Kumar").then(() => {
  console.log("Promise was resolved");
}).catch(() => {
  console.log("Promise was rejected");
});
```

### Promise chanining
```js
let saveToDb = (data) => {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random()  * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Sucess was saved");
    } else {
      reject("Weak Connection");
    }
  })
};

saveToDb("Abhirup Kumar")
.then(() => {
  console.log("Data 1: Promise was resolved");
  saveToDb("Hello World")
.then(() => {
  console.log("data 2 saved");
  })
}).catch(() => {
  console.log("Promise was rejected");
});
```
## Async Function
This has two keyword:
- async
- await
Syntax of async:
```js
let hello = async () => {
  return "hello World";
};


hello().then(() => {
  console.log("Promise was resolved!");
}).catch(() => {
  console.log("Promise was rejected!");
})
```
Await pauses the execution of its surrounding async function until the promise is settled (resolved or rejected). <br />
Syntax of await:
```js
h1 = document.querySelector('h1');

const changeColor = async (color) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve();
    }, 1000)
  });
};

const colorChange = async () => {
  await changeColor('red');
  await changeColor('green');
  changeColor('pink');
};

colorChange();
```
### Handleing Error in js
```js
h1 = document.querySelector('h1');

const changeColor = async (color) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("Promise Rejected");
      }
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve();
    }, 1000)
  });
};

const colorChange = async () => {
  try {
    await changeColor('red');
    await changeColor('green');
    changeColor('pink');
  } catch(err) {
    console.log(err);
  }
};

colorChange();
```

## API (Application Programming Interface)

#### API tools
- Postman
- Hoppscoth

## HTTP verbs
- GET:  GET is an HTTP verb used to retrieve data from a server, typically used for reading or fetching data without modifying it.
- POST or PUT: POST is an HTTP verb used to send data to a server to create or update a resource, typically used for creating, editing, or adding new data.
- DELETE: DELETE is an HTTP verb used to delete a resource from a server, typically used for removing or deleting existing data.

## First API request
`using Fetch`
Example:
```js
let url = "https://catfact.ninja/fact";

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.fact);
  })
  .catch((err) => {
    console.log("ERROR, ", err);
  });
```
> Simple API calls using async and await

```js
let url = "https://catfact.ninja/fact";

let getFacts = async () => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
  } catch(err) {
    console.log(err);
  }
};

getFacts();
```
This will give random facts on cat 🤣

## AXIOS
Library to make HTTP requests <br />

Using Axios <br />
HTML
```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Pratice</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>
  <h1>Get Random cat Facts</h1>
  <button>Show new Fact</button>
  <p id = "output"></p>
  <script src="app.js"></script>
</body>
</html>
```
JS
```js
let url = "https://catfact.ninja/fact";
let p = document.getElementById('output')
let btn = document.querySelector('button');

let getFacts = async () => {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch(err) {
    console.log("Error: ", err);
  }
};

btn.addEventListener("click", async () => {
  p.innerText = await getFacts();
})
```
### Activity Dog API call

HTML
```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Pratice</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>
  <h1>Get Random Dogs Pic</h1>
  <img id="output">
  <button>New Pic</button>
  <script src="app.js"></script>
</body>
</html>
```
CSS
```css
* {
  display: flexbox;
}
#output {
  margin-bottom: 10px;
  display: block;
  height: 400px;
  width: 400px;
}
```

JS
```js
let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
let img = document.getElementById('output')
let btn = document.querySelector('button');

let getImage = async () => {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch(err) {
    console.log("Error: ", err);
  }
};

btn.addEventListener("click", async () => {
  let link = await getImage()
  img.setAttribute("src", link);
})
```
# Backend

## Node.js
JavaScript Runtime Environment <br />
It is used for server side programming. <br />

> Node.js is not a language, library or framework

### Proces
- `process`: This object provids information about, and control over, the current Node.js process.
- `process.argv`: returns an array containing the command-line arguments passed when the Node.js process was launched.

### module.export
requiring files <br />
- `require()`: A built-in function to include external modules that exist in separate files.
- `module.exports`: It is a special object.

##### Basic example.
SERVER.js

```js
import Apple from './Fruits/apple.js'
import Mango from './Fruits/mango.js'
import Banana from './Fruits/banana.js'

let Fruits = [Apple, Mango, Banana];

console.log(Fruits);
```

Output:
```bash
[
  { name: 'Apple', color: 'red' },
  { name: 'Mango', color: 'light-yellow-orangic' },
  { name: 'Bannana', color: 'yellow' }
]
```
## NPM (Node Package Manager)
npm is the standerd package manager for Node.js. <br />
- library of packages
- command line tool

## Just Random pakages of Figlet

First go to termianl and type:
```bash
npm i figlet
```
Then create a `index.js` file and add the following code:
```js
const figlet = require('figlet');

figlet("Abhirup Kumar", (err, data) => {
  if (err) {
    console.log("Something wen wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
```
### Package.json
The package.json file contains descriptive and fucntional `metadata` about a project, such as a name, version, and dependencies. <br />

`npm init`: This is used to start project of node.

## Express

#### Library vs Framework

- `Library`: A library is a collecetion of pre-written code that can be used to perform specific tasks.
eg: Axios

- `Framework`: A framework is a set of pre-written code that that provides a structure for developing software applications.
eg: express

###### Express
A Node.js web application framework that helps us to make web applications. It is used for `server` side programming.
1. It listien for incoming request
2. Pass the request
3. To match response with routes


#### Getting start with express
```js
const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res) => {
  console.log("Request Recived!");
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
```
### Sending a Request in Express
Generally there are two objects:
- Request (req)
- Response (res)

```js
const express = require('express');
const app = express();
const PORT = 8080


app.use((req, res) => {
  console.log("Request Recievend");
  res.send({
    name: "Abhirup Kuamr",
    relation: "Single"
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### Routing
It is a process of selecting a path for traffic in a network or between or accross multiple networks.
```js
const express = require('express');
const app = express();
const PORT = 8080

app.get('/', (req, res) => {
  res.send("<h1>This is the root path</h1>")
});

app.get('/home', (req, res) => {
  res.send("<h1>This is the home path</h1>")
});

app.get('/about', (req, res) => {
  res.send("<h1>This is the about path</h1>")
});

app.get('/contact', (req, res) => {
  res.send("<h1>This is the contact path</h1>")
});

app.get("*", (req, res) => {
  res.send("404: Erorr Page not found!!");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
### Nodemon
To `automatically` restart server with code changes

```bash
npm i nodemone
```

#### Path parameter
```js
const express = require('express');
const app = express();
const PORT = 8080

app.get('/', (req, res) => {
  res.send("<h1>This is the root path</h1>")
});

app.get('/:username/:roll', (req, res) => {
  res.send(`<h1>Hi there ${req.params.username} with roll number: ${req.params.roll}</h1>`);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### Query Selectors

```js
const express = require('express');
const app = express();
const PORT = 8080

app.get('/', (req, res) => {
  res.send("<h1>This is the root path</h1>")
});

app.get('/:username/:roll', (req, res) => {
  res.send(`<h1>Hi there ${req.params.username} with roll number: ${req.params.roll}</h1>`);
});

app.get('/search', (req, res) => {
  let {q} = req.query;
  res.send(`Showing the result for the search query: ${q}`);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
### Ejs Templating
- EJS (Embedded JavaScript templates)
- Ejs is a simple templating lanuage that lets you generate HTML markup with plain js.

```js
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.send("This is root");
});

app.get('/home', (req, res) => {
  res.render('home')
})

app.listen(3000, () => {
  console.log("Listening in port no. 3000");
});
```

#### Interpolation Syntax
Interpolation refers to embedding expressions into marked up text. <br />
Famous one and Also the useful one <br />
- `<%=` : Outputs the value into the template (HTML escaped)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Home Page</title>
</head>
<body>
  <h1>This is the home page</h1>
  <h3> <%= 1 * 2%></h3>
  <button>Push Me</button>
</body>
</html>
```

#### Passing Data to Ejs

Server.js
```js
const expres = require('express');
const app = expres();
const path = require('path');
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  let data = Math.floor(Math.random() * 6) + 1;
  res.render('rolldice', {data});
});


app.listen(PORT, () => {
  console.log(`The server is running in ${PORT}`);
});
```

rolldice.ejs
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Roll dice</title>
</head>
<body>
  <h1>Dice Gave Value: <%= data %> </h1>
</body>
</html>
```

### Small Activity EJS
server.js
```js
const expres = require('express');
const app = expres();
const path = require('path');
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/ig/:username', (req, res) => {
  let {username} = req.params;
  res.render("instagram", {username});
})

app.listen(PORT, () => {
  console.log(`The server is running in ${PORT}`);
});
```
instagram.ejs
```ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Instagram</title>
</head>
<body>
  <h2>This page Belongs to <%=username%></h2>
  <button>Follow</button>
  <button>Message</button>
</body>
</html>
```
### Instagram Sample
Index.js
```js
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const instaData = require("./data.json");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.get('/lg/:username', (req, res) => {
    let { username } = req.params;
    const data = instaData[username];
    if (data) {
      const followers = instaData[username].followers;
      const following = instaData[username].following;
      res.render('instagram', {data, followers, following});
    } else {
      return res.status(404).send('404 user Not Found');
    }
  })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
```
instagram.ejs
```ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Instagram</title>
  <style>
    img {
      height: 200px;
      width: 200px;
      border: 2px solid black;
      border-radius: 10%;
    }
  </style>
</head>
<body>
  <h2>This page Belongs to @<%= data.name %></h2>
  <button>Follow</button>
  <button>Message</button>
  <p>Followers: <%= followers %> &nbsp; &nbsp; &nbsp; &nbsp;Following: <%= following %>  </p>
  <hr>
  <% for(let post of data.posts) {%>
    <img src="<%= post.image %>" alt="<%= data.name %>'s Image">
    <p>
      Likes: <%= post.likes %> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Comments: <%= post.comments %>
    </p>
  <%} %>
</body>
</html>
```
```json
{
  "cats": {
    "name": "cats",
    "followers": 25000,
    "following": 5,
    "posts": [
      {
        "image": "https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "likes": 200,
        "comments": 17
      },
      {
        "image": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "likes": 312,
        "comments": 19
      },
      {
        "image": "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "likes": 1065,
        "comments": 200
      }
    ]
  },
  "dogs": {
    "name": "dogs",
    "followers": 75000,
    "following": 150,
    "posts": [
      {
        "image": "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "likes": 3000,
        "comments": 41
      },
      {
        "image": "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        "likes": 2500,
        "comments": 32
      },
      {
        "image": "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        "likes": 500,
        "comments": 6
      }
    ]
  }
}
```
Output:
![ejsexampleoutput](/images/ejsexample.png)

## Miscellaneous
#### Get & Post Request
`GET` <br />
- Used to GET some reponse
- Data sent in query strings (limited, string data & visible in URL)

`POST` <br />
- Used to POST something (for crate/write/update)
- Data sent via request body (any type of data)

##### GET example
index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GET & POST request Pratice</title>
</head>
<body>
  <div>
    <h1>GET Request</h1>
    <form action="/register" method="get">
      <input type="text" placeholder="Enter username" name="username">
      <input type="password" placeholder="Enter password" name="password">
      <button type="submit">Submit</button>
    </form>
  </div>
</body>
</html>
```
![get](/images/getrequestexample.png)

##### POST example
index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GET & POST request Pratice</title>
</head>
<body>
  <div>
    <h1>POST Request</h1>
    <form action="/register" method="post">
      <input type="text" placeholder="Enter username" name="username">
      <input type="password" placeholder="Enter password" name="password">
      <button type="submit">Submit</button>
    </form>
  </div>
</body>
</html>
```
![post](/images/postrequestexample.png)

### HTTP Methods sending data to backend
server side (File Name) <br />
index.html
```js
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/register', (req, res) => {
  let {username, password} = req.query;
  res.send(`Standerd GET response for user ${username} with password ${password}`);
});

app.post('/register', (req, res) => {

  res.send('Standered POST response');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

Frontend (file) <br />
index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GET & POST request Pratice</title>
</head>
<body>
  <div>
    <h1>GET Request</h1>
    <form action="http://localhost:8080/register" method="get">
      <input type="text" placeholder="Enter username" name="username">
      <input type="password" placeholder="Enter password" name="password">
      <button type="submit">Submit</button>
    </form>
  </div>
  <div>
    <h1>POST Request</h1>
    <form action="http://localhost:8080/register" method="post">
      <input type="text" placeholder="Enter username" name="username">
      <input type="password" placeholder="Enter password" name="password">
      <button type="submit">Submit</button>
    </form>
  </div>
</body>
</html>
```
> This is a very basic way to handle the get request from the frontend to server.

### Handleing POST request
There are generally two steps to that:
- set up post request route to get some response.
- Parse POST request data.
#### For Parse we use this two lines so that it can be read correctly by express.
- `app.use(express.urlencoded({extended: true}))`
- `app.use(express.json())`

exmaple:
index.js
```js
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true})); // This is a middleware
app.use(express.json()); // This is a middleware

app.get('/register', (req, res) => {
  let {username, password} = req.query;
  res.send(`Standerd GET response for user ${username} with password ${password}`);
});

app.post('/register', (req, res) => {
  let {username, password} = req.body
  res.send(`Standerd POST response for user ${username} with password ${password}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```
> For JS OPPS you Go to drive [Google Drive](https://drive.google.com/file/d/1zo14ufUNJWZaN4Ny00Ontg6Z2B138CnK/view?usp=sharing)

## REST (Representational State Transfer)
REST is an architectural style that defines a set of constraints to be used for creating web services.

#### CRUD Operation
- `GET`: Retrieves resources.
- `POST`: Submits new data to the server.
- `PUT`: Updates existing data.
- `PATCH`: Update existing data partially.
- `DELETE`: Removes data.

![RestfulAPi](/images/creatingRestFUlApi.png)

## Pratice and Understanding of RESTful by using and implementing in simple clone like quora, insta, etc

> Go to this dive link for the files and folders [Google Drive](https://drive.google.com/drive/folders/1WHT8fdY6uSGmshhzam-nwXrmwMeg859t?usp=sharing)

# Database (Mongodb)
## MongoDB
- MongoDB is a NoSQL database.
- MongoDB is a document-oriented database.
- MongoDB is a schema-less database.
- MongoDB is a distributed database.

### Basic Commands
Here collection means `database name`.
##### Insert
- `db.collection.insertOne({key: value})`: Here we can add only one value.
- `db.collection.insertMany[({key: value}, {key: value}])`: Here we can add multiple values with the help of list.
##### FIND
- `db.collection.find({key: value})`: here we can find similar data with one conditon.
- `db.collection.findOne({key: value})`: Here we can have only the first with the given condition.
##### Query Operator
- `db.collection.find({value: {$gt: value}})`: Here gt is greater than.
- `db.collection.find({value: {$gte: value}})`: Here gte is greater than equal.
- `db.collection.find({value: {$lt: value}})`: Here lt is less than.
- `db.collection.find({value: {$lte: value}})`: Here lte is less than equal.
- `db.collection.find({value: {$in [value, value]}})`: Here we can search for both Condition.
- `db.collection.find({$or: [{key: {$gt: value}}, {key: value}]})`: Here we can search for both Condition and conditional.
##### Update
- `db.collection.updateOne({key: value}, {$set: {key: value}})`: Here we can update the value.
- `db.collection.updateMany({key: value}, {$set: {key: value}})`: Here we can update many values.
- `db.collection.replaceOne({key: value}, {$set: {key: value}})`: Here we can replace document with the new key value pair.
##### Delete
- `db.collection.deleteOne({key: value})`: Here we can delete one document.
- `db.collection.deleteMany({key: {$lt: value}})`: Here we can delete many documents.
- `db.dropdatabase()`: Here we can delete the whole database.

> For more information refer documentation [MongoDB Documentation](https://www.mongodb.com/docs/manual/crud/)
# Connecting MongoDB with Node.js
### Connecting to mongodb using mongoose
```js
const mongoose = require("mongoose");
const connectionUrl = "mongodb://localhost:27017/testPratce"


let main = async () => {
  await mongoose.connect(connectionUrl);
}

main()
.then(() => {
  console.log("Succesfully Connected to Mongodb");
})
.catch((err) => {
  console.log("Error While connecting to Mongodb");
})
```
> Make sure your server is running for Mongodb


---
##### Contributor Name - Abhirup Kumar
