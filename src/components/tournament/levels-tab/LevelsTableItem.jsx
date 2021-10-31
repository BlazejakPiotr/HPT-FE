const LevelsTableItem = ({ data, index }) => (
  <tr
    onClick={() => {
      console.log(data);
    }}
  >
    <td>Round {index + 1}</td>
    <td>{data.duration} min</td>
    <td>{data.ante}</td>
    <td>{data.big}</td>
    <td>{data.small}</td>
    <td></td>
  </tr>
);
export default LevelsTableItem;
