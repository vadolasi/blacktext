import { useState } from "preact/hooks"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export function App() {
  const [text, setText] = useState("")

  const notify = () => toast.success("Copiado para a area de transferência!", { position: "top-center" })

  function formatToSite() {
    return "&#8203;" + text.split("").join("&#8203;") + "&#8203;"
  }

  function formatToEmail() {
    return "&#8238;" + text.split("").reverse().join("")
  }

  function formatToSMS() {
    return formatToEmail()
  }

  function clear() {
    setText("")
  }

  return (
    <div class="flex w-screen h-screen justify-center items-center">
      <ToastContainer />
      <div class="flex gap-4 flex-col">
        <textarea class="border" value={text} onChange={ev => setText((ev.target as any).value)}></textarea>
        <div class="flex gap-4 justify-center">
          <label class="border rounded p-2 cursor-pointer">
            Site
            <textarea class="absolute -top-80 -left-80" dangerouslySetInnerHTML={{ __html: formatToSite() }} onClick={(ev) => {
              (ev.target as any).select()
              document.execCommand("copy")
              notify()
            }}></textarea>
          </label>
          <label class="border rounded p-2 cursor-pointer">
            Email
            <textarea class="absolute -top-80 -left-80" dangerouslySetInnerHTML={{ __html: formatToEmail() }} onClick={(ev) => {
              (ev.target as any).select()
              document.execCommand("copy")
              notify()
            }}></textarea>
          </label>
          <label class="border rounded p-2 cursor-pointer">
            SMS
            <textarea class="absolute -top-80 -left-80" dangerouslySetInnerHTML={{ __html: formatToSMS() }} onClick={(ev) => {
              (ev.target as any).select()
              document.execCommand("copy")
              notify()
            }}></textarea>
          </label>
        </div>
        <button class="border p-2 rounded" onClick={clear}>Limpar</button>
      </div>
    </div>
  )
}
