import React, {useEffect, useState} from "react"
import axios from "axios";

const Two = () => {
    const[data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:5000/getdetails1');
            setData(response.data);
        }
        fetchData();
    }, []);
    return(
        <div>
            <center>
            <h2>Male Users which have phone price greater than 10,000.</h2>
            <p>Total Users: {data.length}</p>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Income</th>
                        <th>City</th>
                        <th>Car</th>
                        <th>Quote</th>
                        <th>Phone Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item._id}>
                            <td>{item.id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                            <td>{item.income}</td>
                            <td>{item.city}</td>
                            <td>{item.car}</td>
                            <td>{item.quote}</td>
                            <td>{item.phone_price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </center>
        </div>
    )
};

export default Two;