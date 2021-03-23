
import './App.css';
import User from "./components/user/User";

function App() {

    let users = [
        {name: `alex`, age: 22, status: true},
        {name: `ira`, age: 11, status: false},
        {name: `max`, age: 33, status: true},
        {name: `anna`, age: 44, status: false},
        {name: `ander`, age: 99, status: true},
    ]
    return (
        <div>

            {
                users.map((value, index)=> <User user={value} key={index}/>)
            }

        </div>
    );
}

export default App;
