import React from 'react'
import User from './User'


class UsersList extends React.Component{
	render(){
        return(
            <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Country</th>
                            <th>Date of Birth</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((user)=>{
                            return <User user={user} key={user.id} handleDelete={this.props.handleDelete}/>
                        })}
                    
                    </tbody>
                </table>
            

        )
    }
}

export default UsersList;