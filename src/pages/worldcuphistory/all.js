import Navigation from 'pages/components/Navigation';
import resultsData from '../../world_cup_history_data/results';
import HistoryResult from 'pages/components/HistoryResult';

const All = () => {
  return (
    <>
      <Navigation />
      <div>
        {resultsData.map((final) => (
          <HistoryResult key={final.year} final={final} />
        ))}
      </div>
    </>
  );
};

export default All;
