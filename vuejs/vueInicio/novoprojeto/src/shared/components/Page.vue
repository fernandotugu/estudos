<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="text-left bg-light p-2 border border-secondary">
                    <h5 class="text-secondary font-weight-bold ml-1 mt-1">
                        <i class="fas mr-3" :class="icone"/>
                        <span>{{titulo}}</span>
                    </h5>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="p-3 border border-secondary border-top-0">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Page",
    props:{
        titulo:{
            default:'Sem Titulo',
            type:String
        },
        icone:{
            default:'fa-sign',
            type:String
        },

    }
}
</script>