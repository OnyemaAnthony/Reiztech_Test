import axios from "axios"
import { useEffect, useState, useCallback } from "react"

interface DataArea {
    area: number;
    independent: boolean;
    name: string;
    region: string;
  }

const CountryListItem = ({country} : any) => {
    return (
        <div className="item-container">
            <h3>{country.name}</h3>
            <p>{country.region}</p>
            <h5>{country.area} sq. km.</h5>
        </div>
    )
}

export const CountryList = ({sortBy}: any) => {
    const [countryList, setCountryList] = useState<DataArea[]>([]);
    const [countryListData, setCountryListData] = useState<DataArea[]>([]);
    
    const axiosRequest = async (params: any) => {
        return await axios.get(params)
    }
   
    const getCountryData = useCallback(
      async () => {
        try {
            const endpoint = 'https://restcountries.com/v2/all?fields=name,region,area'
          const countryData = await axiosRequest(endpoint)
          setCountryListData(countryData.data)
    
        } catch (error) {
           console.log(error) 
        }
      },
      [],
    )
    

    useEffect(() => {
        getCountryData()
    }, [])

    useEffect(() => {
        const Order = () => {
  if (sortBy === "descending"){
     const countryOrder = [...countryListData.sort((a , b) => b.name.localeCompare(a.name))];
    setCountryList(countryOrder)
  }
  else if (sortBy === "ascending"){
   const countryOrder = [...countryListData.sort((a , b ) => a.name.localeCompare(b.name))];
    setCountryList(countryOrder)
  }
  else if (sortBy === "lithunia"){
   const countryOrder = countryListData
    .filter(obj => obj.area < 65300)
  .sort((a, b) => a.area - b.area);
    setCountryList(countryOrder)
  }
  else if (sortBy === "oceania"){
   const countryOrder = countryListData.filter(obj => obj.region === "Oceania");
    setCountryList(countryOrder)
  }
}

Order()
    }, [countryListData, sortBy])
    return (
        <div   className="list-container">
            {
                countryList.map((country: DataArea )  => (<CountryListItem key={country.name} country={country}/>))
            }
        
       
        </div>
    )
}