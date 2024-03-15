import reactLogo from './assets/react.svg'

export function Header() {
return(
    <>
    <header>
            <a href="#">Home</a> | <a href="#postsIndex">All posts</a> | <a href="#postsNew">New post</a>
    </header>
    <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </div>
      </>
)

}