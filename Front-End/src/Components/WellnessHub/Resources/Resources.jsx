// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Resources.css';

function Resources() {
const [resources,setResources]=useState([]);

useEffect(()=>{
  axios.get("http://localhost:5226/api/resource/read")
  .then(response=>{
    setResources(response.data.resources);
  }).catch(error=>{
    console.log("Error fetching resources",error);
  })
},[]);
  return (
    <div>
      <h1>Resources</h1>
      <div className='resources-container'>
        <ul>
          {resources.map(resource=>(
            <li key={resource._id} className='resources-item'>
              <h2 className='resource-question'>{resource.question}</h2>
              <p className='resource-answer'>{resource.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Resources
