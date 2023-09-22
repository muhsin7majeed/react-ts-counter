const DarkModeToggle = () => {
  const toggleDarkMode = () => {
    const body = document.body;

    body.classList.toggle("dark-mode");
  };

  return <button onClick={toggleDarkMode}>Toggle Dark Mode</button>;
};

export default DarkModeToggle;
