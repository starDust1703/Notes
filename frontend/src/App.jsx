import NavBar from "./components/NavBar"
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { NavLink } from "react-router-dom";

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
    <div className="absolute w-full">
      <div className="fixed w-full">
        <NavBar />
      </div>

      <div className="justify-center p-4 mt-20 w-full">
        {notes.length ? (
          notes.map((note) => (
            <div
              key={note._id}
              className="border-2 rounded-2xl p-4 m-4 flex justify-between items-center"
            >
              <div className="w-4/5">
                <p className="text-2xl truncate">{note.title}</p>
                <pre className="truncate w-full">{note.note}</pre>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <NavLink to={`/notes/${note._id}`}>
                  <LuPencil className="size-5 hover:text-amber-300 cursor-pointer" />
                </NavLink>
                <MdDelete
                  className="size-6 cursor-pointer hover:text-red-600"
                  onClick={() => deleteNote(note._id)}
                />
              </div>
            </div>
          ))
        ) : (
          <p>No Notes Found</p>
        )}
      </div>
    </div>
  )
}

export default App
