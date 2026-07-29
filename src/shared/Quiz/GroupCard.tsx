import { useState } from "react";
import { COLORS } from "../../constants/colors";
import type { Group } from "../../game/types/Group"

type GroupCardProps={
    group:Group;
    groups:Group[];
    
    onNameChange:(id:number,name:string)=>void;
    onColorChange:(id:number,color:string)=>void;
}

function GroupCard({group, groups, onNameChange, onColorChange, }: GroupCardProps) {
        const [lockedGroups, setLockedGroups] = useState<number[]>([]);
    const usedColors = groups
        .filter(g => g.id !== group.id)
        .map(g => g.color);

    return (
        <div className="group-card" style={{ backgroundColor: group.color }}>
            <h2>GROUP {group.id}</h2>

            <label>
                Name:
                <input
                    type="text"
                    value={group.name}
                    readOnly={lockedGroups.includes(group.id)}
                    onChange={(e) => onNameChange(group.id, e.target.value)}
                    placeholder="Enter group name"
                    className={lockedGroups.includes(group.id) ? "locked-input" : ""}
                    style={{
                        backgroundColor: lockedGroups.includes(group.id)? group.color : "white",
                    }}/>
            </label>

            <div className="color-picker">
                    {COLORS.map(color => (
                        <button
                            key={color}
                            className={`color-option ${
                                group.color === color ? "selected" : ""
                            }`}
                            style={{ backgroundColor: color }}
                            disabled={
                                usedColors.includes(color)
                            }
                            onClick={() =>
                                onColorChange(group.id, color)
                            }
                        />
                    ))}
                </div>
        </div>
    );
}

export default GroupCard;