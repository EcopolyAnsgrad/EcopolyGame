import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ansgard as logo } from "../images/logos";
import * as gameApi from "../game/api/gameApi";
import { useGame } from "../game/context/GameContext";

import "./Login.css";


function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const {setCurrentGame} = useGame();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
        const response = await gameApi.login({
                username,
                password,
            });

        if (response.game) {
            setCurrentGame(
                response.game
            );

            navigate("/islands");
        } else {
            /* Account exists but there is no GameState yet. User needs to configure groups.*/
            navigate("/groups");
        }

    } catch (error) {
        setError(
            error instanceof Error
                ? error.message
                : "Login failed."
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
                <h1>Welcome to Ecopoly</h1>

                <p className="login-subtitle">
                    Log in to continue your class adventure.
                </p>
                <form
                    onSubmit={handleLogin}
                    className="login-form"
                >

                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={e =>
                            setUsername(e.target.value)
                        }
                        required
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

                    <button
                        type="submit"
                        className="login-button"
                    >
                        Log in
                    </button>
                </form>
                <div className="login-footer">
                    New class?
                    <Link to="/register">
                        Create account
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;