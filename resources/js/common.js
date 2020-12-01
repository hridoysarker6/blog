export default{
    data(){
        return{

        }
    },
    methods:{
      async  callApi(method,url,dataObj){
            try {

               return await axios({
                    method: method,
                    url: url,
                    data: dataObj
                  });

            } catch (e) {
                return e.response
            }
        },
        i (desc,title='hey') {
            this.$Notice.info({
                title: title,
                desc: desc
            });
        },
        s (desc,title='Great !') {
            this.$Notice.success({
                title: title,
                desc: desc
            });
        },
        w (desc,title='Ooops') {
            this.$Notice.warning({
                title: title,
                desc: desc
            });
        },
        e (desc,title='hey') {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        },
        swr (desc='Some thing went wrong!',title='Ooops') {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        },
    }
}
