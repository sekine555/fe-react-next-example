import { mockData } from "./mockData";

interface Props {
  componentRef: React.MutableRefObject<HTMLDivElement | null>;
}

const PrintExample: React.FC<Props> = ({ componentRef }) => {
  return (
    <>
      <div ref={componentRef}>
        <div className="flex flex-col">
          <div className="flex items-center justify-center my-4">
            <label className="text-lg font-bold">タイトル</label>
          </div>
          <table className="w-full border-collapse whitespace-pre-line rounded border border-gray-300 bg-white text-left align-top">
            <thead
              className={"px-2 font-bold text-base bg-lime-100 border-b-2"}
            >
              <tr>
                <th className="p-2">列1</th>
                <th className="p-2">列2</th>
                <th className="p-2">列3</th>
                <th className="p-2">列4</th>
                <th className="p-2">列5</th>
                <th className="p-2">列6</th>
                <th className="p-2">列7</th>
              </tr>
            </thead>

            <tbody>
              {mockData.map((item) => (
                <tr key={item.id}>
                  <td className="p-2">{item.column1}</td>
                  <td className="p-2">{item.column2}</td>
                  <td className="p-2">{item.column3}</td>
                  <td className="p-2">{item.column4}</td>
                  <td className="p-2">{item.column5}</td>
                  <td className="p-2">{item.column6}</td>
                  <td className="p-2">{item.column7}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PrintExample;
