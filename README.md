# gFighter Project

## Overview

This project will have you building a backend REST-ful CRUD API and a front-end React application around it.

## Getting Started

**NOTE:** Fork/clone this repo and install the dependencies in the server and the clent using `npm install` or `yarn` in each directory.

Below are some user stories to help you complete this project.

## API

The api should be built around a fighter resource. The resource should contain the following columns
```
id
name
bio
image_url
strength
```
The strength column should be a number between 1 - 100.

__#1__
```
As a user when I make a GET request to /fighters
I should get back an array of all the fighters in the database
```

__#2__
```
As a user when I make a GET request to /fighters/:id
I should get back a fighter matching the id in the route parameter
```

__#3__
```
As a user when I make a POST request to /fighters and pass json data
it should insert the fighter based off the JSON data passed
```

__#4__
```
As a user when I make a PUT request to /fighters/:id and pass json data
it should update the fighter matching the id in the route parameter based off the JSON data passed
```

__#5__
```
As a user when I make a DELETE request to /fighters/:id
it should delete the fighter matching the id in the route parameter
```

## Client (React app)

### Landing Page

__#6__
```
As a user, when I arrive at the landing page (`/`), I should see a a table of fighters and their information
```

__#7__
```
As a user, when on the landing page (`/`), on each row of the table, I see a delete button.
```

__#8__
```
As a user, when I click the delete button next to the user, the user is deleted from both the table and the database.
```

__#9__
```
As a user, when on the landing page (`/`), when I click on the name of a fighter, it takes me to `/fighter/:id`, ':id' being whatever the id of the fighter is. So if I click on a fighter with an id of 2, it will take me to `/fighter/2`.
```

__#10__
```
As a user, when on the landing page (`/`), I see an an input to filter the fighters by name. There is not submit button, though. As I type a fighter's name into the input, it filters which fighters are shown.
```

### Fighter Details Page

__#11__
```
As a user, when on the fighter details page (`/fighter/:id`), I see all of the fighter's data in a table, as well as a photo of said fighter.
```

__#12__
```
As a user, when on the fighter details page (`/fighter/:id`), I see an "Edit Fighter" button.
```

__#13__
```
As a user, when I click on the "Edit Fighter" button, a form appears on the page containing the fighter's current data. After making any changes to the data and submitting the form, the form will disappear and the information will update in the database and on the page.
```

__#14__
```
As a user, when on the fighter details page (`/fighter/:id`), I see an "Back to Fighter List" button. When that button is clicked, it takes me back to the landing page (`/`).
```

__#15__
```
As a user, when on the fighter details page (`/fighter/:id`), I see an "Delete this Fighter" button. When that button is clicked, it deletes this fighter from the database and takes me back to the landing page (`/`).
```