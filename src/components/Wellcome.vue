<template>
	<div>
		<Header />
		<div class="container jumbotron mt-5">
  <h1 class="display-4">Wellcome!</h1>
  <p class="lead">This is a simple sample of <strong>Vue + Axios</strong> usage.</p>
  <hr class="my-4">
  <p>It implements CRUD operations using Firebase Realtime Database to persist data.</p>
<router-link to='/add'><b-button variant="primary" size="lg">Add Books</b-button></router-link>
</div>
	</div>
</template>

<script>
import Header from './Header';
export default {
  components: { Header },
};
</script>

<style>
.router-link-exact-active {
  color: white;
}
.router-link-active {
  color: white;
}
.routerlink {
  color: white;
}
</style>
