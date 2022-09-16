const URL = "http://localhost:8000"

export const getPlants = () => {
    return fetch(`${URL}/plants`,{
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
}

export const getPlantsById = (id) => {
    return fetch(`${URL}/plants/${id}`,{
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
}