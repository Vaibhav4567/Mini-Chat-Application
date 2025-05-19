# 💬 Mini-Chat-Application

This is a simple web-based mini chat application built using **Node.js**, **Express**, and **EJS templating**. It allows users to submit messages and view them dynamically rendered on the interface.

---

## 🌟 Project Overview

The Mini WhatsApp project includes the following features:

- **Add Messages**: Users can enter their name and a message using a form.
- **View Messages**: Submitted messages are displayed in a chat-like interface.
- **Delete Messages**: Option to delete messages individually.

---

## 📂 Files and Folders

- `server.js`: Main server file that sets up routes, middleware, and handles form submissions.
- `views/`:
  - `index.ejs`: Displays all chat messages.
  - `new.ejs`: Form to create a new message.
  - `edit.ejs`: Form to edit an existing message.
- `public/`:
  - `styles.css`: Stylesheet applied to the EJS templates.

---

## 🛠️ File Structure

mini-whatsapp/
│
├── package.json
├── public/
│   └── styles.css
└── views/
    ├── index.ejs
    ├── new.ejs
    └── edit.ejs

---

## 🌐 Features

- Create Message: Navigate to /new to submit a new message.
- Edit Message: Edit an existing message via the "Edit" button.
- Delete Message: Remove a message using the "Delete" button.
- EJS Templating: Renders dynamic content using embedded JavaScript.

---

## 🛠️ Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vaibhav4567/Mini-Chat-Application.git
   cd mini-Chat-Application
