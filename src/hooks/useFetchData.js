import { useEffect, useState } from 'react';
import { getApi } from '../helpers/getApi';

export const useFetchData = () => {
 
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getCharacters = async() => {
        const newCharacters = await getApi();
        setCharacters(newCharacters);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getCharacters();
    }, []);

    return {
        characters,
        setCharacters,
        isLoading
    }

}
