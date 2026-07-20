import { COLORS } from "../../constants/colors";

type Group = {
    id: number;
    name: string;
    color: string;
    nameReadOnly: boolean;
};

type GroupCardProps = {
    group: Group;
    groups: Group[];
    onNameChange: (id: number, name: string) => void;
    onColorChange: (id: number, color: string) => void;
    nameSelected: (id: number) => void;
};

function GroupCard({group, groups, onNameChange, onColorChange, nameSelected}: GroupCardProps) {
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
                    readOnly={group.nameReadOnly}
                    onChange={(e) => onNameChange(group.id, e.target.value)}
                    placeholder="Enter group name"
                    className={group.nameReadOnly ? "locked-input" : ""}
                    style={{
                        backgroundColor: group.nameReadOnly ? group.color : "white",
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