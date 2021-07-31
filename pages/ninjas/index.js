import styles  from '../../styles/Daolist.module.css'
import Link from "next/link";

export const getStaticProps = async () => {

    const res  =  await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()

    return {
        props: { daolists: data}
    }

}

const Ninjas = ({ daolists }) => {
    return (
        <div>
            <h1>All  Ninjas</h1>
            { daolists.map(dao => (
                <Link href={`ninjas/${dao.id}`} key={dao.id}>
                    <a className={styles.single}>
                        <h3>{ dao.name }</h3>
                    </a>
                </Link>
            )) }
        </div>
    )
}
export default Ninjas
