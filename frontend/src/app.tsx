import { useState } from "preact/hooks"

export function App() {
  const [text, setText] = useState("")

  function format() {
    return "&#8238;&#8203;" + text.split("").reverse().join("&#8203;") + "&#8203;"
  }

  function clear() {
    setText("")
  }

  return (
    <div class="flex w-screen h-screen justify-center items-center">
      <div class="flex gap-4 flex-col">
        <textarea class="border rounded" value={text} onChange={ev => setText((ev.target as any).value)}></textarea>
        <label class="border rounded p-2 cursor-pointer text-center">
          Copiar texto criptografado
          <textarea class="absolute -top-80 -left-80" dangerouslySetInnerHTML={{ __html: format() }} onClick={(ev) => {
            (ev.target as any).select()
            document.execCommand("copy")
            alert("Copiado para a area de transferência!")
          }}></textarea>
        </label>
        <button class="border p-2 rounded" onClick={clear}>Limpar</button>
      </div>
    </div>
  )
}
