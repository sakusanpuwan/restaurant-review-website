# GoReview Application 🍕

GoReview is a restaurant review website, which will help you make up your mind before you eat 😋 This collaborative project was completed as part of the Bright Network Technology Academy programme. 

## Who we are 

We are Ctrl Alt Elite - 3 members of Cohort 6 from the Bright Network Technology Academy!  

Sakusan Puwanendran 🍔 | https://github.com/sakusanpuwan  
Kat Fagg 🌮 | https://github.com/katfagg  
João Pedro Canale Pulsz 🍗 | https://github.com/joaopulsz    

## Project Overview 

We have built a React application that interacts with a Spring API. The fundamental idea mimics functionality available on TripAdvisor, Deliveroo etc. 

### What can I do with this app?

*View all restaurants and filter restaurants by cuisine
*Select a restaurant to view all reviews and submit a new review
*Add yourself as a new user using the “register” button

## Step-By-Step Instructions for Initial Setup 

1. Clone repository containing both the API and React App: 
``git clone git@github.com:joaopulsz/restaurant-review-website.git``
2. Create a database in terminal: 
``createdb go_review``
3. Run the Spring Boot API through your IDE (e.g. IntelliJ)
4. Launch the React application: 
``npm install
npm start``












## Wireframe & Component Structure Diagrams

### Wireframe

![Screenshot 2022-10-10 at 10 23 24 (1)](https://user-images.githubusercontent.com/108692801/195603532-7ad3a22b-974a-4cb2-a69f-8817c9a2d0bd.png) 

### Component Structure 
![Screenshot 2022-10-13 at 14 37 51](https://user-images.githubusercontent.com/37752062/195616937-b6edb9f6-0578-4e03-b696-41dbb055a2d2.png)


## MVP:

* Show all restaurants
* Use routing to render a new page populated with reviews when user chooses a restaurant
* Form to submit a new review which is automatically updated in the list of reviews
* Register new user
* Filter restaurants by cuisine

## Extensions: 

* Order reviews reverse chronologically
* Reformat review components to be capitalised

## Further Development

* Add thumbs up icon for each review
* Enable user to edit a review they posted
* Functional search button
* Add a new restaurant
* Allow user to attach image to review using <file> input type and show this on the review
* Authentication

## Final Comments: 

The most challenging parts of our project were:  

* Kat => Removing value from state when checkbox is unticked
* Sakusan => Getting new routes to render in a new page as opposed to within the current page
* João => Keeping everything formatted and looking good across different screen sizes.

We would also like to acknowledge the BNTA team, and all the trainers for their amazing support during the program!
