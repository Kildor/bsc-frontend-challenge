import '../../assets/NewsCard.scss'

const DateTime = ({datetime}) => {
	// we use format date from the locale settings of the client.
	const formattedDT = new Date(datetime).toLocaleString(); 
	return (
		<span className='news_date'>{formattedDT}</span>
	);
}
const NewsCard = (news) => {
	return (
		<div className="news_card">
			<a className="news_rubric" href={news.rubric_url}>{news.rubric}</a>
			<header className="news_header"><a className="news_url" href={news.article_url}>{news.title}</a></header>
			<div className="news_image_container">
				{!!news.medium_image_url && <img className="news_image" alt={news.title} src={news.medium_image_url}/>}
			</div>
			<footer className="news_footer">
				<DateTime datetime={news.publish_date}/>
				<div className="counters">
					<i className="icon icon-likes">{news.like_count}</i>
					<i className="icon icon-comments">{news.comment_count}</i>

					<i className="icon icon-download"></i>

				</div>


			</footer>
			{/* {JSON.stringify(props)} */}
		</div>
	);
}

export default NewsCard