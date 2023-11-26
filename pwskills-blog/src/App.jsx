// Importing CustomRoutes component from the specified file
import { CustomRoutes } from "./AllRoutes/CustomRoutes";

// Importing Header component from the specified file
import { Header } from "./components/Header";

// Importing HomePage component from the specified file
import { HomePage } from "./pages/HomePage";

// Main App component
function App() {
  return (
    // Main container for the entire application
    <div className="App">
      {/* Header component to display the application header */}
      <Header/>

      {/* CustomRoutes component to handle custom routing logic */}
      <CustomRoutes/>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
