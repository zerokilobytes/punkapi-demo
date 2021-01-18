<template>
  <div class="Home">
    <div class="row py-5">
      <div class="col-lg-9 mx-auto text-center">
        <h1 class="display-4">Punk API Demo</h1>
        <p class="lead mb-0">Build a RESTFul API using Express.js on Node.js</p>
        <p class="lead"></p>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-lg-8 mx-auto">
        <h5 class="font-weight-light mb-4 font-italic">
          Rate {{ this.$route.params.beer }}
        </h5>
        <div class="bg-white p-5 rounded shadow">
          <form action="">
            <div class="form-group">
              <label for="comment">Comment</label>
              <textarea
                @keyup="validate()"
                v-model="comment"
                class="form-control"
                id="comment"
                rows="3"
              ></textarea>
            </div>

            <p>Rating</p>
            <div
              ref="ratingContainer"
              class="btn-group btn-group-toggle form-group"
              data-toggle="buttons"
            >
              <label class="btn btn-primary">
                <input
                  type="radio"
                  name="rating"
                  id="option1"
                  autocomplete="off"
                  v-model="rating"
                  v-on:change="setRating($event, 1)"
                />
                <div class="number-circle">&#9733;</div>
              </label>
              <label class="btn btn-primary">
                <input
                  type="radio"
                  name="rating"
                  id="option2"
                  autocomplete="off"
                  v-model="rating"
                  v-on:change="setRating($event, 2)"
                />
                <div class="number-circle">&#9733;</div>
              </label>
              <label class="btn btn-primary">
                <input
                  type="radio"
                  name="rating"
                  id="option3"
                  autocomplete="off"
                  v-model="rating"
                  v-on:change="setRating($event, 3)"
                />
                <div class="number-circle">&#9733;</div>
              </label>
              <label class="btn btn-primary">
                <input
                  type="radio"
                  name="rating"
                  id="option4"
                  autocomplete="off"
                  v-model="rating"
                  v-on:change="setRating($event, 4)"
                />
                <div class="number-circle">&#9733;</div>
              </label>
              <label class="btn btn-primary">
                <input
                  type="radio"
                  name="rating"
                  id="option5"
                  autocomplete="off"
                  v-model="rating"
                  v-on:change="setRating($event, 5)"
                />
                <div class="number-circle">&#9733;</div>
              </label>
            </div>
            <p></p>
            <button
              v-on:click="submit($event)"
              class="btn btn-secondary"
              :disabled="!isValid"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    rating: null,
    comment: "",
    isValid: false,
  }),
  created() {
    console.log(this.$route.params);
  },
  methods: {
    submit(event) {
      event.preventDefault();
      let axiosConfig = {
        headers: {
          "x-user": "tester@webmail.com",
        },
      };

      let id = this.$route.params.id;
      const params = {
        rating: this.rating,
        comment: this.comment,
      };

      axios
        .post(
          `http://localhost:3000/api/beer/add-rating/${id}`,
          params,
          axiosConfig
        )
        .then((res) => {
          console.log(res.data);
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setRating(event, rating) {
      this.$refs.ratingContainer.children.forEach((child) =>
        child.classList.remove("selected")
      );
      event.target.parentElement.classList.add("selected");
      this.rating = rating;

      //console.log("setRating > " + rating);
      this.validate();
    },
    validate() {
      this.isValid = this.rating && this.comment.trim();
    },
  },
};
</script>

<style lang="scss">
</style>
