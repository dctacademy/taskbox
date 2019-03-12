import React from 'react' 
import uuid from 'uuid'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            id: props.project ? props.project.id : uuid(),
            name: props.project ? props.project.name :  '',
            description: props.project ? props.project.description : '', 
            status: props.project ? props.project.status :  ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const formData = {
            id: this.state.id, 
            name: this.state.name,
            description: this.state.description
        }

        this.props.handleSubmit(formData) 
        this.setState({
            id: '',
            name: '',
            description: ''
        })
    }

    handleNameChange = (event) => {
        const name = event.target.value 
        this.setState(() => ({ name }))
    }

    handleDescriptionChange = (event) => {
        const description = event.target.value 
        this.setState(() => ({ description}))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        name <br />
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} autoFocus />
                    </label> <br/>

                    <label>
                        description<br />
                        <textarea value={this.state.description} onChange={this.handleDescriptionChange}> </textarea>
                    </label> <br />

                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default ProjectForm