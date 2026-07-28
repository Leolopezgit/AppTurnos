export const RESCHEDULE_LIMIT_HOURS = 3;

export function canManageAppointment(appointmentAt, now = new Date()) {
  const hoursUntilAppointment = (new Date(appointmentAt).getTime() - now.getTime()) / 3_600_000;
  return hoursUntilAppointment >= RESCHEDULE_LIMIT_HOURS;
}

export function createAppointment({ specialty, doctor, location, time }) {
  if (!specialty || !doctor || !location || !time) {
    throw new Error('Para reservar un turno se requieren especialidad, médico, sede y horario.');
  }

  return { specialty, doctor, location, time, modality: 'Presencial', payment: 'En la institución' };
}
