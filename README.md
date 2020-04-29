# Lucky Student

# Project Description

Lucky Student is a full-stack MERN application that can be used in the classroom and that allows teachers to select a student at random from their class roster. There are various ways for teachers to elicit responses from students in the classroom, such as calling on particular students by name, eliciting a response from the class as a whole, etc. Lucky Student is a tool can change things up in the classroom by displaying it on a screen and leaving it up to chance. Students get a kick out of wondering who will be called on next to answer questions. To use the app, users create an account and log in to add students to their roster. Names can also be edited and deleted. After users have added students to their roster, they can use the Generator feature to select a student at random with the click of a button. Lucky Student has complete CRUD functionality, as users can add and get students, as well as well as edit and delete them.

A complete backend API was built in order to interact with React, along with the use of React hooks. JSON Web tokens are used for authentication, and there is also validation, so if a user tries to register an email that is already taken, the user will get an alert saying that the user already exists. Both user and student names are stored in the MongoDB Atlas database. Other features include React Transition Group for fade animations, Font Awesome for the icons, a spinner GIF that is displayed when a page is loading, and the use of Open Graph meta tags to control how the application's URL is displayed when shared on social media (the desired image and text will be shown, as seen in screenshot #4 below). The font used ('Raleway') comes from Google Fonts. The favicon was created on Canva. The animated effects come from Animate.css. Finally, a custom CSS file is used. Lucky Student was deployed using Heroku. 

# Technologies Used

* MongoDB
* Express
* React
* Node
* NPM packages: Axios, React Router, React Transition Group, React Helmet, bcryptjs, UUID, Express-Validator, Mongoose, Rebass, and SweetAlert
* Animate.css
* CSS

# Lucky Student Live Link

Please check out the live link for Contact Keeper here:

https://aqueous-oasis-34129.herokuapp.com

# Screenshots

![Screenshot 01](screenshots/contact-keeper-screenshot01.png "Account Login Page")

![Screenshot 02](screenshots/contact-keeper-screenshot02.png "Account Register Page")

![Screenshot 03](screenshots/contact-keeper-screenshot03.png "Students Page")

![Screenshot 04](screenshots/contact-keeper-screenshot04.png "Generator Page")

![Screenshot 05](screenshots/contact-keeper-screenshot05.png "SweetAlert Message")

![Screenshot 06](screenshots/contact-keeper-screenshot06.png "Error Page")

![Screenshot 07](screenshots/contact-keeper-screenshot07.png "Preview of Link when Shared on Social Media")
