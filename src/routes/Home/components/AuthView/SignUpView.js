import React from 'react';
import axios from 'axios';
import * as Http from 'utils/http.helper'

class SignUpView extends React.Component {

    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            hasError: false,
            errorMessage: ""
        }
    }

    onInputChanged(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSignUp(e) {
        e.preventDefault();


        if (this.state.email === "" || this.state.password === "") {
            this.setState({
                hasError: true,
                errorMessage: "Lütfen tüm alanları doldurunuz!"
            });

            return;
        }

        Http.post('auth/sign-up', this.state)
            .then(res => {
                console.log("res", res);

                if (!res.status) {

                    this.setState({
                        hasError: !res.status,
                        errorMessage : res.error.code === 11000 ? "Bu email adresi sistem kayıtlı" : "Beklenmeyen bir hata oluştu!"
                    })
                }

            });
    }

    renderError() {
        return <div className="alert alert-danger" style={{ width: "516px", "marginLeft": "auto", marginRight: "auto", "marginTop": "20px" }}>{this.state.errorMessage}</div>;
    }

    render() {
        const { onViewChange } = this.props;
        const Error = this.renderError.bind(this);

        return (
            <div>
                <form className="form-inline" onSubmit={this.onSignUp.bind(this)}>
                    <div className="form-group">
                        <input type="text" name="email" className="form-control" placeholder="E-Posta" value={this.state.email} onChange={this.onInputChanged.bind(this)} />
                    </div>
                    <div className="form-group mx-sm-3">
                        <input type="password" name="password" className="form-control" placeholder="Şifre" value={this.state.password} onChange={this.onInputChanged.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Kayıt Ol!</button>
                </form>

                {this.state.hasError ? <Error /> : null}
                <p>
                    Zaten üye misiniz? <br />
                    O zaman giriş yapmak için <b><u><a style={{ fontSize: "18px" }} href="#" onClick={e => {
                        e.preventDefault();
                        onViewChange(1);
                    }}>tıklayınız.</a></u></b>
                </p>
            </div >
        )
    }

}


export default SignUpView;