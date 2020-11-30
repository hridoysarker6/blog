<template>
    <div>
        <h2 ref="myref">Methood</h2>
        <h1>the number is {{ counter }}</h1>
        <button @click="update(1)">increase</button>
        <button @click="update(-1)">decrease</button>
<br><br>
        <div v-for="(blog, i) in blogs" :key="i" v-if="blogs.length">
            <div>{{ blog.title }}</div>
        </div>
        <br><br>
        <div>
            <h1 v-if="showItem">this is show item true</h1>
            <h1 v-else>this is show item false</h1>
        </div>
        <button @click="showItem= !showItem">change it</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            counter : 0,
            blogs : [ ],
            showItem: false
        }
    },
    methods:{
        update(number) {
            this.counter += number
        }
    },
    created(){
        this.counter = 100
        let posts = [
              {title : 'this is title', post : 'this is post', id: '1'},
                {title : 'this is 2title', post : 'this is post', id: '2'},
                {title : 'this is 3title', post : 'this is post', id: '3'},
        ]
        this.blogs = posts
    }

}
</script>
