import React, {Component} from 'react';

class User extends Component {

    render() {
        let {user} = this.props;

        return(
          <div>
              <h4>{user.name}</h4>
              <p>{user.age}</p>
              <p>{user.status}</p>
              <button onClick={()=>user.status = !user.status}>change status</button>
          </div>
        );
    }
}

export default User;
