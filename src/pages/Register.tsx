import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ansgard as logo } from "../images/logos";
import * as gameApi from "../game/api/gameApi";

import "./Login.css";


function Register() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");

async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
    }

    setError("");

    try {
        await gameApi.register({
            username,
            password,
            email:
                email.trim() || undefined,
        });

        navigate("/login");
    } catch (error) {
        setError(
            error instanceof Error
                ? error.message
                : "Registration failed."
        );
    }
}

    return (
        <div className="login-page">
            <div className="login-card">
                <img
                    src={logo}
                    alt="Ecopoly"
                    className="login-image"
                />

                <h1 className="form-title">Create your class account</h1>

                <p className="login-subtitle">
                    Join your class adventure in Ecopoly.
                </p>

                <form
                    onSubmit={handleRegister}
                    className="login-form"
                >
                    <label>Class username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={e =>
                            setUsername(e.target.value)
                        }
                        required
                    />

                    <label>Email (optional)</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e =>
                            setEmail(e.target.value)
                        }
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e =>
                            setPassword(e.target.value)
                        }
                        required
                    />

                    <label>Confirm password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={e =>
                            setConfirmPassword(e.target.value)
                        }
                        required
                    />

                    {error && (
                        <p className="login-error">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="login-button"
                    >
                        Create account
                    </button>
                </form>

                <div className="login-footer">
                    Already have an account?
                    <Link to="/login">
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;