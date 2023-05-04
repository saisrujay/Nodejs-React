# Nodejs-React

It is Nodejs Application using Express Framework and MongoDB Database.
The frontend Application is using developed by React.
The sample_data.json is imported to MongoDB using mongoimport.Here we created a database named 'tdb' and collection named 'users'.
The Home page contains queries along with the buttons.Onclicking it redirects to the respective routes.
Here we have 5 routes:
1. "/users/bmw-mercedes-income"
2. "/users/male-expensive-phone"
3. "/users/last-name-starts-with-m"
4. "/users/bmw-mercedes-audi-no-digit-email"
5. "/cities/top-10-users"

In each route, the required data we will displayed in tabular format.
Here, we use axios which allows to make HTTP requests from the Nodejs environment and also helpful for Json data parsing to the frontend.


Instructions to run the file:

/* 
    Before running the application, make sure you have dependencies installed:
    nodemon, express, cors, etc. which are required to run the program.
*/

1. Open VSCode or any other IDE and find package.json file to install             dependencies.
2. Open Backend folder terminal, and run 'npm run Backend' command to start the server.
3. Open frontend folder terminal, and run 'npm start' to start out react app.
Our application will be opened.
