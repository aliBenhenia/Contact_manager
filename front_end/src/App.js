import { Button } from 'bootstrap';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Contact from './Contact';

import { useState , useEffect} from 'react';

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
  const savedData = JSON.parse(localStorage.getItem('dataStorage'));
  const [data, setData] = useState(savedData);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  useEffect(()=>{
     localStorage.setItem("dataStorage", JSON.stringify(data));
  },[data])
  const handle_add = ()=>{
    let flag = 1;
    if (name.length == 0 || contact.length == 0)
      flag = 0;
    data.map((iter)=>{
      if (iter.username == name)
      {
        flag = 0;
        return;
      }
    })
    if (flag)
      setData([...data, {username:name, contact_email:contact}]);

  }
  const handle_delete = (item)=>{
    const newdata = data.filter((el)=> el.username != item.username);
    setData(newdata);
  }
  const handle_update = (idx)=>{
    data.map((el, index)=>{
      if (index == idx)
      {
        const newData = data.map(iter=> iter);
        newData[idx].username = name;
        newData[idx].contact_email = contact;
        setData(newData);
      }
    })
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
                    <button type="button" onClick={()=>handle_delete(item)} className="btn btn-danger ml-4">delete</button>
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
