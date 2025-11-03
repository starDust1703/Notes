import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddNote from './screens/AddNote.jsx';
import Login from './screens/Login.jsx';
import Signup from './screens/Signup.jsx';
import FileNotFound from './screens/FileNotFound.jsx';

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
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "*",
    element: <FileNotFound/>
  }
]);

createRoot(document.getElementById('root')).render(
    <div>
        <RouterProvider router={router} />
    </div>
);