export const getStaticPaths = async () => {
    const res = await  fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    // map data to an array of path objects with params (id)
    const paths = data.map(dao => {
        return {
            params: {id: dao.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return {
        props: { dao: data}
    }

}

const Details = ({ dao }) => {
    return (
        <div>
            <h1>{ dao.name }</h1>
            <p>{ dao.email }</p>
            <p>{ dao.website }</p>
            <p>{ dao.address.city }</p>
        </div>
    )
}
export default Details
