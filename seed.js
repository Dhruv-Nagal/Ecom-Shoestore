// seed.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product"); // adjust path if needed

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "your-mongo-uri-here";

const sampleProducts = [
  {
    company: "Nike",
    title: "Nike Air Max 270",
    desc: "Experience the ultimate comfort and cushioning with the Nike Air Max 270.",
    img: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    alt: "Nike Air Max 270",
    categories: [
      {
        color: ["red"],
        gender: ["men", "women"]
      }
    ],
    size: ["7", "8", "9", "10"],
    price: 150,
    discountPrice: 120
  },
  {
    company: "Adidas",
    title: "Adidas Ultraboost 22",
    desc: "Run in style with the responsive Adidas Ultraboost 22.",
    img: [
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    alt: "Adidas Ultraboost 22",
    categories: [
      {
        color: ["blue"],
        gender: ["women"]
      }
    ],
    size: ["6", "7", "8", "9"],
    price: 180,
    discountPrice: 140
  },
  {
    company: "Puma",
    title: "Puma RS-X³ Puzzle",
    desc: "Retro design meets modern cushioning in the Puma RS-X³ Puzzle.",
    img: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    alt: "Puma RS-X³ Puzzle",
    categories: [
      {
        color: ["green", "black"],
        gender: ["men"]
      }
    ],
    size: ["8", "9", "10", "11"],
    price: 130,
    discountPrice: 100
  },
  {
    company: "Converse",
    title: "Converse Chuck Taylor All Star",
    desc: "A timeless classic with modern vibes.",
    img: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    alt: "Converse Chuck Taylor",
    categories: [
      {
        color: ["white", "red"],
        gender: ["men", "women"]
      }
    ],
    size: ["6", "7", "8", "9", "10"],
    price: 170,
    discountPrice: 160
  },
  {
    company: "New Balance",
    title: "New Balance 990v5",
    desc: "Classic running shoe reimagined for daily comfort and style.",
    img: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    alt: "New Balance 990v5",
    categories: [
      {
        color: ["brown", "black"],
        gender: ["men", "women"]
      }
    ],
    size: ["7", "8", "9", "10", "11"],
    price: 175,
    discountPrice: 150
  },
  {
    company: "Nike",
    title: "Nike Air Force 1 '07",
    desc: "The legend lives on in the Nike Air Force 1 '07, a modern take on the icon with classic style and comfort.",
    img: [
      "https://images.unsplash.com/photo-1636718281370-b5e3f51a5af2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    alt: "Nike Air Force 1 '07",
    categories: [
      {
        color: ["white"],
        gender: ["men", "women"]
      }
    ],
    size: ["7", "8", "9", "10", "11"],
    price: 160,
    discountPrice: 145
  },
  {
    company: "Adidas",
    title: "Adidas NMD_R1",
    desc: "The Adidas NMD_R1 blends heritage style with modern comfort, featuring responsive Boost cushioning.",
    img: [
      "https://images-cdn.ubuy.co.in/66b387496dc5ee5fb1474c3b-adidas-men-39-s-nmd-r1-shoes.jpg"
    ],
    alt: "Adidas NMD_R1",
    categories: [
      {
        color: ["black", "white"],
        gender: ["men"]
      }
    ],
    size: ["8", "9", "10", "11", "12"],
    price: 170,
    discountPrice: 150
  },
  {
    company: "Puma",
    title: "Puma Suede Classic",
    desc: "The Puma Suede Classic is a timeless icon, known for its clean lines and versatile style.",
    img: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/395205/01/fnd/IND/fmt/png/Suede-XL-Sneakers"
    ],
    alt: "Puma Suede Classic",
    categories: [
      {
        color: ["blue"],
        gender: ["women"]
      }
    ],
    size: ["6", "7", "8", "9"],
    price: 120,
    discountPrice: 99
  },
  {
    company: "Reebok",
    title: "Reebok Classic Leather",
    desc: "Step out in style with the Reebok Classic Leather, featuring a soft leather upper and retro appeal.",
    img: [
      "https://reebok.com.au/cdn/shop/files/16-485194.jpg?v=1717365835&width=1946"
    ],
    alt: "Reebok Classic Leather",
    categories: [
      {
        color: ["white"],
        gender: ["men", "women"]
      }
    ],
    size: ["7", "8", "9", "10"],
    price: 130,
    discountPrice: 110
  },
  {
    company: "Vans",
    title: "Vans Sk8-Hi",
    desc: "The Vans Sk8-Hi is a legendary high-top with durable canvas and suede uppers, perfect for skate or street.",
    img: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVORg2yAlMeC_33FeNvuLaL952NGr6rvZOKw&s"
    ],
    alt: "Vans Sk8-Hi",
    categories: [
      {
        color: ["black", "white"],
        gender: ["men", "women"]
      }
    ],
    size: ["6", "7", "8", "9", "10"],
    price: 140,
    discountPrice: 125
  },
  {
    company: "Jordan",
    title: "Air Jordan 1 Low Chicago",
    desc: "The Air Jordan 4 Retro brings back the iconic 1989 design with premium materials and classic cushioning.",
    img: [
      "https://media.gq.com/photos/675b3183e2513077a2c20ed8/16:9/w_1280,c_limit/jordan1.jpg"
    ],
    alt: "Air Jordan 4 Retro",
    categories: [
      {
        color: ["red", "white"],
        gender: ["men"]
      }
    ],
    size: ["8", "9", "10", "11", "12"],
    price: 220,
    discountPrice: 200
  },
  {
    company: "Jordan",
    title: "Air Jordan 1 Retro High",
    desc: "Iconic high-top style with rich basketball heritage.",
    img: [
      "https://dawntown.co.in/cdn/shop/files/air-jordan-1-retro-high-og-royal-toe-357385_ba24e93f-13fa-4c2e-8bde-b834962e8716.webp?v=1742631274"
    ],
    alt: "Air Jordan 1 Retro High",
    categories: [
      {
        color: ["blue", "black"],
        gender: ["men", "women"]
      }
    ],
    size: ["8", "9", "10", "11", "12"],
    price: 200,
    discountPrice: 180
  },
  {
    company: "Vans",
    title: "Vans Old Skool",
    desc: "Laid-back streetwear with a timeless silhouette.",
    img: [
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/4/q/u/-original-imah5vkvmynkyzmn.jpeg?q=90&crop=false"
    ],
    alt: "Vans Old Skool",
    categories: [
      {
        color: ["black", "white","grey"],
        gender: ["men", "women"]
      }
    ],
    size: ["6", "7", "8", "9", "10"],
    price: 165,
    discountPrice: 155
  },
  {
    company: "Reebok",
    title: "Reebok Club C 85",
    desc: "A vintage look with a clean, minimalistic design.",
    img: [
      "https://rukminim2.flixcart.com/image/750/900/jyg5lzk0/shoe/w/j/s/avl59-10-reebok-classics-white-green-original-imafgpfha2twq5uu.jpeg?q=20&crop=false"
    ],
    alt: "Reebok Club C 85",
    categories: [
      {
        color: ["white"],
        gender: ["men", "women"]
      }
    ],
    size: ["7", "8", "9", "10"],
    price: 175,
    discountPrice: 165
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected ✅");

    await Product.deleteMany();
    console.log("Old products removed 🔥");

    await Product.insertMany(sampleProducts);
    console.log("Sample products inserted 🚀");

    process.exit();
  } catch (err) {
    console.error("Seeding failed ❌", err);
    process.exit(1);
  }
};

seedProducts();
