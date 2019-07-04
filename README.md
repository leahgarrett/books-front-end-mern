# books-front-end-mern

This app is from the [Forms and own API](https://gist.github.com/leahgarrett/ccadbea440c85bc48be6408606c3f338) code walk through (master branch) and was built on in later challenges. Details of the branches is below.

<br>  

## Run the front-end
Clone this repo.

Change into the app folder  
`cd books-front-end-mern`

Install dependencies  
`npm install`

Run the app  
`npm start`

In another terminal run the tests
`npm test`


<br>  

## The back-end 

The back-end we are using for this app has already been written (thanks Anhar!) https://github.com/anharathoi/books-backend-mern

You will need to clone the back-end  
git clone `https://github.com/anharathoi/books-backend-mern.git`  

Change into the directory  
`cd books-backend-mern`  

Install dependencies  
`npm install`  

Run the server  
`npm start`  

If you do not have automated run process for mongo, open  another terminal and run   
`mongod`  

The back-end is running on port 5000. Our front-end will run on port 3000.  
  
To seed the data  
`http://localhost:5000/seed`  

To view the data  
`http://localhost:5000/books`  

<br />  


## Master branch 
Where 
[Forms and own API](https://gist.github.com/leahgarrett/ccadbea440c85bc48be6408606c3f338) code walk through. It includes all the code from the main walk through and part 3 of challenge.
```
Improve the appearance of the book list by
- displaying the prices with two decimal points
display a different background color for each genre
- make the lines larger so they are easier to click on
```

<br />  

## Demo branch
This was created from the code walk through in the master branch. 

Changes made on this branch were from the [Testing React](https://gist.github.com/leahgarrett/3bd31429fecc898e00c3ddc39e87dad1) code walk through. Also included are changes made during the challenge review up to step 8.


Changes to implement the tests include
- converting the price values in the sample data to strings. This matches the input and addresses the bug we found during he demo where the valid test 
- converting the price to Number before passing it back to the App for saving to the database

**Note**
- When doing manual testing you will notice the browser default validation will delete value entered into price if it is not numeric
(For more information of in browser built in form validation https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation)
