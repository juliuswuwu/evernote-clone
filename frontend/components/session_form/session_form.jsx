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

        const bottomForm = this.props.formType === "login" ?(
            <div className="bottomtext">
                <h3>Don't have an account?</h3>
                <p>{this.props.navLink}</p>
            </div>
        ) :(
                <div className="bottomtext">
                    <h3>Don't have an account?</h3>
                    <p>{this.props.navLink}</p>
                </div>
        )

       return(
           <div className="login-form-container">
               <form onSubmit={this.handleSubmit} className="login-form-box">
                   <img className="evernote-logo" src="/assets/nevernote-logo" />
                   <h2>Nevernote</h2>
                <br/>
                   <h4>Remember everything important</h4>
                <br/>
                   <div className="login-form">
                       <br />
                       <button className="sessionform-button" onClick={this.handleDemoSubmit}>Continue with Demo User</button>
                        <br/>
              <input type="text"
                               value={this.state.email}
                               onChange={this.update('email')}
                               className="login-input"
                               placeholder="Email"
                               />

                       <br />

              <input type="password"
                               value={this.state.password}
                               onChange={this.update('password')}
                               className="login-input"
                               placeholder="Password"
                               />

                       <br />
                               {this.renderErrors()}
                       
                       <button className="sessionform-button2" onClick={this.handleSubmit}>Continue</button>
                       {bottomForm}
                   </div>
               </form>
           </div>  
       ) 
        

    }   
}

export default SessionForm;