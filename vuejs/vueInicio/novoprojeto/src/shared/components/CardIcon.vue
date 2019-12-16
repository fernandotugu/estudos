<template>
    <div class="border clearfix p-3 asLink" :class="['border-'+classColor,'text-'+classColor]">
        <div class="float-left">
            <h5 class="font-weight-bold ">
                {{label}}
            </h5>
        </div>
        <div class="float-right">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'CardIcon',
    props:{
        classColor:{
            default:'secondary',
            type:String
        },
        label:{
            default:'Sem Título',
            type:String
        }
    }
}
</script>