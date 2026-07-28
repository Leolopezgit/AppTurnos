import test from 'node:test';
import assert from 'node:assert/strict';
import { canManageAppointment, createAppointment } from '../lib/appointments.mjs';

test('permite cancelar o reprogramar con al menos tres horas de anticipación', () => {
  const now = new Date('2026-07-28T10:00:00');
  assert.equal(canManageAppointment('2026-07-28T13:00:00', now), true);
});

test('no permite cambios con menos de tres horas de anticipación', () => {
  const now = new Date('2026-07-28T10:00:00');
  assert.equal(canManageAppointment('2026-07-28T12:59:00', now), false);
});

test('crea un turno presencial con pago en institución', () => {
  const result = createAppointment({ specialty: 'Clínica médica', doctor: 'Dra. Ana Pérez', location: 'Sede Centro', time: '09:00' });
  assert.equal(result.modality, 'Presencial');
  assert.equal(result.payment, 'En la institución');
});

test('impide crear un turno incompleto', () => {
  assert.throws(() => createAppointment({ specialty: 'Clínica médica' }));
});
