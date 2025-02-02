import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";
export default async function PageDetail({
  params
}: {
  params: Promise<{ photoId: string }>
}) {
  const { photoId } = await params;
  // Set a default image
  const photo: WonderImage = wondersImages.find(img => img.id === photoId) ?? wondersImages[0];
  return (
    <div className="container my-10 mx-auto">
      <div className="w-2/5 mx-auto">
        <h1 className="text-center font-bold text-3xl">{photo?.name}</h1>
        <Image
          className="w-full object-cover aspect-square mt-4"
          alt={photo?.name}
          src={photo?.src}
        />
        <div className="bg-slate-600 p-4 flex flex-col items-center">
          <h3>{photo.location}</h3>
          <h3>{photo.photographer}</h3>
        </div>
      </div>
    </div>
  )
}
