import { useState, useEffect } from "react";
import axios from "axios";

const Five = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('http://localhost:5000/getdetails4');
            setData(response.data);
        }
        fetchData();
    }, []);
    return(
        <div>
        <center>
        <h2>The Data of top 10 cities which have the highest number of users and their average income.</h2>
        <p>Total Users: {data.length}</p>
            <table border="1">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>No. of Users</th>
                        <th>Avg_Income</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.count}</td>
                            <td>{item.avg_income}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </center>
        </div>
    )
}

export default Five;