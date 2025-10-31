import { useState } from "react";
import { useNavigate }  from "react-router-dom";
import './AddNote.css';

const AddNote = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const addNote = () => {
    //add note to db
    setTitle("");
    setNote("");
    navigate("/");
  }
  return (
    <div className="w-screen h-screen bg-amber-300 flex items-center justify-center">
      <div className="bg-amber-400 w-[70%] h-[70%] border-2 p-2 flex flex-col items-center gap-2 rounded">
        <input 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full border-b border-black bg-transparent focus:outline-none px-2 py-1 text-3xl"
          placeholder="Title"
        />
        <textarea
          name="note"
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Take a note..."
          className="block w-full h-full bg-transparent focus:outline-none px-2 py-1 resize-none"
        />
        <button
          className="cursor-pointer border-2 border-black px-4 py-1 mt-2 rounded bg-amber-200 hover:bg-amber-300 active:scale-95 transition"
          onClick={() => addNote()}
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default AddNote