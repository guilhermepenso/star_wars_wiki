import { create } from 'zustand'

export const useDataStore = create((set) => ({
    selectedData: null,
    setSelectedData: (selectedData) => set({ selectedData }),
}))

/*
{
    "API_URL": "https://sevencoders-starwars-wiki.herokuapp.com"
}
*/
