const API = () => { }

API.BASEURL = "https://api.bcs.ru/express_articles/v1";

API.getNewsFeed = async (params) => {
	let newsFeed = [];
	await fetch(API.BASEURL).then(res => res.json()).then(json => { newsFeed = json }).catch(e=>{ newsFeed = []});
	return newsFeed;
}

export default API;