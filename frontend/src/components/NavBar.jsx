import { IoAdd } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
	const addNote = () => {
		alert('feature pending');
	}
	return (
		<div className="bg-amber-300 p-2 flex justify-between items-center pl-4">
			<p id="title" className="text-3xl font-(family-name:--my-font)bg-amber-200 p-3">My Notes</p>
			<NavLink to='/add'>
				<IoAdd
					className="w-10 h-10 active:scale-90 duration-200 active:rotate-45 block transition"
				/>
			</NavLink>
		</div>
	)
}

export default NavBar