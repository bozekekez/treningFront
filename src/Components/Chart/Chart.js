import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import './Chart.css'

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100
//   }
// ];

export default function Chart() {
    const [brojevi, setBrojevi] = useState([]);
    const [brojeviDrugi, setBrojeviDrugi] = useState([]);
    const [graf, setGraf] = useState([{}])
    const [godine, setGodine] = useState();
    const [godine2, setGodine2] = useState();
    const [message, setMessage] = useState();
    let data = [];

    const handleChange = (e) =>{
        setBrojevi(e.target.value)
        let temp = e.target.value.split(',')
        setGodine(temp.filter(member => member !== ',').length)
    }
    
    const handleChange2 = (e) =>{
        setBrojeviDrugi(e.target.value)
        let temp2 = e.target.value.split(',')
        setGodine2(temp2.filter(member => member !== ',').length)
    }
    console.log(godine2)
    const handleSubmit = (e) => {
        e.preventDefault();
        let temp = brojevi.split(',');
        let temp2 = brojeviDrugi.split(',');
        if(temp.length === temp2.length){
            let tempObj = [{}]
            for (let i = 0; i < temp.length; i++) {
                data.push({
                    prvi: temp[i],
                    drugi: temp2[i],
                    godina: i,
                })
            }
            setGraf(data)
            setMessage()
        }
        if(temp.length !== temp2.length){
            setMessage('Različit broj godina')
        }
    }

    const handleReset = () =>{
        setBrojevi([]);
        setBrojeviDrugi([]);
        setGraf([{}]);
    }

  return (
      <div className="chartParent">
       
        { data !== [] ?
         <div>
             <LineChart
        width={500}
        height={300}
        data={graf}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="godina" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
        type="monotone"
        dataKey="prvi"
        stroke="#8884d8"
        activeDot={{ r: 20 }}
        />
      <Line type="monotone" dataKey="drugi" stroke="#82ca9d" />
    </LineChart>
    </div>
    :
    <></>
        }
        
    <div>
        <div>
        <div>
        <p className="message">{message}</p>
        </div>
        <label>Broj godina prvoga je:</label>
        {godine}
        </div>
        <div>
        <label>Broj godina drugoga je:</label>
        {godine2}
        </div>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Unesi vrijednosti prvog odvojene zarezom:</label>
            <input type="text" value={brojevi} onChange={handleChange}></input>
            </div>
            <div>
            <label>Unesi vrijednosti drugog odvojene zarezom:</label>
            <input type="text" value={brojeviDrugi} onChange={handleChange2}></input>
            </div>
            <button onSubmit={handleSubmit}>Start</button>
        </form>
        <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  );
}
