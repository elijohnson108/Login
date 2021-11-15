import axios from "axios";
import {navigate} from "@reach/router";
import"../App.css";


const Dashboard =() => {
    const cookie = document.cookie.match(/^(.*;)?\s*usertoken\s*=\s*[^;]+(.*)?$/);

const handleLogout = () => {
    axios
    .post("http://localhost:8000/api/logout", {}, { withCredentials: true })
    .then((response) => {console.log(response)
    navigate ("/")})
    .catch((err) => console.log(err));
};


    return (
        <body >
            <div style={{marginLeft: "600px", marginTop:"200px", display: 'inline-block', padding: "25px", backgroundColor: "lightgrey"}}> {cookie?
                    <div>
                        <button onClick={() => handleLogout()}>Logout</button>
                        <br></br>
                    </div>
                    :""}
            </div>
        </body>
    );
};


export default Dashboard;