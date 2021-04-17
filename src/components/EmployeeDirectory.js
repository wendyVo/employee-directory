import React, { Component } from "react";
import Container from "./Container";
import Col from "./Col";
import Row from "./Row";
import Table from "./Table";
import EmployeeCard from "./EmployeeCard";
import getEmployee from "../utils/API";
import moment from "moment";
import Header from "./Header";
import SearchForm from "./SearchForm";
import "../css/style.css"

class EmployeeDirectory extends Component {
    state = {
        employees: [],
        search: ""
    };

    inputRef = React.createRef();

    //When the components mount, load the employee table
    componentDidMount() {
        this.loadEmployee();
    }

    //Function to search employee by name
    searchEmployees = filter => { 
        const searchEmp = this.state.employees.filter((employee) => {
            console.log(employee, this.inputRef.current);
            return employee.name.toLowerCase().includes(this.inputRef.current.toLowerCase());
        });

        this.setState({employees: searchEmp});
      };

    //Function to sort name of the employee
    handleSortName = () => {
        const sortedName = this.state.employees.sort((a,b) => {
            return a.name.localeCompare(b.name)
        })
        this.setState({employees : sortedName})
        console.log("Sorted Name: ", sortedName);
    }

    //Function to sort phone number of the employee
    handleSortPhone = () => {
        const sortedPhone = this.state.employees.sort((a,b) => {
            return parseInt(a.phone) - parseInt(b.phone)
        })
        this.setState({employees : sortedPhone})
        console.log("Sorted Phone: ", sortedPhone);
    }

    //Function to sort location name of the employee
    handleSortLocation = () => {
        const sortedLocation = this.state.employees.sort((a,b) => {
            return a.location.localeCompare(b.location)
        })
        this.setState({employees : sortedLocation})
    }

      handleInputChange = event => {
        const value = event.target.value;
        this.inputRef.current = value;
        console.log(this.inputRef);
        const name = event.target.name;
            this.setState({
            [name]: value
    });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    }

    //loadEmployee function, call the API 
    loadEmployee = () => {
        getEmployee()
            . then (res =>
                this.setState({
                    employees: res.data.results.map((emp, index) => ({
                        picture: emp.picture.large,
                        name: emp.name.first + " " + emp.name.last,
                        phone: emp.phone,
                        email: emp.email,
                        dob: moment(emp.dob.date).format("L"),
                        location: emp.location.city,
                        key: index
                    }))
                }))
                .catch((err) => console.log(err))
    }

    

    render() {
        return (
            <Container>
                <Header />
                <Row>
                <Col size="md-4">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
           
          </Col>
                    <Col size ="md-12">
                        <Table handleSortName={this.handleSortName}
                                handleSortPhone={this.handleSortPhone}
                                handleSortLocation={this.handleSortLocation}>
                            {[...this.state.employees].map((employee) => (
                                <EmployeeCard
                                picture = {employee.picture}
                                name = {employee.name}
                                phone = {employee.phone}
                                email = {employee.email}
                                dob = {employee.dob}
                                location = {employee.location}
                                key = {employee.key}
                                />
                            ))}
                        </Table>
                    </Col>
                   
                </Row>
            </Container>
        )
    }

}

export default EmployeeDirectory;