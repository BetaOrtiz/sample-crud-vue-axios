<template>
<div>
	<Header />
	<b-card class="container mt-5">
		<h2>Edit Book</h2>
		<hr />
		<AddBooksForm :book="book" />		

		<b-button @click="save" variant="primary">Save</b-button>
		<router-link to='/show'><b-button class="ml-4" variant="success">See all books</b-button></router-link>
		
	</b-card>
	</div>
</template>

<script>
import Header from '../Header';
import AddBooksForm from './AddBooksForm';
export default {
  components: { Header, AddBooksForm },
  data() {
    return {
      book: {
        title: '',
        author: '',
        genre: '',
        publishing: '',
      },
    };
  },
  methods: {
    save() {
      this.$http.post('books.json', this.book).then((_) => {});

      alert('Book saved');
      this.books = {};
    },
  },
};
</script>

<style>
</style>
