import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title';
import DatepickerSearch from "./Datepickersearch";

//get all unique values
const getUnique = (items, value) => {
    // set only accepts unique values
    return [...new Set(items.map(item => item[value]))]
}
const getAvailableApartments = (availableApartments) => {
    return [availableApartments]
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext)
    //value from my inputs
    const {
        handleChange,
        capacity,
        price,
        minPrice,
        maxPrice,
        availableApartments,

    } = context;


    //get people
    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })

    //get apartmentIds
    let id = getUnique(rooms, 'id');
    id = id.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">

                {/*guests*/}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity" value={capacity}
                        className="form-control"
                        onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* end guests*/}
                {/* room price*/}
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price}
                           onChange={handleChange} className="form-control"/>
                </div>
                {/* end room price*/}
                {/* room date picker*/}
                <div className="form-group">
                    <DatepickerSearch
                    />
                </div>
                {/* end date picker*/}

            </form>
        </section>
    )
}