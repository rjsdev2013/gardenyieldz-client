import React, {useState, useEffect} from "react";
import { addJournals } from "./JournalManager";

export const JournalForm = () => {
    const [Journal, setJournal] = useState({
        id: 0,
        fruitNumber: 0,
        weight: 0,
        plant_id: 0
    })

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
                    placeholder="Date"
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
                    placeholder="Weight in Ounces"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>
                        Plant
                    </label>
                    <input
                    type="text"
                    name="plant"
                    placeholder="this needs to be a selector"
                    />
                </div>
            </fieldset>

            <div>
                <button>save</button>
            </div>
        </form>
    )
}

