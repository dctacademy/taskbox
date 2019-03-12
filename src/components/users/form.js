import React from 'react' 
import { Link } from 'react-router-dom'
import uuid from 'uuid'

class UserForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            id: props.user ? props.user.id : uuid(),
            username: props.user ? props.user.username : '', 
            email:props.user ? props.user.email :  '',
            mobile: props.user ? props.user.mobile : ''
        }
        
    }

    handleUsernameChange = (event) => {
        const username = event.target.value 
        this.setState(() => ({ username }))
    }

    handleEmailChange = (event) => {
        const email = event.target.value
        this.setState(() => ({ email }))
    }

    handleMobileChange = (event) => {
        const mobile = event.target.value
        this.setState(() => ({ mobile }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { id, username, email, mobile } = this.state
        const formData = {
            id, 
            username, 
            email, 
            mobile
        }
        this.props.handleSubmit(formData)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <label>
                        username
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} name="username" />
                    </label> <br/>

                    <label>
                        email
                        <input type="text" value={this.state.email} onChange={this.handleEmailChange} name="email" />
                    </label> <br />

                    <label>
                        mobile
                        <input type="text" value={this.state.mobile} onChange={this.handleMobileChange} name="mobile" />
                    </label> <br />

                    <input type="submit" value="submit" /> or <Link to="/users"> back </Link>

                </form>
            </div>
        )
    }
}

export default UserForm