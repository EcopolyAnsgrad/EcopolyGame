import type {GameState} from "../game/types/GameState";


/*export async function loadGame(username:string){
    const response =
        await fetch(`/api/game/${username}`);

    return response.json();
}



export async function saveGame(game:GameState){
    await fetch(
        "/api/game",
        {
            method: "PUT",
            body: JSON.stringify(game)
        }
    );
}*/

export async function loadGame(
    username: string
): Promise<GameState | null> {

    const raw =
        localStorage.getItem(username);

    if (!raw)
        return null;

    return JSON.parse(raw);
}

export async function saveGame(
    game: GameState
) {

    localStorage.setItem(
        game.accountId,
        JSON.stringify(game)
    );

}