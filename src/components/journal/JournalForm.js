import React, {useState, useEffect} from "react";
import { getPlants } from "../plant/PlantManager";
import { addJournals } from "./JournalManager";

export const JournalForm = () => {
    const [journal, setJournal] = useState([]
    //     {
    //     id: 0,
    //     fruitNumber: 0,
    //     weight: 0,
    //     plant_id: 0,
    //     date: ""
    // }
    )

    const [plants, setPlants] = useState([])

    useEffect(() => {
        getPlants().then(PlantData => setPlants(PlantData))
    }, [])

    const handleInputChange = (e) => {
        const newJournal = {...journal}
        let selectedVal = e.target.value
        newJournal[e.target.id] = selectedVal
        setJournal(newJournal)
    }

    // const handleSubmit = (e) => {
    //     addJournals(journal)
    // }
    if (plants) {
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
                        <select id="plant_id" onChange={handleInputChange} value="0">
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
                    onClick={addJournals(journal)}
                    >save</button>
                </div>
            </form>
        )
    }
}
