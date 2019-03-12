import React from 'react' 
import { Link } from 'react-router-dom'
import { removeProject } from '../../actions/projects'

import { connect } from 'react-redux'

const ProjectShow = (props) => {
    return (
        <div>
            <h2> { props.project.name } </h2>
            <p> {props.project.description} - {props.match.params.id} </p> 

            <Link to="/projects"> back </Link>

            <Link to={`/projects/edit/${props.project.id}`}> edit </Link>

            <button onClick={() => {
                const confirmDelete = window.confirm("Are you sure?")
                if (confirmDelete) {
                    props.dispatch(removeProject(props.project.id))
                    props.history.push('/projects')
                    console.log(props)
                }
            }}> delete </button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        project: state.projects.find(project => project.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(ProjectShow)