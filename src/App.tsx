import { useState } from 'react'
import GithubLogo from './assets/images/github-logo.svg'
import { Card } from './components/Card'
import { api } from './services/api'

interface repo {
  id: number
  name: string
  owner: {
    avatar_url: string
    login: string
  }
  url: string
}


export const App = () => {
  const [repos, setRepos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  const handleSearch = async () => {
    const {data} = await api.get(`/repos/${inputValue}`)
    const isRepoExists = repos.find((repo: repo) =>  data.id === repo.id)

    if(data.id && !isRepoExists){
      setRepos(prev => [...prev, data])
    }
  }

  const handleRemoveRepo = (id: number) => {
    const newRepos = repos.filter((repo: repo) => {
      return repo.id !== id
    })
    
    setRepos(newRepos)
  }

  return (
    <>
      <img className="absolute bottom-0 right-0" src={GithubLogo} alt="github logo" />

      <section className="max-w-[768px]">
        <h1 className="text-5xl font-bold mb-[3.25rem]">Explore e salve seus repositórios favoritos do github.</h1>

        <div>
          <input className="py-[22px] px-7 bg-zinc-600 rounded-l w-3/4 placeholder:text-white text-[18px] outline-none border-2 border-zinc-600 focus-within:border-zinc-100" type="text" placeholder="Digite aqui" onChange={handleChange}/>
          <button className="bg-green-600 hover:bg-green-500 transition-colors py-6 px-7 rounded-r w-1/4 text-[18px] font-semibold" onClick={handleSearch}>Pesquisar</button>
        </div>
      </section>

      
      <section className="max-w-[768px] mt-8">
        {repos && repos.map((repo: repo) => {
          return (
            <Card
              key={repo.id}
              id={repo.id}
              url={repo.url}
              avatar={repo.owner.avatar_url} 
              name={repo.name}
              user={repo.owner.login}
              handleRemoveRepo={handleRemoveRepo}
            />
          )
        })}
      </section>
    </>
  )
}
