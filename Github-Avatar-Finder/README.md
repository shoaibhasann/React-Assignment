# GitHub Avatar Finder Web App

## Introduction
The GitHub Avatar Finder is a web application built using React that allows users to input a GitHub username. Upon user input, the app fetches the user's avatar from the GitHub API. It also implements debouncing to enhance the user experience and prevent excessive API calls.

## Features
- User-friendly interface with a text input box.
- Real-time avatar display as the user types.
- Debouncing to prevent excessive API requests.
- Responsive design for various screen sizes.
- Graceful error handling for invalid usernames.

## Installation
1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/shoaibhasann/React-Assignment.git
   ```

2. Navigate to the project directory.
   ```bash
   cd Github-Avatar-Finder
   ```

3. Install dependencies.
   ```bash
   npm install
   ```

4. Start the development server.
   ```bash
   npm run dev
   ```

## Usage
1. Open the app in your web browser.
2. Enter a GitHub username in the input box.
3. The user's avatar will be displayed as you type.
4. If the user is not found, an error message will be shown.

## Custom Debounce Hook
The project includes a custom `useDebounce` hook to manage the debounce functionality. The hook ensures that API requests are made only after a brief pause in user input.

## Technologies Used
- React
- JavaScript
- CSS


## Acknowledgments
- This project was created as a Assignment given by PW Skills.
- Thanks to GitHub for providing the API used in this application.

## Author
[Shoaib Hasan]

## Contact
For any inquiries or feedback, please contact [shoaibhasan0940@gmail.com].
