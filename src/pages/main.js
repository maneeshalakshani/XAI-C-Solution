import React from 'react';
import './Main.css';
import Header from '../components/Header/Header';
import Introduction from '../components/Introduction/Introduction';
import Navbar from '../components/NavBar/Nav';
import Domain from '../components/Domain/Domain';
import Milestones from '../components/Milestones/Milestones';
import DocumentDownload from '../components/Documents/DocumentDownload';
import ToolsAndTechnologies from '../components/ToolsAndTechnologies/ToolsAndTechnologies';
import Achievements from '../components/Achievements/Achievements';
import Teams from '../components/Teams/Teams';
function Main() {
  return (
    <>
      <Navbar />
      <Header />
      <Introduction />
      <Domain />
      <Milestones />
      <DocumentDownload />
      <ToolsAndTechnologies />
      <Achievements />
      <Teams />
    </>
  );
}

export default Main;