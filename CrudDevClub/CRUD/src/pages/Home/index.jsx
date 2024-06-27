import './style.css'
import { IconTrash } from '@tabler/icons-react'
import api from '../../services/api'
import { useEffect, useState, useRef } from 'react'

function Home() {
  const [user, setUser] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers(){
    const userFromApi = await api.get('http://localhost:3000/users')
    setUser(userFromApi.data)
    console.log(user)
  }

  async function createUsers(){
     await api.post('http://localhost:3000/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
     })
     getUsers()
    // console.log(inputName.current.value)
  }

  async function deleteUsers(id){
    await api.delete(`http://localhost:3000/users/${id}`)
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro Dev</h1>
        <input placeholder=' Digite seu Nome' type="text" name='text' ref={inputName}/>
        <input placeholder=' Digite sua Idade' type="number" name='idade' ref={inputAge} />
        <input placeholder=' Digite seu Email' type="email" name='email' ref={inputEmail} />
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>
    { user.map((user) => {
      return (    
        <div key={user.id} className='card'> 
          <div>
            <p>nome: <span>{user.name}</span> </p>
            <p>idade: <span>{user.age}</span></p>
            <p>email: <span>{user.email}</span> </p>
          </div>
          <button onClick={() => deleteUsers(user.id)} style={{cursor: 'pointer', backgroundColor: '#48456c', outline: 'none', border: 'none'}}>
            <IconTrash size={25} style={{color: 'red'}}/>
          </button>
        </div>
      )
    })}
      
    </div>
  )
}

export default Home
