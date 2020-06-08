<template>
<div>

	
		<b-form-group label="Title">
			<b-form-input type="text" size="lg" v-model="book.title"></b-form-input>
		</b-form-group>

		<b-form-group label="Author">
			<b-form-input type="text" size="lg" v-model="book.author"></b-form-input>
		</b-form-group>

		<b-form-group label="Genre">
			<b-form-input type="text" size="lg" v-model="book.genre"></b-form-input>
		</b-form-group>

		<b-form-group label="Publishing">
			<b-form-input type="text" size="lg" v-model="book.publishing"></b-form-input>
		</b-form-group>


	</div>
</template>

<script>
export default {
  props: ['book'],
};
</script>

<style>
</style>
