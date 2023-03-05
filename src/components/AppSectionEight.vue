<template>
  <app-section
    :class="'section-eight'"
    :showLeftWrapper="false"
    :showRightWrapper="false"
  >
    <div class="accordion">
      <app-accordion
        v-for="(faq, i) in faqs"
        :faq="faq"
        :index="i"
        :key="i"
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
    toggleOpen: function (index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
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

<style lang="css">
.accordion {
  background-color: #a46cd8;
  padding: 3%;
}

.faq {
  display: block;
  width: 100%;
  max-width: 768px;
  margin: 1px auto;
  padding: 15px;
  background-color: #fff;
}
.faq .question {
  position: relative;
  color: #3c3c3c;
  font-size: 20px;
  transition: all 0.4s linear;
}
.faq .question::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%) rotate(-90deg);
  width: 30px;
  height: 30px;
  background-image: url(https://cdn-icons-png.flaticon.com/512/566/566092.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  transition: all 0.2s linear;
}
.faq.open .question {
  margin-bottom: 15px;
}
.faq.open .question::after {
  transform: translateY(-50%) rotate(90deg);
}
.faq .answer {
  color: #3c3c3c;
  font-size: 18px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
}
.faq.open .answer {
  opacity: 1;
  max-height: 1000px;
}
</style>
