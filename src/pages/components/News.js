import React from 'react';

const News = ({ newsList }) => {
	const sortedNews = newsList.sort(
		(a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
	);

	return (
		<div>
			<div className='text-center'>
				<h2>Últimas noticias</h2>
			</div>
			<div className='row'>
				{sortedNews.map((notice, i) => {
					return (
						<div key={i} className='col-md-6'>
							<img className='img-fluid' src={notice.urlToImage} alt={notice.title} />
							<h3>{notice.title}</h3>
							<p>
								{`${notice.description} `}
								<a href={notice.url}>Leer mas</a>
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default News;
