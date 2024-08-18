import Header from './components/Header'
import Main from './components/Main'
function App() {
  return (
    <div

      className='min-[500px]:w-10/12 bg-slate-100 h-screen sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mx-auto pb-3'>
      <Header />
      <Main />
    </div>
  )
}

export default App;