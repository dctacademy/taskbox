import React from 'react' 
import { addUser } from '../../actions/users'
import { connect } from 'react-redux'
import UserForm from './form'

const UserAdd = (props) => {
    return (
        <div>
            <h2>Add User </h2>
            <UserForm 
                handleSubmit={(user) => {
                    props.dispatch(addUser(user))
                    props.history.push('/users')
                }}
            />
        </div>
    )
}

export default connect()(UserAdd)