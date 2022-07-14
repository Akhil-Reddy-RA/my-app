export async function getAllUsers(token) {

    try{
        const response = await fetch('/api/users',{
            headers:{"Authorization":  "Bearer " + token}
        });
        console.log(response)
        return await response.json();
    }catch(error) {
        console.log(error)
        return [];
    }
}

export async function createUser(data,token) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', "Authorization":  "Bearer " + token},
        body: JSON.stringify({user: data})
      });
    return await response.json();
}

export async function createLoginUser(data) {
    
      
        const response = await fetch(`/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
          })
          return await response.json()
    
}

