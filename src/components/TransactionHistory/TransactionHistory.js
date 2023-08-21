import { TransacHistory } from "./TrasactionHistory.styled";
import PropTypes from 'prop-types';



export const TransactionHistory = ({ items }) => {
  return (
    <TransacHistory>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
{items.map(item=>(
<tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>))}
              
  </tbody>
</TransacHistory>
  );
};


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};