import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title:
        "Amidst green misty mountains, There is a stay that you cannot deny!",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://res.cloudinary.com/mychatapp/image/upload/v1664703223/IMG-20221002-WA0009_m1uwtw.jpg",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://res.cloudinary.com/mychatapp/image/upload/v1664703222/IMG-20221002-WA0010_jtwv4y.jpg",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://res.cloudinary.com/mychatapp/image/upload/v1664703222/IMG-20221002-WA0011_fmw85k.jpg",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://res.cloudinary.com/mychatapp/image/upload/v1654168919/IMG-20220601-WA0002_jqzixl.jpg",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt={post.img} />
            </div>
            <div className="content">
              <Link className="link" to={post.id}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
