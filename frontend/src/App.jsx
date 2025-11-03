import NavBar from "./components/NavBar"
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { LuPencil } from "react-icons/lu";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
        const url = "http://localhost:8080/notes";
        const response = await fetch(url, {
          headers: {
            'Authorization': localStorage.getItem('token')
          }
        });
        const result = await response.json();
        setNotes(result);
    }catch (error) {
        console.log("Internal Server Error:", error);
    }
  }
  const deleteNote = async (id) => {
    try {
      const url = `http://localhost:8080/notes/${id}`;
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      });
      if (response.ok) {
        setNotes(notes.filter(note => note._id !== id));
      }
    } catch (error) {
      console.log("Error deleting note:", error);
    }
  }

  return (
    <div>
      <NavBar />
      <div className="w-full flex-col justify-center p-4">
        {(notes.length) ?
          notes.map((note) => (
            <div key={note._id} className="border-2 rounded-2xl p-4 m-4 flex justify-between items-center">
              <div className="w-9/10">
                <p className="text-2xl truncate min-w-20 w-9/10">{note.title}</p>
                <pre className="truncate min-w-20 w-fill">{note.note}</pre>
              </div>
              <div className="flex flex-col gap-4 items-center">
              <LuPencil className="size-5" />
              <MdDelete className="size-6 cursor-pointer hover:text-red-600" onClick={() => deleteNote(note._id)} />
              </div>
            </div>
          )
          ) : <p>No Notes Found</p>
        }
      </div>
    </div>
  )
}

export default App
