import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'

function AlbumView() {
    const { id} = useParams()
    const [albumData, setAlbumData] = useState ([])

    return (
        <div>
            <h2>Jake are you having fun grading this? The id passed was: {id}</h2>
            <p> Yup, Album Data Goes Here!</p>
        </div>
    )
}

export default AlbumView