<template>
<div>
	<Header />
	<div class="container">
	<b-list-group class="mt-4 mb-5">

		<div v-if="editing">
			<h2>Edit Book</h2>
			<b-card class="mt-3">
		<AddEditBooksForm :book="book" />
			<b-button variant="primary" @click="edit" class="mt-2">Save</b-button>
			<b-button variant="danger" @click="toogleEditMode" class="ml-3 mt-2">Close</b-button>
			</b-card>
		</div>
					<hr />
					<h2>Registred Books</h2>
					<hr />

					<b-list-group-item v-for="(book, id) in books" :key="id">
						
						<div>
							<strong>Title:</strong>
							{{ book.title }}<br>

							<strong>Author:</strong>
							{{ book.author }}<br>

							<strong>Genre:</strong>
							{{ book.genre }}<br>

							<strong>Publishing:</strong>
							{{ book.publishing }}<br>

						</div>
						
						<b-button variant="warning" @click="load(id)" class="mt-2">Edit</b-button>
						<b-button variant="danger" class="ml-3 mt-2" @click="destroy(id)">Delete</b-button>
					</b-list-group-item>
				</b-list-group>
			
						<router-link to="/add"><b-button class="mb-5" variant="primary">Back</b-button></router-link>
		</div>
	</div>
</template>

<script>
import Header from '../Header';
import AddEditBooksForm from './AddEditBooksForm';
export default {
  components: { Header, AddEditBooksForm },
  data() {
    return {
      editing: false,
      books: [],
      id: null,
      book: {
        title: '',
        author: '',
        genre: '',
        publishing: '',
      },
    };
  },

  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
    toogleEditMode() {
      this.editing = !this.editing;
    },
    getAllBooks() {
      this.$http('books.json').then((res) => {
        console.log(res);
        this.books = res.data;
      });
    },
    destroy(id) {
      this.$http.delete(`/books/${id}.json`).then(() => {
        this.getAllBooks();
      });
    },
    load(id) {
      this.book = { ...this.books[id] };
      this.toogleEditMode();
      this.id = id;
      this.scrollTop();
    },
    edit() {
      this.$http.patch(`books/${this.id}.json`, this.book).then((res) => {
        this.book = {};
        this.toogleEditMode();
        this.getAllBooks();
      });
    },
  },
  created: function() {
    this.getAllBooks();
  },
};
</script>

<style>
.router-link-active {
  opacity: 1;
  visibility: visible;
  color: white;
}

html {
  scroll-behavior: smooth;
}
</style>
