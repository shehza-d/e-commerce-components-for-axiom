import { SizeTableType } from "../../../types/types";

export default function Table(props: { data: SizeTableType }) {
  return (
    <table className="bdr w-full">
      <tr className="text-left">
        <th className="border-2 p-2" colSpan={2}>
          United States
        </th>
        <th className="border-2 p-2">UK</th>
        <th className="border-2 p-2">Europe</th>
      </tr>
      {props.data.map((val, key) => {
        return (
          <tr key={key} className="border-2">
            <td className="border-2 p-2">{val.us}</td>
            <td className="border-2 p-2 capitalize">{val.us_text}</td>
            <td className="border-2 p-2">{val.uk}</td>
            <td className="border-2 p-2">{val.europe}</td>
          </tr>
        );
      })}
    </table>
  );
}
