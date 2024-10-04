import React from "react";

function About() {
  return (
    <div className="flex flex-col py-5  gap-5">
      {/* <div className="bg-slate-950 w-2/5 h-40"></div> */}
      <div className="bg-slate-400 w-full h-auto">
        <h1 className="p-2 font-bold font-serif">Bsic Information</h1>
      </div>
      <div className="p-2">
        <ul className="list-disc p-4 font-serif">
          <li>Name:Sagar Kanungo</li>
          <li>DOB:19/03/1993</li>
          <li>Email:sagarkanungo23@gmail.com </li>
          <li>Contact:6264561002</li>
        </ul>
      </div>
      <div className="bg-slate-400 w-full h-auto">
        <h1 className="p-2 font-bold font-serif">Accedmic Information</h1>
      </div>
      <div className="relative w-full overflow-x-auto">
    <div className="min-w-full p-2">
      <table className="min-w-full border border-collapse border-black">
        <thead className="bg-gray-200 sticky top-0">
          <tr>
            <th className="border border-black px-4 py-2 font-serif">Institute</th>
            <th className="border border-black px-4 py-2 font-serif">University</th>
            <th className="border border-black px-4 py-2 font-serif">Percentage</th>
            <th className="border border-black px-4 py-2 font-serif">Passout</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-4 py-2 font-serif text-center">SSVM[10th]</td>
            <td className="border border-black px-4 py-2 font-serif text-center">M.P Board</td>
            <td className="border border-black px-4 py-2 font-serif text-center">70%</td>
            <td className="border border-black px-4 py-2 font-serif text-center">2009</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2 font-serif text-center">Boys Excellence[12th]</td>
            <td className="border border-black px-4 py-2 font-serif text-center">M.P Board</td>
            <td className="border border-black px-4 py-2 font-serif text-center">62%</td>
            <td className="border border-black px-4 py-2 font-serif text-center">2011</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2 font-serif text-center">JIT</td>
            <td className="border border-black px-4 py-2 font-serif text-center">RGPV</td>
            <td className="border border-black px-4 py-2 font-serif text-center">67%</td>
            <td className="border border-black px-4 py-2 font-serif text-center">2015</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
      <div className="bg-slate-400 w-full h-auto">
        <h1 className="p-2 font-bold font-serif ">Total Experiance</h1>
      </div>
     <div className="p-2">
     <ul className="list-disc p-4 font-serif">
        <li>
          (2015-2018): workin in <b>Amazon</b> as Full Stack Developer. with
          Technology React,Node,Next,TypeScript<br></br>
          fix Problem,api intigration,working on ui
        </li>
        <li>
          (2015-2018): workin in <b>Flipkart</b> as Full Stack Developer. with
          Technology React,Node,Next,TypeScript<br></br>
          fix Problem,api intigration,working on ui
        </li>{" "}
        <li>Company 3: Experience details</li>
        <li>
          (2015-2018): workin in <b>Zometo</b> as Full Stack Developer. with
          Technology React,Node,Next,TypeScript<br></br>
          fix Problem,api intigration,working on ui
        </li>{" "}
      </ul>
     </div>
    </div>
  );
}

export default About;
