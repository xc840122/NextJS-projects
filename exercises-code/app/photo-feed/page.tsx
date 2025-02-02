import wonders from "@/app/photo-feed/wonders"
import ImageWall from "@/component/ImageWall"

function PhotoPage() {
  return (
    <main className='container mx-auto'>
      <h1 className='text-center text-3xl font-bold my-4'>New Wonders of World</h1>
      <div className="flex justify-center items-center">
        <ImageWall images={wonders} />
      </div>
    </main>
  )
}

export default PhotoPage