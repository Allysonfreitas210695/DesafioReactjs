import { Layout } from "./components/layout"
import { Profile } from "./components/Profile"
import { Repositories } from "./components/Repositories"
import { useGithub } from "./components/hooks"
import { GithubProvider } from "./components/Providers"
import GlobalCss from "./style/Global.css"
import { NoSearch } from "./components/NoSearch"

export const App = () => {
  const { githubState } = useGithub();
  
  return (
    <Layout>
      {
        githubState.hasUser && githubState.loading ? (
          <>
            <Profile/>
            <Repositories/>
          </>
        ) : (
        <NoSearch />
        )
      }
      
    </Layout>
  )
}