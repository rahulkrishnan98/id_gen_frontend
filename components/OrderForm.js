import React, { Component } from 'react'

class OrderForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            designFile: '',
            id_count: 0,
            organizationName: '',
            fieldName: []
        }
    }
    handleImage = event => {
        this.setState({
            designFile: event.target.value
        })
    }
    handleCount = event => {
        this.setState({
            id_count: event.target.value
        })
    }
    handleOrganizationName = event => {
        this.setState({
            organizationName: event.target.value
        })
    }
    handleFieldName = event => {
        this.setState({
            fieldName: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label> ID_Count  <input type="text"></input></label>
                    <label> organizationName <input type="text"></input></label>
                    <label> fieldName <input type="text"></input></label>
                    <br />
                    <label> designFile <input type="file"></input></label>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default OrderForm;