
export default function Button() {
  const doSomething = () => {
    alert('FUI CLICADO')
  }

  return (
    <div>
      <button onClick={doSomething}>
        SOU UM BOTÃO!
      </button>
    </div>
  )
}
