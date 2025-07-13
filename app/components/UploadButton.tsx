"use client";

import { CldUploadButton, type CldUploadButtonProps } from "next-cloudinary";
import { Suspense } from "react";
import LoadingUI from "./LoadingUI";

function UploadButton(props: CldUploadButtonProps) {

    return (
        <Suspense fallback={<LoadingUI />}>
            <CldUploadButton {...props} uploadPreset="upload_initial" options={{

                tags: ["photo_from_the_app"],

            }} />
        </Suspense>
    );

}

export default UploadButton;