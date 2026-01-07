import React from 'react'
import Card from './Card'


const DiagnosticList = ({list}:{list:{name: string, description: string, status: string}[]}) => {
  return (
    <Card title="DiagnosticList">
      <div className="w-full pt-10">
        <table className="w-full overflow-y-auto text-sm">
          <thead className="bg-[#F6F7F8] ">
            <tr>
              <th className=" p-4 rounded-l-full text-left">
                Problem/Diagnosis
              </th>
              <th className=" p-4 text-left">Description</th>
              <th className=" p-4 rounded-r-full text-left">Status</th>
            </tr>
          </thead>
          <tbody className=" overflow-y-scroll">
            {list.map((item, index) => (
              <tr key={index} className="border-b border-[#F6F7F8]/90">
                <td className=" p-4 rounded-l-full text-left">{item.name}</td>
                <td className=" p-4 text-left">{item.description}</td>
                <td className=" p-4 rounded-r-full text-left">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default DiagnosticList