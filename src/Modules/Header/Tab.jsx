import { Link, useRouteMatch } from "react-router-dom";

const Tab = ({url, title}) => {
	let match = useRouteMatch({
		path: url,
		exact: true
	});
	return (
		<li>
			<Link className={match && 'active'} to={url}>{title}</Link>

		</li>
	);
}

export default Tab;