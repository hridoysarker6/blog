<template>
    <div>
        <h2 ref="myref">hooks</h2>
        <h1>My name is {{name }}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name : 'hridoy'
        }
    },
    beforeCreate(){
        console.log('hello',this.name)

    },

    created(){
        // console.log(this.$refs.myref)
        // console.log(this.name)
    },
    mounted(){
        // console.log('hello',this.name)
        console.log(this.$refs.myref)

    },
}
</script>
