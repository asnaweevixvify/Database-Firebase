import { useState,useEffect } from 'react'
import './App.css'
import { db } from './firebase'
import { getFirestore, collection, getDocs , addDoc , deleteDoc ,doc} from 'firebase/firestore/lite';


function App() {
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    async function getEmployee(db){
      const empCol = collection(db,'employees')
      const empSnapshot = await getDocs(empCol)
      const newItem = empSnapshot.docs.map(e=>({
        ...e.data(),id:e.id
      }))
      setData(newItem)
  }
  getEmployee(db)
  },[])

    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [email,setEmail] = useState('')
  function getData(e){
    e.preventDefault()
    addDoc(collection(db,'employees'),{
      name:name,
      age:age,
      email:email
    })
    setName('')
    setAge('')
    setEmail('')
  }
  function delItem(id){
    deleteDoc(doc(db,'employees',id))
  }
  
  return (
    <div className='text-container'>
      <form className="form-container" onSubmit={getData}>
        <input type='text' placeholder='กรอกชื่อ' value={name} onInput={(e)=>{setName(e.target.value)}}></input>
        <input type='text' placeholder='กรอกอายุ' value={age}onInput={(e)=>{setAge(e.target.value)}}></input>
        <input type='text' placeholder='กรอกอีเมล' value={email}onInput={(e)=>{setEmail(e.target.value)}}></input>
        <button type='submit'>บันทึกข้อมูล</button>
      </form>
      {data.map((e,index)=>{
        return (
          <div className="text" key={index}>
            <h3>{e.name}</h3>
            <h4>{e.age}</h4>
            <h4>{e.email}</h4>
            <button onClick={()=>delItem(e.id)}>ลบข้อมูล</button>
          </div>
        )
      })}
    </div>
  )
}

export default App
