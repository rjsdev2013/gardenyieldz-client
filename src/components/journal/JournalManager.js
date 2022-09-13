const URL = "http://localhost:8000"

export const getJournals = () => {
    return fetch(`${URL}/journals`)
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

export const deleteJournals = (id) => {
    return fetch(`${remoteURL}/journals/${id}`, {
      method: "DELETE"
    })
    .then(getJournals)
  }