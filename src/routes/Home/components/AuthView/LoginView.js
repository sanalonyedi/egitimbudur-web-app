import React from 'react';

const LoginView = ({onViewChange}) => (
    
    <div>
        <form className="form-inline">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="E-Posta" />
            </div>
            <div className="form-group mx-sm-3">
                <input type="password" className="form-control" placeholder="Şifre" />
            </div>
            <button type="submit" className="btn btn-primary">Giriş Yap</button>
            <a href="#" onClick={e => {
                e.preventDefault();
                onViewChange(3);
            }}>Şifremi Unuttum!</a>
        </form>

        <p>
            Henüz üye olmadınız mı? <br />
            Ücretsiz kayıt olmak için <b><u><a style={{fontSize : "18px"}} href="#" onClick={ e => { 
                e.preventDefault();
                onViewChange(2);
             }} >tıklayınız.</a></u></b>
        </p>
    </div>
)


export default LoginView;