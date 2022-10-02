import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-572897.jpg&fm=jpg"
          alt="pexels"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/13571479/pexels-photo-13571479.jpeg?cs=srgb&dl=pexels-sofia-linares-corsano-13571479.jpg&fm=jpg"
            srcset=""
            alt="sunset"
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to="/write?edit=2">
              <img src={Edit} alt="edit" srcset="" />
            </Link>

            <img src={Delete} alt="delete" srcset="" />
          </div>
        </div>
        <h1>
          Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero
          in 45 BC
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas
          placerat faucibus. Curabitur sagittis odio tortor, quis iaculis metus
          vestibulum id. Aenean eget cursus lectus. Nullam fermentum erat non
          tellus tempus, vitae sodales diam sollicitudin. Aliquam tempor nibh
          sit amet massa egestas cursus vitae at quam. Suspendisse eget turpis
          arcu. Nulla facilisi. Morbi suscipit dolor a leo congue rutrum.
          Quisque cursus felis id dignissim fermentum. Donec et est quis ligula
          aliquam facilisis non id ligula. Fusce sodales sit amet urna a
          tincidunt. <br></br>Donec condimentum malesuada ipsum, at consectetur
          massa consectetur vel. Sed sed iaculis massa, nec pharetra ante. Sed
          magna felis, interdum non mi a, consectetur bibendum massa. In feugiat
          fermentum aliquet. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Phasellus varius condimentum
          placerat. Morbi at sapien nec mauris accumsan maximus. Ut lacinia
          tempor orci, ac fringilla ipsum tincidunt vel. Quisque commodo
          pharetra turpis, sagittis bibendum lectus malesuada non. Phasellus at
          lectus magna. Suspendisse potenti. Donec maximus dignissim leo.
          Phasellus elit turpis, iaculis eu venenatis ac, posuere nec mi. Proin
          bibendum, erat quis lacinia dignissim, turpis magna iaculis mi, nec
          gravida sem magna lacinia risus. Mauris venenatis magna magna, non
          suscipit urna accumsan nec. Etiam pretium purus ac tortor cursus
          viverra. Ut aliquam turpis quis tortor sagittis, eu pellentesque magna
          sagittis. Quisque at pellentesque nibh, tincidunt semper leo.
          Phasellus et gravida nisl, eu molestie libero. Nunc faucibus id enim
          in volutpat. Aliquam vehicula mollis sem at condimentum. Vestibulum
          molestie, ipsum at venenatis ultrices, neque quam aliquet dolor, non
          ornare mi magna vitae lorem. Duis aliquet lectus ut ornare dictum.
          Aliquam ac malesuada mi. Nam feugiat ligula id tortor egestas, eu
          ullamcorper enim gravida. Integer ullamcorper enim eget ante hendrerit
          tincidunt. Aliquam erat volutpat. Aliquam ut quam vel justo viverra
          consectetur. Morbi quis facilisis eros, a tempor arcu. Curabitur justo
          ante, pellentesque quis aliquam dictum, euismod eu purus. Cras ut
          ipsum non odio cursus pellentesque. Integer dictum ipsum ac
          pellentesque iaculis. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Nullam elementum quam et
          finibus sodales. Nam et gravida odio. Nunc a dui eleifend, venenatis
          ante eu, euismod turpis. Fusce sollicitudin sem nec tortor tincidunt
          faucibus. Nullam id tincidunt magna. Nulla eget nibh in erat facilisis
          luctus. Sed vestibulum arcu vel condimentum pretium. Nulla vitae ex a
          lorem lobortis fringilla sed in est. Aenean finibus sapien sit amet
          justo molestie iaculis. Duis molestie odio pulvinar placerat
          consectetur. Curabitur at purus luctus, tincidunt dolor a, dignissim
          ligula. Fusce et volutpat lectus, mollis sagittis neque. Proin
          facilisis sit amet tortor sed sollicitudin. Mauris sagittis egestas
          vulputate.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
