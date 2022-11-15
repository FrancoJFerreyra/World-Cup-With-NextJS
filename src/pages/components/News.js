import React from 'react';

const News = ({ newsList }) => {
  const Argentina = newsList.filter((e) => e.title.includes('Argentina'));
  const notArgentina = newsList.filter((e) => !e.title.includes('Argentina'));

  const sortedNews = [...Argentina, ...notArgentina];

  return (
    <div>
      <div className='text-center'>
        <h2>Últimas noticias</h2>
      </div>
      <div className='row'>
        {sortedNews.slice(0, 10).map((notice, i) => {
          return (
            <div key={i} className='col-md-6'>
              <img
                className='img-fluid'
                src={notice.urlToImage}
                alt={notice.title}
              />
              <h3>{notice.title}</h3>
              <p>{`${notice.description}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
