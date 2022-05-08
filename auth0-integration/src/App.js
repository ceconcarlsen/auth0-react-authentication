import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  const { isLoading, error } = useAuth0;

  return (
    <>
      <main className="column">
        <h1>Auth0 Login</h1>
        {error && <p>Erro ao autenticar</p>}
        {!error && isLoading && <p>Carregando...</p>}
        {!error && !isLoading && (
          <>
            <LoginButton />
            <LogoutButton />
            <Profile />
          </>
        )}
      </main>
    </>
  );
}

export default App;
