import Modal from "@/component/Modal";
import wondersImages, { WonderImage } from "../../wonders";
import Image from "next/image";

export default async function page({ params }: {
  params: Promise<{ photoId: string }>
}) {
  const { photoId } = await params;
  const photo: WonderImage = wondersImages.find(img => img.id === photoId) ?? wondersImages[0]
  return (
    <Modal>
      <Image
        className="w-full object-cover aspect-square"
        alt={photo.name}
        src={photo.src}
      />
      <div className="bg-slate-600 p-4 flex flex-col items-center">
        <h3>{photo.location}</h3>
        <h3>{photo.photographer}</h3>
      </div>
    </Modal >
  );
}
