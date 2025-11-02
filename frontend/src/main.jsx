import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddNote from './screens/AddNote.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add",
    element: <AddNote/>
  }
]);

createRoot(document.getElementById('root')).render(
    <div>
        <RouterProvider router={router} />
    </div>
);