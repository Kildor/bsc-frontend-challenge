import '../../assets/Header.scss'
import Tab from "./Tab";
import tabs from '../../assets/tabs.json'

const Header = () =>{
	return (
		<header className='header-tabs'>
			<ul className='tabs-container'>
				{tabs.map(tab=><Tab key={tab.url} {...tab}/>)}
			</ul>

		</header>
	);
}

export default Header;