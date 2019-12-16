<template>
    <button type="button" class="btn btn-primary" :disabled="submitted" @click="save_func()">
        <span v-if="!submitted">{{text}}</span>
        <span v-if="submitted">AGUARDE ... </span>
    </button>
</template>

<script>
    export default {
        name: 'btn-action',
        props:{
            submitted:{
                default:false,
                type:Boolean
            },
            onClick:{
                default:function(){},
                type:Function
            },
            text:{
                default:'Salvar',
                type:String
            }
        },
        methods : {
            save_func() {
                this.onClick();
            }
        }
    }
</script>