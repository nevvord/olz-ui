<template>
    <div>
        {{ $t('firstPage.text') }}
        <p>{{ $t('firstPage.contacts') }}</p>
        <p>Content</p>
        <div>{{content}}</div>
    </div>
</template>

<script>
    export default {
        data(){return{
            content: ""
        }},
        created(){
            this.$axios.get('')
                .then(res => {
                    this.content = res.data
                })
                .catch(err => {
                    this.$notify({
                        group: 'foo',
                        status: err.status,
                        text: err.response.data.msg,
                        type: 'error'
                    })  
                })
        }
        
    }
</script>

<style lang="scss" scoped>

</style>