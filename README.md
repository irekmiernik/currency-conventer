# Currency conventer
 ## Demo
 https://irekmiernik.github.io/currency-conventer/
 
 ## Specification
 Here is the main screen of this conventer:
  ![Main screen](images/Main%20sreen.png)
 There are four currencies (PLN, EUR, USD, GBP) and calculations can be made between each pair of this curriences (for example between EUR and GBP or GBP and EUR) so there can be made twelve differenet calculations. To update the exchange rates of this currencies click the red label: "Tutaj można zmienić kursy walut". Here is the screen to update exchange rates of the currencies: 
  ![Screen to update exchange rates](images/Scren%20to%20update%20exchange%20rates.png)
 To return to the main screen the red label: "Kursy walut:", must be clicked but every exchange rates of the curriencies must be greater than zero and can not be empty.
 At HTML <form> element is used. The Blocks, Elements and Modifiers (BEM) methodology gives CSS code a solid structure that remains simple and easy to understand. At Java Script the encapsulation mechanism: the object "exchangedRates" with the array in it, is defined so the structure and the value of the data is hidden. Beside this it is very easy to add new curriences to this conventer. 
