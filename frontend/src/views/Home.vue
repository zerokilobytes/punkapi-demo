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
        <h5 class="font-weight-normal mb-4 font-italic">Search for beer</h5>
        <div class="bg-white p-3 rounded shadow">
          <input
            v-model="nameSearch"
            @keyup="getBeers()"
            type="search"
            placeholder="Search Beer"
            aria-describedby="button-addon2"
            class="form-control border-0 bg-light search-box"
          />
        </div>
      </div>
    </div>

    <div v-for="beer in filteredItems" :key="beer.id" class="row mb-5">
      <div class="col-lg-8 mx-auto">
       
        <div class="bg-white p-5 rounded shadow">
           <h2 class="font-weight-light mb-4 font-italic"><strong>{{ beer.name }}</strong></h2>
          <h5>Description</h5>
          <p>{{ beer.description }}</p>
          <h5>Food Pairings</h5>
          <ul class="px-3 list-disc">
            <li v-for="pair in beer.food_pairing" :key="pair.food_pairing">
              {{ pair }}
            </li>
          </ul>
          <p>
            <i>First Brewed {{ beer.first_brewed }}</i>
          </p>
          <router-link
            :to="{ name: 'rate', params: { id: beer.id, beer: beer.name } }"
            tag="button"
            class="btn btn-secondary"
            >Add Rating</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    keyword: "",
    nameSearch: "",
    beers: [],
  }),
  computed: {
    filteredItems() {
      return this.beers;
    },
  },
  components: {},
  methods: {
    getBeers() {
      this.beers = [];
      if (this.nameSearch) {
        let axiosConfig = {
          headers: {
            "x-user": "tester@webmail.com",
          },
        };

        const params = new URLSearchParams();
        params.append("name", this.nameSearch.toLowerCase());

        axios
          .post("http://localhost:3000/api/beer", params, axiosConfig)
          .then((res) => {
            console.log(res.data);
            this.beers = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.beers = [];
      }
      //return this.beers;
    },
  },
  created() {},
  watch: {
    keyword() {},
  },
};
</script>

<style lang="scss">
#Home {
  color: rgb(27, 27, 27) !important;
  img {
    max-width: 400px;
  }
}
</style>
