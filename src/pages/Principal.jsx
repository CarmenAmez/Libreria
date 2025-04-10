import { useEffect, useState } from "react";
import { savePersonName, getPersons, deletePerson, updatePerson } from "../api/libreria";

const Principal = () => {
    const [autor, setAutor] = useState("");
    const [titulo, setTitulo] = useState("");
    const [precio, setPrecio] = useState("");
    const [informacion, setInformacion] = useState([]);
    const [id, setId] = useState("");


    const añadirLibro = () => {
        savePersonName({ autor, titulo, precio });
        setAutor("");
        setTitulo("");
        setPrecio("");
    };
    const eliminarLibro = async () => {
        deletePerson(id);
        setId("");

    };
    const editarLibro = async () => {
        await updatePerson(id, {autor, titulo, precio} );
        setAutor("");
        setTitulo("");
        setPrecio("");
        setId("");
    };

    useEffect(() => {
        getPersons().then(data => setInformacion(data.data))
    }, []);

    return (
        <>
            <h1>Registro de libros</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Books Autor</th>
                        <th>Books Title</th>
                        <th>Books Price</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        informacion.map(info => (
                            <tr key={info.id}>
                                <td>{info.id}</td>
                                <td>{info.autor}</td>
                                <td>{info.titulo}</td>
                                <td>{info.precio}</td>
                                <td>
                                    <button onClick={eliminarLibro}>Delete</button>
                                    <button onClick={editarLibro}>Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td><input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} placeholder="Autor" /></td>
                        <td><input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Libro" /></td>
                        <td><input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Precio" /></td>
                        <td><button onClick={añadirLibro}>Add</button></td>
                    </tr>
                </tfoot>
            </table>

        </>
    )
}

export default Principal;