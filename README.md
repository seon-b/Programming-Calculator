# Programming Calculator

Programming Calculator is an application that allows users to perform several calculations on binary numbers. It is primarily designed for computer science and computer engineering students taking courses that work with binary numbers. For example, a course in assembly language programming.

## Description

Programming Calculator is a frontend application built using [Reactjs](https://react.dev/). This application allows users to convert between binary, octal, decimal, and hexadecimal bases. In addition, users can also calculate the one's and two's complement of a binary number,and add, subtract, multiply, and divide, binary numbers. Components only work with integers currently.

### Base Conversion Component:

This component allows the user to convert between binary, octal, decimal, and hexadecimal bases.

The user input is accepted through the input field and is stored in the userInput state. The user input is limited to a number that has a length of 8-bits. When entering a binary number only the digits 0 and 1 are valid. When entering an octal number only digits 0 through 7 are valid. When entering a decimal number only digits 0 through 9 are valid. When entering a hexadecimal only digits 0 through 9 and letters A through F are valid. The letters are not case sensitive and the user can enter capital or lowercase letters.

### Arithmetic Component:

This component allows the user to perform addition, subtraction, multiplication, and division, operations on two binary numbers.

The user input is accepted through the input fields and is stored in the binaryNumber1 and binaryNumber2 states. User inputs are limited to 8-bits in length and only the digits 0 and 1 are valid.

Clicking in the radio button fields changes the operation to be performed.The button name and output field label in this component will reflect the currently selected operation to be performed. For example, if subtraction is selected in the radio button field the output field would indicate "Difference" and the component button name would indicate "Subtract".

Clicking the component button will perform the selected operation and display the solution in the output field if the user input is valid.

### Complement Component:

This component allows the user to calculate the one's and two's complement of a binary number.

The user input is accepted through the input field and is stored in the binaryNumber state. User inputs are limited to 8-bits in length and only the digits 0 and 1 are valid.

Clicking the convert button will convert the user input to it's one's and two's complement and display the solutions in the output fields if the user input is valid.

### Error Component

This component is not visible by default and is visible whenever a user input or function is invalid. It becomes visible for a about 1 second and displays a message with the validation error before returning to it's default state of being not visible.

## Features

- App State Management
- Base Conversion
- Binary Arithmetic
- Calculate 1's and 2's Complement
- Toggle Components

## Version History

- 0.2.0 - Converted from [Create React App](https://create-react-app.dev/docs/getting-started/) to [Parcel](https://parceljs.org/docs/), ui updates
- 0.1.0 - Initial release
