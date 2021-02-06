import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import newsJson from '../../assets/news.json';
import NewsCard from './NewsCard'
import '../../assets/NewsList.scss'

const itemsPerPage = 3;
const NewsList = (props) => {
	let { category } = useParams(); // not implemented.
	const [startIndex, setStartIndex] = useState(0);
	const [news, setNews] = useState([]);
	console.dir(category)
	useEffect(() => {
		//API.getNewsFeed({category: category, index: index, per_page:itemsPerPage});
		setNews(newsJson);
		return () => {
			setNews([]);
			setStartIndex(0);
		}
	}, [category]);
	const amount = startIndex + itemsPerPage;

	const visibleNews = news.filter((news, index) => index < amount).map(news => {
		return <NewsCard key={news.id} {...news} />
	})

	return (
		<div className="newslist">
			{visibleNews}

			{amount < news.length &&
				<div className='showmore'>
					<button onClick={() => setStartIndex(startIndex + itemsPerPage)}>Смотреть ещё</button>
				</div>
			}

		</div>
	)
};
export default NewsList