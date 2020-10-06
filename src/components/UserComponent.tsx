import React, { Component } from 'react';

interface User {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;

}
interface UserListProps{

}

interface UserListState{
  users: Array<User>;
  isLoading: boolean;
}
export default class UserComponent extends Component<UserListProps, UserListState>{
 constructor(props: UserListProps) {
        super(props)
        this.state = {
            users: [],
            isLoading:false
        };
    }

    componentDidMount(){
      this.setState({isLoading:true});

      fetch('http://localhost:8070/api/v1/user')
       .then(response => response.json())
      .then(data => this.setState({users: data, isLoading: false}));
    }
  render() {
const {users, isLoading} = this.state;
    if (isLoading) {
      return <p className="text-center">Loading...</p>;
    }

    return (
        
  <div >
        <h2 className="text-center text-uppercase text-secondary">View all users</h2>
        <hr/>
      
<div className="row">
  <table className = "table table-striped table-bordered">
  <thead>
  <tr>
  <th className="text-center text-info">Firstname</th>
  <th className="text-center text-info">Lastname</th>
  <th className="text-center text-info">Email</th>
  <th className="text-center text-info">Username</th>
  <th className="text-center text-danger">Remove</th>
<th className="text-center text-warning">Edit</th>
  
  </tr>
  </thead>

  <tbody>
  {
    users.map((user: User) =>

    <tr key= {user.id}>

    <td>{user.firstname}</td>
    <td>{user.lastname}</td>
    <td>{user.email}</td>
    <td>{user.username}</td>
     <td>
     <span className="table-remove"><button type="button" className="btn btn-danger rounded-pill  btn-sm my-0">Remove</button></span>
     </td>

       <td>
     <span className="table-remove"><button type="button" className="btn btn-info rounded-pill btn-sm my-0">Edit</button></span>
     </td>
    </tr>
    )

  }
  </tbody>
  </table>
</div>

      </div>
    );
  }
}
