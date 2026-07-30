export async function register(username:string, password:string){
    return fetch("/api/register",{
        method:"POST",
        body:JSON.stringify({
            username,
            password
        })
    });
}


export async function login(username:string, password:string){
    return fetch("/api/login",{
        method:"POST",
        body:JSON.stringify({
            username,
            password
        })
    });
}

export async function logout (username: string,) {
    
}