# 🛒 E-Commerce Dashboard (React + Tailwind)

A modern **E-Commerce Dashboard** built with **React, React Router, Tailwind CSS, and LocalStorage**.
This project demonstrates **authentication, session management, product listing via API, cart functionality, and a responsive dashboard layout**.

---

# 🌐 Live Demo

🚀 **Live Application:**
https://assignment-swart-eight.vercel.app/

---

# 🚀 Features

## 🔐 Authentication

* User **Registration & Login**
* Email and Password validation
* Error message for invalid credentials

## ⏱ Session Management

* Session created after login
* Session expires automatically after **5 minutes**
* Protected routes prevent unauthorized access

## 📊 Dashboard

* Welcome message with user name
* Session countdown timer
* Navigation to:

  * Products
  * Cart
  * Profile
  * Logout
* Responsive layout with **Navbar + Sidebar**

## 🛍 Product Listing

Products are fetched from a **public API**.

Example APIs:

* Fake Store API
* DummyJSON

Each product card includes:

* Product Image
* Product Title
* Product Price
* Category Tag
* Add to Cart Button

Extra Features:

* Loading state while fetching products
* API error handling
* Product search
* Category filter
* Infinite product scrolling

---

## 🛒 Cart Management

Users can:

* Add products to cart
* Prevent duplicate items
* Increase / decrease quantity
* Remove items from cart

Cart displays:

* Item subtotal
* Cart total price

---

## 👤 User Profile

Users can:

* View profile information
* Edit name
* Edit email
* Update password

Data is stored using **LocalStorage**.

---

# 🎨 UI & UX

* Fully responsive design
* Works on **Mobile, Tablet, Desktop**
* Clean dashboard layout
* Collapsible sidebar navigation
* Modern product cards
* Smooth loading states

Built entirely using **Tailwind CSS utility classes**.

---

# 🧱 Tech Stack

| Technology     | Purpose            |
| -------------- | ------------------ |
| React          | Frontend framework |
| React Router   | Routing            |
| Tailwind CSS   | Styling            |
| LocalStorage   | Data persistence   |
| Fake Store API | Product data       |

---

# 📁 Project Structure

```
src
 ├── components
 │   ├── Navbar.jsx
 │   ├── Sidebar.jsx
 │   └── ProtectedRoute.jsx
 │
 ├── pages
 │   ├── Register.jsx
 │   ├── Login.jsx
 │   ├── Dashboard.jsx
 │   ├── Products.jsx
 │   ├── Cart.jsx
 │   └── Profile.jsx
 │
 ├── layouts
 │   └── MainLayout.jsx
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

# ⚙️ Installation

Clone the repository:

```
git clone https://github.com/your-username/ecommerce-dashboard.git
```

Navigate to the project folder:

```
cd ecommerce-dashboard
```

Install dependencies:

```
npm install
```

Run the project:

```
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

# 📦 API Used

Fake Store API

https://fakestoreapi.com/products

---

# 📱 Responsive Design

The application supports:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

Mobile features include:

* Collapsible sidebar
* Hamburger menu navigation

---

# 🧠 Learning Outcomes

This project demonstrates:

* React component architecture
* State management using React Hooks
* API integration
* Authentication logic
* Session management
* Cart functionality
* Responsive UI development

---

# 📌 Future Improvements

Possible enhancements:

* Backend authentication
* Payment integration
* Order history
* Wishlist functionality
* Dark mode support

---

# 👨‍💻 Author

**Chintan Nakum**

Final Year Student
LJ University (2022 – 2026)

---

# ⭐ Support

If you found this project useful, consider **starring ⭐ the repository**.
