# Programming Calculator

Programming Calculator is a frontend application built using Reactjs and Bootstrap frameworks. This app allows users to convert between binary, octal, decimal, and hexadecimal bases. In addtion, users can also calculate the one's and two's complement of a binary number,and add, subtract, multiply, and divide, binary numbers. Components only work with integers currently. React Hooks are used to change the app component states.

## BaseConversion Component:

This component allows the user to convert between binary, octal, decimal, and hexadecimal bases.

The user input is accepted through the input field and is stored in the userInput state. The user input is limited to a number that has a length of 8-bits. When entering a binary number only the digits 0 and 1 are valid. When entering an octal number only digits 0 through 7 are valid. When entering a decimal number only digits 0 through 9 are valid. When entering a hexadecimal  only digits 0 through 9 and letters A through F are valid. The letters are not case sensitive and the user can enter capital or lowercase letters.

The userInput is updated by the useState hook and the setuserInput( ) function when a change occurs in the input field.

Clicking in the convertFrom and convertTo input fields changes the baseId of the input fields, baseId1 and baseId2. This happens when the selectAChoice1( ) and selectAChoice2( ) functions are called whenever a change occurs in the inputfields. The baseId states are updated using the useState hook and the setbaseId1( ) and setbaseId2 functions.

Clicking the convert button validates the input based on the baseId states. If the input is valid the conversion is calculated and displayed in the Conversion output field.

## BinaryArithmetic Component:

This component allows the user to perform addition, subtraction, multiplication, and division, operations on two binary numbers.

The user input is accepted through the input fields and is stored in the binaryNumber1 and binaryNumber2 states. User inputs are limited to 8-bits in length and only the digits 0 and 1 are valid. The binaryNumber1 and binaryNumber2 states are updated by the useState hook and the setbinaryNumber1( ) and setbinaryNumber2( ) functions when a change occurs in the input fields. 

Clicking in the radio button fields changes the operation to be performed. This happens by using the useState hook and the setselectedOperator( ) function. As the selectedOperator state is updated the output field and component button are updated to reflect the change. For example, if subtraction is selected in the radio button field the output field would indicate "Difference" and the component button would indicate "Subtract".

Clicking the component button will perform the selected operation and display the solution in the output field if the user input is valid.

## ComplementCalculator Component:

This component allows the user to calculate the one's and two's complement of a binary number.

The user input is accepted through the input field and is stored in the binaryNumber state. User inputs are limited to 8-bits in length and only the digits 0 and 1 are valid. The userInput is updated by the useState hook and the setbinaryNumber( ) functions when a change occurs in the input field. 

Clicking the convert button will convert the user input to it's one's and two's complement and display the solutions in the output fields if the user input is valid.
