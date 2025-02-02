import { WonderImage } from "@/app/photo-feed/wonders"
import Image from "next/image"
import Link from "next/link"


export default function ImageView({
  image
}: {
  image: WonderImage
}) {
  return (
    <Link href={`/photo-feed/${image.id}`}>
      <Image
        className="w-full object-cover aspect-square"
        alt={image.name}
        src={image.src}
      />
    </Link>
  )
}
