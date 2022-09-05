import '../App.css';
import data from '../data.json'
import Galerie from '../components/Galerie'
import ImageContainer from '../components/ImageContainer';

function Home() {
  return (
    <div className="App">
      <ImageContainer />
      <Galerie props = {data}/>
    </div>
  );
}

export default Home;
