# 🍴 Foodix - Restaurant Website

Live Link: https://foodix-dusky.vercel.app/

Foodix is a modern, responsive restaurant website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.  
It showcases a restaurant’s menu, about page, contact form, and product details with a clean and user-friendly interface.  

---

## 🚀 Features
- Responsive **Navbar** and **Footer**
- Beautiful **Hero/Banner** section
- Dynamic **Food menu cards** with images, names, prices, and details
- **Food details page** (`/food/[id]`) using dynamic routing
- **About page** with mission & story sections
- **Contact page** with form and contact info
- JSON-based product data
- Fully responsive for mobile, tablet, and desktop

---

## 🛠️ Tech Stack
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **React Icons**

---

## 📂 Project Structure

foodix/
├── app/
│ ├── about/ # About page
│ ├── contact/ # Contact page
│ ├── food/ # Food listing and dynamic details
│ │ └── [id]/ # Food details page
│ ├── components/ # Navbar, Footer, Banner, etc.
│ └── page.tsx # Home page
├── public/
│ └── data/
│ └── products.json # Food product data
├── styles/ # Global styles
├── package.json
├── tailwind.config.js
└── README.md
