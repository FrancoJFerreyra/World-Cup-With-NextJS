import { NextResponse } from 'next/server';

export const middleware = (request) => {
  // const token = req.cookies.get('QatarToken').value;
  const path = request.nextUrl.pathname;
  if (
    path.includes('/home') ||
    path.includes('/qatar') ||
    path.includes('world_cup_history')
  ) {
    //SI INCLUYE ALGO DE ESTO DEBO REDIRECCIONARLO AL LOGIN SI ES QUE NO TIENE LA COOKIE
    //NECESITO SABER CUANTO TIEMPO TIENE LA COOKIE PARA SABER SI EL USER NECESITA GENERAR UNA NUEVA
  }
};
