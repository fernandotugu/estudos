<template>
    <div class="form-group pt-3">
        <span class="ml-2 pl-1 pr-1 bg-white small float-label">{{label}}</span>
        <div class="form-control">
            {{value}}
        </div>
    </div>
</template>

<style scoped>
    .float-label{
        position:absolute;
        margin-top:-8px
    }
</style>

<script>
export default {
    name:'col-readyonly',
    props:{
        value:{
            default:''
        },
        label:{
            default:'',
            type:String
        }
    }
}
</script>