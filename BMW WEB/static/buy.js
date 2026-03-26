const app = Vue.createApp({
    data() {
        return {
            name: "",
            email: "",
            error: "",
            success: ""
        };
    },
    methods: {
        submitForm() {
            this.error = "";
            this.success = "";

            if (!this.email || !this.phone) {
                this.error = "Please fill in all fields.";
            } else if (!this.email.includes("@")) {
                this.error = "Email is not valid.";

            } else if (!this.phone.match(/^\d+$/)) {
                this.error = "Phone number is not valid.";
            } else {
                this.success = `Data accepted: ${this.email} (${this.phone})`;
                this.email = "";
                this.phone = "";
            }
        }
    }
});
app.mount("#buy");