


<h1 align="center"> Shopping-Cart 🛒 </h1>  


<h2> <h2>

Click [here](https://kkapkane.github.io/shopping-cart) for live demo.
# Made with

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
<br>
<br>



# Description

<h4> A basic shopping website built using </h4>

<h2> </h2>

[fakestoreapi](https://fakestoreapi.com/) for the fake clothes and price.
# Features
- Infinity image carousel
- Shopping cart tracks the item quantity and price
- Pressing up or down arrow will add/remove amount to that specific item 
- Prices are calculated for each indivdual item and also calculated total of all items
- Mobile friendly
- Ratings are displayed with the appropriate amount of stars


# Previews

## Home Page


<img src="https://s9.gifyu.com/images/ArashiyamaHP.png" alt="preview" width="900">



# Things I learned from this Project

* Styles for a component can be implemented conditionally
```js
{Math.round(star) >= 1 ? <AiTwotoneStar style={{ color: '#F6BE00' }} /> : <AiTwotoneStar />}  
```
* React-Icons can be very convenient to use
```bash
npm install react-icons
```
* Better understanding of spread Operator to add values to existing object without wiping it out
* Learned about react-router-dom 
* That you should add a basename to browser-router to load your site properly on initial load
```html
<BrowserRouter basename='/shopping-cart'>
    <App />
</BrowserRouter>
```
