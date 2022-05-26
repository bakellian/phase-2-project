# Mock User Experience 

## Overview
* on page load we want to user to login / signup
* once the user is logged in take them to the homepage 
* from the homepage they can go to a page with a form where they can create a pet
* after creating a pet they will be rerouted to that creted pet page
* the user can also view all of their pets in their pet list page. 

## Features 
* Signup 
* Login / Logout
* Navigation (Navbar) 
* Landing Page (homepage)
* Create a Pet
* List your pets 

## Components
* Signup 
* Login
* Navigation
* Create a pet form 
* Pet List - general pet information (name + short description)
* Pet card - more information about pet (name, age, longer description) 

## Routes 
* /home - homepage component
* /signup - signup component 
* /login - login component 
* /pets/new - new pet form component 
* /pets - pet list 
* /pet/id - individual pet card 

## JSON Data 
{
    "users": [
        {
            "id": 1, 
            "username": Bridget 
        }
    ],
    "pets": [
        {
            "id": 1, 
            "user-id": 1
            "name": Lily 
            "description": A cute dog whose farts smell terrible. 
        }
    ]
}
