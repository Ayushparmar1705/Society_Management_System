
import Sidebar from './Sidebar'

export default function Layout({children}) {
  return (
    <div className='flex'>
        <Sidebar></Sidebar>
        <main className='flex-1 justify-center items-center'>
            {children}
        </main>
    </div>
  )
}
