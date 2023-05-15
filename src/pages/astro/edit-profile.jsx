import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Input from "@/components/common/Input";
import Modal from "@/components/common/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EditProfile = () => {
    return (
        <Layout title="Edit Profile">
            <Navbar
                isLoginActive={false}
                isNavActive={true}
                link="/"
                title="Edit Profile"
                slot="header-content"
            />
            <main className="container px-0">
                <section className="bg-primary-surface py-4 text-center mt-4">
                    <Image
                        src="/assets/profile.png"
                        alt=""
                        width={128}
                        height={128}
                        className="rounded-full h-32 w-32 mx-auto"
                    />
                    <Link
                        href="#ChangePhotoModal"
                        className="btn btn-outline btn-primary btn-wide bg-white !btn-sm mt-4"
                    >
                        Change Photo
                    </Link>
                </section>
                <section className="bg-white p-4 mt-4">
                    <form action="">
                        <div className="flex flex-col gap-4">
                            <Input
                                label="Name"
                                type="text"
                                placeholder="Type your name"
                                errorMessage="Your name is required"
                                value="JohnDoe@gmail.com"
                            />
                            <Input
                                label="Email"
                                type="email"
                                placeholder="example@email.com"
                                value="johndoe@gmail.com"
                            />
                            <Input
                                label="Phone Number"
                                type="tel"
                                placeholder="Type your phone number with country code"
                                errorMessage="Your phone number is required"
                                value="+6281231231231"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-block btn-primary text-white btn-sm mt-4"
                        >
                            Save
                        </button>
                    </form>
                </section>
            </main>
            <Modal id="ChangePhotoModal" slot="modal" isCustom={true}>
                <input
                    id="media"
                    type="file"
                    className="hidden"
                    accept="video/*,image/*"
                />
                <label
                    for="media"
                    className="inputMedia flex items-center justify-center bg-gray-50 rounded-lg text-2xl h-48 cursor-pointer"
                >
                    <FontAwesomeIcon icon={"image"} className="text-3xl" />
                </label>
                <div className="action-buttons flex gap-4 justify-end mt-4">
                    <label for="media" className="btn btn-outline btn-primary">
                        Choose from gallery
                    </label>
                    <button className="btn btn-primary hidden">Upload</button>
                </div>
            </Modal>
        </Layout>
    );
};

export default EditProfile;

// <!-- Cropper Js -->
// <script is:inline src="/vendor/cropper.min.js"></script>
// <script>
//     const showPreview = (event) => {
//         if (event.target.files.length > 0) {
//             const inputFile = event.target.files[0];
//             const src = URL.createObjectURL(inputFile);

//             if (inputFile.type.split("/")[0] === "image") {
//                 const oldPreviewImage = document.querySelector("#previewImage");
//                 let imgPreview = document.createElement("div");
//                 imgPreview.innerHTML = `<img src=${src} id="previewImage" className="h-auto w-full object-contain" />`;
//                 console.log("element: ", imgPreview);
//                 console.log("element: ", oldPreviewImage);
//                 if (oldPreviewImage) {
//                     oldPreviewImage.remove();
//                 }
//                 const actionButtons = document.querySelector(".action-buttons");
//                 event.target.parentElement.insertBefore(
//                     imgPreview,
//                     actionButtons
//                 );
//                 const previewImage = document.querySelector("#previewImage");
//                 const cropper = new Cropper(previewImage, {
//                     aspectRatio: 1 / 1,
//                 });
//                 console.log("element: ", previewImage);
//             }
//         }
//     };

//     const inputMedia = document.querySelector("input#media");
//     const btnUpload = document.querySelector(".btn.hidden");
//     console.log(btnUpload);
//     inputMedia.addEventListener("change", (event) => {
//         const labelInput = document.querySelector(".inputMedia");
//         labelInput.classList.remove("block");
//         labelInput.classList.add("hidden");
//         btnUpload.classList.remove("hidden");
//         showPreview(event);
//         console.log(event);
//         // console.log(document.getElementById("media"));
//         // console.log(inputMedia);
//         // event.target.
//     });
//     // btnUpload.addEventListener("click", () => {
//     //     console.log(test);
//     //     cropper.crop();
//     // })
// </script>
