import React from 'react'
import { connect } from 'react-redux'

function TaskList(props) {
    return (
        <div>
            <h2>Listing Tasks</h2>
            <ul>
                { props.tasks.map(task => {
                    return <li key={task.id}> { task.title } </li>
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks 
    }
}

export default connect(mapStateToProps)(TaskList)