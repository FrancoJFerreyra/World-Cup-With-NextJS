import Navigation from 'pages/components/Navigation';
import resultsData from '../../world_cup_history_data/results';
import HistoryResult from 'pages/components/HistoryResult';

const All = () => {
  return (
    <>
      <Navigation />
      <section>
        <div className='text-center'>
          <h1>Finales del mundo</h1>
        </div>
        <div className='row finals__matches--container'>
          {resultsData.map((final) => (
            <HistoryResult key={final.year} final={final} />
          ))}
        </div>
      </section>
    </>
  );
};

export default All;
