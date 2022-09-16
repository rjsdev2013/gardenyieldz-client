export const JournalCard = ({journal}) => {
    return (
        <>
        <section className="journal__card">
            <div>
                <h3 className="journal__plant">{journal.plant.name}</h3>
                <p className="journal_plant_weight">weight(in ounces) {journal.weight}</p>
                <p className="journal_plant_numbert">number picked {journal.fruitNumber}</p>
            </div>
            <button>edit</button>

        </section>
        </>
    )
}