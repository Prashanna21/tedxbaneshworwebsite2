"use client";
import React, { useRef, FormEvent } from "react";
import { Button } from "./ui/button";
import Input from "./ui/Input";
import emailjs from "@emailjs/browser";

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    const data = {
      from_fname: formData.get("from_fname"),
      from_mname: formData.get("from_mname"),
      from_lname: formData.get("from_lname"),
      from_email : formData.get("from_email"),
      message: formData.get("message"),
    };

    

    emailjs
      .sendForm("service_ulswr6e", "template_l83t1hp", form.current, {
        publicKey: "fY9eKKFn37ow5dhFC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current?.reset()
          
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="min-h-[480px] flex flex-col justify-center md:min-h-[570px] bg-[#FF0404] px-3">
      <div className="max-w-full md:max-w-[970px] mx-auto">
        <div className="text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Let's Stay In Touch!
          </h3>
          <p className="mt-4 mb-6 text-sm text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A corporis
            sit sed maiores, tempore optio expedita, animi tempora iste non fugit
            odit reprehenderit, qui eos fuga vero reiciendis. Natus, cumque?
          </p>
        </div>

        <div className="flex gap-x-6">
          <form onSubmit={handleSubmit} ref={form} className="max-w-[700px] mx-auto flex-[1.5]">
            <div className="grid grid-cols-3 md:gap-x-4 gap-x-1 md:gap-y-3 gap-y-2">
              <Input
                placeHolder="First Name"
                type="text"
                name="from_fname"
                customCss="flex-1"
              />
              <Input
                placeHolder="Middle Name"
                type="text"
                name="from_mname"
                customCss="flex-1"
                required={false}
              />
              <Input
                placeHolder="Last Name"
                type="text"
                name="from_lname"
                customCss="flex-1"
              />
              <Input
                placeHolder="Email Address"
                type="email"
                name="from_email"
                customCss="col-span-3"
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                className="md:h-40 h-24 rounded-lg appearance-none resize-none focus:outline-none p-2 text-black-c1 col-span-3 placeholder:text-[#827979] placeholder:text-[16px]"
              />
              <Button variant={"default"} className="text-[16px]">
                Submit
              </Button>
            </div>
          </form>

          <h2 className="hidden md:block leading-[56px] text-4xl font-bold text-white w-72">
            <span className="text-black-c1">"</span>
            Let’s Discover a World of Learning.
            <span className="text-black-c1">"</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
