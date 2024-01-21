/* eslint-disable no-unused-vars */
import Header from './components/Header.jsx';
import Signup from './components/Signup.jsx';     // FormData
// import Login from './components/Login.jsx';       // ref
import Login from './components/StateLogin.jsx';  // state

function App() {
  return (
    <>
      <Header />
      <main>
        <Login />
        {/* <Signup /> */}
      </main>
    </>
  );
}

export default App;
