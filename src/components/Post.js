import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';

import '../App.css'

export default function Post(props) {
    return (
        <div className='post'>
            <img src={props.imageUrl} alt={props.title} className='post--img'/>
            <div className='post--details'>
                <div className='post--location'>
                    <LocationOnIcon style={{color:'#F55A5A'}} />
                    <p className='post--country'> {props.location} </p>
                    <a href={props.googleMapsUrl} className='post--maps'> View on Google Maps </a>
                </div>
                <h1 className='post--title'> {props.title} </h1>
                <p className='post--date'> {props.startDate} - {props.endDate} </p>
                <p className='post--description'> {props.description} </p>
            </div>
        </div>
        
    )
}