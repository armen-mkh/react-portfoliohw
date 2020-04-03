import React from 'react';
import Card from '../components/ProjectCard'
import PortfolioList from '../utils/Porto.js';

export default ()=>{
    return <><h1>Welcome To Portfolio</h1>
    <div className='row'>{PortfolioList.map(project=> <Card info={project}/>)}</div>
    
    </>
}