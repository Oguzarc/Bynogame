<template>
<div>
	<div class="vld-parent">
        <loading :active.sync="isLoading" 
        :is-full-page="fullPage"></loading>     
  </div> 
	<div class="header2">
		<a style="cursor:pointer" @click="goAnasayfa">
			<img src="../assets/bynogame-logo-siyah.png" style="width:180px"></a>	 
	</div>
</div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
        data() {
            return {
                isLoading: false,
                fullPage: true
            }
        },
        components: {
            Loading
        },
        methods: {
            goAnasayfa(){
              this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                  this.$router.push('/');
                },1000)
            },         
        }
    }
</script>

<style scoped>

.header2  {
	position: relative ;
	max-width: 1500px ;
	width: 100%;
	margin: 0 auto .75em;
	display: flex;
	background-color:white;
  justify-content: center;
}
.header2 a{
  padding:20px;
}

</style>