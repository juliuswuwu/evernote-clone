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
        this.setState(
            { email: "demo@nevernote.com", 
                password: "password"}, 
                () => this.props.login(
                    this.state));

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
                    <h3>Already have an account?</h3>
                    <p>{this.props.navLink}</p>
                </div>
        )


       return(
           <>
           <div className="session-background-color">
           <div className="login-form-container">
               <form onSubmit={this.handleSubmit} className="login-form-box">
                   <img className="nevernote-logo2" src="/assets/nevernote-logo" />
                   <h2>Nevernote</h2>
                <br/>
                   <h4>Never forget anything important</h4>
                <br/>
                   <div className="login-form">
                       <br />
                       <button className="sessionform-button-demo" onClick={this.handleDemoSubmit}>Continue with Demo User</button>
                        <br/>
                               <div className="line">
                                   <div>or</div>
                               </div>
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
                            <div className="error">
                               {this.renderErrors()}
                            </div>

                       <button className="sessionform-button" onClick={this.handleSubmit}>Continue</button>
                       {bottomForm}
                   </div>
               </form>
           </div>  
            </div>
           </>
       ) 
        

    }   
}

export default SessionForm;