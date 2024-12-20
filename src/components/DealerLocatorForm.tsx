"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Router, { useRouter } from "next/navigation";

import "@/app/sass/DealerLocatorForm.scss"

export default function DealerLocatorForm() {
  const router = useRouter();

  interface IFormInput {
    fullName: string;
    email: string;
    address: string;
    business: string;
    phone: number;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const dataFormatted = {
      name: data.fullName,
      email: data.email,
      company_address: data.address,
      company_name: data.business,
      phone: data.phone,
    };

    console.log(dataFormatted);

    try {
      const response = await fetch("/api/emails/sendContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataFormatted),
      });

      if (response.status !== 200) {
        throw new Error("Error en la petición");
      }

      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Contact Now</h2>
        <p className="mb-10">
          Have any questions? Feel free to reach out to us
        </p>

        <input
          className="p-5 mb-5"
          placeholder="Full Name"
          {...register("fullName", {
            required: "This field is required",
          })}
        />

        <input
          className="p-5 mb-5"
          placeholder="Your e-mail"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Please enter a valid e-mail",
            },
          })}
        />
        {errors.email && (
          <p className="text-start mb-5 text-red-600 bg-white">
            {errors.email.message}
          </p>
        )}

        <input
          className="p-5 mb-5"
          placeholder="Company Address"
          {...register("address", {
            required: "This field is required",
          })}
        />

        <input
          className="p-5 mb-5"
          placeholder="Business Name"
          {...register("business", {
            required: "This field is required",
          })}
        />

        <input
          type="tel"
          className="p-5 mb-5"
          placeholder="Phone Number"
          {...register("phone", {
            required: "This field is required",
          })}
        />

        <button type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
}
