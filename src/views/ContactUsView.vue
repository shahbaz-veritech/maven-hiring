<template>
  <div class="flex justify-center items-center py-8 md:py-16 bg-primary">
    <div class="md:w-3/5">
      <div class="flex flex-col md:flex-row justify-between gap-8">
        <div class="flex-1">
          <div class="text-gray-600 text-center lg:text-left max-w-lg mx-auto">
            <h1 class="text-4xl font-bold">Get in Touch</h1>
            <p class="mt-4">
              <span class="font-extrabold">Office:</span><br />
              Maven Hiring,<br />
              Santa Clara, California,<br />
              United States
            </p>
            <p class="my-4">
              <span class="font-semibold"> Email:</span>
              <a
                href="mailto:meena@mavenhiring.com"
                class="text-blue-400 hover:underline"
              >
                meena@mavenhiring.com
              </a>
            </p>
            <p class="my-4">
              <span class="font-semibold"> Phone:</span>
              <a href="tel:+14084644327" class="text-blue-400 hover:underline">
                +14084644327
              </a>
            </p>
          </div>
          <div class="flex space-x-4 mt-3 justify-center lg:justify-start">
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
          <form @submit.prevent="handleSubmit">
            <div class="my-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                v-model="form.name"
                class="border p-2 rounded-lg w-80 border-gray-400"
              />
              <p v-if="errors.name" class="text-red-500 text-sm">
                {{ errors.name }}
              </p>
            </div>
            <div class="my-2">
              <input
                type="text"
                name="email"
                placeholder="Email"
                v-model="form.email"
                class="border p-2 rounded-lg w-80 border-gray-400"
              />
              <p v-if="errors.email" class="text-red-500 text-sm">
                {{ errors.email }}
              </p>
            </div>
            <div class="my-2">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                v-model="form.phone"
                class="border p-2 rounded-lg w-80 border-gray-400"
              />
              <p v-if="errors.phone" class="text-red-500 text-sm">
                {{ errors.phone }}
              </p>
            </div>
            <div class="my-2">
              <textarea
                name="message"
                placeholder="Message"
                v-model="form.message"
                class="border p-2 rounded-lg w-80 border-gray-400"
                rows="6"
              />
              <p v-if="errors.message" class="text-red-500 text-sm">
                {{ errors.message }}
              </p>
            </div>
            <button
              type="submit"
              class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hover-animate {
  transition: transform 0.2s ease-in-out, height 0.1s ease-in-out;
}
.hover-animate:hover {
  transform: scale(1.1);
  height: 28px;
}
</style>
<script>
import * as yup from "yup";

export default {
  data() {
    return {
      form: {
        name: "",
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
        name: yup.string().required("Name is required"),
        email: yup
          .string()
          .email("Invalid email")
          .required("Email is required"),
        phone: yup
          .string()
          .min(10, "Phone number must be exactly 10 digits")
          .matches(/^\d+$/, "Phone number should contain only numbers")
          .required("Phone number is required"),
        message: yup.string().required("Message cannot be empty"),
      });

      try {
        await schema.validate(this.form, { abortEarly: false });
        console.log("Form Submitted", this.form);
        alert(`Hi ${this.form.name}, we’ll connect with you shortly...`);
        this.form = { name: "", email: "", phone: "", message: "" };
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
