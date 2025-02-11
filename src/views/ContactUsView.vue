<template>
  <div class="flex justify-center items-center p-8 md:py-16 bg-primary">
    <div class="md:w-3/5">
      <div class="flex flex-col md:flex-row justify-between gap-8">
        <div class="flex-1">
          <div class="text-gray-600 text-left max-w-lg mx-auto">
            <h1 class="text-4xl font-bold">Get in Touch</h1>
            <div class="mt-4 flex gap-4 items-start">
              <img src="@/assets/svgs/address.svg" class="w-5" alt="address" />
              <p>
                Maven Hiring,<br />
                Santa Clara, California,<br />
                United States
              </p>
            </div>
            <div class="my-4 flex gap-4 items-start">
              <img src="@/assets/svgs/email.svg" class="w-5" alt="email" />
              <a
                href="mailto:meena@mavenhiring.com"
                class="text-blue-400 hover:underline"
              >
                meena@mavenhiring.com
              </a>
            </div>
            <div class="my-4 flex gap-4 items-start">
              <img
                src="@/assets/svgs/linkedin-black.svg"
                class="w-6 h-6 text-red-300"
                alt="linkedin"
              />
              <a
                href="https://www.linkedin.com/company/mavenhiring/"
                class="text-blue-400 hover:underline"
                target="_blank"
              >
                linkedin/mavenhiring
              </a>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div class="flex justify-center items-center">
            <div class="w-full max-w-md">
              <form @submit.prevent="handleSubmit" class="space-y-4">
                <div class="flex space-x-4">
                  <div class="flex-1">
                    <label class="block font-semibold text-sm"
                      >First Name</label
                    >
                    <input
                      type="text"
                      v-model="form.firstName"
                      class="border p-2 rounded-lg w-full border-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    <p v-if="errors.firstName" class="text-red-500 text-sm">
                      {{ errors.firstName }}
                    </p>
                  </div>
                  <div class="flex-1">
                    <label class="block font-semibold text-sm">Last Name</label>
                    <input
                      type="text"
                      v-model="form.lastName"
                      class="border p-2 rounded-lg w-full border-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label class="block font-semibold text-sm">Email</label>
                  <input
                    type="email"
                    v-model="form.email"
                    class="border p-2 rounded-lg w-full border-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <p v-if="errors.email" class="text-red-500 text-sm">
                    {{ errors.email }}
                  </p>
                </div>
                <div>
                  <label class="block font-semibold text-sm"
                    >Phone Number</label
                  >
                  <input
                    type="text"
                    v-model="form.phone"
                    class="border p-2 rounded-lg w-full border-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <p v-if="errors.phone" class="text-red-500 text-sm">
                    {{ errors.phone }}
                  </p>
                </div>
                <div>
                  <label class="block font-semibold text-sm">Message</label>
                  <textarea
                    v-model="form.message"
                    class="border p-2 rounded-lg w-full border-gray-400 focus:outline-none focus:border-blue-500"
                    rows="4"
                  ></textarea>
                  <p v-if="errors.message" class="text-red-500 text-sm">
                    {{ errors.message }}
                  </p>
                </div>
                <div class="flex justify-end">
                  <button
                    type="submit"
                    class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-2/5"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import * as yup from "yup";

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
});

const errors = reactive({});

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  message: yup.string().required("Message cannot be empty"),
});
const handleSubmit = async () => {
  try {
    await schema.validate(form, { abortEarly: false });
    console.log("Form Submitted:", form);
    alert(`Hi ${form.firstName}, we’ll connect with you shortly...`);

    Object.assign(form, {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    Object.keys(errors).forEach((key) => delete errors[key]);
  } catch (err) {
    Object.keys(errors).forEach((key) => delete errors[key]);
    err.inner.forEach((e) => {
      errors[e.path] = e.message;
    });
  }
};
</script>
