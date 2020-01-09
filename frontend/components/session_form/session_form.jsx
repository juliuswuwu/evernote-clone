import React from 'react';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    };

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value})
    };
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        const user = { email: "demo@nevernote.com", password: "password" }
        this.props.login(user);
    }


    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    render(){
       return(
           <div className="login-form-container">
               <form onSubmit={this.handleSubmit} className="login-form-box">
                   Welcome to NeverNote!
          <br />
                   Please {this.props.formType} or {this.props.navLink}
                   {this.renderErrors()}
                   <div className="login-form">
                       <br />
                       <label>Email:
              <input type="text"
                               value={this.state.email}
                               onChange={this.update('email')}
                               className="login-input"
                           />
                       </label>
                       <br />
                       <label>Password:
              <input type="password"
                               value={this.state.password}
                               onChange={this.update('password')}
                               className="login-input"
                           />
                       </label>
                       <br />
                       <button className="sessionform-button" onClick={this.handleDemoSubmit}>Continue with Demo User</button>
                       <input className="session-submit" type="submit" value={this.props.formType} />
                   </div>
               </form>
           </div>  
       ) 
    }   
}

export default SessionForm;