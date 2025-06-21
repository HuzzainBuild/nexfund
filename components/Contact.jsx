"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion as m } from "motion/react";
import { fadeIn, zoomIn } from "@/utils/motion";
import Input from "./Input";
import { generateMessage } from "@/utils/constant";
import Button from "./Button";

const Contact = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    telegram: "",
    websiteUrl: "",
    token: "",
    projectName: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const message = generateMessage({
      fullname: form.fullname,
      email: form.email,
      telegram: form.telegram,
      websiteUrl: form.websiteUrl,
      token: form.token,
      projectName: form.projectName,
    });

    try {
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "NexFund Labs",
          from_email: form.email,
          to_email: "huzzainqudu@gmail.com",
          message: message,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );

      setLoading(false);
      alert("Thank you. We'ill get back to you as soon as possible.");

      setForm({
        fullname: "",
        email: "",
        telegram: "",
        websiteUrl: "",
        token: "",
        projectName: "",
      });
    } catch (error) {
      setLoading(false);
      console.error(error);

      alert("Ahh, something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative w-full py-[100px] max-sm:pt-[50px] px-4 overflow-hidden">
      <m.h1
        variants={fadeIn("right", "tween", 0.1, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="md:text-9xl text-5xl text-center px-4 font-bold"
      >
        CONTACT US
      </m.h1>
      <m.div
        variants={fadeIn("left", "tween", 0.1, 0.5)}
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        initial="hidden"
        className="grad-bg mt-10 py-[50px] px-8 md:px-[50px] rounded-xl max-w-[60rem] mx-auto z-1 "
      >
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Tell Us About Your Project
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mt-8 ">
          <div className="grid gap-6">
            <Input
              title={"Full Name"}
              place={"John Doe"}
              name={"fullname"}
              value={form.fullname}
              handleChange={handleChange}
            />
            <Input
              title={"Project Name"}
              place={"NexFund Labs"}
              name={"projectName"}
              value={form.projectName}
              handleChange={handleChange}
            />
            <Input
              title={"Email"}
              place={"example@gmail.com"}
              name={"email"}
              value={form.email}
              handleChange={handleChange}
            />
          </div>
          <div className="grid gap-6">
            <Input
              title={"Website URL"}
              place={"https://nexfund.io"}
              name={"websiteUrl"}
              value={form.websiteUrl}
              handleChange={handleChange}
            />
            <Input
              title={"Telegram Username"}
              place={"@nexfund"}
              name={"telegram"}
              value={form.telegram}
              handleChange={handleChange}
            />
            <Input
              title={"Token / Coin Tracker"}
              place={"Nexfund Labs (NFL)"}
              name={"token"}
              value={form.token}
              handleChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-6 flex w-full">
          <Button
            type={"btn"}
            title={loading ? "Sending..." : "Send"}
            handleClick={handleSubmit}
          />
        </div>
      </m.div>
    </section>
  );
};

export default Contact;
