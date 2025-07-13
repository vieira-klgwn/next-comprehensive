import UploadButton from "@/app/components/UploadButton";

import getCloudinary from "@/app/utils/getCloudinary";

import CldImage from "@/app/components/CldImage";

const cloudinary = getCloudinary();

export default async function Home() {

  // Get all the images from the "upload_initial" folder and the ones that have the "photo_from_the_app" tag

  const { resources } = await cloudinary.search

    .expression("folder=first AND tags=photo_from_the_app")

    .execute();

  return (

    <main>

      <section className="flex flex-col gap-10 mt-10 items-center min-h-screen">

        <UploadButton

          // The signatureEndpoint prop is the path to the route that will sign the Cloudinary params

          signatureEndpoint="/api/sign-cloudinary-params"

          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"

          // The uploadPreset prop is the name of the upload preset that we created in Cloudinary

          uploadPreset="upload_initial"

          options={{

            tags: ["photo_from_the_app"],

          }}

        />

        <ul className="grid grid-cols-3 gap-4">

          {resources.map((image: CldImage) => (


            <li key={image.public_id}>

              <CldImage

                className="max-w-sm overflow-hidden shadow-lg"

                alt={image.public_id}

                src={image.secure_url}

                width={500}

                height={500}

              />

            </li>

          ))}

        </ul>

      </section>

    </main>

  );

}

type CldImage = {

  public_id: string;

  secure_url: string;

  width: number;

  height: number;

};