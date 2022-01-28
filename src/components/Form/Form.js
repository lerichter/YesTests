import { useState } from "react"
import Input from "../Input/Input"
import Button from "../Button/Button"
import axios from 'axios'
import Message from "./Message/Message"

export default function Form() {
    
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [hasStatus, setHasStatus] = useState('')
  
  async function onSubmit() {
    const postData = {
      name, 
      password,
    }

    try {
      await axios.post('https://my-json-server.typicode.com/typicode/demo/posts', postData)
      setHasStatus('Login efetuado')
      setTimeout(() => setHasStatus(''), 3000)
    } catch (error) {
      setHasStatus(error.response.data.msg)
      setTimeout(() => setHasStatus(''), 3000)
    }
  }

  return (
    <div 
      data-testid="form"
    >
      <Input 
        onChange={e => setName(e.target.value)} 
        value={name}
        placeholder="Name"
        data-testid="input-name"
      />
      <Input 
        onChange={e => setPassword(e.target.value)} 
        value={password}
        placeholder="Password"
        type="password"
        data-testid="input-password"
      />
      <Button
        onClick={onSubmit}
      />
      {hasStatus !== '' &&
        <Message 
          data-testid="msg" 
          msg={hasStatus}
        />
      }
    </div>
  )
}