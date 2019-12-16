<template>
    <div class="form-group pt-3">
        <span class="floatlabel small ml-2 bg-white pl-1 pr-1" v-if="inputVal!=null && inputVal!=''">
            {{label}}
        </span>
        <input 
            class="form-control" 
            :class="error.status?'border border-danger':''" 
            :type="password? 'password' : 'text'" 
            :placeholder="placeholder" 
            :id="id" 
            :name="id" 
            v-model="inputVal" 
            :readonly="readonly"
        />
        <div class="p-1 pl-2 small font-weight-bold text-danger" v-if="error.status">{{error.text}}</div>
    </div>
</template>

<style scoped>
    .floatlabel{
        position: absolute;
        margin-top:-8px;
        z-index:5
    }
</style>

<script>
export default {
    name: 'input-label',
    props:{
        id:{
            default:null,
            type:String
        },
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
        password:{
            default:false,
            type:Boolean
        },
        readonly:{
            default:false,
            type:Boolean
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
    data(){
        return {
            inputVal : this.value,
            error:{
                status:false,
                text:''
            }
        }
    },
    watch:{
        inputVal(val){
            this.$emit('input',val);
        }
    }
}
</script>