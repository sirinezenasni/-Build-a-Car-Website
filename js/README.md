# Project 2 - “Build a Car” Website
For this project option, you will build a website that allows users to build a car of their choice. The development of this site will heavily focus on DOM manipulation and working with arrays and objects. For each step, you can use the live site to demo the feature as you build out its components.

For this project, you can work with the starter code here (https://github.com/jsc-mentor/Unit-10-Option-2-Starter-Code).

## Step 1:
When a user clicks on one of the steps (i.e., an ‘li’ element) a class ‘.active’ should be added to the ‘li’ the user clicked and removed on any others that are not. ‘.active’ will add appropriate styling.

## Step 2:
There are multiple steps in building a car, including choosing a vehicle, color, etc. First up, we'll want to organize the data associated with the various vehicle options, color options, and packages in our JavaScript.

For each set of options, you'll want to create an array of objects.

Here are the different options for vehicles, colors, and packages:

vehicleOptions:	
choice: 'cadenza'	price: 35000
choice: 'forte'	price: 20000
choice: 'optima'	price: 29050
choice: 'sedona'	price: 38650
choice: 'soul'	price: 42200
colorOptions	
choice: 'black'	price: 50
choice: 'white'	price: 100
choice: 'silver'	price: 250
packageOptions	
choice: 'Rear Camera'	price: 150
choice: 'LED Positioning Light'	price: 150
choice: 'Rear Camera and LED Positioning Light'	price: 200
Hint 1:
Here's what the syntax for creating an array of objects looks like:

var allStars = [
  {name: 'Babe Ruth', sport: 'Baseball'},
  {name: 'Michael Jordan', sport: 'Basketball'}
];

## Step 3:
Next up, we'll need to create an object to keep track of the different options the user has selected.

This ‘carSelection’ object should contain three objects that look something like this:

carSelection	
vehicle	choice: 'Not Selected', price: 0
color	choice: 'Not Selected', price: 0
package	choice: 'Not Selected', price: 0
We will update this object any time the user makes a selection.

Hint 1:
The syntax for an object that contains other objects looks like this:

var shoppingCart = {
    apple: {color: 'green', price: 1.09},
    avacado: {size: 'medium', price: 1.50},
    cereal: {brand: 'Cheerios', price: 3.25}
} 

## Step 4:
Alright! Now things get interesting. In the next step, we’ll set things up so that, when the user clicks on one of the tab ‘lis,’ only the relevant HTML for that step will be displayed. For example, when the user clicks on the '2. Color' tab, he or she will only see the color swatches.

By default (when the page loads), the selection of available vehicles (i.e., images of the five car choices) should display in the sidebar.

For this step, it will be helpful to look into using data attributes to find out information about the tab the user has clicked. These data attributes have already been added in the HTML, you’ll just need to access them using jQuery or JavaScript. Here's a helpful article explaining data attributes.

Hint 1:
When a user clicks on a step:
1. Empty the ‘#options-display’ element.
2. Find out which step the user has clicked by accessing the ‘data-tab’ attribute.
3. Use a ‘switch’ statement to render the related template displaying appropriate options for that step using Handlebars ( Handlebars templates have been provided in the HTML for the vehicle, color, package, and summary steps).
4. If the user clicked the vehicle, color, or package tab, iterate through the related array and use Handlebars to render a template for each item in that array. 
5. If the user clicked the summary tab, pass the data from the ‘carSelection’ object (containing the vehicle, color, and package the user has selected, along with the price) to Handlebars.

## Step 5:
When the user clicks on an option (a vehicle, a color, or a package), update the ‘carSelection’ object to reflect the choice the user made.

Hint 1:
If the user has selected an Optima, the black color, and the Rear Camera package, the ‘carSelection’ object should look like this:

carSelection	
vehicle	choice: 'optima', price: 29050
color	choice: 'black', price: 50
package	choice: 'Rear Camera', price: 150
Hint 2:
Use the data attributes provided in the HTML along with jQuery's data() method to find out information about the option the user has selected.

## Step 6:
When a user selects (clicks on) a vehicle, the vehicle the user has selected should be displayed in the ‘.vehicle-display’ element. When the user selects (clicks on) a color, the ‘.vehicle-display’ element should be updated to show the vehicle the user chose in that color.

Hint 1:
Look in the images folder to see the various car images available to you.

Hint 2:
Take a look at the HTML. Data attributes have been provided that will allow you to access information about which choices the user has made. You'll want to again use jQuery's data() method to find out this information, such as the option and price.

## Step 7:
Besides DOM manipulation, this website should also keep track of the price of the vehicle being built, a price determined by the different options selected. As a vehicle is built, the ‘Cost: footer’ should be updated appropriately. The cost should include the price for the vehicle, color, and package the user has selected.

### Bonus: Format the number to include a comma. Stack Overflow provides helpful information on doing so here.

Hint 1:
Use the ‘carSelection’ object, which holds the price for the different options the user has selected.

## Bonus (Optional) Challenge:
Utilize Firebase to create a database to store which vehicle, color, and package the user has selected.
Utilize Google Maps to show the user the nearest dealers according to the user’s current location.
Create a “Directions” feature that helps users find directions to specified dealers based off their current and/or given locations.
