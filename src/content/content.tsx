import { useRef } from 'react'

const ContentPage: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      className="z-50"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
      }}
    >
      <div className="bg-white text-black border rounded-full p-4">
        <h1>Content Page</h1>
      </div>
    </div>
  )
}

export default ContentPage
