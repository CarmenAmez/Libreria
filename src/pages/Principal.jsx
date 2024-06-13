import { useState } from "react";
import { savePersonName } from "../api/libreria";

const Principal = () => {
    const [autor, setAutor] = useState("");
    const [libro, setLibro] = useState("");
    const [precio, setPrecio] = useState("");

    const añadirLibro = () =>{
        savePersonName ({autor, libro, precio});
        setAutor("");
        setLibro("");
        setPrecio("");
    }

    return (
        <>
            <h1>Registro de libros</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Books Title</th>
                        <th>Books Autor</th>
                        <th>Books Price</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td><input  type="text" value={autor} onChange={(e) => setAutor(e.target.value)} placeholder="Autor" /></td>
                        <td><input  type="text" value={libro} onChange={(e) => setLibro(e.target.value)} placeholder="Libro" /></td>
                        <td><input  type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Precio"  /></td>
                        <td><button onClick={añadirLibro}>Add</button></td>
                    </tr>
                </tfoot>
            </table>

        </>
    )
}

export default Principal;