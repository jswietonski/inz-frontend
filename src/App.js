import React, {useEffect, useState} from "react";
import NewsList from "./NewsList";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
function App() {

    const client = axios.create({
        baseURL: "http://127.0.0.1:8000/news"
    });
  const[newsy,setNews] = useState([]);


    useEffect(() => {
        client.get("").then((response) => {
            setNews(response.data.data);
        });
    }, []);

   // const newsy = Object.keys(news.data);
   // console.log(newsy)

//axios.get("http://127.0.0.1:8000/news").then(res => {
 //setNews(Object.keys(res.data).map(p => p.content));

 console.log(newsy)
//});
  return (
  // <NewsList news ={news}/>
      <div className="app">
          <Alert key="primary" variant="primary">
          <h1>Wszystkie newsy </h1>
          </Alert>
          {newsy.map((news) => {
              return (
                  <Accordion defaultActiveKey="0">
                  <div className="news-id"  key={news.id}>
                      <Accordion.Header>   <h2 className="news-date">{news.data_stworzenia}</h2> </Accordion.Header>
                      <Accordion.Body> <p className="news-body">{news.content}</p>
                      <div className="button">
                          <div className="delete-btn">Delete</div>
                      </div>
                      </Accordion.Body>
                  </div>
                  </Accordion>

              );
          })}
      </div>
  );
}

export default App;
