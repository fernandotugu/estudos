<template>
    <div class="plus-minus form-group">
        <span class="floatlabel small bg-white pl-1 pr-1">{{label}}</span>
        <div class="input-group mb-3 mt-3">
            <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="button" @click="subtract_quantity()">-</button>
            </div>
            <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" v-model="inputVal">
            <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="button" @click="add_quantity()">+</button>
            </div>
        </div>       
    </div>
</template>

<style scoped>
    .floatlabel{
        position: absolute;
        margin-top:-19px;
        z-index:5
    }
</style>

<script>

    import {mask} from 'vue-the-mask'

    export default {
        name: 'ColInputPlusMinus',
        props:{
            label:{
                default:'Quantidade',
                type:String
            },
            value:{
                default:0,
                type:Number
            }
        },
        data(){
            return {
                inputVal: this.value
            }
        },
        watch:{
            inputVal(val){
                this.$emit('input',val);
            }
        },
        computed: {
            disabled_minus: function () {
                return this.inputVal<=0 ? true : false;
            },
            noLabel(){
                return this.label!='' && this.label!=null;
            }
        },
        methods:{
            add_quantity() {
                this.inputVal = this.inputVal!='' ? (parseInt(this.inputVal) +1) : 1;
            },
            subtract_quantity() {
                let value = parseInt(this.inputVal) -1;
                if(value>=0){
                    this.inputVal = value;    
                }               
            }
        },
        directives: {
            mask
        }
    }
</script>