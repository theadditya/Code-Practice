# DOM (Document Object Module)
Every thing in HTML is processed by browser as nodes i a node tree. </br>
The DOM API is a standard for how to get, change, add, or delete HTML DOM elements. </br>
JavaScript is the language used in browsers to access the DOM through the API.</br>

**Selectig HTML Element**

| Method | Description |
| --- | ---|
| document.getElementById(Id) | Find an element by Id |
| document.getElementsByTagName(Name) | Find elements by Tag |
| document.getElementsByClassName(Name) | Find elements by Class |
| document.querySelector(Selector) | Find the first element that matches the CSS Selector |
| document.querySelectorAll(Selector) | Find all the elements that match the CSS Selector |

**Accesing the Content of an Elemet**

|Property|Description|
|---|---|
|element.innerHTML|The HTML content of an element|
|element.textContent|The text cotent of an element|


**Accessing Element Property**

|Property|Description|
|---|---|
|element.attribute|Change the attribute value of an HTML element|
|element.style.property|The style of an HTML elemnt|

**Changing Element Attribute**

|Method|Description|
|---|---|
|element.setAttribute()|Create or set a new attribute|

**Manipulatig Structure**

|Method|Description|
|---|---|
|document.createElement()|Create a new HTML element|
|document.removeChild()|Remove an HTML element|
|document.appendChild()|Add an HTML element|
|document.replaceChild()|Replace an HTML element|

**Adding Event Handlers**

|Method|Description|
|---|---|
|document.getElementById(id).onclick= function(){code}|Addig Event Handler code to an onclick event|

**Finding HTML Element by Id**
- Example 
```bash
    const element = document.getElementById("intro");
```
If the element is found, the method will return the element as an object (in element).</br>
If the element is not found, element will contain null.

**Finding HTML Elements by Tag Name**
- Example 
</br>This example finds all ```<p>``` elements: 
```bash
    const element = document.getElementsByTagName("p");
```
</br>This example finds the element with id="main", and then finds all ```<p>``` elements inside ```"main"```:
```bash
    const x = document.getElementById("main");
    const y = x.getElementsByTagName("p");
```

**Finding HTML Elements by HTML Object Collections**
- Example
</br>This example finds the form element with ```id="frm1"```, in the forms collection, and displays all element values:

```bash
    const x = document.forms["frm1"];
    let text = "";
    for (let i = 0; i < x.length; i++) {
    text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;

```