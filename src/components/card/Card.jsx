import "./card.css";
import Heart from "./../../img/heart.svg";
import HeartFilled from "./../../img/heartFilled.svg";
import Comment from "./../../img/comment.svg";
import Share from "./../../img/share.svg";
import Info from "./../../img/info.svg";

const Card = ({ post }) => {
  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interactions">
        <img src={Heart} alt="" className="cardIcon" />
        <img src={Comment} alt="" className="cardIcon" />
        <img src={Share} alt="" className="cardIcon" />
        <img src={Info} alt="" className="cardIcon" />
      </div>
    </div>
  );
};

export default Card;
