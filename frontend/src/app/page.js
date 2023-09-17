import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
  <div className="page">
    <h1>BIENVENIDO</h1>  
    <ul>
      <li>
        <Link href="/inicio-sesion">INICIAR SESIÓN</Link>
      </li>
      <li>
        <Link href="/registro">REGISTRATE </Link>
      </li>
      <li>
        <Link href="/lista-tarea">TAREAS </Link>
      </li>
    </ul>
  </div>
  )}
