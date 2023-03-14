import "./login.scss";

const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Welcome to The Laya Social</h1>
                    <span>Don't you have an account?</span>
                    <button>Register</button>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="UserName" />
                        <input type="password" placeholder="password" />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
