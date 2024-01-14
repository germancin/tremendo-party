import { useRouter } from 'next/router';

const ClientPage = () => {
  const router = useRouter();
  const { clientId } = router.query;

  // Aquí puedes usar el clientId, por ejemplo, para cargar datos específicos
  // o para pasar este clientId a otros componentes o funciones.

  return (
    <div>
      <h1>Client ID: {clientId}</h1>
      {/* Aquí puedes añadir más lógica o componentes que usen el clientId */}
    </div>
  );
};

export default ClientPage;