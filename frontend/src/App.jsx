import NavBar from "./components/NavBar"

const App = () => {
  const notes = [
    {
      id: 1,
      title: "Test1",
      note: "sample description"
    },
    {
      id: 2,
      title: "Test2",
      note: "lorem ipsum ist ade"
    }
  ]
  return (
    <div>
      <NavBar/>
      <div className="w-full flex-col justify-center p-4">
        { notes.length && 
          notes.map((note) =>(
              <div key={note.id} className="border-2 rounded-2xl p-4 m-4">
                  <p className="text-2xl truncate min-w-20 w-fill">{note.title}</p>
                  <pre className="truncate min-w-20 w-fill">{note.note}</pre>
              </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default App
