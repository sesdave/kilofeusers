import React from 'react'

class User extends React.Component{
	render(){
        return(
                
                <tr>
                    <td>{this.props.user.name}</td>
                    <td>{this.props.user.email}</td>
                    <td>{this.props.user.phone_number}</td>
                    <td>{this.props.user.country}</td>
                    <td>{this.props.user.date_of_birth}</td>
                    <td><button className="delete btn btn-danger" onClick={() => this.props.handleDelete(this.props.user)}>Delete</button></td>
                </tr>
        )
    }
}

export default User;