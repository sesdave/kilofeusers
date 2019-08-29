import React, { Component} from 'react';
import { connect } from 'react-redux';
import Layout from "../core/Layout";
import UserLists from './UsersList'


class UsersPage extends Component{
  constructor(){
    super();
    this.state={
        search:'',
    }
  }
  UpdateSearch=(event)=>{
     this.setState({search:event.target.value})
    
  }
  handleDelete = (post) => {
    this.props.dispatch({ type: 'DELETE', id: post.id })
}
  searchFilter= () => (
        
        <div className="mb-3 float-right">
            <input type="text"
             value={this.state.search}
             onChange={this.UpdateSearch.bind(this)}/>
        </div>
        
  );
  FilteredUserList= () => {
        
   let filteredUsers=this.props.users.filter((user)=>{
      return user.name.toLowerCase().indexOf(
      this.state.search.toLowerCase())!==-1;
    }); 
    
  
      return <UserLists users={filteredUsers} handleDelete={this.handleDelete}/>
 
    
};
  
  render(){
    return (
      
      <Layout title="Users List" 
              description="This page list all users in a Table. you are able to delete any user"
              className="container col-md-8 offset-md-2">
            {this.searchFilter()}
            {this.FilteredUserList()}
      </Layout>
    );
  }
}
const mapStateToProps = (state) => ({
    users: state.users,

})

export default connect(mapStateToProps)(UsersPage);

  