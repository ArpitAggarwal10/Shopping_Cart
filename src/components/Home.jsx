import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/q/a/1/-original-imagqyxeu6tecxss.jpeg?q=90";
const img3 = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578";
const img4 = "https://m.media-amazon.com/images/I/71Qd7l1p0JL._SL1500_.jpg";
const img5 = "https://5.imimg.com/data5/VD/NP/YF/ANDROID-89187826/product-jpeg-1000x1000.jpg";
const img6 = "https://cdn08.nnnow.com/web-images/large/styles/KPNAIM45VZI/1625825021866/5.jpg";
const img7 = "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/e/s/z/30-tu1-vebnor-original-imagmy6hhhz62qzn.jpeg?q=70";
const img8 = "https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/4/642mw11-2012.jpg";
const img9 = "https://www.shopyvision.com/wp-content/uploads/2022/12/Samsung-Galaxy-Buds-Live-Bluetooth-Truly-Wireless-in-Ear-Earbuds-with-Mic-.jpg.webp";
const img10 = "https://in-media.apjonlinecdn.com/catalog/product/7/y/7ya12pa.png";

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Nike Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      name: "Iphoner 14",
      price: 800,
      imgSrc: img3,
      id: "nxcjsdbfgveglrgnrtnhktntkj",
    },
    {
      name: "Apple Watch SE",
      price: 350,
      imgSrc: img4,
      id: "ftzsxrwardcwqvd",
    },
    {
      name: "LP Black Shirt",
      price: 260,
      imgSrc: img5,
      id: "ljbnioghnjyihj",
    },
    {
      name: "US Polo T-Shirt",
      price: 200,
      imgSrc: img6,
      id: "rthuirituieodutopweuotutig",
    },
    {
      name: "Men's Trouser",
      price: 190,
      imgSrc: img7,
      id: "bcvbxncvxmnvbnc",
    },
    {
      name: "Men's Kurta",
      price: 410,
      imgSrc: img8,
      id: "djfgsdjkhgjdfhkgjfj",
    },
    {
      name: "Samsung Earbuds",
      price: 820,
      imgSrc: img9,
      id: "qasedrftgyhujikolp",
    },{
      name: "HP Mouse",
      price: 240,
      imgSrc: img10,
      id: "zsxdcfvgbhnjmkl",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;