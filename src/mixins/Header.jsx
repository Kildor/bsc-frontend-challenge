import '../assets/Header.scss'
import Tab from "./Tab";

const tabs = [
	{
		url:'/category/russia',
		title: 'Россия'
	},
	{
		url:'/category/world',
		title: 'Мир'
	},
	{
		url:'/category/currency',
		title: 'Валюта'
	},
	{
		url:'/category/trends',
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