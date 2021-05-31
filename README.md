<h1 align="center">Hooked</h1>

 [View the live project here.](https://hoooked-ms4.herokuapp.com/)

Hooked is an online store where users can purchase different types of fishing equipment and bait and have it delivered to them. 

 

This website was created by me for my fourth milestone project with Code Institute.

User details - 
username : admin /
Password : hooked2021

## User Experience (UX) 

- ### User Stories
 -  #### User Goals: 
    1. As a User, I want to understand the main purpose of the site
    2. As a User, I want to be able to easily navigate throughout the site to find content.
    3. As a User, I want to be able to sign up to the website and create an account
    4. As a User, I want to be able to search for different types of fishing equipment 
    5. As a User, I want to be able to make a purchase 
    6. As a User, I want to be able to change my order before purchase
    7. As a User, I want to be able to logout of my profile
    8. As a User, I want to be able to update my delivery information
    9. As a User, I want to be able to view my order history
    10. As a User, I want be able to view individual orders from my history  
    11. As a User, I want to be able to view my current shopping bag
    12. As a User, I want to be able to add a review to products


  - #### Admin Goals 
    1. As an Admin, I want to be able to add new products
    2. As an Admin, I want to be able to edit current products
    3. As an Admin, I want toe be able to delete a product


-   ### Design
    -   #### Colour Scheme
        -   I chose the main colors after extracting a color theme from the hero image used on the site
        -   I chose Black to help emphasize the orange icon buttons
    -   #### Typography
        -   I used Zen Dots for the main text throughout the site
        -   I used Goldman for the Hero image text as it stands out more
        -   I used Averia Libre for the Delivery banner text for it to look unique on the homepage and make it appealing
        -   I used Yanone Kaffeesats for the Product info

    -   #### Imagery
        -   The main image of the site was taken from unsplash.com
        -   The product image were taken from unsplash.com and then cropped to size and look


*   ### Wireframes

    -   Desktop Wireframe - [View](https://github.com/stephenoc390/desktop_wireframe.png)

    -   Medium Wireframe - [View](https://github.com/stephenoc390/medium_wireframe.png)

    -   Mobile Wireframe - [View](https://github.com/stephenoc390/mobile_wireframe.png)

## Technologies used


1. [HTML](https://en.wikipedia.org/wiki/HTML)
1. [CSS](https://en.wikipedia.org/wiki/CSS)
1. [Python](https://www.python.org/)
1. [JavaScript](https://www.javascript.com/)
1. [Dev Tools](https://developers.google.com/web/tools/chrome-devtools)
1. [Heroku](https://en.wikipedia.org/wiki/Heroku)
1. [Google Fonts:](https://fonts.google.com/)
1. [Font Awesome:](https://fontawesome.com/)
1. [jQuery:](https://jquery.com/)
1. [Git](https://git-scm.com/)
1. [GitHub:](https://github.com/)
1. [Balsamiq:](https://balsamiq.com/)
1. [Django:](https://www.djangoproject.com/)
1. [Stripe:](https://stripe.com/)
1. [AWS:](https://aws.amazon.com/)
1. [Gmail](https://gmail.com/)
1. [Bootstrap](https://getbootstrap.com/)
    

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://validator.w3.org/) - [Results](https://github.com/stephenoc390/SOCPhotography-Milestone1/blob/master/assets/readme/html-validator.png)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/stephenoc390/SOCPhotography-Milestone1/blob/master/assets/readme/css-validator.png)

### Testing User Stories from User Experience (UX) Section

-   #### User Goals

    1. As a User, I want to understand the main purpose of the site
        - Greeted with an image of 2 fishermen on the home page to show it is linked to fishiing 
    2. As a User, I want to be able to easily navigate throughout the site to find content.
        - Navbar along top of screen with easily read links
    3. As a User, I want to be able to sign up to the website and create an account
        - Login option available in My Profile
    4. As a User, I want to be able to search for different types of fishing equipment 
        - Search Bar on top of page 
    5. As a User, I want to be able to make a purchase 
        - add to fishing bag button in products and checkout page for payment
    6. As a User, I want to be able to change my order before purchase
        - In fishing bag, buttons to update and remove product 
    7. As a User, I want to be able to logout of my profile
        - Logout button in my profile link
    8. As a User, I want to be able to update my delivery information
        -  Form to update details in My Profile
    9. As a User, I want to be able to view my order history
        - Previous Orders shown in My Profile
    10. As a User, I want be able to view individual orders from my history  
        - In My Profile a user can click on each order to see full details
    11. As a User, I want to be able to view my current shopping bag
        - Made possible when clicking the fishing bag
    12. As a User, I want to be able to add a review to products
        - Review section at the bottom of products page 
    


-   #### Admin Goals

    1. As an Admin, I want to be able to add new products
        - In Product Tools there is form for this action 
    2. As an Admin, I want to be able to edit current products
        - From the products page and Product details page edit and remove buttons are available
    3. As an Admin, I want toe be able to delete a product
        - From the products page and Product details page edit and remove buttons are available
### Further Testing 

-   The Website was tested on Google Chrome, Opera and Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone6 & iPhoneX Plus.
-   Testing was done to ensure that all pages were linking correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.


## Deployment

### Heroku

The project was deployed to Heroku using the following steps...

1. Login to Heroku
2. Create a new app, selecting the correct region
3. In the deployment method select connect to GitHub
4. Once connected to GitHub enter your repository name and select it once it appears
5. Once it is connected select the settings option at the top
6. In Convig Vars select reveal Convig Vars
7. Here you will input the data for Convif Vars
8. After this return to the deploy tab
9. Selected enable automatic deploys
10. Selected deploy branch 
11. After a view moments you should see a message that says Your app was successfully deployed with the option to view it below

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/stephenoc390/hooked_ms4)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site in the "GitHub Pages" section.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/stephenoc390/hooked_ms4)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

## Credits

### Code


- The [Code Institute](https://codeinstitute.net/) training videos and projects
- [CodeWithStein] (https://www.youtube.com/c/CodeWithStein/about)
video tutorials

### Media

-   All Images credited (https://unsplash.com/)
-   Logo created by Me 




