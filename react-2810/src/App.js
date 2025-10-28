import React from 'react';
import ReaxtDOM from 'react-dom/client';
import { Usuario } from './components/Usuario';

export function App() {
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <Usuario />
    </div>
  );
}