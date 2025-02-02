import { WonderImage } from "@/app/photo-feed/wonders"
import ImageView from "./ImageView"


export default function ImageWall({ images }: {
  images: WonderImage[]
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {images.map(img => {
        return (
          <ImageView key={img.id} image={img} />
        )
      })}
    </div>
  )
}
