import React from 'react';

const SignUpView = ({onViewChange})=> (
    <div>
        <form className="form-inline">
            <div className="form-group">
                <input style={{ width: "400px", marginRight: "10px"}} type="text" className="form-control" placeholder="E-Posta" />
            </div>
            <button type="submit" className="btn btn-primary">Kayıt Ol!</button>
        </form>

        <p>
           Zaten üye misiniz? <br />
            O zaman giriş yapmak için <b><u><a style={{fontSize : "18px"}} href="#" onClick={e => {
                e.preventDefault();
                onViewChange(1);
            }}>tıklayınız.</a></u></b>
        </p>
    </div>
)

export default SignUpView;