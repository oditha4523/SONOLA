import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TemplatesSection from './components/TemplatesSection'
import RecentSection from './components/RecentSection'

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      
      <main className="main-content">
        <Header />
        <HeroSection />
        <TemplatesSection />
        <RecentSection />
      </main>
    </div>
  )
}

export default App
