import ResponsiveAppBar from '../components/appbar/ResponsiveAppBar'
import Post from '../components/post/Post'


export default function Home() {
  return (
    <main>
      {/* Mobile app bar */}
      <ResponsiveAppBar name="Home"></ResponsiveAppBar>
      {/* Simplified version of the app bar used in the desktop view */}
      <div id="content-panel" className='panel'>
        <Post type="Event"></Post>
        <Post type="News"></Post>
        <Post type="Post"></Post>
      </div>
      
      
    </main>
  )
}
