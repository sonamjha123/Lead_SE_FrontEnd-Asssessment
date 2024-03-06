import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Lists from "./pages/Lists";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [imageItems, setImageItems] = useState([]);

  const handleAddfavorites=(image)=>{
    const ImageExist= imageItems.find(item=> item.id === image.id)
if(ImageExist){
  setImageItems(imageItems?.map(item=>
    item.id === image.id
    ?{...ImageExist, quantity:ImageExist.quantity + 1}: item
  ))
}else{
  setImageItems([...imageItems,{...image, quantity:1}]);
}
  }
  return (
    <div className="App">
      <h2>Hey Folks, Welcome to my Image Studio!!</h2>
      <Routes>
        <Route path='/' element={<Dashboard imageItems={imageItems} handleAddfavorites={handleAddfavorites}/>}/>
          <Route path='/list' element={<Lists  imageItems={imageItems} handleAddfavorites={handleAddfavorites}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
