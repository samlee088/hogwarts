import React from 'react'
import {useMuataion, useQuery} from '@apollo/client';
import {QUERY_ME} from '../utils/queries';
import RemoveSpellButton from './RemoveSpellButton';

const CurrentSpells = () => {

    const { loading, data, refetch } = useQuery(QUERY_ME);

    if(loading) {
      return <h2>...Loading...</h2>
    }

    const spellsCount = data?.me?.spells?.length

    return(
        <div>
            {spellsCount ? (
                <>
                    {data?.me?.spells?.map((spell) => (
                        <div key={spell.id}>
                            <h1>Current Spell</h1>
                            <h2>{spell.name}</h2>
                            <h3>{spell.type}</h3>
                            <h3>{spell.effect}</h3>
                            <RemoveSpellButton id={spell.id} refetch={refetch} />

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