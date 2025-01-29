<template>
  <HeroSection />
  <ExpertiseSection />
  <MissionSection />
  <IndustriesSection />
  <FeatureHighlight />
</template>

<script>
import {
  HeroSection,
  ExpertiseSection,
  MissionSection,
  IndustriesSection,
  FeatureHighlight,
} from "@/components/landingPage";

export default {
  name: "HomeView",
  components: {
    ExpertiseSection,
    MissionSection,
    IndustriesSection,
    HeroSection,
    FeatureHighlight,
  },
};
</script>
