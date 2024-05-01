import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";


function App() {
  const { user, loginWithRedirect, isAuthenticated , logout} = useAuth0();

  console.log("Current User", user);
  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated && <h3> Hello , {user.name}</h3>}
        {isAuthenticated ? (
          <button onClick={(e)=>logout()}> Log Out</button>
        ) : (
          <button onClick={(e) => loginWithRedirect()}>
            Login with Redirect
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
