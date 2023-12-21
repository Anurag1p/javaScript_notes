/*
1. what is AJAX ?
AJAX stand for Asynchronous javascript and XML.
Ajax is technique for creating fast and dynamic web pages.

*/




/*

2. how to make page fast and dynamic using AJAX ?
Ajax is help to get data from the server without reload the page
and it get only perticular data that we want.

for example:
you want to display the perticular data on the page. and that situation you have two option to do this.

(a). you can load that page which have data. in this option it take more time . it load the that part of the page which are not need to reload again. for example header and footer these are most of the case or always same thats why its not need to reload.

(b). second option is best for do this . in this option you can use AJAX which is load perticular data that you can display on the page. and it fetch data from the server.

*/





/*
3. how AJAX work ?
normal situation user request perticular page to server. and server get the user request and send the response to user. in this process no intermitiater .

but when you use AJAX . in AJAX it has XMLhttpRequest javascript class.
*/





/*
4. how to XMLHttpRequest work ?
when we send the request to server . that request firstly send to XMLHttpRequest class and XMLHttpRequest is fetch data from server without reload the page and display on the page. 

and these data could be three types of fromat

     1) Text file
     2) XML data
     3) JSON data
*/




/*
5. how to work all the process ?
XMLHttpRequest class is working in 5 steps
and this 5 steps called readyState.
   
   I)       0: request not initialized
   II)      1: server connection established
   III)     2: recieved request
   IV)      3: processing request
   V)       4: request finished and response is ready

   these are value of readyState
*/



/* 
6. how many things are to sent by server ?

basically server send two things .

     1)   Status 
     2)   responseText  /  responseXML

 1) Status is return the code:
      200 : everything is ok
      403 : forbidden (means server not able to response by any reason or problem ) 
      404 : not found 

      **if you wanna know more status code then simply you can type on google 
      "http status code"


*/



/*
7. javascript syntax :

   let variable_object = new XMLHttpRequest();

    variable_object.onreadystatechange = function(){
        
        if(this.readyState == 4 && this.status == 200){
            document.getElementById('demo').innerHTML = this.responseText;
        }
    }
 
   variable_object.open('Method : GET / POST', "filename.txt", asychronous Mode : true / false);
   variable_object.send();



   ------------------------------
   **in GET method data alway public anyone can access
   **in POST method data always private .basicaly its used in login / registration.
*/