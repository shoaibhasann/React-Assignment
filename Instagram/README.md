# Instagram-Like Form in React

This is a simple React project that replicates an Instagram-like login and registration form. It provides a user interface with options to either sign in or sign up, with real-time switching between the two forms.

## Project Description

This project aims to recreate the look and feel of an Instagram login and registration form using React. It utilizes React's state management to toggle between the two forms (sign-in and sign-up) in real-time. Users can switch between the forms by clicking the "Sign Up" or "Log In" links.

### Features

- **Sign-In Form:**
  - Input fields for phone number, username, or email.
  - Input field for the password.
  - "Sign In" button to submit the form.

- **Sign-Up Form:**
  - Input fields for mobile number or email, full name, phone number, username, or email.
  - Input field for the password.
  - "Sign Up" button to submit the form.

- **Toggle between Sign-In and Sign-Up:**
  - Clicking "Sign Up" in the sign-in form switches to the sign-up form.
  - Clicking "Log In" in the sign-up form switches to the sign-in form.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```
   git clone https://github.com/shoaibhasann/React-Assignment.git
   ```

2. **Navigate to the project directory:**

   ```
   cd Instagram
   ```

3. **Install dependencies:**

   ```
   npm install
   ```

4. **Start the development server:**

   ```
   npm run dev
   ```

   This will start the development server and open the application in your default web browser. If it doesn't open automatically, you can access it at `http://localhost:5173`.

## Usage

Upon running the application, you will see the Instagram-like form with options to either sign in or sign up. You can interact with the forms by filling in the required information and clicking the respective buttons. The forms switch in real-time when you click the "Sign Up" or "Log In" links.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **React Hooks:** Used to manage component state and handle button click events.
- **CSS:** Styling is done using CSS to achieve the desired look and layout.

## Project Structure

The project structure is straightforward:

- `src/` contains the React components and assets.
- `src/components/` includes the main `Instagram.jsx` component that defines the Instagram-like forms.
- `src/assets/` contains the Instagram logo image (`insta.svg`).
