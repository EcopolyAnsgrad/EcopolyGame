import { COLORS } from "../../constants/colors";
import type { Group } from "../../../shared/models/Group"

type GroupCardProps={
    group:Group;
    groups:Group[];
    locked:boolean;
    
    onNameChange:(id:number,name:string)=>void;
    onColorChange:(id:number,color:string)=>void;
}

function GroupCard({group, groups, locked, onNameChange, onColorChange, }: GroupCardProps) {
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
                    readOnly={locked}
                    onChange={(e) => onNameChange(group.id, e.target.value)}
                    placeholder="Enter group name"
                    className={locked ? "locked-input" : ""}
                    style={{
                        backgroundColor: locked? group.color : "white",
                    }}/>
            </label>

            <div className="color-picker">
                    {COLORS.map(color => (
                        <button
                            key={color}
                            className={`color-option ${group.color === color ? "selected" : ""}`}
                            style={{ backgroundColor: color }}
                            disabled={ locked || usedColors.includes(color )}
                            onClick={() => onColorChange(group.id, color)}
                        />
                    ))}
                </div>
        </div>
    );
}

export default GroupCard;