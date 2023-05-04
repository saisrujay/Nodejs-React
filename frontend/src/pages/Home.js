import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();

    const nav1 = async() => {
        navigate("/users/bmw-mercedes-income");
    }
    const nav2 = async() => {
        navigate("/users/male-expensive-phone");
    }
    const nav3 = async() => {
        navigate("/users/last-name-starts-with-m");
    }
    const nav4 = async() => {
        navigate("/users/bmw-mercedes-audi-no-digit-email");
    }
    const nav5 = async() => {
        navigate("/cities/top-10-users");
    }

    const buttonStyle = {
        backgroundColor: '#555555',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer'
    }

    const headerStyle = {
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        fontSize: '20px',
        color: 'black',
        margin: '20px 0px'
    }
  
    return(
        <div>
            <h2 style={headerStyle}>1. Users which have income lower than $5 USD and have a car of brand "BMW" or "Mercedes".</h2>
            <button style={buttonStyle} onClick={nav1} >Fetch Users</button>
            <hr></hr>

            <h2 style={headerStyle}>2. Male Users which have phone price greater than 10,000.</h2>
            <button style={buttonStyle} onClick={nav2} >Fetch Users</button>
            <hr></hr>

            <h2 style={headerStyle}>3. Users whose last name starts with "M" and has a quote character length greater than 15 and email includes his/her last name.</h2>
            <button style={buttonStyle} onClick={nav3}>Fetch Users</button>
            <hr></hr>

            <h2 style={headerStyle}>4. Users which have a car of brand "BMW", "Mercedes", "Audi", and whose email does not include any digit.</h2>
            <button style={buttonStyle} onClick={nav4}>Fetch Users</button>
            <hr></hr>
            
            <h2 style={headerStyle}>5. The Data of top 10 cities which have the highest number of users and their average income.</h2>
            <button style={buttonStyle} onClick={nav5}>Fetch Users</button>
            <hr></hr>
        </div>
    );
}

export default Home;
