
import './App.css';

function App() {
  return (
    
    <div className="App">
      <div className="xbutton">
        <button>x</button>
      </div><br />

          <h1>Create a new Contract</h1>
          <h3>Start Creating your Contract by Selecting the most Relevant Type.</h3>
        
      <div className="contracts">
         <div className="box">
         <button className='largebutton'><img src="./images/plus2.png" alt='Blank Contract'/>
          <h2>Blank Contract</h2>
          <par>Create Customs Template as Your Required. </par><br />
          <input type="radio" value="Contractor" name="contract-button" className='radio'/>
          </button>

          <button className='largebutton'><img src="./images/employee.png" alt='cemployee'/>
          <h2>Employee</h2>
          <par>Team Member of the Company Work with a Schedule. </par><br />
          <input type="radio" value="Contractor" name="contract-button" className='radio'/>
          </button>

          <button className='largebutton'><img src="./images/contractor.png" alt='contractor'/>
          <h2>Contractor</h2>
          <par>Self Employed Work with Project basis Individually.</par><br />
          <input type="radio" value="Contractor" name="contract-button" className='radio'/>
          </button>
        </div>
      </div>
        
          <button className="continue">Continue</button>
    </div>
  );
}

export default App;
