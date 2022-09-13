const URL = "http://localhost:8000"

export const getJournals = () => {
    return fetch(`${URL}/journals`,{
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
}

export const getJournalById = (id) => {
    return fetch(`${URL}/journals/${id}`)
        .then(res => res.json())
}
export const addJournals = (newJournal) => {
    return fetch(`${URL}/journals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournal)
    })
    .then(getJournals)
}

export const updateJournals = (journal) => {
    return fetch (`${URL}/journals/${journal.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journal)
})
}

export const deleteJournals = (id) => {
    return fetch(`${URL}/journals/${id}`, {
      method: "DELETE"
    })
    .then(getJournals)
  }