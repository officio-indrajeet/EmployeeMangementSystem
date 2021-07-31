import React, { Component } from 'react';
import EmployeeServices from '../services/EmployeeServices';

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };

    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.viewEmployee = this.viewEmployee.bind(this);
  }

  deleteEmployee(id) {
    EmployeeServices.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }

  editEmployee(id) {
    this.props.history.push(`/add-employees/${id}`);
  }

  viewEmployee(id) {
    this.props.history.push(`/view-employees/${id}`);
  }

  componentDidMount() {
    EmployeeServices.getEmployees().then((res) => {
      this.setState({ employees: res.data });
      console.log(res.data);
    });
  }

  addEmployee() {
    this.props.history.push('/add-employees/_add');
  }

  render() {
    return (
      <div>
        <h2 className='text-center my-3'>Employees List</h2>

        <button className='btn btn-primary' onClick={this.addEmployee}>
          Add Employee
        </button>

        <div className='row'>
          <table className='table table-stripped table-bordered my-2'>
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email id</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button
                      onClick={() => this.editEmployee(employee.id)}
                      className='btn btn-info'
                    >
                      Update
                    </button>
                    <button
                      onClick={() => this.deleteEmployee(employee.id)}
                      className='btn btn-danger'
                      style={{ marginLeft: '10px' }}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.viewEmployee(employee.id)}
                      className='btn btn-success'
                      style={{ marginLeft: '10px' }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
