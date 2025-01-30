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
              <img src="@/assets/svgs/phone.svg" class="w-5" alt="phone" />
              <a href="tel:+14084644327" class="text-blue-400 hover:underline">
                +14084644327
              </a>
            </div>
          </div>
          <div class="flex space-x-4 mt-3 justify-start">
            <div class="h-10 w-10 flex justify-center items-center">
              <a
                href="https://www.linkedin.com/company/mavenhiring/"
                target="_blank"
                class="bg-blue-800 rounded-full flex justify-center items-center p-1"
              >
                <img
                  src="@/assets/svgs/linkedin.svg"
                  alt="linkedin icon"
                  class="hover-animate h-6"
                />
              </a>
            </div>
            <div class="h-10 w-10 flex justify-center items-center">
              <a
                href="https://www.x.com/"
                target="_blank"
                class="bg-black rounded-full flex justify-center items-center p-1"
              >
                <img
                  src="@/assets/svgs/X.svg"
                  alt="x icon"
                  class="hover-animate h-6"
                />
              </a>
            </div>
            <div class="h-10 w-10 flex justify-center items-center">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="bg-blue-800 rounded-full flex justify-center items-center p-1"
              >
                <img
                  src="@/assets/svgs/facebook.svg"
                  alt="facebook icon"
                  class="hover-animate h-6"
                />
              </a>
            </div>
            <div class="h-10 w-10 flex justify-center items-center">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                class="bg-pink-600 rounded-full flex justify-center items-center p-1"
              >
                <img
                  src="@/assets/svgs/instagram.svg"
                  alt="instagram-icon"
                  class="hover-animate h-6"
                />
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
                      >First name</label
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
                    <label class="block font-semibold text-sm">Last name</label>
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
                    >Phone number</label
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

<script>
import * as yup from "yup";

export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      },
      errors: {},
    };
  },
  methods: {
    async handleSubmit() {
      const schema = yup.object().shape({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().optional(),
        email: yup
          .string()
          .email("Invalid email")
          .required("Email is required"),
        phone: yup
          .string()
          .min(10, "Phone number must be exactly 10 digits")
          .matches(/^[0-9]+$/, "Phone number should contain only numbers")
          .required("Phone number is required"),
        message: yup.string().required("Message cannot be empty"),
      });

      try {
        await schema.validate(this.form, { abortEarly: false });
        console.log("Form Submitted", this.form);
        alert(`Hi ${this.form.firstName}, we’ll connect with you shortly...`);
        this.form = {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        };
        this.errors = {};
      } catch (err) {
        this.errors = {};
        err.inner.forEach((e) => {
          this.errors[e.path] = e.message;
        });
      }
    },
  },
};
</script>

<style scoped>
.hover-animate {
  transition: transform 0.2s ease-in-out, height 0.1s ease-in-out;
}
.hover-animate:hover {
  transform: scale(1.1);
  height: 28px;
}
</style>
