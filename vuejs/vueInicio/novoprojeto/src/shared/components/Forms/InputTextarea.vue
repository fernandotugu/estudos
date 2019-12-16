<template>
	<div class="form-group form-group-custom">
        <span class="floatlabel small ml-2 bg-white pl-1 pr-1" v-if="inputVal!=null && inputVal!=''">
            {{label}}
        </span>
		<textarea 
            class="form-control" 
            v-model="inputVal" 
            :placeholder="placeholder" 
            :rows="numRows"
        />
        <div class="p-1 pl-2 small font-weight-bold text-danger" v-if="error.status">{{error.text}}</div>
	</div>
</template>

<style>
    .floatlabel{
        position: absolute;
        margin-top:-8px;
        z-index:5
    }
</style>

<script>
export default {
  name: 'textarea',
    props:{
        label:{
            default:null,
            type:String
        },
        placeholder:{
            default:null,
            type:String
        },
        value:{
            default:''
        },
        readonly:{
            default:false,
            type:Boolean
        },
        numRows:{
            default:1,
            type:Number
        }
    },
    data(){
        return {
            inputVal : this.value,
            error:{
                status:false,
                text:''
            }
        }
    },
    methods:{
        setErrorOn(text){
            var textError = 'Campo Obrigatório';
            if(typeof text!='undefined'){
                textError = text;
            }
            this.error.text = textError;
            this.error.status = true;
        },
        setErrorOff(){
            this.error.text = '';
            this.error.status = false;
        }
    },
    watch:{
        inputVal(val){
            this.$emit('input',val);
        }
    }
}
</script>