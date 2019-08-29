import React, { Component } from 'react'
import { connect } from 'react-redux';
import Layout from "../core/Layout";


class AddUser extends Component{
    
 clickSubmit=event=>{
        event.preventDefault();
        const name = this.getName.value;
        const email = this.getEmail.value;
        const phone_number = this.getPhone.value;
        const country = this.getCountry.value;
        const date_of_birth = this.getDOB.value;
        
        //generate id
        const id = Date.now();
        const data = {
            id,
            name,
            email,
            phone_number,
            country,
            date_of_birth,
            editing: false,
            errorMessage: ''
        }
        

        this.props.dispatch({
            type:'ADD_POST',
            data});

        
        this.getName.value = '';
        this.getEmail.value = '';
        this.getCountry.value = '';
        this.getPhone.value = '';
        this.getDOB.value = '';
        
    }
    
    AddInfoForm= () => (
        <form>
            
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" ref={(input)=>this.getName = input} className="form-control" name="name" />
    
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input type="email" ref={(input)=>this.getEmail = input} className="form-control" name="email"  />
    
            </div>
            <div className="form-group">
                <label className="text-muted">Phone Number</label>
                <input type="number" ref={(input)=>this.getPhone = input} className="form-control" name="phone" />
    
            </div>
            <div className="form-group">
                <label className="text-muted">Country</label>
                <select ref={(input)=>this.getCountry = input} className="form-control" name="country" >
                    <option value="Nigeria">Nigeria</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Kenya">Kenya</option>
                </select>
    
            </div>
            <div className="form-group">
                <label className="text-muted">Date of Birth</label>
                <input type="date" ref={(input)=>this.getDOB = input} className="form-control" name="date_of_birth" />
    
            </div>
            <button onClick={this.clickSubmit} className="btn btn-primary">Submit</button>
    
        </form>
    );
    render() {
        return(
            <Layout
                title="Add User" 
                description="This Page is used to register new User. To view list, click on view User Nav" 
                className="container col-md-6 offset-md-3">
                {this.AddInfoForm()}
            </Layout>
            );
    }
}

    const mapStateToProps = (state) => ({
        posts: state.users,
    
    })

export default connect(mapStateToProps)(AddUser);