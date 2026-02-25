import img1 from "../assets/img1.jpg";
import "../App.css";
import UserInfo from "../components/userInfo";
const Home = () => {
  return (
    <div>
      <div className="container">
        <img className="bg" src={img1}></img>
        <UserInfo />
      </div>
    </div>
  );
};

export default Home;
