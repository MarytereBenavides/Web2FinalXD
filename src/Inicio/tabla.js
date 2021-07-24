import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { getCiudad } from '../services/firebase';


function TableComponent(props) {


    const [ciudad, setCiudad] = useState([]);



    useEffect(()=>{
        getCiudad(setCiudad)
    },[]) 

    return  (
        <div  className="container">
            <Table  responsive> 
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>PAIS</th>
                        <th>POBLACION</th>
                        <th>PRESIDENTE</th>  
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
 

                    {ciudad.map((dato, index) => ( 
                    <tr >
                        <td>{index+1}</td>
                        <td>{dato.nombre}</td> 
                        <td>{dato.pais}</td>
                        <td>{dato.poblacion}</td>
                        <td>{dato.presidente}</td>
                     

                        <td>editar</td> 
                        <td>borrar</td> 

                    </tr>
                    ))}
                </tbody> 
            </Table>   
        </div>
    );
}

export default TableComponent;