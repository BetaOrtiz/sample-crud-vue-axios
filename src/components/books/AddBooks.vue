<template>
<div>
	<Header />
	<b-card class="container mt-5">
		<h2>Add a book</h2>
		<hr />
		<AddEditBooksForm :book="book" />		

		<b-button @click="save" variant="primary">Save</b-button>
		<router-link to='/show'><b-button class="ml-4" variant="success">See all books</b-button></router-link>
		
	</b-card>
	</div>
</template>

<script>
import Header from '../Header';
import AddEditBooksForm from './AddEditBooksForm';
export default {
  components: { Header, AddEditBooksForm },
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

      alert('Book saved.');
      this.book = {};
    },
  },
};
</script>

<style>
</style>
