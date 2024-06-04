import Fruit from "./components/Fruit";
import Header from "./components/Header";

const fruits = [
  {
    id : 1,
    name : "Buah Manggis",
    price : 10000,
    quantity : 5,
    category : "Tropis",
    description : "matang dan segar, manis pula",
    photo : "/image/manggis.jpeg",
  },
  {
    id : 2,
    name : "Buah Mangga",
    price : 15000,
    quantity : 9,
    category : "Tropis",
    description : "matang dan manis ",
    photo : "/image/mango.jpeg",
  }, {
    id : 3,
    name : "Buah Alpukat",
    price : 20000,
    quantity : 4,
    category : "Tropis",
    description : "matang dan enak",
    photo : "/image/avokado.jpeg",
  }, {
    id : 4,
    name : "Buah Pisang",
    price : 10000,
    quantity : 7,
    category : "Tropis",
    description : "matang , segar, manis ",
    photo : "/image/banana.jpeg",
  }, {
    id : 5,
    name : "Buah Anggur",
    price : 10000,
    quantity : 5,
    category : "Tropis",
    description : "matang, segar, manis ",
    photo : "/image/grape.jpeg",
  },
  {
    id : 6,
    name : "Buah Durian",
    price : 50000,
    quantity : 1,
    category : "Tropis",
    description : "matang, enak ",
    photo : "/image/durian.jpeg",
  },
  {
    id : 7,
    name : "Buah Jeruk",
    price : 10000,
    quantity : 4,
    category : "Tropis",
    description : "matang, segar, manis ",
    photo : "/image/orange.jpeg",
  },
  {
    id : 8,
    name : "Buah Semangka",
    price : 10000,
    quantity : 1,
    category : "Tropis",
    description : "segar, manis ",
    photo : "/image/watermelon.jpeg",
  },
];


export default function App(){
  return(
    <div className="App">
      <Header/>
      <Fruit fruits={fruits} />
    </div>
  );
}