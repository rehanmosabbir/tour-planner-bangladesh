import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Clients from "../Clients/Clients";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Blogs></Blogs>
      <Gallery></Gallery>
      <Clients></Clients>
    </div>
  );
};

export default Home;
