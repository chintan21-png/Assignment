# 🛒 E-Commerce Dashboard (React + Tailwind)

A modern **E-Commerce Dashboard** built with **React, React Router, Tailwind CSS, and LocalStorage**.
This project demonstrates **authentication, session management, product listing via API, cart functionality, and a responsive dashboard layout**.

---

# 🚀 Features

### 🔐 Authentication

* User **Registration & Login**
* Email and Password validation
* Error message for invalid credentials

### ⏱ Session Management

* Session created after login
* Session expires automatically after **5 minutes**
* Protected routes prevent unauthorized access

### 📊 Dashboard

* Welcome message with user name
* Session countdown timer
* Navigation to:

  * Products
  * Cart
  * Profile
  * Logout
* Responsive layout with **Navbar + Sidebar**

### 🛍 Product Listing

Products are fetched from a **public API**.

Example APIs:

* Fake Store API
* DummyJSON

Each product card includes:

* Product image
* Product title
* Price
* Category tag
* Add to Cart button

Extra Features:

* Loading state while fetching products
* Error handling
* Product search
* Category filter
* Infinite product scrolling

### 🛒 Cart Management

* Add products to cart
* Prevent duplicate products
* Increase / decrease product quantity
* Remove products from cart

Cart displays:

* Product subtotal
* Cart total price

### 👤 User Profile

Users can view and edit:

* Name
* Email
* Password

Data is stored in **LocalStorage**.

---

# 🎨 UI & UX

* Fully responsive design
* Works on **Mobile, Tablet, and Desktop**
* Clean dashboard layout
* Sidebar navigation
* Modern product cards
* Smooth loading states

Built using **Tailwind CSS utility classes only**.

---

# 🧱 Tech Stack

| Technology     | Purpose            |
| -------------- | ------------------ |
| React          | Frontend framework |
| React Router   | Page routing       |
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

```bash
git clone https://github.com/your-username/ecommerce-dashboard.git
```

Navigate to project folder:

```bash
cd ecommerce-dashboard
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

The app will run at:

```
http://localhost:5173
```

---

# 🔑 Test Credentials

You can register a new account using the **Register page**.

User data will be stored in **LocalStorage**.

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

# 📦 API Used

Fake Store API

https://fakestoreapi.com/products

---

# 🧠 Learning Outcomes

This project demonstrates:

* React component architecture
* State management with hooks
* API integration
* Authentication logic
* Session handling
* Cart logic implementation
* Responsive UI development

---

# 📌 Future Improvements

Possible enhancements:

* Backend authentication
* Payment integration
* Order history
* Wishlist functionality
* Dark mode

---

# 👨‍💻 Author

**Chintan Nakum**

Final Year Student
LJ University (2022 – 2026)

---

# ⭐ If you like this project

Give the repository a **star ⭐ on GitHub**.
