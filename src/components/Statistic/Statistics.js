import PropTypes from 'prop-types';
import { getRandomHexColor } from './getRandomHexColor';
import {
  StatisticsSection,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';




export const Statistics = ({ title,stats}) => {
    return (
     <StatisticsSection>
 {title && <Title>{title}</Title>}

            <StatList>
                {stats.map(item => (
                    <StatItem key={item.id} style={{ backgroundColor: getRandomHexColor() }}>
                        <Label>{item.label}</Label>
                        <Percentage>{item.percentage}%</Percentage>
                    </StatItem>))}
  </StatList>
</StatisticsSection>
  );
};



Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      stats:PropTypes.string
    })
  ).isRequired,
};

export default Statistics;