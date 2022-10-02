import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title:
        "Amidst green misty mountains, There is a stay that you cannot deny!",
      desc: "This will let you create Awe-Inspiring thoughts enjoy the luxury villa Amidst beautiful lush green mountains, a waterfall with sooting sound that will make you wanting to write a poem, sing a song, create wonderfull memories",
      img: "https://res.cloudinary.com/mychatapp/image/upload/v1664703223/IMG-20221002-WA0009_m1uwtw.jpg",
    },
    {
      id: 2,
      title: "A Symbol for love, a view which wants you to enjoy",
      desc: "A container house which shows gives you not only a luxury feel and also memories which last for ever. write a poems like shakesphere, draw a picture like a Leonardo da Vinci, sleep like a baby. stare at the stars like a day dreamer.Enjoy like you need,",
      img: "https://res.cloudinary.com/mychatapp/image/upload/v1664703222/IMG-20221002-WA0010_jtwv4y.jpg",
    },
    {
      id: 3,
      title:
        "A house built like rock and has a wood coating, Nah A wooden house!!",
      desc: "A drops of water makes a pond, logs of wood ake a house. A house that makes you feel jealous that uyou dont have it. Your childres or your friends can have party that you never had. 4000sqft of house has an unlimited aminieties that you can't leave a complaint",
      img: "https://res.cloudinary.com/mychatapp/image/upload/v1664703222/IMG-20221002-WA0011_fmw85k.jpg",
    },
    {
      id: 5,
      title:
        "Chikmagalur! A name that has everything and gives vibes to everyone",
      desc: "Amidst a river, A Coffee patch, and beatuifull hills that you can stare at it which will smile back at you with positive vibes. Our chef can give you a food that never tasted. Get your friends, your beautful women, or elderly parents we got you covered.",
      img: "https://res.cloudinary.com/mychatapp/image/upload/v1664713506/IMG-20221002-WA0008_hfjiv3.jpg",
    },
    {
      id: 6,
      title:
        "Queen of hills got you back for all your love needs, so does our premium house for you and your partner",
      desc: "Enjoy your coffee with cinematic view of hills with mist falling abouve you and ofcourse in your drink. Drizling dew makes you feel like you've reached heaven. Eat tight sleep well with blanket covered and move to another dimension of world that you forgot",
      img: "https://res.cloudinary.com/mychatapp/image/upload/v1664703222/IMG-20221002-WA0007_zb0ukm.jpg",
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
