import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Pagination from "./components/Pagination";



function App() {
  //Here we're going to use the useState
  //   variable    function         initial value of the variable
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  //Destructuring, info is going to be used in pagination and results in the cards component
  let {info, results} = fetchedData;
  
  //tip: alt + 96 to get the backticks/template literals
  // Insert the pagination of the api using the variable pageNumber set in useState
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  // To fetch the date from the api, you have to use the useEffect
  useEffect(()=>{
//IIFE(Inmmediatly Invoked Function Expression) It means that this is the shorten way to defined and invoked a function
//Also we are gonna use asyncronous function to fetch data, make the 'promise'
    (async function(){
      //'await' means wait as long the 'fetch' is bringing us the data from the api
      //At the second part with '.then' we convert the raw data into a JSON readable info
      let data = await fetch(api).then(res => res.json())
      updateFetchedData(data);
    })()

  },[api])

  return (
    <div className="App">
      <div className="row">
          <div className="col-12">
            <Navbar/>
          </div>
        </div>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters/>
          </div>
          <div className="col-8">
            <div className="row">
              {/* pass the data of results to cards component using destructuring */}
              <Cards results={results}/> 
            </div>
          </div>
        </div>
      </div>
      {/* Destructuring/ use the function */}
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
