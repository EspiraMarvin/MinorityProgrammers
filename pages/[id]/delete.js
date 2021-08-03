import fetch from "isomorphic-unfetch";
import { useState, useEffect} from "react";

const Dao = ({ dao }) => {
    return(
        <div>
            Delete Dao
        </div>
    )


}

Dao.getInitialProps = async ({ query: { id }}) => {
    const res =  await fetch(`http://localhost:3000/api/daos/${id}`)

    const { data } = await res.json()

    return { dao:  data}
}
