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

## List in HTML
```html
<!DOCTYPE html>
<html>
<head>
  <title>List Pratice</title>
</head>
<body>
  <h1>Market list</h1>
  <ul>
    <li>Tomato</li>
    <li>Ginger</li>
    <li>Potato</li>
  </ul>
  <h1>Movie List</h1>
  <ol>
    <li>Pushpa 2</li>
    <li>Iron Man 3</li>
    <li>The Num 2</li>
  </ol>
</body>
</html>
```
Here the `ul` is the Unordered List. And `ol` is the orderd list. The `li` is the list item.

Output :
![Output Example](/images/ListOutput.png)

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
  <title>List Pratice</title>
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
  <title>List Pratice</title>
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
  <title>List Pratice</title>
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
  <title>List Pratice</title>
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
  <title>List Pratice</title>
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
  <title>List Pratice</title>
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
  <title>List Pratice</title>
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
  <title>List Pratice</title>
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
  <title>List Pratice</title>
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
  <title>List Pratice</title>
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


---
##### Contributor Name - Abhirup Kumar
