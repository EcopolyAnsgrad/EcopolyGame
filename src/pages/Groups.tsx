import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import { useState } from "react";
import GroupCard from "../components/GroupCard.tsx";
import { COLORS } from "../constants/colors.ts";
import "./Groups.css";

function Groups() {
    const [groups, setGroups] = useState(
        COLORS.slice(0, 6).map((color, index) => ({
            id: index + 1,
            name: "",
            color,
            nameReadOnly: false,
        }))
    );

    const handleNameLock = (id: number) => {
        setGroups(groups =>
            groups.map(group =>
                group.id === id
                    ? { ...group, nameReadOnly: true }
                    : group
            )
        );
    };

    const handleNameChange = (id: number, name: string) => {
        setGroups(groups =>
            groups.map(group =>
                group.id === id
                    ? { ...group, name }
                    : group
            )
        );
    };

    const handleColorChange = (id: number, color: string) => {
        setGroups(groups =>
            groups.map(group =>
                group.id === id
                    ? { ...group, color }
                    : group
            )
        );
    };

  return (
    <div className="mainPage">
        <h1>Group selection</h1>
        <div className="groups-Grid">
            {groups.map(group => (
                <GroupCard
                    key={group.id}
                    group={group}
                    groups={groups}
                    onNameChange={handleNameChange}
                    onColorChange={handleColorChange}
                    nameSelected={handleNameLock}
                />
            ))}
        </div>

        <div className="progress-view">
            
        </div>
    </div>

  );
}

export default Groups;