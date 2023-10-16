//impots dependencias, imagenes, componentes, estilos
import '../styles/App.scss'


function App() {
  //funciones, variables, handles
  
  //estructura html
  return (
    <div>
      <header className='header'>
        <h1 className='header__h1'>Country Info App</h1>
        <p className='header__p'>Explore information about countries, capitals, and flags. Add new countries and filter through the list!</p>
        </header>  
        <main>
           <form>
            <section className='form__filter'>
              <h2>Filters</h2>
              <input 
              className='form__filter-country'
              autoComplete='off'
              type="search"
              name='country'
              placeholder='Spain'
              // value={}
              // onChange={} 
            />
          <input 
              className=''
              type="select"
              name='country'
              // value={}
              // onChange={} 
            />
          </section>
          <section className='form__add'>
            <h2>Add Country</h2>
          <input 
              className=''
              autoComplete='off'
              type="search"
              name='country'
              placeholder='Country Name'
              // value={}
              // onChange={} 
            />
            <input 
              className=''
              autoComplete='off'
              type="search"
              name='country'
              placeholder='Capital'
              // value={}
              // onChange={} 
            />
            <input 
              className=''
              autoComplete='off'
              type="search"
              name='country'
              placeholder='Flag Icon'
              // value={}
              // onChange={} 
            />
            <input 
              className=''
              autoComplete='off'
              type="search"
              name='country'
              placeholder='Continent'
              // value={}
              // onChange={} 
            />
            <button>Add Country</button>
          </section>
          </form>
          <ul className="list">
        </ul>
        </main>
     
    </div>
    )
}

export default App
