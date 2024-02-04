// Components are javascipt functions that returns jsx (like html)

//Component name should start with capital letter

// In js we called function like this :  NavBar()

// In React we call components like this: <NavBar />
const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="font-bold text-3xl">Mitanshu</h1>
    </div>
  );
};

export default HomePage;
