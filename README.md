# Datavalidator
User form data validator. Handles all the boring data validations on the user form, passwords, text, numbers etc for you!
Form data validator library
============================
This is a basic version 1.0 JavaScript library for validating form input. It is based on two aspects, the Subscriber and Service part
The subscriber is an HTML element hooked to the service, and the service as you may guess, returns the messages to the subscriber in the event data validation was not successful

1. Subscriber
=============
A subscriber, is any html element capable of capturing user input. The typical ones this libary handles is the input and select controls.
For a successful subscription, the subscriber is expected to have the following mandatory properties:
id, kvaluetype, data-required-error, event handler, error-label-id 

1.1 id 
   An id that identifies the html form control. format <input id="firstname" name="firstname">. In this example the property id="firstname"
   identifies this html input element
  
1.2 kvaluetype
   This tells the service of the kind of data the form element is expected to handle. The following are the kvaluetypes the service expects
   the subscriber to adopt: 
  1.2.1 text - any text input
  1.2.2 alphanumeric - text and numbers
  1.2.3 phonenumber - any valid phone number
  1.2.4 email - any valid email address. Note that the Service implements a specific regular expression to validate the emails
  1.2.5 numeric - one or a combination of digits
  1.2.6 password - any medium strength password, i.e that combines special characters, numbers and text
  1.2.7 arbitrary - any data type. Special characters, numbers etc

For example  <input id="firstname" name="firstname" data-kvaluetype="text">

1.3 data-required-error
    This property holds custom messages to show when the validation fails. Example 
	<input id="firstname" name="firstname" data-kvaluetype="text" data-required-error="First name cannot be blank">

1.4 Event Handler
    Any of the events that fires when a certain action happens on the Html element.The following is a list of some events the developer can use 
	depending on what desired action: onchange(),onselect(), onfocus(),onfocusout(). Notice that this list is not exhaustive. I have left out a number
	of event handler for simplicity sake. Example:
   <input id="firstname" name="firstname" data-kvaluetype="text" data-required-error="First name cannot be blank" onchange="function()";">
   
1.5 error-label-id
    The developers can choose to use span or div tags to show the custom messages. For eaxmple: <span id="error-label-firstname"></span>
	Note: a specific naming convention should be followed here. the id of the parent element, in this case the input element should be joined to
	the words 'error-label-[id of parent element]' with a hyphen. In this case, firstname is joined to error-label- to form the complete id
	id="error-label-firstname"
	
1.6  required 
    This is an optional property. If you want the input in that particular form control to be mandatory, add the required property like this:
	<input id="firstname" name="firstname" data-kvaluetype="text" data-required-error="First name cannot be blank" onchange="function()";" required>

2. Service
============
The service handles all the validations and returns the messages to the subscriber in the event data validation was not successful. 
The service exposes a array of Json objects that keeps track of the subscribed form controls with a status that informs the subscriber 
if the validation passed or not. The decision as to whether the form data gets submitted tothe either the controller or backend is the choice of the developer.
	
To subscribe the html element to the service, you create an instance of the DataValidator class in your javascript file as follows:

                                     var datavalidator = new DataValidator();
									 
Note: The assumption here is that the library has already been made visible to your html code, for example by adding this line of code:
<script src="~/js/validations.js"></script>   Assuming that this is the correct location of the library.

The final part is to hook the html element with the function that will be called when event handler fires. This function is exposed by the instance of the DataValidator
class, as so:
<input id="firstname" name="firstname" data-kvaluetype="text" data-required-error="First name cannot be blank" onchange="datavalidator.elementvalidator(this.id);";" required>
			
The DataValidator class provides another additional feature that enables to developer to decide what to do with the results of the validations
This is a array Json objects that keeps track of the validation results of all the subscribed form user input elements.
Example:
       to retrieve the contents of the object use the instantiated object, in our case datavalidator and run a console.log on it to just take
	   a quick pick of its contents. console.log(datavalidator.validationschecker); 
	  
DISCLAIMER!!!!!!!

This library is still under development, any inconsistencies in the results or bugs you may encounter, you may contact the development team. Feel free to
modify it to suit your expectations. The developers of this code will not be liable of any physical, emotional or data damage this code may cause.

Asahnte!!!!
	     
	
	
	
	
   
