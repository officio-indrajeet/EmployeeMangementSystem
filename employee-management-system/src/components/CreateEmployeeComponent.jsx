import React, { Component } from 'react';
import EmployeeServices from '../services/EmployeeServices';

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: '',
      lastName: '',
      email: '',
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
  }

  componentDidMount() {
    if (this.state.id === '_add') {
      return;
    } else {
      EmployeeServices.getEmployeeById(this.state.id).then((res) => {
        let employee = res.data;
        this.setState({
          firstName: employee.firstName,
          lastName: employee.lastName,
          email: employee.email,
        });
      });
    }
  }

  saveOrUpdateEmployee = (event) => {
    event.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };
    console.log('Employee =>' + JSON.stringify(employee));

    if (this.state.id === '_add') {
      EmployeeServices.createEmployee(employee).then((res) => {
        this.props.history.push('/employees');
      });
    } else {
      EmployeeServices.updateEmployee(employee, this.state.id).then((res) => {
        this.props.history.push('/employees');
      });
    }
  };

  cancel() {
    this.props.history.push('/employees');
  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailIdHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  getTitle() {
    if (this.state.id === '_add') {
      return <h3 className='text-center'>Add Employee</h3>;
    } else {
      return <h3 className='text-center'>Update Employee</h3>;
    }
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              {this.getTitle()}
              <div className='card-body'>
                <form action=''>
                  <div className='form-group'>
                    <label>First Name:</label>
                    <br />
                    <input
                      placeholder='First Name'
                      name='firstName'
                      className='form-control'
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Last Name:</label>
                    <br />
                    <input
                      placeholder='Last Name'
                      name='lastName'
                      className='form-control'
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Email Id:</label>
                    <br />
                    <input
                      placeholder='Email Address'
                      name='email'
                      className='form-control'
                      value={this.state.email}
                      onChange={this.changeEmailIdHandler}
                    />
                  </div>
                  <br />
                  <button
                    className='btn btn-success'
                    onClick={this.saveOrUpdateEmployee}
                  >
                    Save
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: '10px' }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateEmployeeComponent;
