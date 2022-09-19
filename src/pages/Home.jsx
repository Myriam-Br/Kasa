import '../components/styles/home.css';
import data from '../data.json'
import Cards from '../components/LogementCards'
import ImageContainer from '../components/ImageContainer';


function Home() {
  return (
    <div className="Home">
      <ImageContainer />
      <Cards props = {data}/>
    </div>
  );
}

export default Home;
