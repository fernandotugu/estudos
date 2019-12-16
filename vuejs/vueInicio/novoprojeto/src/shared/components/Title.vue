<template>
    <div class="SubPageTitle">
        <h3 class="top-box-title-min font-weight-bold" :class="['title-'+size,'text-'+color]">
            {{title}}
        </h3>
        <div class="progress progress-top-custom-min" style="background:none">
            <div class="progress-bar bg-primary progress-bar-top-custom-min" :style="'width: '+linePercent+'%'"></div>
        </div>
    </div>
</template>

<style>

.SubPageTitle .progress{
    height: 0.6rem !important;
}

.top-box-title-min{
    color: #353535;
    margin-bottom:0px;
}

.title-xs{
    font-size: 14px;

}

.title-md{
    font-size: 18px;
}


.progress-bar-top-custom-min{
    margin-top:2px;
    height: 3px;
}

.progress-top-custom-min{
    margin-bottom: 0px;
}

</style>

<script>
export default {
    name: 'SubPageTitle',
    props:{
        title:{
            default:'',
            type:String
        },
        size:{
            default:'md',
            type:String
        },
        color:{
            default:'white',
            type:String
        },
        linePercent:{
            default:3,
            type:Number
        }
    }
}
</script>