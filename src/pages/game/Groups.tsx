import "./Home.css";
import { useState } from "react";
import GroupCard from "../../shared/Quiz/GroupCard.tsx";
import "./Groups.css";
import FooterLogo from "../../shared/UI/FooterLogo.tsx";
import * as logos from "../../images/logos/index.ts";
import BlueButton from '../../shared/UI/BlueButton.tsx';
import rules from "../../assets/printables/rules for the ecopoly-game.pdf"
import Glass from "../../shared/components/ProgressGlass/Glass.tsx";
import {useProgressHistory} from "../../hooks/useProgressHistory.ts";
import { useGame } from '../../game/context/GameContext.tsx';
import { COLORS } from '../../constants/colors.ts';
import type { Group } from '../../../shared/models/Group.ts';
import { createGame } from '../../game/CreateGame.ts';
import * as gameApi from "../../game/api/gameApi";
import { useNavigate } from "react-router-dom";

function Groups() {
    const navigate = useNavigate();
    const {clearCurrentGame, game, setCurrentGame,} = useGame();
    const { history } = useProgressHistory(game);

    const [lockedGroups, setLockedGroups] = useState<number[]>(
        () =>
            game
                ? game.groups
                    .filter(
                        group =>
                            group.name.trim() !== ""
                    )
                    .map(
                        group => group.id
                    )
                : []
    );

    function createDefaultGroups(): Group[] {
        return COLORS
            .slice(0, 6)
            .map((color, index) => ({
                id: index + 1,
                name: "",
                color,
            }));
    }

    const [groups, setGroups] = useState<Group[]>(
            () =>
                game?.groups.length
                    ? game.groups
                    : createDefaultGroups()
        );

    async function handleLogout() {
        await gameApi.logout();
        clearCurrentGame();
        navigate(
            "/",
            {
                replace: true,
            }
        );
    }

    function handleNameChange(id: number, name: string) {
        setGroups(current =>
            current.map(group =>
                group.id === id
                    ? {
                        ...group,
                        name,
                    }
                    : group
            )
        );
    }

    function handleColorChange(id: number, color: string) {
        setGroups(current =>
            current.map(group =>
                group.id === id
                    ? {
                        ...group,
                        color,
                    }
                    : group
            )
        );
    }

    async function handlePlay() {
    if (game) {
        navigate("/islands");
        return;
    }

    const valid = groups.every(
            group => group.name.trim() !== ""
        );

    if (!valid) {
        return;
    }

    const newGame = createGame(groups);

    try {
        const response = await gameApi.saveGame({
                game: newGame,
            });

        if (!response.game) {
            throw new Error(
                "Server did not return saved game."
            );
        }

        setCurrentGame(
            response.game
        );

        setLockedGroups(
            groups.map(
                group => group.id
            )
        );

        navigate("/islands");
    } catch (error) {
        console.error(
            "Could not start game:",
            error
        );
    }
}

    /*const confirmGroupNames=()=>{
        setLockedGroups(
            groups
                .filter(group => group.name.trim() !== "")
                .map(group => group.id)
        );
    };*/

  return (
    <div className="mainPage">
        <h1>Group selection</h1>
        <button onClick={handleLogout}>
            Log out
        </button>
        <button onClick={handlePlay}>
            Play Ecopoly
        </button>
        
        <div className="groups-Grid">
            {groups.map(group => (
                <GroupCard
                    key={group.id}
                    group={group}
                    groups={groups}
                    locked={
                        lockedGroups.includes(
                            group.id
                        )
                    }
                    onNameChange={handleNameChange}
                    onColorChange={handleColorChange}
                    />
            ))}
        </div>

        <div className="progress-view">
                    <a href={rules} target="_blank" rel="noopener noreferrer">
                        <BlueButton title="Rules (for teachers)" className="blue-button" />
                    </a>
                    <div onClick={handlePlay}>
                        <BlueButton
                            title="Play Ecopoly"
                            className="blue-button"
                        />
                    </div>
                    <Glass history={history} />
        </div>

        <div className="footer"> 
            <FooterLogo logoSrc={logos.horizontal} altText="Cofunded by the European Union" />
        </div>
    </div>

  );
}

export default Groups;