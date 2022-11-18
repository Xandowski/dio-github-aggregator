import { useState } from 'react'
import GithubLogo from './assets/images/github-logo.svg'
import { api } from './services/api'


export const App = () => {
  const [repos, setRepos] = useState([])

  const handleSearch = async () => {
    const {data} = await api.get('/repos/xandowski/dio-clone')

    if(data.id){
      setRepos(prev => [...prev, data])
    }
  }

  return (
    <>
      <img className="absolute bottom-0 right-0" src={GithubLogo} alt="github logo" />

      <section className="max-w-[768px]">
        <h1 className="text-5xl font-bold mb-[3.25rem]">Explore e salve seus repositórios favoritos do github.</h1>

        <div>
          <input className="py-[22px] px-7 bg-zinc-600 rounded-l w-3/4 placeholder:text-white text-[18px] outline-none border-2 border-zinc-600 focus-within:border-zinc-100" type="text" placeholder="Digite aqui"/>
          <button className="bg-green-600 hover:bg-green-500 transition-colors py-6 px-7 rounded-r w-1/4 text-[18px] font-semibold" onClick={handleSearch}>Pesquisar</button>
        </div>
      </section>

      <section className="max-w-[768px]">

      </section>
    </>
  )
}
