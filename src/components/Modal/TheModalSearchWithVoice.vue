<template>
  <BaseModal>
    <p class="text-2xl mb-52">{{ text }}</p>

    <div class="flex justify-center items-center">
      <span v-show="isListening" :class="buttonAnimationClasses" />
      <button :class="buttonClasses" @click="toggleRecording">
        <BaseIcon name="microphone" />
      </button>
    </div>

    <div :class="buttonHitsClasses">Tap to microphone to try again</div>
  </BaseModal>
</template>

<script>
import BaseModal from "./BaseModal.vue";
import BaseIcon from "../BaseIcon.vue";

export default {
  components: {
    BaseModal,
    BaseIcon,
  },

  data() {
    return {
      isQuiet: false,
      isListening: true,
      isRecording: false,
      recordingTimeout: null,
    };
  },

  computed: {
    text() {
      if (this.isQuiet) return "Didn't hear that. Try again";
      if (this.isListening || this.isRecording) return "Listening...";
      return "Microphone off. Try again.";
    },

    buttonClasses() {
      return [
        this.isListening ? "bg-red-600" : "bg-gray-300",
        this.isListening ? "text-white" : "text-black",
        "w-16",
        "h-16",
        "mx-auto",
        "rounded-full",
        "flex",
        "justify-center",
        "items-center",
        "relative",
        "focus:outline-none",
      ];
    },

    buttonHitsClasses() {
      return [this.isListening ? "invisible" : "visible", "text-center", "text-sm", "text-gray-500", "mt-4"];
    },

    buttonAnimationClasses() {
      return [
        this.isRecording ? "bg-gray-400" : "border border-gray-400",
        "animate-ping",
        "absolute",
        "inline-flex",
        "h-14",
        "w-14",
        "rounded-full",

        "opacity-75",
      ];
    },
  },

  mounted() {
    this.handleRecordingTimeout();
  },

  beforeUnmount() {
    clearTimeout(this.recordingTimeout);
  },

  methods: {
    toggleRecording() {
      clearTimeout(this.recordingTimeout);
      this.isQuiet = false;

      if (this.isRecording) {
        this.isRecording = false;
        this.isListening = false;
      } else if (this.isListening) {
        this.isRecording = true;
      } else {
        this.isListening = true;
      }

      this.handleRecordingTimeout();
    },

    handleRecordingTimeout() {
      if (this.isListening || this.isRecording) {
        this.recordingTimeout = setTimeout(() => {
          this.isQuiet = true;
          this.isListening = false;
          this.isRecording = false;
        }, 5000);
      }
    },
  },
};
</script>
