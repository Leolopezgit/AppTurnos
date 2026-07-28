# Especificación funcional — App Turnos (MVP)

## Objetivo
Permitir que un paciente reserve, cancele o reprograme consultas médicas presenciales.

## Alcance
- Pacientes como único rol en la primera versión.
- Web responsive, apta para uso móvil.
- Acceso mediante documento y validación de email (integración pendiente con Supabase).
- Selección de especialidad, médico, sede y horario.
- Consultas únicamente presenciales.
- Agenda inicial importable desde Excel.
- Pago presencial en la institución.
- Email de recordatorio.
- Cancelación y reprogramación hasta tres horas antes del turno.

## Fuera de alcance
Obras sociales, pagos online, telemedicina y reglas clínicas adicionales.

## Criterios generales de aceptación
Cada requerimiento tiene documentación propia y pruebas automatizadas para la lógica de negocio asociada. La integración de datos, autenticación y email se incorpora en la siguiente etapa.
