import { useHistory } from "react-router";

export const ListTableItem = ({ data }) => {
  const history = useHistory();

  return (
    <tr onClick={() => history.push("/tournaments/" + data._id)}>
      <td>{data.date}</td>
      <td>{data.name}</td>
      <td>
        {data.buyin} {data.currency}
      </td>
      <td>{data.players.length}</td>
      <td>elomelo</td>
      <td>elomelo</td>
    </tr>
  );
};
