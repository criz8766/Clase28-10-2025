import React, { useState, useEffect, Fragment } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

export function Usuario(){
    const [usuarios, setUsuarios] = useState([]);
    const [nuevoUsuario, setNuevoUsuario] = useState("");

    useEffect(() => {
        const usuariosRef = collection(db, "usuarios");
        const unsubscribe = onSnapshot(usuariosRef, (snapshot) => {
            const lista = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setUsuarios(lista);
        });

        return () => unsubscribe();
    }, []);

    const agregarUsuario = async () => {
        if (nuevoUsuario.trim() === "") return;
        await addDoc(collection(db, "usuarios"), { nombre: nuevoUsuario });
        setNuevoUsuario("");
        alert("Usuario agregado correctamente");
    };

    return (
        <Fragment>
            <div className="container mt-4">
                <h1 style ={{ textAlign: "center" }}>Lista de usuarios</h1>

                <hr />

                <div className="input-group mb-3">
                    <input
                        value={nuevoUsuario}
                        onChange={(e) => setNuevoUsuario(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Nuevo usuario"
                    />
                    <button onClick={agregarUsuario} className="btn btn-success">+</button>
                </div>

                <ul className="list-group">
                    {usuarios.map((usuario) => (
                        <li key={usuario.id}>{usuario.nombre}</li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
}