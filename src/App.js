import React from 'react';
import './App.css';
import Hero from './components/Hero';
import IntuitiveInterfaces from './components/IntuitiveInterfaces';
import MobileFirst from './components/MobileFirst';
import ExtensiveSkillset from "./components/ExtensiveSkillset"

function App() {
  return (
    <div className="App">
      <Hero />
      {/* Intuitive User Interfaces */}
      <IntuitiveInterfaces></IntuitiveInterfaces>
      {/* Mobile-first Design */}
      <MobileFirst></MobileFirst>
      {/* Wide Skillset */}
      <ExtensiveSkillset></ExtensiveSkillset>
      {/* Links to My Story, Projects, Contact(?) */}
    </div>
  );
}

export default App;
