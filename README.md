# Invoice Hub

This project is designed as part of a job application process. The application aims to demonstrate proficiency in web development using modern technologies such as **NodeJS 20, Next.js 14, TypeScript, and Material-UI**.

## Features

- **Add Invoice**: Users can create invoice.
- **Edit Invoice**: Users can edit invoice this page can be access from List **My Invoice**.
- **Form Validation**: Utilizes React Hook Form and Zod to ensure that user input is valid and adheres to the expected format.
- **Responsive Design**: The user interface is designed matching by figma file.
- **Redux Persistence**: User-entered data is stored in local storage, ensuring it is not lost when the page is refreshed.
- **State Management**: Using Redux Toolkit (RTK) states to enhance user experience during interactions with the application.

## Packages

The following packages are utilized in this project:

- **Material UI**: For UI components and styling.
- **Zod**: For schema validation.
- **React Redux Toolkit**: For state management.
- **Redux Persist**: For persisting Redux state in local storage.
- **Day.js**: For date manipulation.
- **React Number Format**: For formatting numbers in input fields.

```json
{
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.0",
  "@hookform/resolvers": "^4.0.0",
  "@mui/icons-material": "^6.4.4",
  "@mui/material": "^6.4.4",
  "@mui/x-date-pickers": "^7.26.0",
  "@reduxjs/toolkit": "^2.5.1",
  "dayjs": "^1.11.13",
  "next": "14.2.24",
  "react": "^18",
  "react-dom": "^18",
  "react-hook-form": "^7.54.2",
  "react-number-format": "^5.4.3",
  "react-redux": "^9.2.0",
  "redux-persist": "^6.0.0",
  "zod": "^3.24.2"
}
```

## Installation

Follow these steps to set up the project locally:

- **Clone the repository** from GitHub:
  ```bash
  git clone https://github.com/usaidmasud/invoice-hub-nabitu.git
  ```
- **Navigate into the project directory:**
  ```bash
  cd invoice-hub-nabitu
  ```
- **Install dependencies:**
  ```bash
  npm run install
  ```
- **Build the project:**
  ```bash
  npm run build
  ```
- **Start the project:**
  ```bash
  npm run start
  ```

## Live

The project has been deployed on Vercel with a custom domain. You can access it here:

[https://invoicehub.syaripmasud.my.id](https://invoicehub.syaripmasud.my.id)
