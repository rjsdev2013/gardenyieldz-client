import React,{useState, useEffect} from "react";
import { Navigate, useParams } from "react-router-dom";
import { getJournalById, updateJournals } from "./JournalManager";
import { getPlants } from "../plant/PlantManager";

export const EditJournalForm = () => {

    const [journal, setJournal] = useState({
        id: 0,
        fruitNumber: 0,
        weight: 0,
        plant_id: 0
    })

    const currentUser = localStorage.getItem("userId")
    const {journalId} = useParams()
    const [plants, setPlants] = useState([])

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
        getPlants().then(PlantData => setPlants(PlantData))

    });

    // const handleInputChange = (e) => {
    //     const newJournal = {...journal}
    //     let selectedVal = e.target.value
    //     if (e.target.id.includes("plant_id")) {
    //         selectedVal = parseInt(selectedVal)
    //     }

    //         newJournal(e.target.id) = selectedVal
    //         setJournal(newJournal)
    // }

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
        <form>
            <h2>
                New Journal Entry
            </h2>
            <fieldset>
                <div>
                    <label>
                        Date
                    </label>
                    <input
                    type="text"
                    name="date"
                    id="date"
                    placeholder="Date"
                    value = {journal.date}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>
                        Fruit Number
                    </label>
                    <input
                    type="text"
                    name="fruitNumber"
                    id="fruitNumber"
                    // value={journal.fruitNumber}
                    placeholder="Fruit Number"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>
                        Weight
                    </label>
                    <input
                    type="text"
                    name="weight"
                    id="weight"
                    value={journal.weight}
                    placeholder="Weight in Ounces"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <select 
                    id="plant_id" 
                    //onChange={handleInputChange} 
                    value="0">
                        <option className="plants">
                            Select Plant
                        </option>
                        {plants.map((plant) => (
                                <option key={plant.id} value={plant.id}>
                                    {plant.name}
                                </option>
                                ))}
                        
                    </select>
                </div>
            </fieldset>

            <div>
                <button
                onClick={handleSubmit}
                >save</button>
            </div>
        </form>
    )


}
