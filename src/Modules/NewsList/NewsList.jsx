import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NewsCard from './NewsCard'
import '../../assets/NewsList.scss'
import API from '../API';

const itemsPerPage = 3;
const NewsList = (props) => {
	let { category } = useParams(); // not implemented.
	const [startIndex, setStartIndex] = useState(0);
	const [news, setNews] = useState([]);
	useEffect(() => {
		/**
		 * in a real world there should be some parameters to load news and getNewsFeed should looks like this
		 * API.getNewsFeed({category: category, index: startIndex, per_page:itemsPerPage}).then(feed=>{setNews(feed)});
		 */
		API.getNewsFeed().then(feed => { setNews(feed) });
		return () => {
			setNews([]);
			setStartIndex(0);
		}
	}, [category]);
	const amount = startIndex + itemsPerPage;

	const visibleNews = news.filter((news, index) => index < amount).map(news => {
		return <NewsCard key={news.id} {...news} />
	})

	const updateIndex = () => { setStartIndex(startIndex + itemsPerPage) };

	return (
		<div className="newslist">
			{visibleNews}
			{amount < news.length &&
				<div className='showmore'>
					<button onClick={updateIndex}>Смотреть ещё</button>
				</div>
			}

		</div>
	)
};
export default NewsList