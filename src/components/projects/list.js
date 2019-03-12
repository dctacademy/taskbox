import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const ProjectList = (props) => {
    return (
        <div>
            <h2>Listing Projects - { props.projects.length }</h2>
            <ul>
                { props.projects.map(project => {
                    return <li key={project.id}> <Link to={`/projects/${project.id}`}> {project.name}  </Link> 
                        { project.description }
                       
                    </li>
                })}
            </ul>

            <Link to="/projects/new"> Add Project </Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { 
        projects: state.projects
    }
}

export default connect(mapStateToProps)(ProjectList)
