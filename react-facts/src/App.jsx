import "./App.css";

function Header() {
  return (
    <header className="bg-gray-800">
      <nav className="flex items-center justify-between p-4">
        <img className="h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="react"
        />
        <ul className="flex items-center text-white gap-10">
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <div className="p-6 bg-white">
      <h1 className="text-3xl font-semibold py-2">Fun Facts about React:</h1>
      <ul>
        <div className="flex items-center gap-3 mt-3">
          <div className="h-2 w-2 bg-blue-500 rounded-lg"></div>
          <li className="">Was First released in 2013</li>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <div className="h-2 w-2 bg-blue-500 rounded-lg"></div>
          <li>Was originally created by Jordan Walke</li>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <div className="h-2 w-2 bg-blue-500 rounded-lg"></div>
          <li>Is maintained by facebook</li>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <div className="h-2 w-2 bg-blue-500 rounded-lg"></div>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </div>
      </ul>
    </div>
  );
}
function Footer() {
  return (
    <footer className="p-2 text-center bg-white">
      <small>&copy; coded with ❤️ by Junior</small>
    </footer>
  );
}
function App() {
  return (
    <div className="w-1/3 mt-24 mx-auto shadow-md">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;