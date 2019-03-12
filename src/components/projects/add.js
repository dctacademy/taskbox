import React from 'react'
import { addProject } from '../../actions/projects'
import { connect } from 'react-redux'
import ProjectForm from './form'

const ProjectAdd = (props) => {
    return (
        <div>
            <h2> Add Project</h2>
            <ProjectForm 
                handleSubmit={(project) => {
                    props.dispatch(addProject(project))
                    props.history.push('/projects')
                }}
            />
        </div>
    )   
}

export default connect()(ProjectAdd)