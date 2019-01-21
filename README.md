# Basic-JavaScript-Projects

## How to run java script

Option 1:  
Visual studio -> open javascript file -> Right upper corner click run code -> Check output

Option 2:  
node.js install  
node name.js

Option 3:  
Insert script in an html page -> Open html file in a browser -> Developer Tools console

## JavaScript

* DOM

    ```html
    <p>Type in first name:</p><br>
    <input type="text" value="" id="fname"><br><br>
    <p id="showText"></p><br><br>
    <input type="submit" value="See Name" onclick="myFunction()">

    <script>
        function myFunction() {
            var name = document.getElementById('fname').value;
            var show = document.getElementById("showText")
            show.innerHTML = name;
        }
   </script>
    ```

## jQuery

The most widely-used JavaScript library, support software to enable web developers to write less code than if they were to use standard JavaScript syntax.
A collection of shortcuts and a vast code collection to automate repetitive and time consuming JavaScript functionalities.

* Document Ready

    ```javascript
    $ ( document ).ready( function( )
    {
    console.log("I am ready")
    } );
    ```

* Load a text file

    Load data from the server and place the returned HTML into the matched element

    ```html
    <body>
        <div id="AJAXDiv">Darth Vader</div>
        <br />
        <button id="EpicButton">Click Me!!!</button>
    </body>
    ```

    ```javascript
    $( document ).ready( function(  )
    {
    $( "#EpicButton" ).click( function(  )
    {
        $( "#AJAXDiv" ).load( "textfile.txt" );
    } );
    } );
    ```

* Get JSON

    ```html
    <body>
        <button id="EpicButton">Click Me!!!</button>
    </body>
    ```
    ```javascript
    $( document ).ready( function(  )
    {
       $( "#EpicButton" ).click( function(  )
       {
          $.getJSON ( "favorites.json", function(
            result )
          {
            console.log( result );
          } );
       } );
    } );
    ```
* Get Data

    ```html
    <body>
       <div>
       </div>
       <button id="EpicButton">Click Me!!!</button>
    </body>
    ```
    ```javascript
    $( document ).ready( function(  )
    {
       $( "#EpicButton" ).click( function(  )
       {
          $.get ( "favorites.php", function( data,
            status )
          {
             $( "div" ).html( data );
             console.log( status );
          } );
       } );
    } );
    ```

* Post Data

    Load data from the server using a HTTP POST request

    ```html
    <body>
       <div>
       </div>
       <button id="EpicButton">Click Me!!!</button>
    </body>
    ```
    ```javascript
    $( document ).ready( function(  )
    {
       $( "#EpicButton" ).click( function(  )
       {
          $.post ( "favorites.php", 
          {
             "food": "Pizza",
             "game": "Half-Life 3"
          },
          function( data, status )
          {
             console.log( data );
          } );
       } );
    } );
