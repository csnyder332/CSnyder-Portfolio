import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './nav.js';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='../About/about.js' activeStyle>
			About
		</NavLink>
		<NavLink to='../Projects/projects.js' activeStyle>
			Events
		</NavLink>
		<NavLink to='../Skills/skills.js' activeStyle>
			Annual Report
		</NavLink>
		<NavLink to='../Resume/resume.js' activeStyle>
			Teams
		</NavLink>
		<NavLink to='../Contact/contact.js' activeStyle>
			Blogs
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
