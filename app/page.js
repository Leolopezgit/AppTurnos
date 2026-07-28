'use client';

import { useState } from 'react';
import './styles.css';

const doctors = {
  'Clínica médica': ['Dra. Ana Pérez', 'Dr. Martín López'],
  Cardiología: ['Dr. Pablo Ruiz'],
  Pediatría: ['Dra. Laura Gómez']
};
const schedules = ['09:00', '10:00', '11:30', '14:00', '15:30'];

export default function Home() {
  const [specialty, setSpecialty] = useState('Clínica médica');
  const [doctor, setDoctor] = useState(doctors['Clínica médica'][0]);
  const [location, setLocation] = useState('Sede Centro');
  const [time, setTime] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const onSpecialty = (value) => { setSpecialty(value); setDoctor(doctors[value][0]); };

  return <main>
    <section className="hero"><img className="brand" src="/AppTurnos/heges-360-logo.png" alt="HeGeS 360" /><p className="eyebrow">TURNOS MÉDICOS</p><h1>Reservá tu consulta</h1><p>Elegí la especialidad, sede y horario que mejor te quede.</p></section>
    <section className="card">
      {confirmed ? <div className="confirmation"><h2>Tu turno fue solicitado</h2><p>{specialty} · {doctor}</p><p>{location} · {time}</p><p>Consulta presencial. El pago se realiza en la institución.</p><button onClick={() => setConfirmed(false)}>Reservar otro turno</button></div> : <>
        <h2>Elegí tu turno</h2>
        <label>Especialidad<select value={specialty} onChange={(e) => onSpecialty(e.target.value)}>{Object.keys(doctors).map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>Médico<select value={doctor} onChange={(e) => setDoctor(e.target.value)}>{doctors[specialty].map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>Sede<select value={location} onChange={(e) => setLocation(e.target.value)}><option>Sede Centro</option><option>Sede Norte</option></select></label>
        <fieldset><legend>Horarios disponibles</legend><div className="times">{schedules.map((item) => <button className={time === item ? 'selected' : ''} onClick={() => setTime(item)} key={item}>{item}</button>)}</div></fieldset>
        <button className="primary" disabled={!time} onClick={() => setConfirmed(true)}>Confirmar turno</button>
        <p className="note">Podés cancelar o reprogramar hasta 3 horas antes del turno.</p>
      </>}
    </section>
  </main>;
}
