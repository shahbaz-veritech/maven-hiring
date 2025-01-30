<template>
  <div class="flex justify-center items-center py-8 md:py-16 bg-primary">
    <div class="md:w-3/5">
      <p class="text-3xl md:text-5xl font-normal text-center mb-5">
        Contact us
      </p>
      <div class="flex flex-col md:flex-row justify-between gap-8">
        <div class="flex-1">
          <form @submit.prevent="handleSubmit">
            <div class="my-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                v-model="name"
                class="border p-2 rounded-lg w-80 border-gray-400"
              />
            </div>
            <div class="my-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                v-model="email"
                required
                class="border p-2 rounded-lg w-80 border-gray-400"
              />
            </div>
            <div class="my-2">
              <input
                type="text"
                name="phone"
                required
                placeholder="Phone"
                v-model="phone"
                class="border p-2 rounded-lg w-80 border-gray-400"
              />
            </div>
            <div class="my-2">
              <textarea
                name="message"
                placeholder="Message"
                v-model="message"
                class="border p-2 rounded-lg w-80 border-gray-400"
                rows="6"
              />
            </div>
            <button
              type="submit"
              class="border border-blue-500 hover:border-blue-700 text-blue-500 hover:text-blue-700 py-2 px-6 mt-4 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
        <div class="flex-1">
          <div>
            <h1 class="text-4xl">Get in Touch</h1>
            <p class="mt-4">
              <span class="font-extrabold">Office:</span><br />
              Maven Hiring,<br />
              Santa Clara, California,<br />
              United States
            </p>
            <p class="my-4">
              Email:
              <a
                href="mailto:meena@mavenhiring.com"
                class="text-blue-400 hover:underline"
              >
                meena@mavenhiring.com
              </a>
            </p>
            <p class="my-4">
              Phone:
              <a href="tel:+14084644327" class="text-blue-400 hover:underline">
                +14084644327
              </a>
            </p>
          </div>
          <div class="flex space-x-4 mt-3">
            <a
              href="https://www.linkedin.com/company/mavenhiring/"
              target="_blank"
              class="bg-blue-800 rounded-full p-1"
            >
              <img
                src="@/assets/svgs/linkedin.svg"
                alt="linkedin icon"
                class="w-7"
              />
            </a>
            <a
              href="https://www.x.com/"
              target="_blank"
              class="bg-black rounded-full p-1 hover:p-2"
            >
              <img src="@/assets/svgs/X.svg" alt="x icon" class="w-7" />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="bg-blue-800 rounded-full p-1"
            >
              <img
                src="@/assets/svgs/facebook.svg"
                alt="facebook icon"
                class="w-7"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="bg-pink-600 rounded-full p-1"
            >
              <img
                src="@/assets/svgs/instagram.svg"
                alt="instagram-icon"
                class="w-7"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      const formData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };
      console.log(formData);

      this.name = "";
      this.email = "";
      this.phone = "";
      this.message = "";
    },
  },
};
</script>
