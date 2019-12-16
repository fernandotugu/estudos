<template>
    <div class="container-fluid">
        <div class="row" v-if="!noTitleRow">
            <div class="col-10 modal-title bg-primary text-white">
                <subpage-title 
                    :title="title" 
                    :linePercent="5"
                />
                <slot name="title"></slot>
            </div>
            <div class="col-2 bg-primary">
                <div class="text-right modal-close-div">
                    <button type="button" @click="hideModal" title="Fechar">
                        <i class="fas fa-times" />
                    </button>
                </div>
            </div>
        </div>
        <div class="row">
            <div :class="noContentCol ? '':'col-md-12'">
                <div class="p-2">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.modal-title{
    font-size:18px;
    padding-top:10px;
    padding-bottom:10px;
    color:#000;
    font-weight: bold;
}

.modal-close-div button{
    margin-top:12px;
    margin-right:-10px;
    cursor: hand;
    cursor: pointer
}

.modal-close-div button{
    background: #FFF;
    border:0px;
}
.v--modal{
    border-radius: 0px;
}

</style>

<script>

import SubPageTitle from '@/shared/components/Title'

export default {
    name: 'modal_template',
    methods:{
        hideModal(){
            this.$parent.$emit('close');
        }
    },
    props:[
        'title','noTitleRow','noContentCol'
    ],
    components:{
        'subpage-title':SubPageTitle
    }
}
</script>