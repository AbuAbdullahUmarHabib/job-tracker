**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

- getElementById is use to get an element ID from dom to manupulate using JavaScript.
- getElementsByClassName is use to get all the same class name from DOM to manupulate using JavaScript.
- querySelector is use to select class,id,tag and it give the first class,id,tag of the element.
- querySelectorAll is use to select all the class,id,tag and it provides a nodelist to loop through it.

**2. How do you create and insert a new element into the DOM?**

- document.createElement() use to create the new element.
- appendChild() is use to insert the newly created or any created element into DOM

**3. What is Event Bubbling? And how does it work?**

- Event bubbling is a terms which use to propagate events upword in js, such as if you click on a element it will also get clicked up to it's root. If You click a button inside of a div it will get the div then div parent > then if the div is inside of a section it will upword to that section then if section is the inside of body tag it will get the body and this goes on till it reach the root and that is how

**4. What is Event Delegation in JavaScript? Why is it useful?**

- Event delegation is a system where we can add a single event listener on specific child instead of adding listener to all the element childs. If we add event listener to a parent element The parent element listens the event and checks if it was caused by one of its child elements. This reduces the amount of code, saves memory, and improves performance, especially when dealing with large numbers of elements. It also makes it easier to handle nested elements and dynamically added content, simplifying your code and making it more maintainable.

**5. What is the difference between preventDefault() and stopPropagation() methods?**

- stopPropagation() is use to stop the event to bubble up to the parent elements where is preventDefault() is use to Stops the default action associated with the event.
