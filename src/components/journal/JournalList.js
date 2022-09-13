import React, {useState, useEffect} from 'react';
import { JournalCard } from './JournalCard';
import { getJournals,addJournals,deleteJournals } from './JournalManager';
import { JournalCard } from './JournalCard';

export const JournalList = () => {
    const [journals, setJournals] = useState([])
    useEffect(()=> {
        getJournals().then((journalData) => setJournals(journalData))
    }, [])
    return (
        <>
            <div > <JournalCard setJournals = {setJournals}></JournalCard></div>
        
        </>
    )
}