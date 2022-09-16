import React,{useState, useEffect} from "react";
import { Navigate, useParams } from "react-router-dom";
import { getJournalById, updateJournals } from "./JournalManager";

export const EditJournalForm = () => {

    const [journal, setJournal] = useState({
        id: 0,
        fruitNumber: 0,
        weight: 0,
        plant_id: 0
    })

    const currentUser = localStorage.getItem("userId")
    const {journalId} = useParams()

    useEffect(() => {
        //check to see if this is a create form or an edit form
        if (journalId) {
            getJournalById(journalId)
            .then (data => setJournal({
                id: data.id,
                fruitNumber: data.fruitNumber,
                weight: data.weight,
                plant_id: data.plant_id
            }))
        }
    }, []);

    const handleInputChange = (e) => {
        const newJournal = {...journal}
        let selectedVal = e.target.value
        if (e.target.id.includes("plant_id")) {
            selectedVal = parseInt(selectedVal)
        }

        newJournal(e.target.id) = selectedVal
        setJournal(newJournal)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (journalId) {
            const editedJournal = {
                id: journal.id,
                fruitNumber: journal.fruitNumber,
                weight: journal.weight,
                plant_id: journal.plant_id
            }
            updateJournals(editedJournal)
                .then(() => Navigate("/"))
        }
    }

    return (
        "new journal entry form"
    )


}
