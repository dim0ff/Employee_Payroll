# Fourth
-

Run:

    npm install

** It's running fine with Node v6.3.1 and NPM 3.10.3. If errors, you might need to update **

Start up the mock JSON API, containing all our employee data (run in the project root dir):

    server-json --watch db.json

on Windows running at:

    localhost:3000
    
Our documents endpoint should be at:

    localhost:3000/employees 
    
Start (preferrably on a server, to avoid CORS errors):
    
    index.html
  
  
To perform tests, make sure you:

    npm install -g webdriver-manager protractor

run:	
    
    webdriver-manager start
    
to start up a Selenium server. Then navigate to /tests and run:

    protractor conf.js
