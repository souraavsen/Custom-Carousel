import "./App.css";
// import ImageSlider from "./Components/ImageSlider";
// import SliderData from "./Components/data.json";
import Carousel, { CarouselItem } from "./Components/Carousel/Carousel";

function App() {
  return (
    <div className='App'>
      {/* <ImageSlider slides={SliderData} /> */}

      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
        <CarouselItem>Item 4</CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
