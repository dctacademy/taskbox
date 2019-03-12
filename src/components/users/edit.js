import React from 'react' 
import UserForm from './form'
import { editUser } from '../../actions/users'
import { connect } from 'react-redux'

const UserEdit = (props) => {
    return (
        <div>
            <h2>Edit User</h2>
            <UserForm 
                user={props.user}
                handleSubmit={(user) => {
                    props.dispatch(editUser(user.id, user))
                    props.history.push(`/users/${user.id}`)
                }}
            />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find(user => user.id === props.match.params.id )
    }
}
export default connect(mapStateToProps)(UserEdit)