import React from 'react' 
import { editProject } from '../../actions/projects'
import { connect } from 'react-redux'
import ProjectForm from './form'

const ProjectEdit = (props) => {
    return (
        <div>
            <h2>Edit Project</h2>
            <ProjectForm 
                project={props.project}
                handleSubmit={(project) => {
                    props.dispatch(editProject(project.id, project))
                    props.history.push(`/projects/${project.id}`)
                }}
            />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return { 
        project: state.projects.find(project => project.id === props.match.params.id )
    }
}

export default connect(mapStateToProps)(ProjectEdit)