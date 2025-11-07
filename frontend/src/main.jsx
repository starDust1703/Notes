import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AddNote from './screens/AddNote.jsx';
import Login from './screens/Login.jsx';
import Signup from './screens/Signup.jsx';
import FileNotFound from './screens/FileNotFound.jsx';
import Notes from './screens/Notes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addNote",
    element: <AddNote/>
  },
  {
    path: "/notes/:id",
    element: <Notes/>
  },
  {
    path: "*",
    element: <Navigate to={'/'}/>
  },
  {
    path: "/:somthing/:dubj",
    element: <FileNotFound/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
]);

createRoot(document.getElementById('root')).render(
    <div>
        <RouterProvider router={router} />
    </div>
);