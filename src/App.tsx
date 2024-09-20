import "./App.css";
import Carousel from "./components/Carousel/Carousel";

function App() {
  const imgs = [
    "https://picsum.photos/500/200",
    "https://picsum.photos/501/200",
    "https://picsum.photos/502/200",
  ];
  return (
    <>
      <Carousel showDots={true} autoplay={true} images={imgs} />
    </>
  );
}

export default App;
