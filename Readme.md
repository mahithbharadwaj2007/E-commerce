# 🛍️ Myntra Clone

A responsive e-commerce web application built with React, inspired by Myntra. Browse products, view details, and manage your cart — all across any screen size.

---

## 🚀 Features

- 🏠 **Home Page** — Hero banner with call-to-action
- 🛒 **Product Listing** — Fetched from FakeStore API, displayed in a responsive grid
- 🔍 **Product Details** — Detailed view with ratings, description, and add-to-cart
- 🛍️ **Cart** — Add, increment, decrement, and remove items with live total
- 📱 **Fully Responsive** — Mobile hamburger menu, adaptive grid, mobile-friendly cart layout
- ⚡ **Loading State** — Loader component while products are being fetched

---

## 🧰 Tech Stack

| Technology          | Purpose                           |
| ------------------- | --------------------------------- |
| React 19            | UI library                        |
| Vite 8              | Build tool & dev server           |
| Redux Toolkit       | Global state management           |
| React Router DOM v7 | Client-side routing               |
| Bootstrap 5         | Responsive grid & utility classes |
| React Icons         | Icon library                      |
| FakeStore API       | Product data source               |
| CSS Modules         | Component-scoped styling          |

---

## 📁 Project Structure

```
src/
├── App.jsx                          # Root layout (Navbar + Outlet + Footer)
├── main.jsx                         # Entry point, Router & Redux Provider
│
├── Components/
│   ├── Header/
│   │   ├── Navbar/                  # Sticky navbar with hamburger menu
│   │   ├── NavLinks/                # Navigation links
│   │   ├── Logo/                    # Myntra logo
│   │   ├── SearchBar/               # Search input
│   │   └── CartIcon/                # Cart icon with item count badge
│   │
│   ├── Hero-Section/
│   │   └── Hero/                    # Full-width hero banner
│   │
│   ├── Products/
│   │   ├── Card/                    # Individual product card
│   │   ├── ProductDisplay/          # Responsive product grid
│   │   └── Loader/                  # Loading spinner
│   │
│   └── Footer/
│       ├── Footer/                  # Footer wrapper
│       └── FooterSection/           # Footer content sections
│
├── Pages/
│   ├── Home.jsx                     # Landing page
│   ├── Products.jsx                 # All products page
│   ├── ProductDetails.jsx           # Single product page
│   ├── Cart.jsx                     # Shopping cart page
│   └── ScrollToTop.jsx              # Scroll reset on route change
│
└── Redux/
    ├── store.js                     # Redux store configuration
    ├── fetcher.js                   # Thunk for fetching products
    └── slices/
        ├── cartItemsSlice.jsx       # Cart state (add/remove/increment/decrement)
        └── fetchItemSlice.jsx       # Products fetch state
```

---

## 📦 Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/myntra-clone.git

# 2. Navigate into the project folder
cd myntra-clone

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🗺️ Routes

| Path            | Page                   |
| --------------- | ---------------------- |
| `/`             | Home (Hero + Products) |
| `/products`     | All Products           |
| `/products/:id` | Product Details        |
| `/cart`         | Shopping Cart          |

---

## 📱 Responsive Breakpoints

| Breakpoint      | Layout                                          |
| --------------- | ----------------------------------------------- |
| `> 992px`       | 4-column product grid, full navbar              |
| `768px – 992px` | 3-column product grid, full navbar              |
| `≤ 768px`       | 2-column grid, hamburger menu, table-style cart |
| `≤ 480px`       | 1-column grid, compact header, card-style cart  |

---

## 🔌 API

Products are fetched from the [FakeStore API](https://fakestoreapi.com/):

```
GET https://fakestoreapi.com/products
```

Each product is enriched with a `quantity: 1` field before being stored in Redux.

---

## 📜 License

This project is for educational purposes. Myntra branding and assets belong to their respective owners.
