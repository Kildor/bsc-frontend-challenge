import '../assets/Header.scss'
import Tab from "./Tab";

const tabs = [
	{
		url:'/russia',
		title: 'Россия'
	},
	{
		url:'/world',
		title: 'Мир'
	},
	{
		url:'/currency',
		title: 'Валюта'
	},
	{
		url:'/trends',
		title: 'Тренды'
	}
];
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