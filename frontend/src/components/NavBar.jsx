import { IoAdd } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { useState } from "react";

const NavBar = () => {
	const name = localStorage.getItem('name');
	const [cardVisible, setCardVisible] = useState(false);
	return (
		<div>
			<div className="bg-amber-300 p-2 flex justify-between items-center pl-4 z-0">
				<p id="title" className="text-3xl font-(family-name:--my-font)bg-amber-200 p-3">{name ? `${name}'s` : "My"} Notes</p>
				<div className="flex items-center gap-2">
					<NavLink to='/addNote'>
						<IoAdd
							className="w-10 h-10 active:scale-90 duration-200 active:rotate-45 block transition"
						/>
					</NavLink>
					<div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white cursor-pointer" onClick={() => {setCardVisible(true)}}>{name[0]}</div>
					{cardVisible && 
						<div className="absolute bg-[rgba(29,196,138,0.8)] p-2 rounded-xl top-4 right-4 flex flex-col gap-2 z-20">
								<button className="text-left cursor-pointer hover:bg-[rgba(234,255,0,0.4)] p-2 rounded-lg" onClick={()=> {}}>Log Out</button>
								<button className="text-left cursor-pointer hover:bg-[rgba(234,255,0,0.4)] p-2 rounded-lg" onClick={()=> {}}>Delete Account</button>
						</div>
					}
				</div>
			</div>
			{ cardVisible &&
			<div className="w-screen h-screen z-10 bg-amber-600" onClick={() => {console.log('hello'), setCardVisible(false)}}></div>
			}
		</div>
	)
}

export default NavBar