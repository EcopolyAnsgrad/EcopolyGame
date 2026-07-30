import { Link } from 'react-router-dom';
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

function Groups() {
    const [lockedGroups, setLockedGroups] = useState<number[]>([]);
    const { history } = useProgressHistory();

    const { groups, updateGroup } = useGame();

    function handleNameChange(id: number, name: string) {

        const group = groups.find(g => g.id === id);

        if (!group) return;

        updateGroup({
            ...group,
            name,
        });

    }
    
    function handleColorChange(id: number, color: string) {

        const group =
            groups.find(g => g.id === id);

        if (!group) return;

        updateGroup({
            ...group,
            color,
        });
    }

const confirmGroupNames=()=>{
    setLockedGroups(
        groups
            .filter(group => group.name.trim() !== "")
            .map(group => group.id)
    );
};

  return (
    <div className="mainPage">
        <h1>Group selection</h1>
        <button onClick={confirmGroupNames}>
            Confirm Group Names
        </button>
        
        <div className="groups-Grid">
            {groups.map(group => (
                <GroupCard
                    key={group.id}
                    group={group}
                    groups={groups}
                    onNameChange={handleNameChange}
                    onColorChange={handleColorChange} 
                    />
            ))}
        </div>

        <div className="progress-view">
                    <a href={rules} target="_blank" rel="noopener noreferrer">
                        <BlueButton title="Rules (for teachers)" className="blue-button" />
                    </a>
                    <Link to="/islands" className="blue-button">
                        <BlueButton title="Play Ecopoly" className="blue-button" />
                    </Link>
                    <Glass history={history} />
        </div>

        <div className="footer"> 
            <FooterLogo logoSrc={logos.horizontal} altText="Cofunded by the European Union" />
        </div>
    </div>

  );
}

export default Groups;