import { useState } from "react"
import Input from "../Input/Input"
import Button from "../Button/Button"

export default function Form({onSubmit}) {
    
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form 
      onSubmit={ e => onSubmit(e, name, password)} 
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
        type="submit"
      />
    </form>
  )
}