import React from 'react';

const information = () => {
  return (
    <div className="Info-body">
    
       <header className="Info-header text-center">This is an information page for COVID-19</header> 
       <img className="rounded mx-auto d-block imgheighcovid" src='https://cdn.discordapp.com/attachments/933464332874956800/936282218727354409/istockphoto-1214372541-170667a.jpeg'></img>
       <body>
         <h3 className='text-center'>COVID-19 Common Symptoms</h3>
            <ul className="a text-center">
              <li>Fever</li>
              <li>Cough</li>
              <li>Tired</li>
              <li>Loss of Smell or Taste</li>
            </ul>          
         <h3 className='text-center'>Testing Sites:</h3>
         <p className="text-center column2">If you have symptoms of COVID-19 or exposure to COVID-19, you can choose a testing site near you to get tested.</p>
         <form action='https://coronavirus.health.ny.gov/find-test-site-near-you'>
           <button className="column1 button" type='submit'>Find Test Site</button>
         </form>
         <br />
         <br />
         <br />
         <br />
         <h3 className='text-center'>Vaccine Sites:</h3>
         <p className="column2">To protect you and people around you from COVID-19, consider getting vaccinated if possible.</p>
         <form action='https://www.vaccines.gov/search/'>
         <button className="column1 button" type='submit'>Find Vaccine Site</button>
         </form>
       </body>
    
    </div> 
  )
};

export default information