<template>
  <div class="pt-8">
    <img
      src="@/assets/svgs/footer.svg"
      alt="SVG Image"
      class="w-screen h-16 md:h-40"
    />

    <footer class="footer text-white py-8">
      <div class="max-w-7xl mx-auto px-4">
        <div class="w-full flex flex-col md:flex-row gap-6">
          <div class="w-full md:w-4/12">
            <div
              class="logo mr-8 w-40 py-1 flex justify-center rounded-lg mb-3"
            >
              <img
                src="@/assets/maven-hiring-logo.png"
                alt="maven-hiring-logo"
                class="w-12 rounded-xl"
              />
            </div>
            <p class="text-lg">
              Transforming Minds,<br />
              Transforming Businesses
            </p>
            <div class="flex space-x-4 mt-3">
              <a
                href="https://www.linkedin.com/company/mavenhiring/"
                target="_blank"
                class="h-7 w-7"
              >
                <img
                  src="@/assets/svgs/linkedin.svg"
                  alt="linkedin icon"
                  class="hover-animate h-6"
                />
              </a>
              <a href="https://www.x.com/" target="_blank" class="h-7 w-7">
                <img
                  src="@/assets/svgs/X.svg"
                  alt="x icon"
                  class="hover-animate h-6"
                />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="h-7 w-7"
              >
                <img
                  src="@/assets/svgs/facebook.svg"
                  alt="facebook icon"
                  class="hover-animate h-6"
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                class="h-7 w-7"
              >
                <img
                  src="@/assets/svgs/instagram.svg"
                  alt="instagram-icon"
                  class="hover-animate h-6"
                />
              </a>
            </div>
          </div>
          <div class="w-full md:w-8/12 flex flex-wrap gap-8 justify-between">
            <div>
              <h3 class="font-bold text-lg">About</h3>
              <ul class="mt-2 space-y-2 leading-8">
                <li>
                  <router-link
                    to="/team"
                    class="text-gray-300 hover:underline hover:text-white font-semibold"
                    >Team</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/history"
                    class="text-gray-300 hover:underline hover:text-white font-semibold"
                    >History</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/careers"
                    class="text-gray-300 hover:underline hover:text-white font-semibold"
                    >Careers</router-link
                  >
                </li>
              </ul>
            </div>

            <div>
              <h3 class="font-bold text-lg">Privacy</h3>
              <ul class="mt-2 space-y-2 leading-8">
                <li>
                  <router-link
                    to="/about"
                    class="text-gray-300 hover:underline hover:text-white font-semibold"
                    >About us</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/contact"
                    class="text-gray-300 hover:underline hover:text-white font-semibold"
                    >Contact us</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/disclaimer"
                    class="text-gray-300 hover:underline hover:text-white font-semibold"
                    >Disclaimer</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/privacy-policy"
                    class="text-gray-300 hover:underline hover:text-white font-semibold"
                    >Privacy Policy</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/terms"
                    class="text-gray-300 hover:underline hover:text-white font-semibold"
                    >Terms and Conditions</router-link
                  >
                </li>
              </ul>
            </div>

            <div>
              <h3 class="font-bold text-lg">Get in Touch</h3>
              <p class="mt-2">
                <strong>Office:</strong><br />
                Maven Hiring,<br />
                Santa Clara, California, United States
              </p>
              <p class="mt-2">
                Email:
                <a
                  href="mailto:meena@mavenhiring.com"
                  class="text-blue-400 hover:underline"
                >
                  meena@mavenhiring.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="text-center mt-20 pt-4 border-t">
          <p class="text-white text-center">
            &copy; Maven Hiring, {{ year }}. All Rights Reserved. Developed by
            <a
              href="https://veritech.ai"
              class="text-blue-400 hover:underline font-semibold"
              >Veritech.ai</a
            >
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer {
  background-color: #333333;
}
.logo {
  background: #96947b;
}
.hover-animate {
  transition: transform 0.1s ease-in-out, height 0.1s ease-in-out;
}
.hover-animate:hover {
  transform: scale(1.1);
  height: 26px;
}
</style>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
