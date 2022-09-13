import React, {useState, useEffect} from 'react';
import { JournalCard } from './JournalCard';
import { getJournals,addJournals,deleteJournals } from './JournalManager';

export const JournalList = () => {
    const [journals, setJournals] = useState([])
    useEffect(()=> {
        getJournals().then((journalData) => setJournals(journalData))
    }, [])
    return (
        <>
            <div className="journals">
                {
                   journals.map(journal => <JournalCard key={journal.id} journal={journal} setJournals= {setJournals} />)
                }
            </div>
        
        </>
    )
}