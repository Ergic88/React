import { useState, useEffect, useContext } from "react";
import Results from "./Results";
import ThemeContext from "./ThemeContext";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]


const SearchParams = () => {
const [location, setLocation] = useState("");
const [animal, setAnimal] = useState("");
const [breed, setBreed] = useState("");
const [breeds] = useBreedList(animal);
const [theme, setTheme] = useContext(ThemeContext);

const [pets, setPets] = useState([]);

useEffect(() => {
    requestPets();
}, [])

async function requestPets(){
    const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
}
    return (
        <div className="my-0 mx-auto w-11/12">
            <form className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center" 
            onSubmit={
                e => { 
                    e.preventDefault(); 
                    requestPets();
                }}>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location}
                        type="text"
                        placeholder="Location" 
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-60 mb-5 block" >                        
                    </input>    
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal" 
                    className="w-60 mb-5 block" 
                    value={animal}
                    onChange={
                        (e) => {
                            setAnimal(e.target.value)
                            setBreed("")
                        }
                    }
                    onBlur={
                        (e) => {
                            setAnimal(e.target.value)
                            setBreed("")
                        }
                    }>
                        <option/>{ANIMALS.map((animal) => {
                            return(<option key={animal} value={animal}>{animal}</option>)
                        })} </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select id="breed" 
                    className="w-60 mb-5 block disabled:opacity-50"
                    value={breed}
                    onChange={
                        (e) => {
                            setBreed(e.target.value)
                        }
                    }
                    onBlur={
                        (e) => {
                            setBreed(e.target.value)
                        }
                    }>
                        <option/>{breeds.map((breed) => {
                            return(<option key={breed} value={breed}>{breed}</option>)
                        })} </select>
                </label>
                <label htmlFor="theme">
                    Theme
                    <select value={theme}  className="w-60 mb-5 block" onChange={e => setTheme(e.target.value)} onBlur={e => setTheme(e.target.value)}>
                        <option value="peru">Peru</option>
                        <option value="darkblue">Dark Blue</option>
                        <option value="chartreuse">Chartreuse</option>
                        <option value="mediumorchid">Medium Orchid</option>
                        <option value="#f06d06">Fog Dog</option>
                    </select>
                </label>
                <button className="rounded px-6 py-2 color text-white hover:opacity-50 border-none"
                style={{backgroundColor: theme}}>Submit</button>
            </form>
           <Results pets={pets}/>
        </div>
    )
}
export default SearchParams;