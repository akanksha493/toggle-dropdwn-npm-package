# dropdwn-npm-package

## How It works?

1. install package in your project directory
```
npm install dropdwn
```

2. import package in your project's js file
```js
import {toggleDropdownVisibility} from 'dropdwn';
//or the entire path in case you are importing to browser
```
3. create dropdown in html and add a class "visible" in css
<br>

**inside head**
```html
<style>
    .options{
        display: none;
    }
    .visible{
        display: block;
    }
</style>
```
**inside body**
```html

<div class="dropdown">
    <button id="dropdown-bttn">
        <span>Button Name</span>
    </button>
    <div class="options">
        <a href="">option1</a>
        <a href="">option2</a>
        <a href="">option3</a>
        <!-- and other options -->
    </div>
</div>

```

4. use toggleDropdownVisibility
```js
const dropdownDiv = document.querySelector(".dropdown");
const options = document.querySelector(".options");

toggleDropdownVisibility(dropdownDiv, options);
```

And finally style as per your needs.