const DateTime = ({datetime}) => {
	// we use format of the date from the locale settings of the client.
	const formattedDT = new Date(datetime).toLocaleString(); 
	return (
		<span className='news_date'>{formattedDT}</span>
	);
}
const Counter = ({icon, children}) => {
	return (
		<span className={'icon icon-'+icon}>{children}</span>
	)
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
					<Counter icon="likes">{news.like_count}</Counter>
					<Counter icon="comments">{news.comment_count}</Counter>
					<Counter icon="share"></Counter>
				</div>


			</footer>
		</div>
	);
}

export default NewsCard