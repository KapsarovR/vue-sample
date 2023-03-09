<template>
  <app-section
    :class="'section-eight'"
    :showLeftWrapper="false"
    :showRightWrapper="false"
  >
    <div class="accordion">
      <app-accordion
        v-for="(faq, index) in faqs"
        :faq="faq"
        :index="index"
        :key="index"
        :open="faq.open"
        @toggleOpen="toggleOpen"
      />
    </div>
  </app-section>
</template>

<script>
import AppAccordion from "@/components/AppAccordion.vue";
import AppSection from "@/components/templates/AppSection.vue";
export default {
  components: {
    AppAccordion,
    AppSection,
  },
  data() {
    return {
      faqs: [
        {
          question: "CUSTOMIZED PROGRAM",
          answer:
            "You are already doing so much right. Now let’s fine tune your business to increase profitability, working closely with you on a 1-1 basis.",
          open: false,
        },
        {
          question: "KEYNOTES/ WORKSHOPS",
          answer:
            "Dynamic, thought provoking in person or virtual sessions by Founder Carla Wood with takeaways that always drive results.",
          open: false,
        },
        {
          question: "ELEVATE YOUR TEAM",
          answer:
            "Leverage talents of your team to strengthen productivity, engagement & profitability integrating Clifton StrengthsFinder.",
          open: false,
        },
        {
          question: "OUR DISTINCTIVES",
          answer:
            "OUR DISTINCTIVES Discover the commitments, core philosophies and approach that set ALL Strategy apart.",
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleOpen(index) {
      this.faqs = this.faqs.map((faq, faqIndex) => {
        if (index === faqIndex) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      });
    },
  },
};
</script>
