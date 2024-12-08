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
