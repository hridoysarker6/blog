<template>
    <div>
       <div class="content">
			<div class="container-fluid">

				<!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
				<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
					<p class="_title0">Tags <Button size="small" @click="addModal = true"> <Icon type="md-add" /> Add tag</Button></p>

					<div class="_overflow _table_div">
						<table class="_table">
								<!-- TABLE TITLE -->
							<tr>
								<th>id</th>
								<th>Tag Name</th>
								<th>Created at</th>
								<th>Action</th>
							</tr>
								<!-- TABLE TITLE -->


								<!-- ITEMS -->
							<tr v-for="(tag,i) in tags" :key="i" v-if="tags.length">
								<td>{{tag.id}}</td>
								<td class="_table_name">{{tag.tagName}}</td>
								<td>{{tag.created_at}}</td>
								<td>
                                    <Button type="info" size="small">Edit</Button>
                                    <Button type="error" size="small">Delete</Button>
								</td>
							</tr>
								<!-- ITEMS -->
						</table>
					</div>
				</div>
				 <!-- <Page />  -->

                 <!-- tag adding modal  -->
                <Modal
                    v-model="addModal"
                    title="Add Tag"
                    :mask-closable="false"
                    :closable="false"
                    >
                <Input v-model="data.tagName" placeholder="Tag Name" style="width: " />
                <div slot="footer">
                    <Button type="default" @click="addModal=false">Close</Button>
                    <Button type="primary" @click="addTag" :disabled="isAdding" :loading="isAdding">{{isAdding? 'Adding...' : 'Add Tag'}}</Button>
                </div>
                </Modal>

			</div>
		</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data:{
            tagName : ''
            },
        addModal: false,
        isAdding: false,
        tags : [],
        }
    },

    methods:{
      async  addTag(){
            if(this.data.tagName.trim()=='') return this.e('Tag name is required')
            const res = await this.callApi('post','app/create-tag',this.data)
            if(res.status === 201){
                this.tags.unshift(res.data)
                this.s('Tag name has been added successfully'),
                this.addModal= false
                this.data.tagName = ''
            }else{
                this.swr()
            }
        }
    },
    async created(){
        const res = await this.callApi('get','app/get-tag')
        if(res.status == 200){
            this.tags = res.data
        }else{
            this.swr()
        }
    }
    // async created(){
    //     const res = await this.callApi('post','app/create-tag',{tagName : 'first tag'})
    //     console.log(res)
    // }
}
</script>
