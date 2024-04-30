import { Button } from 'bootstrap';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Contact from './Contact';
import axios from 'axios';

import { useState , useEffect} from 'react';
import useFeatch from './FetchData';

const data1 = [
  {
    username : "ali",
    contact_email : "44@gmail.com",
  },
  {
    username : "ali3",
    contact_email : "grtrtgrtgrt@gmail.com",
  },
  {
    username : "grt",
    contact_email : "rtgrtgrth@gmail.com",
  },
  {
    username : "hohh",
    contact_email : "rtrtrt@gmail.com",
  },
  {
    username : "altgri",
    contact_email : "trtr@gmail.com",
  },
  {
    username : "grtgt",
    contact_email : "gtrt@gmail.com",
  },
  {
    username : "gtgt",
    contact_email : "44ggt@gmail.com",
  },
]

function App() {
  const url = 'http://localhost:3006/contacts';
  // const savedData = JSON.parse(localStorage.getItem('dataStorage'));
  const [data, setData] = useState([]);
  // const [data] = useFeatch(url);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  useEffect(()=>{
    //  localStorage.setItem("dataStorage", JSON.stringify(data));
    fetch(url)
            .then(response => {
                // Check if the response is successful
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                // Parse the JSON response
                return response.json();
            })
            .then(data => {
                // Set the fetched data in state
                setData(data);
                // Set loading state to false
                // setLoading(false);
            })
            .catch(error => {
                // Log and handle errors
                console.error('Error fetching data:', error);
                // Set loading state to false
                // setLoading(false);
            });
    
  },[data])
  const handle_add = ()=>{
    // let flag = 1;
    // if (name.length == 0 || contact.length == 0)
    //   flag = 0;
    // data.map((iter)=>{
    //   if (iter.username == name)
    //   {
    //     flag = 0;
    //     return;
    //   }
    // })
    // if (flag)
    //   setData([...data, {username:name, contact_email:contact}]);
    try {
      // Make a POST request to the API endpoint using Axios
      const response =  axios.post('http://localhost:3006/contacts', {
          username:name,
          contact_email: contact,
      });

      // Reset input fields after successful submission
      
      // alert('Data submitted successfully!');
  } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit data. Please try again later.');
  }
    
  }
  const handle_delete = (idx)=>{
    // const newdata = data.filter((el)=> el.username != item.username);
    // setData(newdata);
    try {
      // Make a DELETE request to the API endpoint with the ID of the data to be deleted
      // idx++;
      const response =  axios.delete('http://localhost:3006/contacts'+'/'+idx);
  
      // If the request is successful, you can handle the response here
      console.log('Data deleted successfully');
      return response.data; // Return any response data if needed
    } catch (error) {
      // If there's an error, handle it here
      console.error('Error deleting data:', error.message);
      throw error; // Re-throw the error to handle it at the caller's level
    }
  }
  const handle_update = (idx)=>{
    // data.map((el, index)=>{
    //   if (index == idx)
    //   {
    //     const newData = data.map(iter=> iter);
    //     newData[idx].username = name;
    //     newData[idx].contact_email = contact;
    //     setData(newData);
    //   }
    // })
    try {
      // Make a POST request to the API endpoint using Axios
      idx++;
      const response =  axios.put('http://localhost:3006/contacts'+'/'+idx, {
          id : idx+1,
          username:name,
          contact_email: contact,
      });

      // Reset input fields after successful submission
      
      // alert('Data submitted successfully!');
  } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit data. Please try again later.');
  }

  }
  return (
    <div className="App container" >
      <header className="header shadow p-3 bg-dark text-white">
         <h1> contact manager </h1>
      </header>
      <div className="container mt-4 row" >
        <div className="col-6">
            <h1> contact lists </h1>
        </div>
        <div className="col-4">
            <input onChange={(e)=> setName(e.target.value)} type='text' placeholder='enter name'/>
            <input onChange={(e)=> setContact(e.target.value)} type='text' placeholder='enter contact'/>
            <button
            className="btn btn-primary" onClick={handle_add}>
                add contact
            </button>
        </div>
        
      </div>
      {
        data.map((item, idx)=>{
          return(
              <>
              <div className="container mt-4 row bg-warning p-3">
                <div className='col-6'>
                  <Contact key={idx} username={item.username} contact_email={item.contact_email}/>
                </div>
                <div className='col-6'>
                    <div className="btn-group float-end" role="group" aria-label="Basic example">
                    <button type="button" onClick={()=>handle_update(idx)} className="btn btn-primary">update</button>
                    <button type="button" onClick={()=>handle_delete(idx)} className="btn btn-danger ml-4">delete</button>
                    </div>
                </div>
              </div>
              </>
          );
        })
      }
    </div>
  );
}



export default App;
