import React from 'react'
import {useMuataion, useQuery} from '@apollo/client';
import {QUERY_ME} from '../utils/queries';

const CurrentSpells = () => {

    const { loading, data } = useQuery(QUERY_ME);

    if(loading) {
      return <h2>...Loading...</h2>
    }

    const {spellsCount} = data?.me?.spells?.length

    return(
        <div>
            {spellsCount ? (
                <>
                    {data?.me?.spells?.map((spell) => (
                        <div>
                            <h1>Current Spell</h1>
                            <h2>{spell.name}</h2>
                            <h3>{spell.type}</h3>
                            <h3>{spell.effect}</h3>
                        </div>
                    ))}
                </>
                ) : (
                    'No Saved Spells'
                )
            }
        </div>
    )
}

export default CurrentSpells;